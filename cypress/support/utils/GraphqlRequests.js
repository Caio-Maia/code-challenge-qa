export class GraphQLRequests {

    static deleteTempComposerJwt() {
        return cy.request({
            method: 'POST',
            url: 'https://api.moises.ai/graphql',
            body: {
                query: "\n mutation {\n deleteTempComposerJwt\n }\n "
            }
            });
    }
}