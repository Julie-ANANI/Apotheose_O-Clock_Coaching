// import { expect, server, BASE_URL } from './setup';
import supertest from 'supertest'
// const test = require("tape");
const router = require("../server/app/router")

test("Home route", async () => {
  const response = await supertest(router).get("/")
    .expect(200)
    expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    });

