// A utility function to map the json data from mock data (json api) to mirage format
export function mapJsonToModel(modelName, server, MOCK_DATA) {
    return MOCK_DATA.forEach((element) => {
        server.create(modelName, element);
    });
}
