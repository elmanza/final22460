const multer = require("multer");
const { config } = require("../../config");
const path = require("path");
const mkdirp = require("mkdirp");
const sharp = require("sharp");
const FILE_NAME = 'singleFile'
const TYPE_FILE = 'single'
const RULES = /jpeg|jpg|png|gif|tiff|psd|jfif/;
class FileManager {

    constructor(destinationFunction, fileNameFunction){
        let destination = function(req, file, cb){
            mkdirp.sync(config.uploadedFileFolder);
            cb(null, config.uploadedFileFolder)
        }
        
        let fileName = function(req, file, cb){
            cb(null, file.originalname);
        }

        this.destination = destinationFunction || destination;
        this.fileName = fileNameFunction || fileName;
    }
    uploadFile(
        fileName = FILE_NAME,
        type = TYPE_FILE,
        rules = RULES,
        compressImage = false,
        limits = {},
        tmp = false
    ){
        let multerOptions = {
          storage: tmp ? multer.memoryStorage({
            fileName: this.fileName
          }) : multer.diskStorage({
            fileName: this.fileName,
            destination: this.destination
          }),
          limits,
          fileFilter: function(req, file, cb){
            if(!rules){return cb(null, true)}
          }
        }

        if(compressImage){
          // Generamos lógica de comprimir
        }
        
        return multer(multerOptions)[type](fileName);
    }
}


module.exports = FileManager;