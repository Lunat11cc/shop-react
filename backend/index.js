import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import bcrypt from 'bcrypt'

const salt = 10

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shop-auth'
})

app.post('/register', (req, res) => {
    const checkUserSql = 'SELECT * FROM users WHERE email = ?'
    const insertUserSql = 'INSERT INTO users (`name`, `email`, `password`) VALUES (?)'

    db.query(checkUserSql, [req.body.email], (err, existingUser) => {
        if (existingUser.length > 0) {
            return res.json({ Error: 'Пользователь с такой почтой уже существует!' })
        }

        bcrypt.hash(req.body.password.toString(), salt, (hashErr, hash) => {
            if (hashErr) {
                return res.json({ Error: 'Ошибка при хэшировании пароля!' })
            }

            const values = [
                req.body.name,
                req.body.email,
                hash
            ]

            db.query(insertUserSql, [values], (insertErr, result) => {
                if (insertErr) {
                    return res.json({ Error: 'Ошибка при регистрации пользователя!' })
                }
                return res.json({ Status: 'Успешно' })
            })
        })
    })
})

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ?'

    db.query(sql, [req.body.email], (err, data) => {
        if (err) return res.json({ Error: 'Ошибка при авторизации пользователя!' })

        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (error, response) => {
                if (!response) return res.json({ Error: 'Неправильный пароль!' })
                if (response) return res.json({ Status: 'Успешно' })
            })
        } else {
            return res.json({ Error: 'Пользователь не найден!' })
        }
    })
})

app.listen(5001, () => {
    console.log('Сервер запущен...')
})
