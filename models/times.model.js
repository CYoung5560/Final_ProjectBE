const mongoose = require('mongoose'); 

const timesSchema = new mongoose.Schema({

    year: {type: int, required: true},
    month: {type: int, required: true},
    day: {type: int, required: true},
    hour: {type: int, required: true},
    minute: {type: int, required: true},

})

timesSchema.methods.info = () => {
    console.log(`YEAR -> this.year`);
	console.log(`MONTH -> this.month`);
	console.log(`DAY -> this.day`);
	console.log(`HOUR -> this.hour`);
	console.log(`MIN -> this.minute`); 
}

const times = mongoose.model('times', schema); 
module.export = times;