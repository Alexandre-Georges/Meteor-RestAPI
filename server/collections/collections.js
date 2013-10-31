Simple = new Meteor.Collection("simple");

if (Simple.find().count() == 0) {
    Simple.insert({ attribute: 'AAAAAAAAAAAA' });
}

Token = new Meteor.Collection("token");

if (Token.find().count() == 0) {
    Token.insert({ attribute: 'BBBBBBBBBBBB' });
}
