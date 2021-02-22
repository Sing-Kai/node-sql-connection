const sql = require('mssql/msnodesqlv8')

const conn = new sql.ConnectionPool({
  database: "DBNAME",
  server: "SERVER",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
});

const poolConnection = conn.connect();

conn.on('error', err => {
  console.log("error handling connection");
})

async function onSite() {
  await poolConnection; // ensures that the pool has been created
  try {
      const request = conn.request(); // or: new sql.Request(pool1)
      const result = await request.query('exec OnSiteReportRead')
      return result.recordset;
  } catch (err) {
      console.error('SQL error', err);
  }
}

module.exports.onSite = onSite;