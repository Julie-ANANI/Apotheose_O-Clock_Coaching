// const { expect } = require('chai');
const assert = require('assert').strict;

// Je récupère la méthode à tester 
const { getAllThemes } = require('./app/models/theme');

describe("integration test", () => {
    it("should be able to add and complete THEMEs",() => {
        // Arrange // les données de départ
        let themes = new Theme ();
        assert.notStrictEqual(themes.length,1);
    });
})

