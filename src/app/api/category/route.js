import {createCategory, getAllCategory, getCategoryById} from "../../../../lib/prisma/category-prisma";
import {NextResponse} from "next/server";

// get all categories
export const GET = async () => {
    const payload = await getAllCategory();
    return NextResponse.json({
        status: 200,
        message: "Categories fetched successfully",
        payload
    });
};

// create a new category
export const POST = async (req) => {
    const body = await req.json();
    const payload = await createCategory(body);
    return NextResponse.json(
        {
            status: 201,
            message: "Category created successfully",
            payload
        },
    );
};





