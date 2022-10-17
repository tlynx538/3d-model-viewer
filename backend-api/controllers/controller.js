const uploadFile = require('../middleware/upload');
const db = require('../knex/knex');
const allFileDetails = async(req,res) => {
    try 
    {
        const result = await db('file').select('file_name','file_serial');
        res.json(result);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json("message: Error Occcured");
    }

}

const getFile = async(req,res) => {

}

const sendFile = async(req,res) => {
    console.log("Reached Route: Send File");
    try {
        await uploadFile(req, res);
        if (req.file == undefined) {
          return res.status(400).send({ message: "Please upload a file!" });
        }
        try 
        {
            const results = await db('file').insert({
                file_name: req.file.originalname,
                file_serial: randomStringGenerator()
            }).returning('*');
        }
        catch(err)
        {
            console.log("Database Error");
            console.log(err);
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