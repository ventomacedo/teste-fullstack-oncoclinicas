require('dotenv').config({ path: process.env.NODE_ENV === "test" ? '.env.test' : '.env' });

module.exports = {
  dialect:  process.env.DATABASE_CLIENT || "mysql",
  port:     process.env.DATABASE_PORT   || 3306,
  host:     process.env.DATABASE_HOST   || "db",
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  storage:  './tests/database.test.sqlite',
  logging:  false,
  define: {
    timestamps:     true,
    underscored:    true,
    underscoredAll: true
  }
}