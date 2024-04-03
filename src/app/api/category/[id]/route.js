import {NextResponse} from "next/server";
import {getCategoryById, updateCategory} from "../../../../../lib/prisma/category-prisma";

// get category by id or name
export const GET = async (req, {params: {id}}) => {
    const payload = await getCategoryById(id);
    return NextResponse.json({
        status: 200,
        message: "Category fetched successfully",
        payload
    });
};

// update category by id
export const PUT = async (req, {params: {id}}) => {
    const body = await req.json();
    const payload = await updateCategory(id, body);
    return NextResponse.json(
        {
            status: 200,
            message: "Category updated successfully",
            payload
        }
    );
};
