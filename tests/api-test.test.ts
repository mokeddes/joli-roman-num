import request from "supertest";
import express from "express";
import expressLoader from "../server/src/web-server/express";

const app = express();
expressLoader({ app });

describe("Post Endpoints", () => {
  it("should convert arabic number 1 to roman symbol I and return status 201", async () => {
    const res = await request(app)
      .post("/to-roman")
      .send({
        arabicNumber: 1
      });
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("arabicNumber");
    expect(res.body).toHaveProperty("romanSymbols");
    expect(res.body.arabicNumber).toEqual(1);
    expect(res.body.romanSymbols).toEqual("I");
  });
});

describe("Post Endpoints", () => {
  it("should convert arabic number 2 to roman symbol II and return status 201", async () => {
    const res = await request(app)
      .post("/to-roman")
      .send({
        arabicNumber: 2
      });
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("arabicNumber");
    expect(res.body).toHaveProperty("romanSymbols");
    expect(res.body.arabicNumber).toEqual(2);
    expect(res.body.romanSymbols).toEqual("II");
  });
});

describe("Post Endpoints", () => {
  it("should convert to roman symbol I to arabic number 1 and return status 201", async () => {
    const res = await request(app)
      .post("/to-arabic")
      .send({
        romanSymbols: "I"
      });
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("arabicNumber");
    expect(res.body).toHaveProperty("romanSymbols");
    expect(res.body.arabicNumber).toEqual(1);
    expect(res.body.romanSymbols).toEqual("I");
  });
});

describe("Post Endpoints", () => {
  it("should return 400 when try convert non valid roman symbol", async () => {
    const res = await request(app)
      .post("/to-arabic")
      .send({
        romanSymbols: "o"
      });
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body).toHaveProperty("statusCode");
    expect(res.body).toHaveProperty("message");
    expect(res.body.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Bad Request");
  });
});

describe("Post Endpoints", () => {
  it("should return 400 when try convert roman to arabic number without params", async () => {
    const res = await request(app)
      .post("/to-arabic")
      .send({});
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body).toHaveProperty("statusCode");
    expect(res.body).toHaveProperty("message");
    expect(res.body.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Bad Request");
  });
});

describe("Post Endpoints", () => {
  it("should return 400 when try convert arabic number to roman without params", async () => {
    const res = await request(app)
      .post("/to-roman")
      .send({});
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body).toHaveProperty("statusCode");
    expect(res.body).toHaveProperty("message");
    expect(res.body.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Bad Request");
  });
});

describe("Post Endpoints", () => {
  it("should return 400 when try convert non valid arabic number", async () => {
    const res = await request(app)
      .post("/to-roman")
      .send({
        arabicNumber: "o"
      });
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body).toHaveProperty("statusCode");
    expect(res.body).toHaveProperty("message");
    expect(res.body.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Bad Request");
  });
});

describe("Post Endpoints", () => {
  it("should return 404 when try to get non exist endpoint", async () => {
    const res = await request(app)
      .post("/non-exist")
      .send({
        arabicNumber: "o"
      });
    expect(res.status).toEqual(404);
    expect(res.body).toHaveProperty("errors");
    expect(res.body.errors).toHaveProperty("message");
  });
});
