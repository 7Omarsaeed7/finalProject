const mongoose = require("mongoose");
async function connect() {
  return mongoose.connect(process.env.DB);
}
export default connect;
