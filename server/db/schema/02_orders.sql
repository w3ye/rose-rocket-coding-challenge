DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(255) NOT NULL,
  revenue_cents INTEGER NOT NULL,
  cost_cents INTEGER NOT NULL,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE DEFAULT NULL
)