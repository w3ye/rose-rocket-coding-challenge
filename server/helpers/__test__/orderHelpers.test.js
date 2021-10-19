const db = require("../../db");
const orderHelpers = require("../orderHelpers")(db);

describe("orderHelpers", () => {
  let changedOrder;
  beforeEach(() => {
    changedOrder = {
      id: 1,
      description: "Construction Material",
      revenue: 420000,
      cost: 10000,
      driver_id: 1,
    };
  });

  afterAll(() => db.end());

  it(`Should update an order's revenue`, async () => {
    // Initial value of order 1 doesn't equal to 320000
    await expect(orderHelpers.getOrder(1).revenue).not.toEqual(320000);
    // change order's revenue
    changedOrder.revenue = 320000;

    await orderHelpers.updateOrder(changedOrder);

    const order = await orderHelpers.getOrder(1);
    expect(order).toEqual(changedOrder);
  });

  it(`Should update an order's cost`, async () => {
    changedOrder.cost = 100;
    // initial cost value does not equal to 100
    await expect(orderHelpers.getOrder(1).revenue).not.toEqual(
      changedOrder.cost
    );

    await orderHelpers.updateOrder(changedOrder);

    const order = await orderHelpers.getOrder(1);
    expect(order).toEqual(changedOrder);
  });

  it(`Should remove a driver from an order`, async () => {
    changedOrder.driver_id = null;
    await expect(orderHelpers.getOrder(1).driver_id).not.toEqual(null);

    await orderHelpers.updateOrder(changedOrder);

    const order = await orderHelpers.getOrder(1);
    expect(order).toEqual(changedOrder);
  });

  it("Should assign order 1 to driver 2", async () => {
    changedOrder.driver_id = 2;
    await expect(orderHelpers.getOrder(1).driver_id).not.toEqual(
      changedOrder.driver_id
    );

    await orderHelpers.updateOrder(changedOrder);
    const order = await orderHelpers.getOrder(1);
    expect(order).toEqual(changedOrder);
  });
});
