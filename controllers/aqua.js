var Aqua = require("../models/aqua");
// List of all aquas
exports.aqua_list = async function (req, res) {
try {
var data = await Aqua.find({});
res.send("The data is \n" + data);
 } catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
 }
};
// for a specific aqua.
exports.aqua_detail = function (req, res) {
Aqua.find({ aquacompany: req.params.name })
 .then((result) => {
res.send(result);
 })
 .catch((err) => {
res.status(500);
res.send(`{"error": ${err}}`);
 });
};
// Handle aqua create on POST.
exports.aqua_create_post = async function (req, res) {
console.log(req.body);
let document = new Aqua();
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
 } catch (err) {
res.error(500, `{"error": ${err}}`);
 }
};
// Handle aqua delete form on DELETE.
exports.aqua_delete = async function (req, res) {
try {
await Aqua.deleteMany({ name: req.params.name });
res.send("data is deleted with company name " + req.params.name);
 } catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
 }
};
// Handle aqua update form on PUT.
exports.aqua_update_put = async function (req, res) {
try {
await Aqua.updateMany(
 { name: "apple" },
 { $set: { model: req.params.model } }
 );
res.send("aqua update PUT" + req.params.id);
 } catch (err) {
res.status(500);
res.send(`{"error": ${err}}`);
 }
};
exports.aqua_view_all_Page = async function (req, res) {
try {
theaqua = await Aqua.find();
res.render("aqua", {
title: "aqua Search Results",
results: theaqua,
 });
 } catch (err) {
res.error(500, `{"error": ${err}}`);
 }
};