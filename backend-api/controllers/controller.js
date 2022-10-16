const uploadFile = require('../middleware/upload');
const allFileDetails = async(req,res) => {

}

const getFile = async(req,res) => {

}

const sendFile = async(req,res) => {
    // multipart file data in body with title, also assign random string
    console.log("Reached Route: Send File");
    try {
        await uploadFile(req, res);
        if (req.file == undefined) {
          return res.status(400).send({ message: "Please upload a file!" });
        }
    
        res.status(200).send({
          message: "Uploaded the file successfully: " + req.file.originalname,
        });

      } 
        catch (err) {
        console.log(err);
        res.status(500).send({
          message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
}

module.exports = {allFileDetails, getFile, sendFile};

const randomStringGenerator = () => {
    return Math.random().toString(36).substring(2,7);
}