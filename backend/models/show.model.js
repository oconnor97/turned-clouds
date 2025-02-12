import mongoose from 'mongoose';

const showSchema = new mongoose.Schema(
    {
        date: {
            type: 'string',
            required: true
        },
        venue: {
            type: 'string',
            required: true
        },
        setOne: {
            type: 'string',
            required: true
        },
        setTwo: {
            type: 'string',
            required: true
        },
        encore: {
            type: 'string',
            required: true
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);

const Show = mongoose.model('Show', showSchema);
//mongoose will create the plural so you pass it 'Show' and it will create 'shows'. you are also telling mongoose which schema to use

export default Show;