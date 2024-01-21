const Users = require("../model/model");

const getAllData = async (req, res) => {
  let allData = await Users.find({});
  res.send(allData);
};
const delData = async (req, res) => {
  let id = req.params.id;
  let findData = await Users.findByIdAndDelete({ _id: id });
  res.send(findData);
};

const postData = async (req, res) => {
  let newUsers = new Users(req.body);
  newUsers.save();
  res.send(newUsers);
};

module.exports = { getAllData, delData, postData };
