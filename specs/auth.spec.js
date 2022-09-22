import {expect} from "chai";
import supertest from 'supertest';
import 'dotenv/config'

describe.only('AUTH', () => {
    const request = supertest(process.env.BASE_URL)

    describe('SUCCESSFUL LOGIN', function () {
        let result
        before(async function () {
            await request
                .post('/auth')
                .send({login: process.env.LOGIN, password: process.env.PASSWORD})
                .then(res => {
                    result = res
                })
        })

        it('response status code 200', () => {
            expect(result.statusCode).to.eq(200)
        })
        it('response body contains token', () => {
            expect(result.body.token).not.to.be.undefined
        })
    })
})

//example of the same test without chai (ex use done)
/* it('Successfull login', (done)=>{
     request
         .post('/auth').send({login: 'adminius', password: 'supers3cret'})
         .expect(200, done)
         })*/
it('Successfull login', () => {
    request
        .post('/auth')
        .send({login: process.env.LOGIN, password: process.env.PASSWORD})
        .end(function (err, res) {
            expect(res.statusCode).to.eq(300)
            expect(res.body.token).to.be.undefined
        })
})
it('Invalid login', () => {
    request
        .post('/auth')
        .send({login: process.env.LOGIN, password: process.env.PASSWORD})
        .end(function (err, res) {
            expect(res.statusCode).to.eq(404)
            expect(res.body.message).to.eq('Wrong login or password')
        })
})

