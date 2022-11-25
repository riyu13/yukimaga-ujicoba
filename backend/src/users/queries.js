const getData = "SELECT * FROM Users";
const insertData = "INSERT INTO Users (nama, alamat, tmptlahir, tgllahir, notelp, jkel, email, pwd, id_status) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
const deleteData = "DELETE FROM Users where id = $1 ";
const updateData = "UPDATE Users set nama = $1, alamat = $2, tmptlahir = $3, tgllahir = $4, notelp = $5, jkel = $6, email = $7, pwd = $8, id_status = $9 where id = $10";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
}
