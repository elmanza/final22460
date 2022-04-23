const UploadFileFactoryHandler = require("../../../utils/multer/uploadFileFactoryHandler");

module.exports = {
    uploadFile: function(){
        return UploadFileFactoryHandler.getUploadMiddleware(
            'userFiles',
            'userFiles',
            undefined,
            undefined,
            { files: 4 },
            false
        )
    }
}