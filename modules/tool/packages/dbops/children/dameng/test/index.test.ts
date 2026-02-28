import { main } from '@tool/packages/dbops/children/dameng/src';

/**
 * 达梦
 */
main({
  host: '192.168.1.213',
  port: 5236,
  database: 'GZ_CLOUD',
  sql: 'select * from base_dx limit 1',
  username: 'gz_cloud',
  password: 'Jschrj83130911!',
  connectionTimeout: 30000
}).then((res) => {
  console.log(res);
});

