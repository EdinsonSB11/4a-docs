const { gql } = require('apollo-server');

const productoTypeDefs = gql `
    type Producto {
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }

    type ProductoDetail {
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }

    input ProductoInput {
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }

    input productoUpdate {
        name: String!
        price: Int!
        description: String!
        category: Int!
        stock: Boolean!
    }


    extend type Mutation {
        createProducto(producto: ProductoInput!): Producto
        updateProducto(Producto: productoUpdate!): ProductoDetail!
        deleteProducto(ProdcutId: Int!): String!
    }

    type Query {
        productoByName(prodcutName: String!): ProductoDetail!
    }
`;

module.exports = productoTypeDefs;