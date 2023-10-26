const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    
 
  await mongoose.connect("mongodb+srv://umer:123@cluster0.nszpwqv.mongodb.net/ihtesham?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("Conencted");
} catch (error) {
 console.log(error);   
}
}

module.exports = connectDB