import {expect} from "chai";
import UserHelper from "../helpers/user.helper";
import {getRandomData} from "../helpers/common.helper";

describe('USERS ', function () {

    let userHelper = new UserHelper()
    let userId

    before(async function () {
        await userHelper.createUser()
        userId = userHelper.response.body.id
    })
    describe('User Creation', function () {

        it('Status code 200 when user created', () => {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('id is not undefined when user created', () => {
            expect(userHelper.response.body.id).not.to.be.undefined
        })
        it('amount is not null', () => {
            expect(userHelper.response.body.amount).not.to.be.undefined
        })
    })


    describe('GET USER BY ID', function () {

        before(async function () {
            await userHelper.getOneUser(userId)
        })

        it('Status code 200 when user created', () => {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('id is not undefined when user created', () => {
            expect(userHelper.response.body.id).not.to.be.undefined
        })
        it('amount is not null', () => {
            expect(userHelper.response.body.amount).not.to.be.undefined
        })
    })

    describe('GET ALL USERS', function () {

        before(async function () {
            await userHelper.getAllUsers()
        })

        it('Status code for get users request', () => {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('response is not null', () => {
            expect(getRandomData(userHelper.response.body).id).not.to.be.empty
        })
        it('response body array > 0 ', function () {
            expect(userHelper.response.body.length).to.be.above(1)
        });
    })

    describe('DELETE USER', function () {

        before(async function () {
            await userHelper.userDelete(userId)
        })

        it('Status code for get users request', () => {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('response is not null', () => {
            expect(userHelper.response.body.message).to.eq('User deleted.')
        })
    })
})
