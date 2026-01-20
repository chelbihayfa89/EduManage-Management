const app = require("./backend/app");
require('dotenv').config();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
