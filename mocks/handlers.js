import {rest} from 'mxw'
const fakeUserResponse= {token:'fake-user-token',currentUser:req.username,}
export const handlers= [
    rest.post('/login', (req,res,ctx)=>{
        localStorage.setItem('is-authenticated',true)

        return res(

        ctx.status(200),
        ctx.message(message:'User Authenticated')
        )
    }),



]