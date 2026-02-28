import { tool } from '@tool/packages/databaseConnection/src'

/**
 * 达梦
 */
tool({
  databaseName: 'GZ_CLOUD',
  databaseType: 'DAMENG',
  host: '192.168.1.213',
  password: 'Jschrj83130911!',
  port: 5236,
  sql: 'select * from base_dx limit 1',
  user: 'gz_cloud'
}).then((res) => {
  console.log(res);
});

/**
 * mysql
 */
tool({
  databaseName: 'ch_quiz',
  databaseType: 'MySQL',
  host: '192.168.1.242',
  password: 'jschrj',
  port: 3306,
  sql: 'select * from topic',
  user: 'root'
}).then((res) => {
  console.log(res);
});