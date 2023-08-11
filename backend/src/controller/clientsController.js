const getClients = (req, res) => {
  res.json({
    clients: [
      { name: "John", lastname: "johnson", age: "16" },
      { name: "Peter", lastname: "johnson", age: "18" },
    ],
  });
};
const getClient = (req, res) => {
  const { id } = req.params;
  const { data } = req.query;
  if (data) {
    res.json({
      name: "john",
      lastname: "johnson",
      age: "16",
      paramsId: id,
      queryData: data,
    });
  } else {
    res.json({ name: "john", lastname: "johnson", age: "16", paramsId: id });
  }
};
module.exports = { getClients, getClient };
