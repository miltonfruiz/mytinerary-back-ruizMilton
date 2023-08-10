const getClients = (req, res) => {
  res.json({
    clients: [{ name: "john", lastname: "johnson", age: "16" }],
  });
};
const getClient = (req, res) => {
  res.json({ name: "john", lastname: "johnson", age: "16" });
};
module.exports = { getClients, getClient };
