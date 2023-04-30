const validation=(dataForm)=>{
    const errors={}
    if(!dataForm.name){
       errors.name="You Did Not Enter Your Name"
       
    }else{
        delete errors.name
    }
    if(!dataForm.email){
      errors.email="You Did Not Enter Your Email"
    }else if(!/^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(dataForm.email)){
        errors.email="Not Valid"          
    }
    if(!dataForm.password){
        errors.password="You Did Not Enter Your Password"
    }else if(dataForm.password.length<6){
        errors.password="Your Password is Less Than Six Characters,Correct it"
    }else{
        delete errors.password
    }
    if(!dataForm.confirmPassword){
        errors.confirmPassword="You Did Not Enter Your Password"
    }else if (dataForm.password!==dataForm.confirmPassword){
        errors.confirmPassword="it is Not Match a Password"
    }else{
        delete errors.confirmPassword
    }
    if(dataForm.accepted===false){
        errors.accepted="Do you accept the rules?"
    }else{
        delete errors.accepted
    }
    return errors
}
export default validation




