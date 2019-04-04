import * as pg from 'pg';
export declare abstract class Model {
    pool: pg.Pool;
    table: string;
    constructor(pool: pg.Pool, table: string);
    request: (sql_query: string, params: any[]) => Promise<any>;
    find_all: (orderBy?: string) => Promise<any>;
    find_by_id: (_id: number) => Promise<any>;
    bulk_insert: (entries: any[]) => any;
    single_insert: (entry: {
        [key: string]: any;
    }) => Promise<any>;
    single_update: (entry: any, _id: number) => Promise<any>;
    destroy_by_id: (_id: number) => Promise<any>;
}
