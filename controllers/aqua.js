var aqua = require('../models/aqua');
// List of all aqua
exports.aqua_list = async function(req, res) {
    try{
        theaqua = await aqua.find();
        res.send(theaqua);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
//res.send('NOT IMPLEMENTED: aqua list');
};
// for a specific Costume.
exports.aqua_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await aqua.findById( req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle aqua create on POST.
exports.aqua_create_post = async function (req, res) {
    console.log(req.body)
    let document = new aqua();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.type = req.body.type;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(err);
        res.status(500);
    }
};
// Handle icecream delete form on DELETE.
exports.aqua_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await aqua.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

/*
// Handle Costume delete on DELETE.
exports.costume_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Costume.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

*/

//Handle icecream update form on PUT.
exports.aqua_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
try {
    let toUpdate = await aqua.findById( req.params.id)
// Do updates of properties
    if(req.body.name) toUpdate.name = req.body.name;
    if(req.body.type) toUpdate.type = req.body.type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } 
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.aqua_view_all_Page = async function (req, res) {
    try {
        theaqua = await aqua.find();
        res.render('aqua', { title: 'Aqua Search Results', results: theaqua });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

exports.aqua_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await aqua.findById( req.query.id)
        res.render('aquadetail', 
         { title: 'aqua Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.aqua_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('aquacreate', { title: 'Aqua Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.aqua_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await aqua.findById(req.query.id)
        res.render('aquaupdate', { title: 'aqua Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.aqua_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await aqua.findById(req.query.id)
        res.render('aquadelete', { title: ' Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

