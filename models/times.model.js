const mongoose = require('mongoose'); 

const timesSchema = new mongoose.Schema({

    year: {type: int, required: true},
    month: {type: int, required: true},
    day: {type: int, required: true},
    time: {type: int, required: true},

})

timesSchema.methods.info = () => {
    console.log(`YEAR -> this.year`);
	console.log(`MONTH -> this.month`);
	console.log(`DAY -> this.day`);
	console.log(`TIME -> this.time`); 
}

const times = mongoose.model('times', timesSchema); 
module.exports = times;
