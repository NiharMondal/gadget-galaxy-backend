import { prisma } from "../../../db/db";

const getProductField = async()=>{
    const brand = await prisma.product.groupBy({
        by: ["brandId"], 
    });
    const processor_type = await prisma.product.groupBy({
        by: ["processor_type"], 
    });
    const processor_model = await prisma.product.groupBy({
        by: ["processor_model"], 
    });
    const generation = await prisma.product.groupBy({
        by: ["generation"], 
    });
    const display_size = await prisma.product.groupBy({
        by: ["display_size"], 
    });
    const display_type = await prisma.product.groupBy({
        by: ["display_type"], 
    });
    const ram_size = await prisma.product.groupBy({
        by: ["ram"], 
    });
    const ram_type = await prisma.product.groupBy({
        by: ["ram_type"], 
    });
    
    const hdd = await prisma.product.groupBy({
        by: ["hdd"], 
    });
    
    const ssd = await prisma.product.groupBy({
        by: ["ssd"], 
    });
    
    const graphics = await prisma.product.groupBy({
        by: ["graphics"], 
    });
    const operating_system = await prisma.product.groupBy({
        by: ["operating_system"], 
    });
    
    return {Brand: brand, Processor_Type: processor_type, Processor_Model: processor_model, Generation: generation, Display_Size: display_size, Display_Type: display_type, Ram_Size: ram_size, Ram_Type: ram_type, HDD:hdd, SSD: ssd, Graphics: graphics, Operating_System: operating_system};
};

const minMaxPrice = async()=>{
    const value = await prisma.product.aggregate({
        _min:{
            price:true,
        },
        _max: {
            price:true
        }
    });

    return value;
}

export const fieldSerces = {getProductField, minMaxPrice}