const generatePassword = require("generate-password");

function generatePassword() {
    const password = generatePassword.generate({
        length: 8,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        strict: true
    });

    console.log("Mot de passe généré :", password);
}

generatePassword();