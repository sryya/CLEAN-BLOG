const blog={
    id:1,
    title:'CLEAN BLOG',
    description:'CLEAN BLOG PROJECT STARTED :D'
};
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
   res.send(blog);
});
app.listen(port,()=>{
    console.log(`<h1>${blog.title}</h1>`);
    console.log(`<p>${blog.description}</p>`);
})