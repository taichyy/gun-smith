import { NextResponse } from "next/server"

import connect from "@/lib/db"
import Brand from "@/models/Brand"

export const GET = async (request) => {
    try {
      await connect()

        const brands = await Brand.find()

        return new NextResponse(JSON.stringify(brands), {
            status: 200
        })
    } catch (error) {
        return new NextResponse("Error fetching: "+error, {
            status: 500
        })
    }
}