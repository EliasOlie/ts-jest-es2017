import { app } from "./app";

const HOST = process.env.HOST ? process.env.HOST : "0.0.0.0";
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, HOST, () => {
  console.log(
    `Server running at http://${
      HOST == "0.0.0.0" ? "localhost" : HOST
    }:${PORT}\nHappy hacking 🚀`
  );
});
