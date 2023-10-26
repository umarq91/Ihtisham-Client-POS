const express = require('express')
const app  = express()
const cors = require('cors');
const connectDb = require('./database/db')
const KapraModel = require('./database/KapraModel')
const RelationModel = require('./database/relationModel')

const {kapreEntry,relationEntry, HistoryEntry, getAllproducts} = require('./controllers/EntryController');
const { basicFilter, search } = require('./controllers/FilterController');
const mongoose = require('mongoose');
const relationModel = require('./database/relationModel');
const HistoryModel = require('./database/HistoryModel');
app.use(cors())
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server Connected");
    connectDb();
})


app.get('/',(req,res)=>{

res.json({message:"SALAM"})
})

app.post('/kapraentry',kapreEntry)

app.post('/relationentry',relationEntry)

app.post('/historyentry',HistoryEntry)





app.get('/api/history',basicFilter)

app.get('/api/search',search)


app.get('/products',getAllproducts)

app.get('/products/:id',async(req,res)=>{
   
    try {
        const data = await KapraModel.find({ _id:req.params.id});
        res.json(data);
      } catch (error) {
        console.error('Mongoose Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      
})

app.post('/products/kapraedit', async (req, res) => {
  const { name, supplier, than, meter, rate, id ,purchaserate} = req.body;

  try {
    // Find the document by _id
    const existingDocument = await KapraModel.findById(id);

    if (!existingDocument) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Update the document with the data from req.body
    existingDocument.name = name;
    existingDocument.supplier = supplier;
    existingDocument.than = than;
    existingDocument.meter = meter;
    existingDocument.rate = rate;
    existingDocument.purchaserate = purchaserate

    // Save the updated document
    const updatedDocument = await existingDocument.save();

    res.json(updatedDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





app.get('/relations',async(req,res)=>{
  if (req.query.name) {
    const query = {name: req.query.name }
    const data = await relationModel.find(query);
  res.json(data);
    }else{

    let data = await relationModel.find()
    res.json(data)
  }
})


app.get('/relations/:id',async(req,res)=>{
   
  try {
     console.log(req.params.id);
      const data = await relationModel.find({ _id:req.params.id});
      res.json(data);
    } catch (error) {
      console.error('Mongoose Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    
});



app.post('/relations/relationedit', async (req, res) => {
  const { name, address, phone, relation, id } = req.body;

  try {
    // Find the document by _id
    const existingDocument = await relationModel.findById(id);

    if (!existingDocument) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Update the document with the data from req.body
    existingDocument.name = name;
    existingDocument.address = address;
    existingDocument.phone = phone;
    existingDocument.relation = relation;

    // Save the updated document
    const updatedDocument = await existingDocument.save();

    res.json(updatedDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/stocks/stocksupdate', async (req, res) => {
  const { name, than, meter, stocktype, id ,rate,purchaserate,supplier,client} = req.body;

    const existingDocument = await KapraModel.findById(id);
    let exisitingthan = existingDocument.than
    let exisitingmeter = existingDocument.meter

    if (!existingDocument) {
      return res.status(404).json({ error: 'Document not found' });
    }


    //  Stock Out
    if (stocktype === 'StockOut') {
      let check = exisitingthan - Number(than);
      let subtractmeter = exisitingmeter - Number(meter)
      existingDocument.meter= subtractmeter
      existingDocument.than = check; // Update the 'than' field in the document
      await existingDocument.save(); // Wait for the save operation to complete
      await HistoryModel.create({name,than,meter,rate,purchaserate,stock:stocktype,billno:1,total:meter*rate,relation:'Client',personname:client})
      console.log('Document updated successfully');
      res.json({ message: 'Document updated successfully' });

    }
    
    
    
    // Stock In
    else if(stocktype==='StockIn'){
      let check = exisitingthan + Number(than);
      let addmeter = exisitingmeter + Number(meter)
      existingDocument.meter= addmeter
      
      existingDocument.than = check; // Update the 'than' field in the document
      await existingDocument.save(); // Wait for the save operation to complete
      console.log('Document updated successfully');
      await HistoryModel.create({name,than,meter,rate,purchaserate,stock:stocktype,billno:1,total:meter*rate,relation:'Supplier',personname:supplier})

      res.json({ message: 'Document updated successfully' });
    }


});


app.get('/stocks/history',async(req,res)=>{
  console.log(req.query);
  if (req.query.name) {
    const query = {
      $or: [
        { name: { $regex: new RegExp(req.query.name, 'i') } }, // Case-insensitive match in the "name" property
        { personname: { $regex: new RegExp(req.query.name, 'i') } }, // Case-insensitive match in the "personname" property
        { billno: Number(req.query.name) }, // Case-insensitive match in the "personname" property
      
      ],
    }
    const data = await HistoryModel.find(query);
  res.json(data);
    }else{

    let data = await HistoryModel.find()
    res.json(data)
  }
})
