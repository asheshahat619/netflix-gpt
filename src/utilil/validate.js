export const formValidate=(email,password)=>{
    const emailRegex= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    const passwordReegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(password)
    if(!emailRegex) return "Invalid email"
    if(!passwordReegex) return "Invalid password"
    if(emailRegex && passwordReegex) return null
}

