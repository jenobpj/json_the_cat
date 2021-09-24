const request=require('request');
const fetchBreedDescription=(breedname,callback)=>{
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`,(error,response,body)=>{
 if(error){
   callback(error)  
 }
 const data=JSON.parse(body);
 const breed=data[0];
 if(breed){
   
  callback(null,breed.description)
 }
 else{
   callback(null,'breed not found')
 }


})
}
module.exports={fetchBreedDescription}
