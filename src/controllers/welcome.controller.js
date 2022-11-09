const welcomeMessage = (req, res) => {
  res.json({
    msg: "get API - welcome",
  });
};

module.exports = { welcomeMessage };
