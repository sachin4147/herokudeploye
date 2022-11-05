import { navbar } from "./components/navbar.js";

let load_div=document.getElementById("navbar");
load_div.innerHTML=navbar();



let create_btn=document.getElementById("create_btn");
create_btn.onclick=()=>{
//08c83f6623655da350b173991a55af96

    CreatePost()
}
let delete_btn=document.getElementById('delete_btn');
delete_btn.onclick=()=>{
    deletepost();
}
let update_btn=document.getElementById('update_btn');
update_btn.onclick=()=>{
    Updatepost();
}


let inp_image=document.getElementById("image");
inp_image.onchange=()=>{
    ImageHandle()
}

 

let image_url;
const  ImageHandle=async()=>{


    let img=document.getElementById("image");


    let actual_img=img.files[0]
    //console.log(actual_img)

let form=new FormData();

form.append('image',actual_img)

let res= await fetch(`https://api.imgbb.com/1/upload?key=08c83f6623655da350b173991a55af96`,{
method:'POST',
body:form,
});
let data=await res.json()

image_url=data.data.display_url;
console.log(image_url)

}

const CreatePost=async()=>{

    let uniqueId=document.getElementById("id").value;
    let captionForImage=document.getElementById("caption").value;
//     let send_this_data={
//         id: id,
//         caption: caption,
//         image_url: image_url
    
//     }
// console.log(send_this_data)

    // let res=await fetch('http://localhost:3000/posts',{
    //     method:"POST",
    //     body:JSON.stringify(send_this_data),
    
    //     headers:{
    //         'Content-Type':'applicaton/json'
    //     }
    // })
    // let data=await res.json();
    // console.log(data)

    let sendData = {
        id : uniqueId,
        caption: captionForImage,
        image_url: image_url
    }

    let response = await fetch ("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
            "Content-Type" :"application/json"
        }
    })
    let data = await response.json();
    console.log(data)
}


const deletepost=async()=>{


    let delete_id=document.getElementById("delete_id").value;


    const res=await fetch(`http://localhost:3000/posts/${delete_id}`,{

    method:"DELETE",
    headers:{
        'Content-Type': 'application/json'
    },
   

    })
    let data=await res.json()
}
const  Updatepost=async()=>{
try{
    let update_id=document.getElementById("update_id").value;
    let update_caption=document.getElementById("update_caption").value;

    let senddata={
        caption:update_caption,
    }

    const res=await fetch(`http://localhost:3000/posts/${update_id}`,{

    method:"PATCH",
    body:JSON.stringify(senddata),
    headers:{
        'Content-Type': 'application/json'
    },
   

    })
    let data=await res.json()
}
catch(error){}
}

