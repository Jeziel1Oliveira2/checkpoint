var item = ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'];
var temPadrao = [10, 8, 15, 12, 8]

let microondas = function(comida, tempoConsum){
    switch (comida) {
        case 1:
            if (tempoConsum >= temPadrao[0]*2 && tempoConsum < temPadrao[0]*3)
                console.log("A comida queimou.");
            else if (tempoConsum >= temPadrao[0]*3)
                console.log("kabumm.");
            else if (tempoConsum < temPadrao[0])
                console.log("Tempo insuficiente.");
            else 
                console.log("Prata pronto.")
            break;
        case 2:
            if (tempoConsum >= temPadrao[1]*2 && tempoConsum < temPadrao[1]*3)
                console.log("A comida queimou.");
            else if (tempoConsum >= temPadrao[1]*3)
                console.log("kabumm.");
            else if (tempoConsum < temPadrao[1])
                console.log("Tempo insuficiente.");
            else 
                console.log("Prata pronto.")
            break
        case 3:
            if (tempoConsum >= temPadrao[2]*2 && tempoConsum < temPadrao[2]*3)
        console.log("A comida queimou.");
    else if (tempoConsum >= temPadrao[2]*3)
        console.log("kabumm.");
    else if (tempoConsum < temPadrao[2])
        console.log("Tempo insuficiente.");
    else 
        console.log("Prata pronto.")
            break
        case 4:
            if (tempoConsum >= temPadrao[3]*2 && tempoConsum < temPadrao[3]*3)
                console.log("A comida queimou.");
            else if (tempoConsum >= temPadrao[3]*3)
                console.log("kabumm.");
            else if (tempoConsum < temPadrao[3])
                console.log("Tempo insuficiente.");
            else 
                console.log("Prata pronto.")
            break
        case 5: 
        if (tempoConsum >= temPadrao[4]*2 && tempoConsum < temPadrao[4]*3)
                console.log("A comida queimou.");
            else if (tempoConsum >= temPadrao[4]*3)
                console.log("kabumm.");
            else if (tempoConsum < temPadrao[4])
                console.log("Tempo insuficiente.");
            else 
                console.log("Prata pronto.")
            break
        default:
            console.log("Opção inválida selecionada!\nPrato Inexistente");
    }
};

