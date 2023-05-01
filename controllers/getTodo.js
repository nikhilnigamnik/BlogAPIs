const Todo = require("../models/Todo");


exports.getTodo = async(req, res) => {
    try {

        // fetch all todo items from db
        const todos = await Todo.find({});
        // response

        res.status(200).json({
            success: true,
            data:todos,
            message:"Entire Todo db is fetched"
        })
        
    } catch (err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            error:err.message,
        });
        
        
    }
}


exports.getTodoById = async (req, res) => {
    try {

        // extract items by id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        // if data for given id not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"Data not found",
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data fetcheddd`
        })
        
    } catch (err) {

        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            error:err.message,
        });
        
    }

        
        
   
}