const db = require("../../db");
const orderHelpers = require("../orderHelpers")(db);

describe("orderHelpers", () => {
  let changedOrder;
  beforeEach(() => {
    changedOrder = {
      id: 1,
      description: "Construction Material",
      revenue_cents: 420000,
      cost_cents: 10000,
      driver_id: 1,
    };
  });

  afterAll(() => db.end());

  it(`Should update an order's revenue`, async () => {
    // Initial value of order 1 doesn't equal to 320000
    await expect(orderHelpers.getOrder(1).revenue_cents).not.toEqual(320000);
    // change order's revenue
    changedOrder.revenue_cents = 320000;
    await orderHelpers.updateOrder(changedOrder);
    const order = await orderHelpers.getOrder(1);
    expect(order.revenue_cents).toEqual(320000);
  });

  it(`Should update an order's cost`, async () => {
    changedOrder.cost_cents = 100;
    // initial cost value does not equal to 100
    await expect(orderHelpers.getOrder(1).revenue_cents).not.toEqual(
      changedOrder.cost_cents
    );

    await orderHelpers.updateOrder(changedOrder);
    const order = await orderHelpers.getOrder(1);
    expect(order.cost_cents).toEqual(100);
  });

  it(`Should remove a driver from an order`, async () => {
    changedOrder.driver_id = null;
    await expect(orderHelpers.getOrder(1).driver_id).not.toEqual(null);
    await orderHelpers.updateOrder(changedOrder);
    const order = await orderHelpers.getOrder(1);
    expect(order.driver_id).toBe(null);
  });
});
