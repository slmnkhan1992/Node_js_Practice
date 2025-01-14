import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});

// get a list of 5 differet jokes list including id, title and jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
        { id: 1, title: "Joke 1", joke: "You are a good person" },
        { id: 2, title: "Joke 2", joke: "Hahaha how are you" },
        { id: 3, title: "Joke 3", joke: "Joke 3 Joke 3 Joke 3" },
        { id: 4, title: "Joke 4", joke: "Joke 4 Joke 4 Joke 4" },
        { id: 5, title: "Joke 5", joke: "Joke 5 Joke 5 Joke 5" },
    ]
    res.json(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
