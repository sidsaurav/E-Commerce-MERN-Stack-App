import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Siddharth Saurav',
    email: 'sid@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Aditya Tiwari',
    email: 'aditya@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
