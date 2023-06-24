const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'age': 29,
    'birthname': 'sheeva',
    'birthlocation':'london, england'
    },
    'chance the rapper':{
        'age': 29,
        'birthname': 'chancelor bennet',
        'birthlocation': 'london england'
    },
    'daylan': {
        'age': 0,
        'birthname': 'unknown',
        'birthlocation': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:lechonk', (request, response)=>{
    const rapperName = request.params.lechonk.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['daylan'])
    }
    // response.json(rappers)
})


app.listen(PORT, ()=>{
    console.log(`the server is now running on port ${PORT} yee go ctach it `)
})