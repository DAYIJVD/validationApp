import React ,{useState,useEffect} from 'react';
import validation from "./validation.js";
import { ToastContainer} from 'react-toastify';
import toastify from './toastify.js';
import { Link } from 'react-router-dom';
import styles from "./Login-Signup.module.css"
const SignUp = () => {
    
    const [dataForm,setDataForm]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        accepted:false
    })
    const [errors,setErorrs]=useState({})
    const [Touched,setTouched]=useState({
        name:false,
        email:false,
        password:false,
        confirmPassword:false
    })
    useEffect(()=>{
      setErorrs(validation(dataForm))
    },[dataForm])
    const changeHand=(e)=>{
        if(e.target.name==='accepted'){
            setDataForm({...dataForm,[e.target.name]:e.target.checked})
        }else{
            setDataForm({...dataForm,[e.target.name]:e.target.value})
        }
    }
    const focusHand=(e)=>{
        setTouched({
              ...Touched,[e.target.name]:true
        })
    }
    const submitHand=(e)=>{
      e.preventDefault()
      toastify(errors)
      console.log(errors)
    }
    return (
        <div className={styles.conteiner}>
            
            <form onSubmit={submitHand} className={styles.form}  >
                <h2>SignUp</h2>
                <div className={styles.field}>
                    <label>Name :</label>
                    <input type='text' value={dataForm.name} name='name' onChange={changeHand} onFocus={focusHand}/>
                    {errors.name&&Touched.name&&<span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                    <label>Email :</label>
                    <input type='email' value={dataForm.email} name='email' onChange={changeHand} onFocus={focusHand}/>
                    {errors.email&&Touched.email&&<span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                    <label>Password :</label>
                    <input type='password' value={dataForm.password} name='password' onChange={changeHand} onFocus={focusHand}/>
                    {errors.password&&Touched.password&&<span className={styles.error}>{errors.password}</span>}
                </div>
                <div className={styles.field}>
                    <label>Confirm Password :</label>
                    <input type='password' value={dataForm.confirmPassword} name='confirmPassword' onChange={changeHand} onFocus={focusHand}/>
                    {errors.confirmPassword&&Touched.confirmPassword&&<span className={styles.error}>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.accept}>
                {<span>Do you accept the rules?</span>}  
                    <input type='checkbox' value={dataForm.accepted} name='accepted' onChange={changeHand}/>
                 
                </div>
                <div>
                <button type='submit'>SignUp</button>
                <Link to="/Login" className={styles.Link}> Login</Link>
                </div>
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                />
            </form>
            </div>
    );
};

export default SignUp;