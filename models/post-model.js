import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    content: String,
    date: String,
    img: String,
    views: {
        type: Number,
        default: 0
    },
    likes: Number,
    shares: Number,
    view_time: Number,
    comments: Array
})

const Post = mongoose.model('Post', postSchema)

export default Post