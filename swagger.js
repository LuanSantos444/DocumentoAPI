// importa a biblioteca do swagger-jsdoc
// Ela serve para ler os comentarios do tipo @swagger no seu codigo
import swaggerJSDoc from "swagger-jsdoc";

// Criar um objeto que guarda as informações principais da API
const options = {
    // "definition" é onde definimos as informações principais da API
    definition : {

        openapi: "3.0.0",

        info: {
            title: "API em node.js com Express",

            version: "1.0.0",

            description:"Documentação da API com Swagger"
        },

        servers: [
            {
                url:"http://localhost:3000"
            }
        ]
    },
    //
    apis: ["./server.js", "./routes/usuario.route.js"]
};

// Aqui o swagger-jsdoc le as configurações do objeto "options"
// e gera a documentação da API 
const swaggerSpec = swaggerJSDoc(options);

// Exporta a documentação pronta
// para que ela possa ser usada em outro arquivo, como no server.js
export default swaggerSpec;
