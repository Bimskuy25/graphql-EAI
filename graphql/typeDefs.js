const { gql } = require('apollo-server');

module.exports = gql`
    type Recipe {
        name: String
        description: String
        foodname : String
        createdAt: String
    }
        
    input RecipeInput {
        name: String
        foodname : String
        description: String
        
    }
        
    type Query {
        recipe(ID: ID!): Recipe!
        getRecipes(amount: Int): [Recipe]
        }
    type Mutation {
        createRecipe(recipeInput: RecipeInput): Recipe!
        deleteRecipe(ID: ID!): Boolean
        editRecipe(ID: ID!, recipeInput: RecipeInput) : Boolean!
    }
`;