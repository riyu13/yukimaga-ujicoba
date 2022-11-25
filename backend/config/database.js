const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'yukimaga',
    password: 'Gifiri123',
    port: 5432
})

//form user
const getUsers = (request, response) => {
    pool.query('SELECT * FROM Users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getUsersById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createUsers = (request, response) => {
    const { id,nama,alamat,tmptlahir,tgllahir,notelp,jkel,email,pwd,id_status } = request.body
        pool.query('INSERT INTO Users (id,nama,alamat,tmptlahir,tgllahir,notelp,jkel,email,pwd,id_status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [ id,nama,alamat,tmptlahir,tgllahir,notelp,jkel,email,pwd,id_status], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Peserta Magang berhasil ditambahkan`)
        })
}

const updateUsers = (request, response) => {
    const id = parseInt(request.params.id)
    const { nama, alamat, tmptlahir, tgllahir, notelp, jkel, email, pwd, id_status } = request.body
        pool.query(
            'UPDATE users SET nama = $1, alamat = $2, tmptlahir = $3, tgllahir = $4, notelp = $5, jkel = $6, email = $7, pwd = $8, id_status = $9 WHERE id = $10',
        [ nama, alamat, tmptlahir, tgllahir, notelp, jkel, email, pwd, id_status, id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Data Peserta Magang berhasil di update with ID: ${id}`)
    })
}

const deleteUsers = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Users WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Users deleted with ID: ${id}`)
        })
}
//form user
const getSensei = (request, response) => {
    pool.query('SELECT * FROM Sensei ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getSenseiById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Sensei WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createSensei = (request, response) => {
    const { id,nama,alamat,tmptlahir,tgllahir,notelp,jkel,email,pwd,id_status } = request.body
        pool.query('INSERT INTO Sensei (id,nama,alamat,tmptlahir,tgllahir,notelp,jkel,email,pwd) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)', [ id,nama,alamat,tmptlahir,tgllahir,notelp,jkel,email,pwd], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Sensei berhasil ditambahkan`)
        })
}

const updateSensei = (request, response) => {
    const id = parseInt(request.params.id)
    const { nama, alamat, tmptlahir, tgllahir, notelp, jkel, email, pwd } = request.body
        pool.query(
            'UPDATE Sensei SET nama = $1, alamat = $2, tmptlahir = $3, tgllahir = $4, notelp = $5, jkel = $6, email = $7, pwd = $8 WHERE id = $9',
        [ nama, alamat, tmptlahir, tgllahir, notelp, jkel, email, pwd,  id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Data Peserta Magang berhasil di update with ID: ${id}`)
    })
}

const deleteSensei = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Sensei WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Sensei deleted with ID: ${id}`)
        })
}


//form hirakata------------------------------------------------------------------------------------------------
const getHirakata = (request, response) => {
    pool.query('SELECT * FROM Hirakata ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getHirakataById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Hirakata WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createHirakata = (request, response) => {
    const { id,hiragana,katakana,romaji } = request.body
        pool.query('INSERT INTO Hirakata (id,hiragana,katakana,romaji) VALUES ($1,$2,$3,$4)', [ id, hiragana, katakana, romaji], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Hiragana dan Katakana berhasil ditambahkan`)
        })
}

const updateHirakata = (request, response) => {
    const id = parseInt(request.params.id)
    const { hiragana,katakana,romaji } = request.body
        pool.query(
            'UPDATE Hirakata SET hiragana = $1, katakana = $2, romaji = $3 WHERE id = $4',
        [ hiragana,katakana,romaji, id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`ID: ${id} berhasil diubah`)
    })
}

const deleteHirakata = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Hirakata WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Hirakata deleted with ID: ${id}`)
        })
}

//form Kanjin5------------------------------------------------------------------------------------------------
const getKanjin5 = (request, response) => {
    pool.query('SELECT * FROM Kanjin5 ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getKanjin5ById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Kanjin5 WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createKanjin5 = (request, response) => {
    const { id,kanji,onyomi,kunyomi,arti } = request.body
        pool.query('INSERT INTO Kanjin5 (id,kanji,onyomi,kunyomi,arti) VALUES ($1,$2,$3,$4,$5)', [ id, kanji, onyomi, kunyomi, arti], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data kanji berhasil ditambahkan`)
        })
}

const updateKanjin5 = (request, response) => {
    const id = parseInt(request.params.id)
    const { kanji,onyomi,kunyomi,arti } = request.body
        pool.query(
            'UPDATE Kanjin5 SET kanji = $1, onyomi = $2, kunyomi = $3, arti = $4 WHERE id = $5',
        [ kanji,onyomi,kunyomi,arti,id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`ID: ${id} berhasil diubah`)
    })
}

const deleteKanjin5 = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Kanjin5 WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Kanjin5 deleted with ID: ${id}`)
        })
}

//form Katabenda------------------------------------------------------------------------------------------------
const getKatabenda = (request, response) => {
    pool.query('SELECT * FROM Katabenda ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getKatabendaById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Katabenda WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createKatabenda = (request, response) => {
    const { id,kanji,romaji,arti } = request.body
        pool.query('INSERT INTO Katabenda (id,kanji,romaji,arti) VALUES ($1,$2,$3,$4)', [ id, kanji, romaji, arti], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Daftar Kata Benda berhasil ditambahkan`)
        })
}

const updateKatabenda = (request, response) => {
    const id = parseInt(request.params.id)
    const { kanji,romaji,arti } = request.body
        pool.query(
            'UPDATE Katabenda SET kanji = $1, romaji = $2, arti = $3 WHERE id = $4',
        [ kanji,romaji,arti,id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`ID: ${id} berhasil diubah`)
    })
}

const deleteKatabenda = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Katabenda WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Katabenda deleted with ID: ${id}`)
        })
}

//form Katakerja------------------------------------------------------------------------------------------------
const getKatakerja = (request, response) => {
    pool.query('SELECT * FROM Katakerja ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getKatakerjaById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Katakerja WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createKatakerja = (request, response) => {
    const { id,kanji,romaji,arti } = request.body
        pool.query('INSERT INTO Katakerja (id,kanji,romaji,arti) VALUES ($1,$2,$3,$4)', [ id, kanji, romaji, arti], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Daftar Kata Benda berhasil ditambahkan`)
        })
}

const updateKatakerja = (request, response) => {
    const id = parseInt(request.params.id)
    const { kanji,romaji,arti } = request.body
        pool.query(
            'UPDATE Katakerja SET kanji = $1, romaji = $2, arti = $3 WHERE id = $4',
        [ kanji,romaji,arti,id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`ID: ${id} berhasil diubah`)
    })
}

const deleteKatakerja = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Katakerja WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Katakerja deleted with ID: ${id}`)
        })
}

//form Katasifat------------------------------------------------------------------------------------------------
const getKatasifat = (request, response) => {
    pool.query('SELECT * FROM Katasifat ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getKatasifatById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Katasifat WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createKatasifat = (request, response) => {
    const { id,kanji,romaji,arti } = request.body
        pool.query('INSERT INTO Katasifat (id,kanji,romaji,arti) VALUES ($1,$2,$3,$4)', [ id, kanji, romaji, arti], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Daftar Kata Benda berhasil ditambahkan`)
        })
}

const updateKatasifat = (request, response) => {
    const id = parseInt(request.params.id)
    const { kanji,romaji,arti } = request.body
        pool.query(
            'UPDATE Katasifat SET kanji = $1, romaji = $2, arti = $3 WHERE id = $4',
        [ kanji,romaji,arti,id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`ID: ${id} berhasil diubah`)
    })
}

const deleteKatasifat = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Katasifat WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Katasifat deleted with ID: ${id}`)
        })
}

//form Katasifat2------------------------------------------------------------------------------------------------
const getKatasifat2 = (request, response) => {
    pool.query('SELECT * FROM Katasifat2 ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getKatasifat2ById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Katasifat2 WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createKatasifat2 = (request, response) => {
    const { id,kanji,romaji,arti } = request.body
        pool.query('INSERT INTO Katasifat2 (id,kanji,romaji,arti) VALUES ($1,$2,$3,$4)', [ id, kanji, romaji, arti], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Daftar Kata Benda berhasil ditambahkan`)
        })
}

const updateKatasifat2 = (request, response) => {
    const id = parseInt(request.params.id)
    const { kanji,romaji,arti } = request.body
        pool.query(
            'UPDATE Katasifat2 SET kanji = $1, romaji = $2, arti = $3 WHERE id = $4',
        [ kanji,romaji,arti,id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`ID: ${id} berhasil diubah`)
    })
}

const deleteKatasifat2 = (request, response) => {
    const id = parseInt(request.params.id)
        pool.query('DELETE FROM Katasifat2 WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Katasifat2 deleted with ID: ${id}`)
        })
}
//form Pembayaran------------------------------------------------------------------------------------------------
const getPembayaran = (request, response) => {
    pool.query('SELECT * FROM Pembayaran ORDER BY id_pembayaran ASC', (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
        })
    }

const getPembayaranById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM Pembayaran WHERE id_pembayaran = $1', [id], (error, results) => {
        if (error) {
            throw error
    }
        response.status(200).json(results.rows)
    })
}

const createPembayaran = (request, response) => {
    const { id_pembayaran,tglbayar,keterangan,nominal,id_users } = request.body
        pool.query('INSERT INTO Pembayaran (id_pembayaran,tglbayar,keterangan,nominal,id_users) VALUES ($1,$2,$3,$4,$5)', [ id_pembayaran, tglbayar, keterangan, nominal, id_users], (error, results) => {
        if (error) {
            throw error
        }
            response.status(201).send(`Data Daftar Kata Benda berhasil ditambahkan`)
        })
}

const updatePembayaran = (request, response) => {
    const id = parseInt(request.params.id)
    const { tglbayar,keterangan,nominal,id_users } = request.body
        pool.query(
            'UPDATE Pembayaran SET tglbayar = $1, keterangan = $2, nominal = $3, id_users = $4 WHERE id_pembayaran = $4',
        [ tglbayar,keterangan,nominal,id_users,id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`ID: ${id} berhasil diubah`)
    })
}

const deletePembayaran = (request, response) => {
    const id_pembayaran = parseInt(request.params.id)
        pool.query('DELETE FROM Pembayaran WHERE id_pembayaran = $1', [id_pembayaran], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Pembayaran deleted with ID: ${id_pembayaran}`)
        })
}



module.exports = {
    getUsers,
    getUsersById,
    updateUsers,
    createUsers,
    deleteUsers,
    getSensei,
    getSenseiById,
    updateSensei,
    createSensei,
    deleteSensei,
    getHirakata,
    getHirakataById,
    updateHirakata,
    createHirakata,
    deleteHirakata,
    getKanjin5,
    getKanjin5ById,
    updateKanjin5,
    createKanjin5,
    deleteKanjin5,
    getKatabenda,
    getKatabendaById,
    updateKatabenda,
    createKatabenda,
    deleteKatabenda,
    getKatakerja,
    getKatakerjaById,
    updateKatakerja,
    createKatakerja,
    deleteKatakerja,
    getKatasifat,
    getKatasifatById,
    updateKatasifat,
    createKatasifat,
    deleteKatasifat,
    getKatasifat2,
    getKatasifat2ById,
    updateKatasifat2,
    createKatasifat2,
    deleteKatasifat2,
    getPembayaran,
    getPembayaranById,
    updatePembayaran,
    createPembayaran,
    deletePembayaran,
}