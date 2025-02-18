const fs = require("fs")
const path = require("path")

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive:true}, (err) => {
            if(err) {
                reject(err)
            }   else {
                resolve(`Directory "${dirPath}" created sucessfuly`)
            }
        })
    })
}

function createFile(dirPath) {
    return new Promise((filePath, content) => {
        fs.writeFile(filePath, content, "utf8", (err) => {
            if(err) {
                reject(err); // Rejeita a promise em caso de erro
            }   else {
                resolve(`Directory "${dirPath}" created sucessfuly`); // Resolve a promise
            }
        });
    });
}

module.exports = {createDirectory, createFile}