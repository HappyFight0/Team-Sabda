const fs = require('fs');

const express = require('express');

const app = express();
const port = 8000;              //setting up server
const hostname ='localhost';    //setting up server

let stories = fs.readFileSync('./stories.json');  //reading json file of stories
stories = JSON.parse(stories);                    

let recipes=fs.readFileSync('./recipes.json')     //reading json file of recipes
recipes = JSON.parse(recipes);

app.get("/" , (req , res) =>{
    res.send("invalid endpoint");                 //homepage
});

app.get("/stories" , (req , res) => {             //stories list
    res.send(stories.stories);                    //list all the stories from json file
});

app.get("/stories/:storyID" , (req , res) => {                                 //open single story coresponding to id  
    res.send(stories.stories.filter(story => story.id == req.params.storyID));
});

app.get('/recipes' , (req,res) => {             //recipes home page
    res.send(recipes.recipes);                  
})

app.get('/recipes/:recipeID' , (req,res) =>{                                     //open single recipe coressponding to id
    res.send(recipes.recipes.filter(recipe => recipe.id == req.params.recipeID));
})

app.listen(port,() =>{                          //host server  
    console.log(`app is running on http://${hostname}:${port}/`);
});
