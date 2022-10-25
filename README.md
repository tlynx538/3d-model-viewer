# FABRIK 3D Model Viewer
 A Full Stack Application to view or upload 3d models.

#### Completion Status: <b>Partial</b> 

### Tasks Completed
-  Frontend
    - [v] Home Page with list of models
    - [v] Option to upload model (partial)
    - [v] Sample Render of a model
    - [v] Render 3d model present on the list
-  Backend API
    - [v] Provides the list of model files
    - [v] Provision to upload 3d files
    - [v] Get the specified 3d file

## Frontend
### Setup
To install the packages to run the frontend type the following:

`npm install`

`ng serve`  

## Backend
1. Please install the postgresql database and then type psql -f backend-api/dump-models-202210171328.sql to create the database.
2. Then please make the suitable changes to knexfile.js in knex folder to connect with the database.
3. Then run `npm install` and `npm start` to run the application

## Routes
- localhost:4200/ - displays main home page
- localhost:4200/render/ - shows a sample 3d model that can be moved around
- localhost:4200/upload - to upload the model itself.

### How to use it?
- To list the models on the home page use the update rows button and it will lists the uploaded model
- To upload the model click the upload model button on the home page. It can upload only zip file containing the gltf file along with its textures (It is assumed that the model itself is names as scene.gltf, if not please rename the model to scene.gltf and send the zip file). Once uploaded and if the uploading text disappears, the model is uploaded. Return back to the home page and click on update rows to update the list of the available models.
- Now click on any of the model present on the list to render the model.

### Deployment Link
https://41c2-103-108-58-13.in.ngrok.io/



