const Sequelize = require("../../src/db/models/index").sequelize;
const Inr = require("../../src/db/models").Inr;
const User = require("../../src/db/models").User;

describe("Inr", () => {
    beforeEach((done) => {
        this.inr;
        this.user;

        sequelize.sync({force: true}).then((res) => {
            User.create({
                firstname: "Laura",
                lastname: "Meehan",
                email: "mysupercoolemail@gmail.com",
                password: "helloworld",
                lowInr: "2.0",
                highInr: "3.0"
            })
            .then((user) => {
                this.user = user;

                Inr.create({
                    date: "2020-02-02",
                    result: "2.2",
                    notes: "Some sort of made up note",
                    userId: this.user.id
                })
                .then((inr) => {
                    this.inr = inr;
                    done();
                })
            })
        })
    })
})