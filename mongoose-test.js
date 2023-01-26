const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:Shivaji.94@cluster0.i0dpk.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));