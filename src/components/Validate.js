export const Validate = (data) => {

     const errors = {}
    
     if (!data.name.trim()) {
          errors.name = "نام کاربری را وارد کنید،ممنون"
     } else {
          delete errors.name
     }

     if (!data.email) {
          errors.email = "ایمیل را وارد کنید"
     } else if(!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = "ایمیل معتبر نیست"
     } else{
          delete errors.email
     }

     if (!data.text) {
          errors.text = "متنی را وارد کنید"
     } else if(data.text.split("").length < 1) {
         errors.text = "حداقل یک کلمه"
     } else{
          delete errors.text
     }

     return errors
}


