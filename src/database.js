import { Pool } from "pg/lib";

export const pool = new Pool({
  host: "ec2-34-231-177-125.compute-1.amazonaws.com",
  user: "cicojussvcipoe",
  password: "658637e2f2da42bac2e9dee15459f8d0662df6ec060997b8e126a9804ce8fca5",
  database: "d7o9b15vh80ef4",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});
