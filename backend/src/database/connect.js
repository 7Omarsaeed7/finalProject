import mongoose from "mongoose";
async function connect() {
  return mongoose.connect(process.env.DB).then(() => {
    console.log("connectd to db...");
  });
}
export default connect;
