const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/inrs/";
const sequelize = require("../../src/db/models/index").sequelize;
const Inr = require("../../src/db/models").Inr;

describe("routes : inrs", () => {
  beforeEach((done) => {
    this.inr;
    sequelize.sync({force: true}).then((res) => {

      Inr.create({
        date: "2020-02-02",
        result: "2.3",
        notes: "Some sort of made up note"
      })
      .then((inr) => {
        this.inr = inr;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  describe("GET /inrs", () => {
    it("should return a status code 200 and all inrs", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("2020-02-02");
        expect(body).toContain("2.3");
        done();
      });
    });
  });
});
