const Path = require("path");
const { config } = require("../../config");
const FileManager = require("./fileManager");
const mkdirp = require("mkdirp");

class UploadFileFactory {
    
  static getTmpFolder(folderName){
    return Path.resolve(config.uploadedFileFolder + '/tmp/' + folderName);
  }

  static getFileNameFunction(nameParams){
    let fileName = function(req, file, cb){
      if(typeof req.body[nameParams] == 'undefined'){
        req.body[nameParams] = {
          files: []
        }
      }
      let originalname = file.originalname;
      let fileName = new Date().getTime() + '_' + originalname;
      req.body[nameParams].files.push({
        fileName,
        originalname: originalname
      });
      cb(null, fileName);
    }
    return fileName;
  }

  static getDestinationFunction(nameParams, path){
    let destination = function(req, file, cb){
      if(typeof req.body[nameParams] == 'undefined'){
        req.body[nameParams] = {
          path: null,
          files: []
        }
      }
      req.body[nameParams].path = path;
      mkdirp.sync(req.body[nameParams].path);
      cb(null, path);
    }
    return destination;
  }

  getUploadMiddleware(
      nameParams,
      folderName,
      compressImage = false,
      rules= null,
      limits = {},
      tmp = false){
    const path = UploadFileFactory.getTmpFolder(folderName);
    const destination = UploadFileFactory.getDestinationFunction(nameParams, path);
    const fileName = UploadFileFactory.getFileNameFunction(nameParams, path);

    const fileManager = new FileManager(destination, fileName);

    return fileManager.uploadFile(
      nameParams,
      'array',
      rules,
      compressImage,
      limits,
      tmp
    )
  }
}


module.exports = new UploadFileFactory();


