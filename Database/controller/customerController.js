import { Customers } from "../model/customerModel.js";

export const getAll = async (req, res) => {
  try {
    const customers = await Customers.findAll();
    res.status(200).json({
      data: customers,
      message: "Data fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const customer = await Customers.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getById = async (req,res) =>{
    try{
        const {id = null} = req.params;

        const user = await Customers.findOne({where:{id}})

        if (!user){
            return res.status (500).send({message:"User not found"});
        }

        res.status(200).send({data: user, message:"Fetched Successfully"});

    } catch (e){
        res.status(500).send({message: e.message})  //gets id , id means params
    }
}
export const updateById = async (req,res) =>{
    try{
      const body = req.body;
        const {id = null} = req.params;

        const oldUser = await Customers.findOne({where:{id}})

        if (!oldUser){
            return res.status (500).send({message:"User not found"});
        }
        oldUser.costumerName = body.name;
        oldUser.costumerAddress = body.address;
    }
    catch (e){
        res.status(500).send({message: e.message})
    }
  }