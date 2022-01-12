const fs = require('fs');
const path = require('path');
const fastifyStatic = require('fastify-static');
const fastify = require('fastify')({logger: false});
const bufferIndexHtml = fs.readFileSync('404.html')

/**
 * If the user tries to load
 * a page that doesnt exist, send the 404 page.
 */
fastify.setNotFoundHandler((req,reply) => reply.type('text/html').send(bufferIndexHtml))

/**
 * Serving our root directory (the main web files.)
 */
fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
    prefix: '/',
});

(async () => {
    try {
        /**
         * Listening on port 3001
         */
        await fastify.listen(3001)
        console.log("Successfully listening on port 3001")

    }

    /**
     * Catching errors then exiting
     * if there are any errors.
     */
    catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
})();