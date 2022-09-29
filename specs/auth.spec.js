import {expect} from "chai";
import AuthHelper from "../helpers/auth.helper";
describe('AUTH TESTS', () => {

    let authHelper = new AuthHelper()

    describe('SUCCESSFUL LOGIN', function () {


        before(async function () {
            await authHelper.login(process.env.LOGIN, process.env.PASSWORD)
        })

        it('response status code 200', () => {
            expect(authHelper.response.statusCode).to.eq(200)
        })
        it('response body contains token', () => {
            expect(authHelper.response.body.token).not.to.be.undefined
        })
    })


    describe('LOGIN WITH INVASLID CREDENTIALS', () => {

        before(async function () {
            await authHelper.login('invalid', 'invalid')
        })
        it('Invalid login, status code 404', () => {
            expect(authHelper.response.statusCode).to.eq(404)

        })
        it('Invalid login, no token', () => {
            expect(authHelper.response.body.token).to.be.undefined
        })
    })
})

