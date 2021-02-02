const getButton = document.getElementById('get')
const postButton = document.getElementById('post')

getButton.addEventListener('click', ()=>{
    fetch(`http://localhost:5000/products`)
    .then(res => res.json())
    .then(resJSON => console.log(resJSON))
    .catch(err=>console.log(err))
    // alert(`tes`)
})

postButton.addEventListener('click', ()=>{
    fetch(`http://localhost:5000/product`,{method: `POST`})
    .then(res => res.json())
    .then(resJSON => console.log(resJSON))
    .catch(err=>console.log(err))
    // alert(`tes`)
})