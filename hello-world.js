console.log("HELLO WORLD");

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Node !!!!</h1>\n");
});


// Créer un fichier "welcome.txt" avec du texte
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err);
    console.log("Fichier créé avec succés");
});

// Lire le fichier "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err);
    console.log("Contenu du fichier :", data);
});

server.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
});