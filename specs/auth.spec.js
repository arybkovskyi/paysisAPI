import {expect} from "chai";
import supertest from 'supertest';
import 'dotenv/config'

describe('AUTH', () => {
    const require = supertest(process.env.BASE_URL);
    //example of the same test without chai (ex use done)
    /* it('Successfull login', (done)=>{
         const require = supertest('https://paysis.herokuapp.com');
         require
             .post('/auth').send({login: 'adminius', password: 'supers3cret'})
             .expect(200, done)
             })*/
    it('Successfull login', () => {
        require
            .post('/auth')
            .send({login: process.env.login, password: process.env.password})
            .end(function (err, res) {
                expect(res.statusCode).to.eq(300)
                expect(res.body.token).to.be.undefined
            })
    })
    it('Invalid login', () => {
        const require = supertest(process.env.BASE_URL);
        require
            .post('/auth')
            .send({login: process.env.login, password: process.env.password})
            .end(function (err, res) {
                expect(res.statusCode).to.eq(404)
                expect(res.body.message).to.eq('Wrong login or password')
            })
    })

})