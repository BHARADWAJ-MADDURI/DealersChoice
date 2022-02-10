const pg = require('pg');
const seed = require('./seed');
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL || 'postgress://localhost/usstates');

const setup = async() => {
    try{
        
        await client.connect();
        console.log('connected to db');
    
        const sql = seed();
    
        await client.query(seed());
    
        
    }
    catch(ex){
        console.log(ex);
    }
}

setup();

module.exports = client;