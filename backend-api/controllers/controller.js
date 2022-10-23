const uploadFile = require('../middleware/upload');
const AdmZip = require("adm-zip");
const path = require("path");
const db = require('../knex/knex');

const extracted_folder = "/Users/vjaiwantx/experimental/3d-model-viewer/viewer-frontend/src/assets/";
const models_folder = "/Users/vjaiwantx/experimental/3d-model-viewer/backend-api/middleware/uploads/";

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
    try
    {
        const result = await db('file').select('file_name','file_serial').where('file_serial',req.params.file_name);
        res.json(result[0]);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json("message: Error Occured");
    }
}

const sendFile = async(req,res) => {
    console.log("Reached Route: Send File");
    var file_serial = randomStringGenerator();
    try {
        await uploadFile(req, res);
        if (req.file == undefined) {
          return res.status(400).json({ message: "Please upload a file!" });
        }
        try 
        {
            try {
                extractArchive(models_folder+req.file.originalname,file_serial);
            }
            catch(err)
            {

                console.log(err);
                return res.status(500).json({message: "Could not extract the file"})
            }
            const results = await db('file').insert({
                file_name: getFileName(req.file.originalname),
                file_serial: file_serial
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

async function extractArchive(filepath,model_serial) {
    try {
      const zip = new AdmZip(filepath);
      const outputDir = extracted_folder+model_serial+'/';
      zip.extractAllTo(outputDir);
      console.log(`Extracted to "${outputDir}" successfully`);
    } catch (e) {
      console.log(`Something went wrong. ${e}`);
    }
}

const getFileName = (file_name) =>{
    var str1 = file_name;
    var index = str1.indexOf(".zip");
    return str1.slice(0,index);
}