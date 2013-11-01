Meteor.http.get("http://localhost:3000/collections/simple", {}, function (error, result) {
    if (error) {
        console.log("get http://localhost:3000/collections/simple error : " + JSON.stringify(error));
    }
    if (result) {
        console.log("get http://localhost:3000/collections/simple result : " + JSON.stringify(result));

        Meteor.http.post("http://localhost:3000/collections/simple", { data: { attribute: "youpi" } }, function (error, result) {
            if (error) {
                console.log("post http://localhost:3000/collections/simple error : " + JSON.stringify(error));
            }
            if (result) {
                console.log("post http://localhost:3000/collections/simple result : " + JSON.stringify(result));

                var createdId = result.data._id;

                Meteor.http.get("http://localhost:3000/collections/simple", {}, function (error, result) {
                    if (error) {
                        console.log("get http://localhost:3000/collections/simple error : " + JSON.stringify(error));
                    }
                    if (result) {
                        console.log("get http://localhost:3000/collections/simple result : " + JSON.stringify(result));

                        Meteor.http.put("http://localhost:3000/collections/simple/" + createdId, { data: { attribute: "edited" } }, function (error, result) {
                            if (error) {
                                console.log("put http://localhost:3000/collections/simple error : " + JSON.stringify(error));
                            }
                            if (result) {
                                console.log("put http://localhost:3000/collections/simple result : " + JSON.stringify(result));

                                Meteor.http.get("http://localhost:3000/collections/simple", {}, function (error, result) {
                                    if (error) {
                                        console.log("get http://localhost:3000/collections/simple error : " + JSON.stringify(error));
                                    }
                                    if (result) {
                                        console.log("get http://localhost:3000/collections/simple result : " + JSON.stringify(result));

                                        Meteor.http.del("http://localhost:3000/collections/simple/" + createdId, { }, function (error, result) {
                                            if (error) {
                                                console.log("del http://localhost:3000/collections/simple error : " + JSON.stringify(error));
                                            }
                                            if (result) {
                                                console.log("del http://localhost:3000/collections/simple result : " + JSON.stringify(result));

                                                Meteor.http.get("http://localhost:3000/collections/simple", {}, function (error, result) {
                                                    if (error) {
                                                        console.log("get http://localhost:3000/collections/simple error : " + JSON.stringify(error));
                                                    }
                                                    if (result) {
                                                        console.log("get http://localhost:3000/collections/simple result : " + JSON.stringify(result));
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

Meteor.http.get("http://localhost:3000/collections/token", { headers: { "X-Auth-Token": "qwertyuiop" } }, function (error, result) {
    if (error) {
        console.log("get http://localhost:3000/collections/token error : " + JSON.stringify(error));
    }
    if (result) {
        console.log("get http://localhost:3000/collections/token result : " + JSON.stringify(result));
    }
});