import connection from "../configs/connectDB";
import mysql from "mysql2/promise";

const getHomePage = async (req, res) => {
  try {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    const [rows, fields] = await connection.execute('SELECT * FROM `users`');
    await connection.end();
    res.render('index.ejs', { dataUser: rows })
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error' + error.message);
  }
}

const getDetailPage = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    const [rows, fields] = await connection.execute('SELECT * FROM `users` WHERE `id` = ?', [id || null]);
    await connection.end();

    console.log(rows);

    res.render('detailUsers.ejs', { dataUser: rows });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error' + error.message);
  }
};



module.exports = {
  getHomePage, getDetailPage
};