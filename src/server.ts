import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRouter } from "./routes/specifications.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRouter);

app.listen(2222, () => {
  console.log("Servidor rodando");
});
