const router = require('express').Router();
let Review = require('../../models/review.model');

//GET - returns all reviews
router.get('/', (req, res) => {
    Review.find()
        .then(review => res.json(review))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//POST - add new review
router.post('/add', (req, res) => {
    const newReview = new Review({
        title: req.body.title,
        content: req.body.content,
        authorName: req.body.authorName
    });

    newReview.save()
        .then(() => res.json('Review added!'))
        .then(console.log('Review added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//GET - return review by ID
router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//PUT - update review by ID
router.put('/update/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => {
            review.title = req.body.title;
            review.content = req.body.content;
            review.authorName = req.body.authorName;

            review 
                .save()
                .then(() => res.json('Review updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//DELETE - delete review by ID
router.delete('/:id', (req, res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(() => res.json("Review deleted!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

module.exports = router;