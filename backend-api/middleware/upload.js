let multer = require('multer');
const util = require("util");
const maxSize = 2 * 4096 * 4096;
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, __dirname + '/uploads');
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    }
  });
let uploadFile = multer({
storage: storage,
limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;