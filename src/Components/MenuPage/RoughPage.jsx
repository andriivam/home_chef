import React,{useState} from 'react'
import { testData } from '../../data'

export default function RoughPage() {
    let users = testData[0].users
    let propsId = 1
    const [cheflist, setCheflist] = useState(()=>{return []})
    users.map(user=>{
        if(user.chefTable.cuisineType === propsId){
            setCheflist(oldArray => [...oldArray,user])
        }
    })
    console.log(cheflist)
  return (
    <div>
        
    </div>
  )
}
