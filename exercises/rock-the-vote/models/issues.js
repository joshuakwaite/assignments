var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    comments: [String]

})


module.exports = mongoose.model("Issue", issueSchema);

// {
//     title: "Gun Control is Killing America",
//         description: "Federal legislation blocking a rule designed to keep guns away from people with mental disabilities is headed to President Donald Trump's desk.",
//     votes: 15,
//     id: "123123",
//     comments: [
//     "This guy sucks",
//     "I love Trump!",
// ]
// },
//
// {
//     title: "Homeland Security is Important",
//         description: "Immigration and Customs Enforcement agents have been conducting what Department of Homeland Security officials describe as a “targeted enforcement surge” and arresting undocumented immigrants for the past week.",
//     votes: 16,
//     id: "12312333",
//     comments: [
//     "This guy sucks",
//     "Go Patriots!",
// ]
// }