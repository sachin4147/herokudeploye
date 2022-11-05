import { navbar } from "./components/navbar.js";


import {append} from './scripts/append.js';




let load_div=document.getElementById("navbar");
load_div.innerHTML=navbar();

let post_div=document.getElementById("post");

const getdata=async(clicked_button,limit)=>{


    


    const  response=await fetch(`http://localhost:3000/posts`)

    let data=await response.json();
    //console.log(data)
   // append(data,post_div)
    createbutton(data.length,2)
}

const getpeginatedata=async(clicked_button,limit)=>{


    //let post_div=document.getElementById("post");


    const  response=await fetch(`http://localhost:3000/posts?page=${clicked_button}&_limit=${limit}`)

    let data=await response.json();
    append(data,post_div)
} 
getdata()
getpeginatedata(1,2)

let button_div=document.getElementById("buttons");

const createbutton=(total_images,images_perpage)=>{


const button=Math.ceil(total_images/images_perpage)

for(let i=1;i<=button;i++){
    let btn=document.createElement("button");
    btn.id=i;


    btn.innerText=i;

    btn.onclick=()=>{
        getpeginatedata(i,2)
      
    }
    button_div.append(btn);
}

}
