require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tf = require('@tensorflow/tfjs-node');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fcnmart', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Schema Produk
const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    imageUrl: String,
});
const Product = mongoose.model('Product', ProductSchema);

// Schema User
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});
const User = mongoose.model('User', UserSchema);

// Fungsi AI untuk Rekomendasi
function generateRecommendations(userHistory, allProducts) {
    if (userHistory.length === 0) return allProducts.slice(0, 5); // Jika tidak ada riwayat, tampilkan produk populer

    const categoryCounts = {};
    userHistory.forEach((product) => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    });

    const favoriteCategory = Object.keys(categoryCounts).reduce((a, b) =>
        categoryCounts[a] > categoryCounts[b] ? a : b
    );

    const recommendedProducts = allProducts.filter((product) => product.category === favoriteCategory);
    return recommendedProducts.slice(0, 5);
}

// Endpoint rekomendasi produk
app.get('/recommendations/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('purchaseHistory');
        if (!user) return res.status(404).json({ message: 'User not found' });

        const allProducts = await Product.find({});
        const recommendations = generateRecommendations(user.purchaseHistory, allProducts);

        res.json({ recommendations });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
