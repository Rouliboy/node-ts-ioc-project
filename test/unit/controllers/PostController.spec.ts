import 'mocha';
import supertest from "supertest";
import 'reflect-metadata';

import chai from 'chai';

import { post1, post2 } from "../../../src/dao/DefaultPostDao";
import server from "../../../src/server";

const expect = chai.expect;

describe('PostController test', function () {

  it("GET /posts endpoint works", (done) => {

    supertest(server).get("/posts")
      .expect(200)
      .then(res => {
        expect(res.body).to.eql({ data: [post1, post2] });
        done();
      });

  });

  it("GET /posts/:id endpoint works", (done) => {

    supertest(server).get("/posts/1")
      .expect(200)
      .then(res => {
        expect(res.body).to.eql({ data: post1 });
        done();
      });

  });

  it("POST /posts endpoint works", (done) => {
    const anyObject = {};

    supertest(server).post("/posts")
      .send(anyObject)
      .expect(201)
      .then(res => {
        expect(res.body).to.be.empty;
        done();
      });

  });

});
