import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres","postgres","postgres",{
    host: "localhost",
    dialect:"postgres",
});

export const connection =()=>{
    try{
        sequelize.sync();
        console.log("database connected sucessfully");
    } catch (e){
        console.log(e);
    }
};