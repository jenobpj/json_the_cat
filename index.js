const {fetchBreedDescription}=require('./breedFetcher')
const breedname=process.argv[2];

fetchBreedDescription(breedname,(error,desc)=>{
  if(error){
    console.log('Error fetch details',error)
  }else{
    console.log(desc)
  }
});