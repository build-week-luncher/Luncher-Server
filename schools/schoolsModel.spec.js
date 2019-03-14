const db = require('../data/dbConfig.js');
const Schools = require('./schoolsModel.js');

describe('schools model', () => {

    afterEach(async () => {
        await db('schools').truncate();
    });

    describe('find()', () => {
        it("should return a list of schools in db", async () => {
          let schools = await Schools.find();
          expect(schools).toHaveLength(0);
  
          await Schools.insert({ schoolName: "Test1 Elementary", details: "test", needAmount: "888" });
    
          await Schools.insert({ schoolName: "Test2 Elementary", details: "test", needAmount: "888" });
    
          await Schools.insert({ schoolName: "Test3 Elementary", details: "test", needAmount: "888" });
    
          schools = await Schools.find();
          expect(schools).toHaveLength(3);
        });

    });

    describe("findByID()", () => {
      it("should return a specified school in db", async () => {
        let school = await Schools.findById(2);
        expect(school).toHaveLength(0);
  
        await Schools.insert({ schoolName: "Test1 Elementary", details: "test", needAmount: "888" });
  
        await Schools.insert({ schoolName: "Test2 Elementary", details: "test", needAmount: "888" });
  
        await Schools.insert({ schoolName: "Test3 Elementary", details: "test", needAmount: "888" });
  
        school = await Schools.findById(2);
        expect(school).toHaveLength(1);
      });
    });
});