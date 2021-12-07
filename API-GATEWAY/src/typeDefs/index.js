const productoTypeDefs = require('./producto_type_defs');
const authTypeDefs = require('./auth_type_defs');
const compraTypeDefs = require('./compra_type_defs');
const ordenTypeDefs = require ('./orden_type_defs');

const schemaArrays = [productoTypeDefs, authTypeDefs, compraTypeDefs, ordenTypeDefs];

module.exports = schemaArrays;