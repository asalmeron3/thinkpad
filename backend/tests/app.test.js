const request = require("supertest");
const app = require("../src/app");

describe("GET /api/health", () => {
  it("should return a 200 status code and { status: 'ok' }", async () => {
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});

describe("GET /api/thought", () => {
  it("should return an array of thoughts from the db", async () => {
    const response = await request(app).get("/api/thoughts");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /api/thought/:id", () => {
  it("should return a single thought with the specified id", async() => {
    const response = await request(app).get("/api/thought/88");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 88);
  });
});

describe("POST /api/thought", () => {
  it("should create a new thought", async () => {
    const newThought = { content: "This is a new thought." };
    const response = await request(app).post("/api/thought").send(newThought);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("content", newThought.content);
  });
});
