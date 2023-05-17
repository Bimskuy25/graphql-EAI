const { model, Schema } = require('mongoose');

const recipeSchema = new Schema({
    name: String,
    foodname : String,
    description: String,
    createdAt: String,
});

module.exports = model('Recipe', recipeSchema);
