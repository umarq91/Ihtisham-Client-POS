const KapraModel = require('../database/KapraModel.js')
const relationModel = require('../database/relationModel.js');
const HistoryModel = require('../database/HistoryModel.js')

const kapreEntry = async (req, res) => {
  const { name,  rate, than, meter, supplier,purchaserate } = req.body;

  const kapraEntry = await KapraModel.create({
    name,
    rate,
    than,
    meter,
    supplier,purchaserate
  });


  await HistoryModel.create({name,than,meter,rate,purchaserate,stock:'StockIn',billno:1,total:meter*rate,relation:'Supplier',personname:supplier})
  
  res.json(kapraEntry);
};

    const relationEntry = async (req, res) => {
      const { name, address, phone, relation } = req.body;

      const done = await relationModel.create({
        name,
        address,
        phone,
        relation,
      });

      res.json(done);
    };
    
    const HistoryEntry = async(req,res)=>{
        const {name,than,meter,rate,total,billno,relation,personname} = req.body

        try {
            const checkIfExisist = await KapraModel.find({ name });

            if (checkIfExisist.length === 0) {
              return res.status(404).json("This kapra doesn't exist");
            }
            const entry =await HistoryModel.create({
                name,than,meter,rate,total,billno,stock,relation,personname
            })
            res.json(entry)
        } catch (error) {
            console.log(error);
        }
       
    }



    const getAllproducts= async(req,res)=>{
      if (req.query.name) {
        const query = {
          $or: [
            { name: req.query.name }, // Check for a match in the "NAME" property
            { supplier: req.query.name }, // Check for a match in the "SUPPLIER" property
          ],
        }
        const data = await KapraModel.find(query);
      res.json(data);
        }else{

        let data = await KapraModel.find()
        res.json(data)
      }
    }
    
    
module.exports={kapreEntry,relationEntry,HistoryEntry,getAllproducts}