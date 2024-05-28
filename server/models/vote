const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true
    },
    votedAt: {
        type: Date,
        default: Date.now,
    }
});

const Vote = mongoose.model('Vote', voteSchema);
