const { Router } = require('express');
const router = Router();

const Books = require('../models/Books');

router.get('/', async (req, res) => {
    const books = await Books.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const {title, author, isbn} = req.body;
    const newBook = new Books(title, author, isbn);
    await newBook.save();
    res.send({message: "Book Saved"});
});

router.delete('/:id', async (req, res) => {
    await Books.findByIdAndDelete(req.params.id);
    res.json({message: 'Book deleted'});
});

module.exports = router;