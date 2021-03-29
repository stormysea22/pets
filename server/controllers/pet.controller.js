const Pet = require("../models/pet.model");

module.exports = {
    index: (req, res) => {
        Pet.find()
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    create: (req, res) => {
        Pet.create(req.body)
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({ errors: err.errors }))
    },

    show: (req, res) => {
        Pet.find({ _id:req.params.id })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    update: (req, res) => {
        Pet.updateOne({ _id: req.params.id }, req.body, { runValidators: true, context: 'query' })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    likePet: async (req, res) => {
        Pet.updateOne({ _id: req.params.id }, { $inc: { likes: 1 } })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    destroy: (req, res) => {
        Pet.deleteOne({ _id: req.params.id }, (err, a) => {
            try {
                Pet.find({}, (err, data) => {
                    try {
                        res.json({ results: data })
                    } catch (err) {
                        res.status(404).json({ errors: err.errors })
                    }
                })
            } catch(err) {
                res.status(404).json({ errors: err.errors })
            }
        })
    }
}