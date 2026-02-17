module.exports = ({ env }) => ({
  connection: {
    host: env('REDIS_HOST', '127.0.0.1'),
    port: env.int('REDIS_PORT', 6379),
    db: env.int('REDIS_DB', 0),
  },
  settings: {
    debug: false,
  },
});
