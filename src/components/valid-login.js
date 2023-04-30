
const valid_login = (dataForm) => {
    const errors={}
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
      return errors
};

export default valid_login;