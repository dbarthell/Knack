const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const TipSchema = new Schema({
  tip: {
    type: String
},
  proven: {
    type: Boolean
},
  knack: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
const Tip = mongoose.model("Tip", TipSchema);

// Export the Tip model
module.exports = Tip;