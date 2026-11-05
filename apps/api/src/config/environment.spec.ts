import { validateEnvironment } from "./environment";

describe("validateEnvironment", () => {
  it("applies defaults for optional settings", () => {
    expect(validateEnvironment({ API_PORT: "4200" })).toEqual({
      NODE_ENV: "development",
      API_HOST: "127.0.0.1",
      API_PORT: 4200,
    });
  });

  it("requires API_PORT", () => {
    expect(() => validateEnvironment({})).toThrow("API_PORT is required.");
  });

  it("rejects a port outside 1-65535", () => {
    expect(() => validateEnvironment({ API_PORT: "70000" })).toThrow(
      "API_PORT must be an integer from 1 to 65535.",
    );
  });

  it("rejects an unknown NODE_ENV", () => {
    expect(() =>
      validateEnvironment({ API_PORT: "4200", NODE_ENV: "staging" }),
    ).toThrow("NODE_ENV must be development, test or production.");
  });

  it("reports every problem at once", () => {
    expect(() => validateEnvironment({ NODE_ENV: "staging" })).toThrow(
      /NODE_ENV[\s\S]*API_PORT/,
    );
  });
});
