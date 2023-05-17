const Recipe = require('../models/Recipe');

module.exports = {
    Query: {
        async recipe(_, { ID }) {
            return await Recipe.findById(ID);
        },
        async getRecipes(_, { amount }) {
            return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
        }
    },
    Mutation: {
        async createRecipe(_, { recipeInput: { name, description, foodname } }) {
            const createdRecipe = new Recipe({
                name: name,
                description: description,
                foodname : foodname,
                createdAt: new Date().toISOString(),
            });

            const res = await createdRecipe.save();
            
            return {
                id: res._id,
                ...res._doc
            }
        },
        async deleteRecipe(_, { ID }) {
            const wasDeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount;
            return wasDeleted;
        },
        async editRecipe(_, { ID, recipeInput: { name, description } }) {
            const wasUpdated = (await Recipe.updateOne({ _id: ID }, { name: name, description: description })).modifiedCount;
            return wasUpdated;
        }
    }
}

