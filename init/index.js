const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoURL = "mongodb://127.0.0.1:27017/todo-list";


main().then(async ()=>{
    console.log("DB connect");
    await initDb();
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongoURL);
}

const initDb = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initiallize");
}
