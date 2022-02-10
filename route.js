const express = require('express');
const route = express.Router();
const db = require('./db');
const seed = require('./seed');
route.get('/', async(req, res, next) => {
    try{
        const query = `SELECT * FROM states`;
        const data = await db.query(query);
        const states = data.rows;
        const html = `<!DOCTYPE html>
        <html>
            <Head>
                <title>States in the US</title>
                <link rel='stylesheet' href='/styles.css' />
            </Head>
            <body>
                <h1>States of the United States of America</h1>
                <div class='state-list'>
                    ${states.map(
                        (state) => 
                        `<div class='state-item'>
                            <p>
                                <a href='/states/${state.id}'>
                                    <span class='state-position'>${state.id}.</span>${state.name}
                            </p>
                        </div>` ).join("")
                        }
                </div>
            </body>
        </html>`;
        res.send(html);
    }
    catch(ex){
        next(ex);
    }
})
route.get('/:id', async(req, res, next) => {
    try{
        const query = `SELECT * FROM state_details
                        FULL OUTER JOIN states
                        ON state_details.id = states.id 
                        where state_details.id =$1`;
        const data = await db.query(query, [req.params.id]);
        const states = data.rows;
        const html = `<!DOCTYPE html>
        <html>
            <Head>
                <title>States in the US</title>
                <link rel='stylesheet' href='/styles.css' />
            </Head>
            <body>
                <div class='state-info'>
                    ${states.map(
                        (state) => 
                        `<div class='state-info-item'>
                            <p>
                                <h1>${state.name} State Facts</h1>
                                    <table class='tableInfo'>
                                        <tr>
                                            <th>Capital City</th>
                                            <td>${state.capitalcity}</td>
                                        </tr>
                                        <tr>
                                            <th>Postal Code</th>
                                            <td>${state.postalcode}</td>
                                        </tr>
                                        <tr>
                                            <th>Time zone</th>
                                            <td>${state.timezones}</td>
                                        </tr>
                            </p>
                        </div>` ).join("")
                        }
                </div>
            </body>
        </html>`;
        res.send(html);
    }
    catch(ex){
        next(ex);
    }
}); 
module.exports = route;