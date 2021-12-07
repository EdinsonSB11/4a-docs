const {RESTDataSource} = require('apollo-datasource-rest')

const serverConfig = require('../server')

class ComprasAPI extends RESTDataSource{

    constructor() {
        super();
        this.baseURL = serverConfig.compras_api_url;
    }

    async createOrden(orden){
        return await this.post('/ordenes/', orden);
    }

    async ordenByUsername(username){
        return await this.get(`/ordenesbyusername/${username}`);
    }

    async ordenById(ordenId){
        return await this.get(`/ordenesbyid/${ordenId}`);
    }

    async createCompra(compra){
        return await this.post('/compras/', compra);
    }

    async compraByUsername(username){
        return await this.get(`/comprasbyusername/${username}`);
    }

    async compraById(id){
        return await this.get(`/comprasbyid/${id}`);
    }
}

module.exports = ComprasAPI;