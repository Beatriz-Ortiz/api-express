// Routes asociadas con users
const { User } = require("../models");

// CREATE
const create = async (req, res) => {
  const user = new User(req.body);

  // DNI Validation
  regexDNI = /^[A-Z][A-Z][A-Z][0-9][0-9][a-z][0-9]/;

  const isValidDNI = regexDNI.test(user.dni);

  // Validation success
  if (isValidDNI) {
    const data = await user.save();

    response = {
      status: "success",
      code: {
        users: [data],
      },
    };

    // Validation fail
  } else {
    response = `Valor ${isValidDNI} para DNI invalido`;
  }

  res.json(response);
};

// ALL
const all = async (req, res) => {
  const users = await User.find();

  const response = {
    status: "success",
    code: {
      users,
    },
  };

  res.json(response);
};

// GET
const get = async (req, res) => {
  const dni = req.params.dni;
  const user = await User.find({ dni: dni });

  const response = {
    status: "success",
    code: {
      users: [user],
    },
  };

  res.json(response);
};

// UPDATE
const update = async (req, res) => {
  const dni = req.params.dni;
  const data = req.body;

  const filter = { dni: dni };
  const userData = await User.findOneAndUpdate(filter, data);

  const response = {
    status: "success",
    code: {
      users: [userData],
    },
  };

  res.json(response);
};

// DELETE
const remove = async (req, res) => {
  const dni = req.params.dni;
  const data = await User.remove({ dni: dni });

  const response = {
    status: "success",
    code: {
      users: {},
    },
  };

  res.json(response);
};

module.exports = {
  create,
  all,
  get,
  update,
  remove,
};
