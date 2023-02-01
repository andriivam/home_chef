import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useForm } from 'react-hook-form';
export const AddAMenu =() =>{
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    

    const [image,setImage] = useState("")
    const uploadImg = async () =>{
      const formData = new FormData()
      formData.append('files',image)
      formData.append("upload_preset","tjrm7ykt")
      console.log(image)
      await axios.post("https://api.cloudinary.com/v1_1/dvgnrh11e/image/upload",formData,{
        headers: {
          "Content-Type": "application/octet-stream",
        }
        })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
      }
 
    const onSubmit = async(data,image) => {
        // console.log(data);
        console.log(data);

            try {              
                const response = await fetch('http://localhost:4000/inputMenu',{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(data,image)
              })
              console.log(response)
                

            } catch (err) {
              console.error(err.message)
            }
          }
    //   const { reset } = useForm();
    
  return (
    <div>
      <form method='post' id='addAmenuForm' onSubmit={handleSubmit(onSubmit)}>
      <input type='number' placeholder='id'  {...register("id")}></input>
        <input type='text' placeholder='description'  {...register("description")}></input>
        <input type='text' placeholder='name'  {...register("name")}></input>
        <input type="date"  {...register("date")}></input>
        <input type='float' placeholder='price'  {...register("price")}></input>
        <input type='number' placeholder='chefTable_id'  {...register("chefTable_id")}></input>
        <input type='number' placeholder='userOrder_rating'  {...register("userOrder_rating")}></input>
        <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" placeholder='photoUrl'  onChange={(e) =>{
          setImage(e.target.files[0])
        }} ></input>
        <button type='submit'onClick={uploadImg}>Submit</button>
       
      </form>
    </div>
  )
}
// const cloudinaryRef = useRef()
// const widgetRef = useRef()
// useEffect(() =>{
//   cloudinaryRef.current = window.cloudinary
//   console.log(cloudinaryRef.current)
//   widgetRef.current = cloudinaryRef.current.createUploadWidget({ 
//         cloudName: 'dvgnrh11e',
//         uploadPreset:'tjrm7ykt',
//         // api_key: "257484357175916",
//         // api_secret: "bPE4rfj3qApQv13ieuEsnjrLOz4",
//         // secure: true
//       },function (error, result){
//         console.log(result)
//       })
//     // production:
//     //   cloud_name: "dvgnrh11e",
//     //   api_key: "257484357175916",
//     //   api_secret: "bPE4rfj3qApQv13ieuEsnjrLOz4",
//     //   secure: true
 
// },[])