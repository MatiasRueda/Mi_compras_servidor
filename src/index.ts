import app from "./express";

let port: number = 5000;

app.listen(port, () => console.log("Server on port " , port));
