export async function POST(request: Request) {
    return Response.json({
        statusCode: 201,
        message: "Success Register"
    },{
        status: 201
    })
}
