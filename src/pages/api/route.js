// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import connectMongoDb from "@/db"
import TopicModel from "@/models/topics"
import { NextResponse } from "next/server"

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getAllProducts(req, res)
            break;

        case "POST":
            await newTopic(req, res)

    }
}

const newTopic = async function (req, res) {

    const { title, description } = req.body
    // console.log('body-request', name, price, image, description);
    if (!title || !description) {
        res.status(422).json({ error: 'Plz Add All Fields!!' })
    }
    const newTopic = await new TopicModel({
        title, description
    }).save()
    console.log('New Topic Created', newTopic);
    res.status(200).json(newTopic)

}


// export const POST = async (req) => {
//     try {
//         await connectMongoDb()

//         const { title, description } = req.body
//         console.log(title, description);
//         // await TopicModel.create({ title, description })
//         // await TopicModel.save(data)

//         return NextResponse.json({ message: 'TOpic Created' }, { status: 201 })

//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ message: 'Error in Topic Creation' }, { status: 400 })

//     }
// }
