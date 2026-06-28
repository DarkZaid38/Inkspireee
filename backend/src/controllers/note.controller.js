const noteModel = require("../models/note.model");

async function createNote(req,res){
    try{
        const {title,content,category,color,favorite,pinned} = req.body;
        const userId = req.user._id;
        const newNote = await noteModel.create({
            userId,
            title,
            content,
            category,
            color,
            favorite,
            pinned
        });
        res.status(201).json({message:"Note Created Successfully",note:newNote});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


async function getNotes(req,res){
    try{
        const notes = await noteModel.find(
            {user:req.user.id}
        ).sort({pinned:-1,createdAt:-1})
    
    res.json(notes)
    
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

async function updateNote(req,res){
    try{
        const note = await noteModel.findByIdAndUpdate({
            _id:req.params.id,
            user:req.user.id
        },
        req.body,
        {
            new:true
        })
    }catch(err){
        res.status(500).json({message:err.message})
    }
}


async function deleteNote(req,res){
    try{
        await noteModel.findByIdAndDelete({
            _id:req.params.id,
            user:req.user.id
        });
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {createNote,getNotes,updateNote,deleteNote}