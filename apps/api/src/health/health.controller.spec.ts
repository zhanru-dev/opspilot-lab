import { Test } from "@nestjs/testing";
import { HealthController } from "./health.controller";

describe("HealthController", () => {
  let controller: HealthController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();
    controller = moduleRef.get(HealthController);
  });

  it("reports the API as live", () => {
    const result = controller.live();
    expect(result).toMatchObject({ status: "ok", service: "opspilot-api" });
    expect(Number.isNaN(Date.parse(result.timestamp))).toBe(false);
  });
});
