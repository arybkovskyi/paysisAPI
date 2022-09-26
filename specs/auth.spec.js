import {expect} from "chai";
import supertest from 'supertest';
describe('AUTH TESTS', () => {

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


    describe('LOGIN WITH INVASLID CREDENTIALS', () => {
        let result

        before(async function () {
            await request
                .post('/auth')
                .send({login: 'invalid', password: 'invalid'})
                .then(res => {
                    result = res
                })
        })
        it('Invalid login, status code 404', () => {
            expect(result.statusCode).to.eq(404)

        })
        it('Invalid login, no token', () => {
            expect(result.body.token).to.be.undefined
        })
    })
})

