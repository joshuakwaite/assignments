var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var applicationSchema = new Schema ({

    date: {
        type: Date,
        default: Date.now
    },
    companyName: {
        type: String,
        required: true
    },
    contactName: String,
    position: String,
    statedPay: Schema.Types.Mixed,
    website: Schema.Types.Mixed,
    notes: String,
    applicationUsed: Schema.Types.Mixed,
    isArchived: {
        type: Boolean,
        default: false
    },
    contactEmail: String,
    contactPhone: Schema.Types.Mixed,
    lastFollowUp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Application", applicationSchema)