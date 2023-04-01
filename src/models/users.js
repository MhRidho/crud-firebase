const { db } = require("../helpers/firebase");

exports.getAllUsers = async (req, res) => {
  const peopleRef = db.collection("people").doc("associates");
  const doc = await peopleRef.get();
  cb(doc);
};
