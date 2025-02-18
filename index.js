const fileManager = require("./fileManager")
const readlineSync = require('readline-sync');
const path = require('path');
const { read } = require("fs");

function main() {
    const baseDir = path.join(__dirname, 'my_files');
    
    while(true) {
       console.log("\nMenu:"); 
       console.log("1. Criar Arquivo"); 
       console.log("2. Listar Arquivos"); 
       console.log("3. Ler Arquivo"); 
       console.log("4. Escrever Arquivo"); 
       console.log("5. Deletar Arquivo");
       console.log("6. Sair");  

       const choice = readlineSync.question('Escolha uma opção: ')

       switch(choice) {
            case '1':
                const fileName = readlineSync.question('Digite o nome do arquivo: ');
                const fileContent = readlineSync.question('Digite o conteúdo do arquivo (ou deixe em branco): ');

                const createFilePath = path.join(__dirname, fileName)

                const fileMessage = fileManager.createFile(createFilePath, fileContent)

                console.log('fileMessage');
                break;
            case '2':
                console.log('Arquivo no diretório:');
                break;
            case '3':
                console.log('Conteúdo do arquivo:');
                break;
            case '4':
                console.log('Arquivo escrito com sucesso.');
                break; 
            case '5':
                console.log('Arquivo deletado com sucesso.');
                break;
            case '6':
                console.log('Saindo...');
                return;
            default:
                console.log('Opção inválida. Tente novamente.');    
       }
    }
}


main();