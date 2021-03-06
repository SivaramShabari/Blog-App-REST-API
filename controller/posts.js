import Post from '../models/post-model.js'

export const getPosts = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }


}

export const createPost = async (req, res) => {
    const post1 = req.body;
    const newPost = new Post(post1);
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePost = (req, res) => {
    Post.remove({ _id: req.params.id }).
        then(re => res.json({ _Id: req.params.id, re }))
        .catch(err => res.status(409).json({ message: err.message }))


}

export const updatePost = async (req, res) => {
    Post.findById({ _id: req.params.id })
        .updateOne(req.body)
        .then(re => res.json({ _Id: req.params.id, re }))
        .catch(err => res.status(409).json({ message: err.message }))

    // try {
    //     await res.status(201).json({ req: req.body })
    // } catch (error) {
    //     res.status(409).json({ error_message: error.message })
    // }
}
