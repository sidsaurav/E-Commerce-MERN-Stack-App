import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Siddharth Saurav',
        email: 'sid@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true,
    },
    {
        name: 'Aditya Tiwari',
        email: 'aditya@example.com',
        password: bcrypt.hashSync('12345', 10),
    },
    {
        name: 'Ayush Chaudhary',
        email: 'ayush@example.com',
        password: bcrypt.hashSync('12345', 10),
    },
]

export default users
