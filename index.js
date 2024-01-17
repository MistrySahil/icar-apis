const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json');
const express = require('express')
const app = express()
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(3000, () => console.log('server is up now on 3000 for icar swagger docs'));