const blog={
    id:1,
    title:'CLEAN BLOG',
    description:'CLEAN BLOG PROJECT STARTED :D'
};
const express=require('express');
const path=require('path');
const ejs=require('ejs');
app.set("view engine","ejs");
app.use(express.static('public'));

const app=express();
const port=3000;
app.get('/',(req,res)=>{
   res.render(index);

});
app.get('/about',(req,res)=>{
    res.set("about");
 });
 app.get('/add',(req,res)=>{
    res.set('add');
 
 });
 app.get('/post',(req,res)=>{
    res.set('add');
 
 });
app.listen(port,()=>{
    console.log(`<h1>${blog.title}</h1>`);
    console.log(`<p>${blog.description}</p>`);
})