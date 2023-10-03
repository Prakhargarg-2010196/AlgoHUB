import { createServer, Model } from 'miragejs';
import MOCK_DATA from '~/assets/data'; // JSON MOCK Data for testing purposes
import { mapJsonToModel } from './utils/mirageJSONMapper';
export function makeServer({ environment = 'test' } = {}) {
    let server = createServer({
        environment,

        models: {
            question: Model, // create a model for data
        },

        seeds(server) {
            // create example data using JSON to model mapper created as utility
            mapJsonToModel('question', server, MOCK_DATA);
        },

        routes() {
            this.namespace = 'api'; // declares main name for the api
            this.get('/questions', (schema) => {
                return schema.questions.all(); // return all the data from the  mock api we just created.
            });
        },
    });

    return server;
}
