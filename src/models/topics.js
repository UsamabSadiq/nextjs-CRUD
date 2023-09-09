import mongoose from "mongoose"

const topicSchema = new mongoose.Schema({

    title: String,
    description: String

}, { timestamps: true }
)

const TopicModel = mongoose.model('topic', topicSchema)

export { TopicModel }

// module.exports =
//     mongoose.models.TopicModel || mongoose.model('Topic', topicSchema);

