const reqFieldsConfig = require("../../config/tableConfigs/cardsReqConfig");
const desiredTable = "cards";

// Tested with PostMan 👨‍🚀 - OK! ✅
const getAllRows = (req, res) => {
  const { getStaff } = require("../../model/sqlQueries/dbFunctions");
  getStaff(req, res, desiredTable);
};

const getAllCardsForSale = (req, res) => {
  const { getSpecificStaff } = require("../../model/sqlQueries/dbFunctions");
  getSpecificStaff(req, res, desiredTable, "in_mp", 1);
};

// Tested with PostMan 👨‍🚀 - OK! ✅
const createNewRow = (req, res) => {
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

module.exports = {
  getAllRows,
  getAllCardsForSale,
  createNewRow,
  updateRow,
  deleteRow,
  getRow,
};
