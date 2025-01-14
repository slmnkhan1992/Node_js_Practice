import dotEnv from 'dotenv'
dotEnv.config()
import express from 'express'



const app = express()
const PORT = 4000
const data = {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "123-456-7890",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "zipcode": "10001"
    }
  }
  

app.get('/', (req, res)=> {
    res.send('Hello world')
})

app.get('/twitter', (req, res)=> {
    res.send('salman')
})

app.get('/login', (req, res)=> {
    res.send('<h1> Please login <h1/>')
})

app.get('/youtube', (req, res)=> {
    res.send('<h2> Youtube <h2/>')
})

app.get('/data', (req, res)=> {
    res.json(data)
})

app.listen(process.env.PORT, ()=> {
    console.log('App listen on port no.', PORT)
})