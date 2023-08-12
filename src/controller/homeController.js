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

    res.render('detailUsers.ejs', { dataUser: rows });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error' + error.message);
  }
};

const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, address } = req.body;
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic' });
    await connection.execute('INSERT INTO `users`(`firstName`, `lastName`, `email`, `address`) VALUES (?, ?, ?, ?)', [firstName, lastName, email, address]);
    await connection.end();

    return res.redirect('/');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error ' + error.message);
  }
};



module.exports = {
  getHomePage, getDetailPage, createNewUser
};