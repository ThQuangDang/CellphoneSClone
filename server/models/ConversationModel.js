const mongoose = require( 'mongoose')

const Schema = mongoose.Schema
const ConversationSchema = new Schema({
    idUser: String,
    nameConversation: String,
    lastMessage: String,
    seen: {type: Boolean, default: false},
}, {
    timestamps: true
});

const ConversationModel = mongoose.model('conversation', ConversationSchema)

module.exports = {
    ConversationModel
}