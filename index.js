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
});

app.post("/tweets", (req, res) => {
    const body = req.body; /* json -> obj (parser) */
    const {username, tweet} = body;
    const {avatar} = users.find(user => user.username === username);
    tweets.push({
        username, 
        avatar,
        tweet
    });
    res.send("Ok"); /* cod 200 */
});

app.get("/tweets", (req, res) => {
    if (tweets.length <= 10) res.send([...tweets].reverse()); /* all tweets in decrescent order*/
    else res.send([...tweets].reverse().splice(0, 10)); /* last 10 tweets in decrescent order */
});

app.listen(5000, () => {
    console.log(chalk.bold.green("active server on port 5000"));
});