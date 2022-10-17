# FABRIK 3D Model Viewer
 A Full Stack Application to view or upload 3d models.

#### Completion Status: <b>Partial</b> 

### Tasks Completed
-  Frontend
    - [v] Home Page with list of models
    - [v] Option to upload model (partial)
    - [v] Sample Render of a model
    - [] Render 3d model present on the list
-  Backend API
    - [v] Provides the list of model files
    - [v] Provision to upload 3d files
    - [] Get the specified 3d file

## Frontend
### Setup
To install the packages to run the frontend type the following:

`npm install`

`ng serve`  

## Backend
1. Please install the postgresql database and then type psql -f backend-api/dump-models-202210171328.sql to create the database.
2. Then please make the suitable changes to knexfile.js in knex folder to connect with the database.
3. Then run `npm install` and `npm start` to run the application

## Links
- localhost:4200/ - displays main home page
- localhost:4200/render - shows a sample 3d model that can be moved around
- localhost:4200/upload - to upload the model itself.

### Pending Tasks:
- Render 3d model from the list by downloading the model to the frontend and rendering using three.js
- Deployment link

