const usersResolver = require('./auth_resolver');
const productoResolver = require('./producto_resolver');
const compraResolver = require('./compra_resolver');
const ordenResolver = require('./orden_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(usersResolver, productoResolver, compraResolver, ordenResolver);

module.exports = resolvers;
