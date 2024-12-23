//const mongoose = require('mongoose');
import mongoose from 'mongoose';

//const uri = "mongodb+srv://root:miscojohns33@testcluster.xqztk.mongodb.net/tcgcontrol?retryWrites=true&w=majority&appName=TestCluster";

class dbClient {
    constructor(dbname, url) {
      this.dbname = dbname;
      this.db = null;
      this.url = url;
      const queryString = "mongodb+srv://root:miscojohns33@testcluster.xqztk.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";
      //this.client = new MongoClient(queryString);
      this.connectDB();
    }

    // async connectDB() {
    //   try {
    //     await this.client.connect();
    //     this.db = this.client.db;
    //     console.log("Connected to the database");
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }

    async connectDB() {
      try {
          await mongoose.connect(this.url, {
              useNewUrlParser: true,
              useUnifiedTopology: true
          });
          this.db = mongoose.connection.collection(this.dbname);
          console.log("Connected to the database");
      } catch (e) {
          console.error(e);
      }
  }
    
}

export default dbClient;