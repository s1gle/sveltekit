import sqlite from 'better-sqlite3';

const db = new sqlite('./db.sqlite')
export default db;