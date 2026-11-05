export const NODE_ENVIRONMENTS = ["development", "test", "production"] as const;
export type NodeEnvironment = (typeof NODE_ENVIRONMENTS)[number];

export type AppConfig = {
  NODE_ENV: NodeEnvironment;
  API_HOST: string;
  API_PORT: number;
};

function isNodeEnvironment(value: string): value is NodeEnvironment {
  return (NODE_ENVIRONMENTS as readonly string[]).includes(value);
}

function text(environment: Record<string, unknown>, key: string) {
  const value = environment[key];
  return typeof value === "string" ? value.trim() : "";
}

export function validateEnvironment(
  environment: Record<string, unknown>,
): AppConfig {
  const errors: string[] = [];

  const nodeEnv = text(environment, "NODE_ENV") || "development";
  if (!isNodeEnvironment(nodeEnv)) {
    errors.push("NODE_ENV must be development, test or production.");
  }

  const host = text(environment, "API_HOST") || "127.0.0.1";

  const rawPort = text(environment, "API_PORT");
  const port = Number(rawPort);
  if (!rawPort) {
    errors.push("API_PORT is required.");
  } else if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    errors.push("API_PORT must be an integer from 1 to 65535.");
  }

  if (errors.length > 0) {
    throw new Error(
      `Invalid environment configuration:\n- ${errors.join("\n- ")}`,
    );
  }

  return {
    // Safe: an invalid NODE_ENV has already been reported above.
    NODE_ENV: nodeEnv as NodeEnvironment,
    API_HOST: host,
    API_PORT: port,
  };
}
