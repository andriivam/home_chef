
export const fetchFn=()=>{
    fetch('http://localhost:3001/menu')
    .then((res)=>res.json())
    .then((data) => {
        console.log(data, 'data')
    })
}