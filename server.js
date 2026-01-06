const app = require("./backend/app");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is raunning at http//localhost:${PORT}`);
});
