const getClients = (req, res) => {
  res.json({
    clients: [
      { name: "John", lastname: "johnson", age: "16" },
      { name: "Peter", lastname: "johnson", age: "18" },
    ],
  });
};
const getClient = (req, res) => {
  res.json({ name: "john", lastname: "johnson", age: "16" });
};
module.exports = { getClients, getClient };
