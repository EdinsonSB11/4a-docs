const productoResolver = {
    Query: {
        productoByName: async (_,{name},{dataSources, userIdToken})=>{
            nameToken = (await dataSources.authAPI.getUser(userIdToken)).name
            if(name == nameToken)
                return dataSources.authAPI.productoByName(name)
            else
                return null;
        }
    },
    Mutation: {
        createProducto: async (_, {producto}, {dataSources}) => {
            const productInput = {
                name:producto.name,
                price:producto.price,
                description:producto.description,
                category:producto.category,
                stock:producto.stock,
            }
            return await dataSources.authAPI.createProducto(productInput);
        }
    }
}

module.exports = productoResolver;