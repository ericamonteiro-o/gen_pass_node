const generator = require("generate-password");
const readline = require("readline-sync");

let running = true;

while(running){
    const answer = readline.question("Deseja gerar uma nova senha? ").toLowerCase();

    if(answer === "y"){
        const password = generator.generate({
            length: 50,
            numbers: true,
            excludeSimilarCharacters: true,
            symbols: true,
            uppercase: true,
            lowercase: true
        })
        
        console.log(password);
    } else if (answer === "n"){
        running = false;
        console.log("Encerrando...");
    } else {
        console.log("Entrada inválida. Digite 'y' para continuar e 'n' para sair.");
    }
}



