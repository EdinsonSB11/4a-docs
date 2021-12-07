const compraResolver = {
    Query: {
        compraByUsername: async(_, {username}, {dataSources})=>{
            return await dataSources.comprasAPI.compraByUsername(username);
        },

        compraById: async(_, {id}, {dataSources})=>{
            return await dataSources.comprasAPI.compraById(id);
        }
    },
    Mutation: {
        createCompra: async (_, {compra}, {dataSources}) => {
            const compraInput = {
                username:compra.username,
                id_user:compra.id_user,
                id_orden:compra.id_orden,
            }
            return await dataSources.comprasAPI.createCompra(compraInput);
        }
    }
}

module.exports = compraResolver;