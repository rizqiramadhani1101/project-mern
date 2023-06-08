const mongoose = require('mongoose');
const {model, Schema } = mongoose;

const productSchema = Schema({
    
    name: {
        type: String,
        minlength: [4, 'Panjang nam makanan minimal  3 karakter'],
        required: [true, 'Nama makanan harus diisi']
    },

    description: {
        type: String,
        maxlength: [1000, 'Panjang Deskripsi maksimal 1000 karakter']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

    tags: {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }
    
},   { timestamps: true});


module.exports = model('Product',productSchema);