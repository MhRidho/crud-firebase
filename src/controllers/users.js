const { db } = require("../helpers/firebase");
const users = require("../helpers/users.json");
const { FieldValue } = require("firebase-admin/firestore");

exports.getAllUsers = async (req, res) => {
  const peopleRef = db.collection("people").doc("associates");
  const doc = await peopleRef.get();
  if (!doc.exists) {
    return res.sendStatus(400);
  }
  res.status(200).send(doc.data());
};

exports.getUserByName = (req, res) => {
  const { name } = req.params;
  if (!name || !(name in users)) {
    return res.sendStatus(404);
  }
  res.status(200).send({ [name]: users[name] });
};

exports.createUser = async (req, res) => {
  const { name, status } = req.body;
  const peopleRef = db.collection("people").doc("associates");
  const res2 = await peopleRef.set(
    {
      [name]: status,
    },
    { merge: true }
  );
  res.status(200).send(users);
};

exports.changeStatus = async (req, res) => {
  const { name, newStatus } = req.body;
  const peopleRef = db.collection("people").doc("associates");
  const res2 = await peopleRef.set(
    {
      [name]: newStatus,
    },
    { merge: true }
  );
  res.status(200).send(users);
};

exports.deleteUser = async (req, res) => {
  const { name } = req.body;
  const peopleRef = db.collection("people").doc("associates");
  const res2 = await peopleRef.update({
    [name]: FieldValue.delete(),
  });
  res.status(200).send(users);
};
