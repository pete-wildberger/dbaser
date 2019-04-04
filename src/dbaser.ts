import * as pg from 'pg';

export abstract class Model {
  public pool: pg.Pool;
  public table: string;
  constructor(pool: pg.Pool, table: string) {
    this.pool = pool;
    this.table = table;
  }

  request = (sql_query: string, params: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(sql_query, params, (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result.rows);
        });
      });
    });
  };

  find_all = (orderBy?: string): Promise<any> => {
    let query: string = `SELECT * FROM ${this.table}`;
    if (typeof orderBy !== undefined) {
      query += ` ORDER BY ${orderBy}`;
      console.log(query);
    }
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(query, (err, result) => {
          done();
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(result.rows);
        });
      });
    });
  };

  find_by_id = (_id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(`SELECT * FROM ${this.table} WHERE _id=$1`, [_id], (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result.rows[0]);
        });
      });
    });
  };
  bulk_insert = (entries: any[]): any => {
    const props: string[] = Object.keys(entries[0]);
    let count: number = 1;
    let values: any[] = [];
    let inserts: string[] = [];
    entries.forEach(entry => {
      let blings: string[] = [];
      for (let prop in entry) {
        values.push(entry[prop]);
        blings.push('$' + count);
        count++;
      }
      inserts.push(`(${blings.join(',')})`);
    });
    const db_query = `INSERT INTO ${this.table} (${props.join(',')}) VALUES ${inserts.join(',')} RETURNING *`;
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(db_query, values, (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    });
  };
  single_insert = (entry: { [key: string]: any }): Promise<any> => {
    let blings: string[] = [];
    let count: number = 1;
    let values: any[] = [];
    let props: string[] = [];
    for (let prop in entry) {
      values.push(entry[prop]);
      props.push(prop);
      blings.push('$' + count);
      count++;
    }
    const db_query = `INSERT INTO ${this.table} (${props.join(',')}) VALUES (${blings.join(',')}) RETURNING *`;
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(db_query, values, (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result.rows[0]);
        });
      });
    });
  };
  single_update = (entry: any, _id: number): Promise<any> => {
    let count: number = 1;
    let values: any[] = [];
    let updates: string[] = [];
    for (let prop in entry) {
      values.push(entry[prop]);
      updates.push(`${prop} =` + '$' + count);
      count++;
    }
    const db_query = `UPDATE ${this.table} SET (${updates.join(',')}) RETURNING * WHERE _id = ${_id}`;
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(db_query, values, (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    });
  };
  destroy_by_id = (_id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(`DELETE FROM ${this.table} WHERE _id=$2`, [_id], (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    });
  };
}
