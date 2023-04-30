import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toastify=(errors)=>{
    if(Object.values(errors).length>0){
        toast.error('Invalid!', {
            position:"top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }else{
      
            toast.success('Succsess!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
    }
}
export default toastify