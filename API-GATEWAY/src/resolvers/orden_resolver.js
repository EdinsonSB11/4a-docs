const ordenResolver = {
    Query: {
        ordenByUsername: async(_, {username}, {dataSources})=>{
            return await dataSources.comprasAPI.ordenByUsername(username);
        },

        ordenById: async(_, {id}, {dataSources})=>{
            return await dataSources.comprasAPI.ordenById(id);
        }
    },
    Mutation: {
        createOrden: async (_, {orden}, {dataSources}) => {
            const ordenInput = {
                username:orden.username,
                product_id:orden.product_id,
                product_quantity:orden.product_quantity,
                subtotal:orden.subtotal,
            }
            return await dataSources.comprasAPI.createOrden(ordenInput);
        }
    }
}

module.exports = ordenResolver;