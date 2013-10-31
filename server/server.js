Meteor.startup(function () {
    collectionApi = new CollectionAPI({
        authToken: undefined,
        apiPath: 'collections',
        standAlone: false,
        sslEnabled: false,
        listenPort: 3005,
        listenHost: undefined,
        privateKeyFile: 'privatekey.pem',
        certificateFile: 'certificate.pem'
    });

    collectionApi.addCollection(Simple, 'simple', {
        authToken: undefined,
        methods: ['POST','GET','PUT','DELETE'],
        before: {
            POST: undefined,
            GET: undefined,
            PUT: undefined,
            DELETE: undefined
        }
    });

    collectionApi.addCollection(Token, 'token', {
        authToken: "qwertyuiop",
        methods: ['POST','GET','PUT','DELETE'],
        before: {
            POST: undefined,
            GET: function(optionalID, objects) {
                console.log('GET ' + optionalID + ' ' + JSON.stringify(objects));
                return true;
            },
            PUT: undefined,
            DELETE: undefined
        }
    });

    // Starts the API server
    collectionApi.start();
});