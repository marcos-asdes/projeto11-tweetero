import chalk from "chalk";
import express from "express";

const app = express();

app.listen(5000, () => {
    console.log(chalk.bold.green("active server on port 5000"));
});