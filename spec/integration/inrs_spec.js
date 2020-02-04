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
        result: "2.2",
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
        expect(body).toContain("2.2");
        done();
      });
    });
  });

  describe("GET /inrs/new", () => {
    it("should render a new inr form", (done) => {
      request.get(`${base}new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New Inr");
      });
    });
  });

  describe("POST /inrs/create", () => {
    const options = {
      url: `${base}create`,
      form: {
        date: "2020-02-03",
        result: "2.3",
        notes: "newest inr result on 2/03"
      }
    };

    it("should create a new inr result and redirect", (done) => {
      request.post(options, (err, res, body) => {
        Inr.findOne({where: {date: "2020-02-03"}})
        .then((inr) => {
          expect(res.statusCode).toBe(303);
          expect(inr.date).toBe("2020-02-03");
          expect(inr.result).toBe("2.3");
          expect(inr.notes).toBe("newest inr result on 2/03");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  });

});
