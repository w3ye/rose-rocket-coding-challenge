const db = require("../../db");
const driverHelpers = require("../driverHelpers")(db);

describe("DriversHelpers", () => {
  afterAll(() => db.end());

  it("Should retrieve driver at driver id  1", async () => {
    const driver = await driverHelpers.getDriver(1);
    expect(driver).toEqual({
      id: 1,
      first_name: "Steve",
      last_name: "Williams",
    });
  });

  it("Should return an error if the driver id does not exist", async () => {
    const driver = await driverHelpers.getDriver(-1);
    expect(driver).toBe(undefined);
  });

  it("Should return an array for all drivers", async () => {
    const expectedDrivers = [
      {
        id: 1,
        first_name: "Steve",
        last_name: "Williams",
      },
      {
        id: 2,
        first_name: "Chris",
        last_name: "Horton",
      },
      {
        id: 3,
        first_name: "Alex",
        last_name: "Novak",
      },
    ];
    const drivers = await driverHelpers.getDrivers();
    expect(drivers).toEqual(expectedDrivers);
  });
});
