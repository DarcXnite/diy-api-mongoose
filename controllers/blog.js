const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
  try {
    const allBlogs = await db.Blog.find({})

    res.json(allBlogs)
  } catch (err) {
    console.warn(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id

    const foundBlog = await db.Blog.findById(id)

    res.json(foundBlog)
  } catch (err) {
    console.warn(err)
    res.status(500).json({ msg: 'server error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newBlog = await db.Blog.create(req.body)

    res.status(201).json(newBlog)
  } catch (err) {
    console.warn(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const options = { new: true }

    const updatedBlog = await db.Blog.findByIdAndUpdate(id, req.body, options)

    res.json(updatedBlog)
  } catch (err) {
    console.warn(err)
    res.status(500).json({ msg: 'server error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await db.Blog.findByIdAndDelete(id)

    res.sendStatus(204)
  } catch (err) {
    console.warn(err)
    res.status(500).json({ msg: 'server error' })
  }
})

router.post('/:id/comment', async (req, res) => {
  try {
  } catch (err) {
    console.warn(err)
  }
})

module.exports = router
