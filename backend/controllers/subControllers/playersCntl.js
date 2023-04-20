const reqFieldsConfig = require("../../config/tableConfigs/playersReqConfig");
const desiredTable = "players";

// Tested with PostMan 👨‍🚀 - OK! ✅
const getAllPlayers = (req, res) => {
  const { getStaff } = require("../../model/sqlQueries/dbFunctions");
  getStaff(req, res, desiredTable);
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const getEverythingByName = (req, res) => {
  const { getEverything } = require("../../model/sqlQueries/dbFunctions");
  getEverything(req, res, desiredTable, "name");
};

const getEverythingByWallet = (req, res) => {
  const { getEverything } = require("../../model/sqlQueries/dbFunctions");
  getEverything(req, res, desiredTable, "wallet");
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const createNewPlayer = (req, res) => {
  const { postStaff } = require("../../model/sqlQueries/dbFunctions");
  // Last argument is for the required fields or properties
  postStaff(req, res, desiredTable, reqFieldsConfig);

  // TODO: The check if player exists in DB,
  // using the checkExistanceById -> dbFunctions
  // MUST BE DONE FROM FRONTEND || Make it Middleware
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const updateRow = (req, res) => {
  const { putStaff } = require("../../model/sqlQueries/dbFunctions");

  // Last argument is for the required fields or properties
  // in this case, we don't want to have required fields
  putStaff(req, res, desiredTable);

  // TODO: The check if player exists in DB,
  // using the checkExistanceById -> dbFunctions
  // MUST BE DONE FROM FRONTEND || Make it Middleware
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const deleteRow = (req, res) => {
  const { deleteStaff } = require("../../model/sqlQueries/dbFunctions");
  deleteStaff(req, res, desiredTable);

  // TODO: The check if player exists in DB,
  // using the checkExistanceById -> dbFunctions
  // MUST BE DONE FROM FRONTEND || Make it Middleware
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const getRow = (req, res) => {
  const { getSpecificStaff } = require("../../model/sqlQueries/dbFunctions");

  getSpecificStaff(req, res, desiredTable);

  // TODO: The check if player exists in DB,
  // using the checkExistanceById -> dbFunctions
  // MUST BE DONE FROM FRONTEND || Make it Middleware
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const getPlayerByWallet = (req, res) => {
  const { getSpecificStaff } = require("../../model/sqlQueries/dbFunctions");

  getSpecificStaff(req, res, desiredTable, "wallet");

  // TODO: The check if player exists in DB,
  // using the checkExistanceById -> dbFunctions
  //
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const getPlayerByName = (req, res) => {
  const { getSpecificStaff } = require("../../model/sqlQueries/dbFunctions");

  getSpecificStaff(req, res, desiredTable, "name");

  // TODO: The check if player exists in DB,
  // using the checkExistanceById -> dbFunctions
  // MUST BE DONE FROM FRONTEND || Make it Middleware
};

module.exports = {
  getAllPlayers,
  createNewPlayer,
  updateRow,
  deleteRow,
  getRow,
  getPlayerByName,
  getPlayerByWallet,
  getEverythingByName,
  getEverythingByWallet,
};
