const {RESTDataSource} = require('apollo-datasource-rest')

const serverConfig = require('../server')

class AuthAPI extends RESTDataSource{

    
    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }
    
    async createUser(user) {
        ///user = new Object(JSON.parse(JSON.stringify(user)))//
        return await this.post('/user/',user);
    }

    async getUser(userId) {
        return await this.get(`/user/${userId}`);
    }

    async updateUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        let userId = user.id
        return await this.put(`/user/${userId}`, user);
    }

    async deleteUser(userId) {
        return await this.delete(`/user/${userId}`);
    }

    async authRequest(credentials) {
        credentials = new Object(credentials);
        return await this.post('/login/', credentials);
    }

    async refreshToken(token) {
        token = new Object( token );
        return await this.post('/refresh/', token);
    }

    async createProducto(producto){
        return await this.post('/producto/', producto);
    }

    async updateProducto(producto) {
        user = new Object(JSON.parse(JSON.stringify(producto)));
        let productId = producto.id
        return await this.put(`/producto/${productId}`, producto);
    }

    async deleteProducto(productId) {
        return await this.delete(`/producto/${productId}`);
    }

    async productoByName(productName){
        return await this.get(`/producto/${productName}`);
    }

}

module.exports = AuthAPI;