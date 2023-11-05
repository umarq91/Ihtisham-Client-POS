const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    
 
  await mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("Conencted");
} catch (error) {
 console.log(error);   
}
}

module.exports = connectDB