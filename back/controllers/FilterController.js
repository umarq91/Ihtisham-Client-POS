const KapraModel = require('../database/KapraModel.js')
const relationModel = require('../database/relationModel.js');
const HistoryModel = require('../database/HistoryModel.js')


// FILTER PURCHASE / SALE   and SUPPLIER /  CLIENT

  const basicFilter = async (req, res) => {
    const { stock, relation } = req.query;

    let filter = {};

    try {
      if (req.query.stock == "Purchase" || req.query.stock == "Sale") {
        filter = { stock: req.query.stock };
      } else if (
        req.query.relation === "Supplier" ||
        req.query.relation === "Client"
      ) {
        filter = { relation };
      } else {
        return res.status(404).json("No Record Found");
      }
      const filteredHistory = await HistoryModel.find(filter);

      // Respond with the filtered data as JSON
      res.json(filteredHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };


  const search = async (req, res) => {
    const { name, billno } = req.query;
    try {
      if (name) {
        // Create a regular expression for a case-insensitive search
        const nameRegex = new RegExp(name, "i");
        // Use the regex in the filter
        filter = { relation: { $regex: nameRegex } };
      } else if (billno) {
        filter = { billno };
      } else {
        return res.status(400).json("NOT VALID");
      }
    } catch (error) {
      console.log("error");
    }
    console.log(filter);

    const check = await HistoryModel.find(filter);
    if (check.length === 0) return res.status(404).json("NO MATCH FOUND");

    res.json(check);
  };

  
  module.exports= {basicFilter,search}