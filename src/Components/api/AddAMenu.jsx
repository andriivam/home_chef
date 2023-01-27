import React from 'react'
import { useForm } from 'react-hook-form';
export const AddAMenu =() =>{
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    const onSubmit = async(data) => {
        console.log(data);
            try {              
                const response = await fetch('http://localhost:3001/inputMenu',{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(data)
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
        <input type='text' placeholder='photoUrl' {...register("photoUrl")}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
