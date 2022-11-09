const getUsers = (req, res) => {
  res.json({
    msg: "get API - users",
  });
};

module.exports = { getUsers };
