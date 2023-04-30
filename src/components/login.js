import React ,{useState,useEffect} from 'react';
import valid_login from "./valid-login.js";
import { ToastContainer} from 'react-toastify';
import toastify from './toastify.js';
import styles from "./Login-Signup.module.css"
const Login = () => {
     
    const [dataForm,setDataForm]=useState({    
        email:"",
        password:"",
    })
    const [errors,setErorrs]=useState({})
    const [Touched,setTouched]=useState({     
        email:false,
        password:false,
    })
    useEffect(()=>{
      setErorrs(valid_login(dataForm))
    },[dataForm])
    const changeHand=(e)=>{
            setDataForm({...dataForm,[e.target.name]:e.target.value})
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
              <form onSubmit={submitHand} className={styles.form}>
                <h2>Login</h2>
                <div className={styles.field}>
                    <label>Email</label>
                    <input type='email' value={dataForm.email} name='email' onChange={changeHand} onFocus={focusHand}/>
                    {errors.email&&Touched.email&&<span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                    <label>Password</label>
                    <input type='password' value={dataForm.password} name='password' onChange={changeHand} onFocus={focusHand}/>
                    {errors.password&&Touched.password&&<span className={styles.error}>{errors.password}</span>}
                </div>
                <div>
                <button type='submit'>Login</button>
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

export default Login;