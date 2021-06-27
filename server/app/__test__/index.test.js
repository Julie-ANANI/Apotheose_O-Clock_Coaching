const appMock = require("../../app");
require("../../index.js");
// const app = require("../app")
jest.mock("../../app");

describe("index.js - app entry", () => {
  it("should call app.listen()", () => {
    expect(appMock.listen).toHaveBeenCalled();
  });
});
