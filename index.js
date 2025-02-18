const fileManager = require("./fileManager");
const readlineSync = require('readline-sync');
const path = require('path');
const { read } = require("fs");

async function main() {
    const baseDir = path.join(__dirname, 'my_files');

    fileManager.createDirectory(baseDir)

    while(true) {
       console.log("\nMenu:"); 
       console.log("1. Criar Arquivo"); 
       console.log("2. Listar Arquivos"); 
       console.log("3. Ler Arquivo"); 
       console.log("4. Escrever Arquivo"); 
       console.log("5. Deletar Arquivo");
       console.log("6. Sair");  

       const choice = readlineSync.question('Escolha uma opção: ');

       try {
        switch(choice) {
            case '1':
                const fileName = readlineSync.question('Digite o nome do arquivo: ');
                const fileContent = readlineSync.question('Digite o conteúdo do arquivo (ou deixe em branco): ');

                const createFilePath = path.join(baseDir, fileName)

                const fileMessage = await fileManager.createFile(createFilePath, fileContent)

                console.log(fileMessage);
                break;
            case '2':
                const files = await fileManager.listFiles(baseDir);
                console.log('Arquivo no diretório:', files);
                break;
            case '3':
                const readFileName = readlineSync.question(
                    "Digite o nome e extensão do arquivo: "
                );
                const readFilePath = path.join(baseDir, readFileName);
                const content = await fileManager.readFile(readFilePath);
                console.log(content);
                break;
            case '4':
                const writeFilePath = path.join(baseDir, writeFileName);
                const newContent = readlineSync.question(
                    "Digite o conteúdo a ser escrito: "
                );
                const message = await fileManager.writeFile(writeFilePath, newContent);
                console.log(message);
                break;
 
            case '5':
                const deleteFileName = readlineSync.question(
                    "Digite o nome do arquivo: "
                );
                const deleteFilePath = path.join(baseDir, deleteFileName);
                const messageDelete = await fileManager.deleteFile(deleteFilePath);
                console.log(messageDelete);
                break;
            case '6':
                console.log('Saindo...');
                return;
            default:
                console.log('Opção inválida. Tente novamente.');    
        }        
        } catch (err) {
            console.log(err);
        }
    }
}


main();