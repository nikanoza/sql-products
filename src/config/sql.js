import pgk from "pg";
const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-citaui5gkuvoiga7ens0-a",
  port: 5432,
  database: "products_0w2h",
  user: "products_0w2h_user",
  password: "5n7lk5O1uNnA01GrXgO8HMqTjNpnvc9D",
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS products(id SERIAL PRiMARY KEY, title TEXT, price INT)"
  );
};
