import mysql from "mysql2";

// Tạo một kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
  host: "localhost", // Thay đổi tên host nếu cần
  user: "root", // Thay đổi tên người dùng
  // password: "password", // Thay đổi mật khẩu
  database: "nodejsbasic" // Thay đổi tên cơ sở dữ liệu
});

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối: " + err.stack);
    return;
  }
  console.log("Kết nối thành công với ID " + connection.threadId);

  // Thực hiện các truy vấn, thêm, sửa, xóa dữ liệu ở đây
});

// Đóng kết nối sau khi hoàn tất công việc
connection.end();

export default connection;