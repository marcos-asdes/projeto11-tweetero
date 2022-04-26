import chalk from "chalk";
import express, {json} from "express";
import cors from "cors";

const app = express();
app.use(json()); /* parser */
app.use(cors()); /* middleware (headers) */

const tweets = []; /* username, avatar, tweet */
const users = []; /* username, avatar */
/* the tweet's avatar information comes from the user */

app.post("/sign-up", (req, res) => {
    const body = req.body; /* json -> obj (parser) */
    users.push(body); /* do in the future a data treatment in this body to not receive errors */
    res.send("Ok"); /* cod 200 */
})

app.listen(5000, () => {
    console.log(chalk.bold.green("active server on port 5000"));
});