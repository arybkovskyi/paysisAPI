import supertest from "supertest";

class UserHelper {
    constructor() {
        this.response = null
    }

    async createUser() {
        await supertest(process.env.BASE_URL)
            .post('/users')
            .set('Authorization', `Bearer ${process.env['TOKEN']}`)
            .then(res =>{
                this.response = res
            })
    }
    async getOneUser(id) {
        await supertest(process.env.BASE_URL)
            .get(`/users?id=${id}`)
            .set('Authorization', `Bearer ${process.env['TOKEN']}`)
            .then(res =>{
                this.response = res
            })
    }

    async getAllUsers() {
        await supertest(process.env.BASE_URL)
            .get(`/users`)
            .set('Authorization', `Bearer ${process.env['TOKEN']}`)
            .then(res =>{
                this.response = res
            })
    }

    async userDelete(id) {
        await supertest(process.env.BASE_URL)
            .delete(`/users`)
            .set('Authorization', `Bearer ${process.env['TOKEN']}`)
            .send({id:id})
            .then(res =>{
                this.response = res
            })
    }

}

export default UserHelper