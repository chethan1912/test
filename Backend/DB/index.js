const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://chethanvaddamani:Ja96WBP1n3BvUixf@cluster0.4dergje.mongodb.net/todos');


const TasksSchema=new mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean
})

const tasks = mongoose.model('tasks',TasksSchema);

module.exports={
    tasks
}