// Image into base 64
export default function convertToBase64(file){
    const output =  new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () =>{
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) =>{
            reject(error)
        }
})


return output;
}