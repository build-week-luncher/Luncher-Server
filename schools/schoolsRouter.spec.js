const request = require('supertest');

const db = require('../data/dbConfig.js');

const server = require('../api/server.js');


describe('schoolsRouter.js', () => {
    afterEach(async () => {
      await db("schools").truncate();
    });

    it("should set testing environment", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });



    describe("GET '/api/schools'", () => {
      it("should return 200 when the schools are retrieved", async () => {
        let res = await request(server).get("/api/schools");
  
        expect(res.status).toBe(200);
      });
  
      it("should return and empty array when the schools are retrieved and schools are empty", async () => {
        let res = await request(server).get("/api/schools");
  
        expect(res.body).toEqual([]);
      });
    });

    // describe("GET '/api/schools/:id'", () => {
    //   it("should return 200 when returning a specified game", async () => {
    //     const body = { schoolName: "Test1 Elementary", details: "test", needAmount: "888" };
  
    //     let res = await request(server)
    //     //post doesn't exist!
    //       .post("/api/schools")
    //       .send(body);
  
    //     let response = await request(server).get(`/api/schools/1`);
  
    //     expect(response.status).toBe(200);
    //   });
  
    //   it("should return 404 when specified game does not exist", async () => {
    //     let response = await request(server).get(`/api/schools/1`);
  
    //     expect(response.status).toBe(404);
    //   });
    // });


});