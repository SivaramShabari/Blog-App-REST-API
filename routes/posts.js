import express from 'express'
const router = express.Router()

import { getPosts, createPost, deletePost, updatePost } from '../controller/posts.js'
router.get('/', getPosts)
router.post('/', createPost)
router.delete('/delete/:id', deletePost);
router.put('/update/:id', updatePost)


export default router