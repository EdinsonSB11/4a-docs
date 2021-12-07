const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }
    
    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input Refresh {
        refresh:String!
    }

    input SignUpInput {
        username: String!
        password: String!
        name: String!
        lastname: String!
        role: Int!
        email: String!
    }

    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        role: Int!
        email: String!
    }

    input userUpdate {
        username: String!
        password: String!
        name: String!
        lastname: String!
        role: Int!
        email: String!
    }

    type Mutation {
        signUpUser(userInput: SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(token: Refresh!): Access!
        updateUser(user: userUpdate!): UserDetail!
        deleteUser(userId: Int!): String!
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;

module.exports = authTypeDefs;