const {default: prisma} = require("./prisma");

// get All category from the database
export const getAllCategory = async () => {
    const payload = prisma.categories.findMany();
    return payload;     // return prisma.categories.findMany();
};

// Create a new category in the database
export const createCategory = async (categoryData) => {
    console.log("data", categoryData)
    String(categoryData[`category_name`]);
    const payload = prisma.categories.createMany({
        data: categoryData
    });
    return payload;
};

//get category by id or name from the database
export const getCategoryById = async (id) => {
    return prisma.categories.findUnique({
        where: {
            category_id: parseInt(id)
        }
    });
};

// //update category by id in the database
export const updateCategory = async (id) => {
    return prisma.categories.update({
        where: {
            category_id: parseInt(id)
        },
        data: {
            category_name: "Updated Category"
        }
    });
};

