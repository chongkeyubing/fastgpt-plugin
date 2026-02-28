import type { DaMengInputType, SQLDbOutputType } from '@tool/packages/dbops/types';
import { type Connection } from 'dmdb';
import * as dmdb from 'dmdb';

export async function main({
  host,
  port,
  username,
  password,
  database,
  sql,
  connectionTimeout
}: DaMengInputType): Promise<SQLDbOutputType> {
  let connection: Connection | undefined;
  try {
    connection = await dmdb.getConnection({
      connectString: host + ':' + port,
      user: username,
      password: password,
      database: database,
      loginEncrypt: false,
      connectTimeout: connectionTimeout
    });

    const res = await connection.execute(sql);
    return {
      result: res.rows
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(new Error(`dameng SQL execution error: ${error.message}`));
    }
    return Promise.reject(new Error('dameng SQL execution error: An unknown error occurred'));
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}
