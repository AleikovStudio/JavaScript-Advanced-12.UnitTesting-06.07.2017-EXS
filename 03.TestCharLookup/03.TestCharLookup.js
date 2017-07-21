let lookupChar = require("../03.CharLookup").lookupChar;
let expect = require("chai").expect;

describe("Tests for this task", function () {

    describe("Check the string input", function () {
        it("should be a string", function () {
            expect(lookupChar("opa", 1)).to.equal("p");
        });

        it("should be undefined", function () {
            expect(lookupChar("1", "1")).to.be.undefined;
        });
    });

    describe("Check the index input", function () {
        it("should be undefined", function () {
            expect(lookupChar(1, 1)).to.be.undefined;
        });
    });

    describe("Check both the string and the index input", function () {
        it("should be undefined", function () {
            expect(lookupChar(1, "1")).to.be.undefined;
        });
    });

    describe("Check the length", function () {
        it("should be Incorrect index", function () {
            expect(lookupChar("opa", 4)).to.equal("Incorrect index");
        });
        it("should be Incorrect index", function () {
            expect(lookupChar("opa", -1)).to.equal("Incorrect index");
        });
    });

    describe("Check if the index is integer", function () {
        it("should be Incorrect index", function () {
            expect(lookupChar("opa", 4.5)).to.be.undefined;
        });
    })
});