import * as pg from 'pg';

export abstract class Model {
  public pool: pg.Pool;
  public table: string;
  constructor(pool: pg.Pool, table: string) {
    this.pool = pool;
    this.table = table;
  }

  request = async (sql_query: string, params: any[]): Promise<any[]> => {
    try {
      const { rows } = await this.pool.query(sql_query, params);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  find_all = async (orderBy?: string): Promise<any[]> => {
    let query: string = `SELECT * FROM ${this.table}`;
    if (typeof orderBy !== undefined) {
      query += ` ORDER BY ${orderBy}`;
    }
    try {
      const { rows } = await this.pool.query(query);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  find_by_id = async (_id: number): Promise<any[]> => {
    try {
      const { rows } = await this.pool.query(`SELECT * FROM ${this.table} WHERE _id=$1`, [_id]);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  bulk_insert = async (entries: any[]): Promise<any[]> => {
    const props: string[] = Object.keys(entries[0]);
    let count: number = 0;
    const { inserts, values } = entries.reduce(
      (acc, entry) => {
        const blings = Object.values(entry).map((v: any) => {
          acc.values.push(v);
          count++;
          return '$' + count;
        });
        acc.inserts.push(`(${blings.join(',')})`);
        return acc;
      },
      { inserts: [], values: [] }
    );

    const db_query = `INSERT INTO ${this.table} (${props.join(',')}) VALUES ${inserts.join(',')} RETURNING *`;

    try {
      const { rows } = await this.pool.query(db_query, values);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  single_insert = async (entry: { [key: string]: any }): Promise<any> => {
    const { values, props, blings } = Object.entries(entry).reduce(
      (acc, [key, value], i) => {
        acc.values.push(value);
        acc.props.push(key);
        acc.blings.push('$' + (i + 1));
        return acc;
      },
      { values: [], props: [], blings: [] }
    );

    const db_query = `INSERT INTO ${this.table} (${props.join(',')}) VALUES (${blings.join(',')}) RETURNING *`;
    try {
      const { rows } = await this.pool.query(db_query, values);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  single_update = async (entry: any, _id: number): Promise<any> => {
    const { values, updates } = Object.entries(entry).reduce(
      (acc, [key, value], i) => {
        acc.values.push(value);
        acc.updates.push(`${key} =$` + (i + 1));
        return acc;
      },
      { values: [], updates: [] }
    );

    const db_query = `UPDATE ${this.table} SET (${updates.join(',')}) RETURNING * WHERE _id = ${_id}`;

    try {
      const { rows } = await this.pool.query(db_query, values);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  destroy_by_id = async (_id: number): Promise<any> => {
    try {
      const { rows } = await this.pool.query(`DELETE FROM ${this.table} WHERE _id=$2`, [_id]);
      return rows;
    } catch (e) {
      throw e;
    }
  };
}
