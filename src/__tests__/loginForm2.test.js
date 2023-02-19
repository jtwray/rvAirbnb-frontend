import * as React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from "@testing-library/react"
import LoginForm from '../../auth_views/login/LoginForm'


const fakeUserResponse= {token:"fake_user_token",currentUser:req.username}
const server=setupServer(
    rest.post('auth/login',(res,req,ctx)=>{
        return res(ctx.json(fakeUserResponse))
    }),
    )

    beforeAll(()=> server.listen())
    afterEach(()=>{
        server.resetHandlers()
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('is_authenticated')
        window.localStorage.removeItem('currentUser')
    })
    afterAll(()=> server.close())

    test('allows the user to login successfully', async ()=>{
        render( <LoginForm /> )

        fireEvent.change(screen.getByLabelText(/username/i),{
            target:{value:'timetoshine'}
        })
        fireevent.change(screen.getByLableText(/password/i),{
            target:{value:'timetoshine'},
        })
        fireEvent.change(screen.getByLabelText(/email/i),{
            target:{value:'time@to.shine'},
        })
        fireEvent.click(screen.getByRole('button',{name: 'login'}) )

        const loginBtn=screen.getByRole('button',{name:'login'})
        expect(loginBtn.toHaveAttribute('disabled'))

        const dashboardGreeting= await screen.findByRole('h2')
        expect(dashboardGreeting).toHaveTextContent(/welcome/i)
        expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
        expect(window.localStorage.getItem('currentUser')).toEqual(fakeUserResponse.currentUser)
        expect(window.localStorage.getItem('is_authenticated')).toEqual(fakeUserResponse.currentUser)
    })



test('handles server exceptions',()=>{

    server.use(
        rest.post('/auth/login',async (req,res,ctx)=>{
            return res(ctx.status(500), ctx.json({message:'Internal server error'}))
        })
    )
    render( <LoginForm /> )

    fireEvent.change(screen.getByLabelText(/username/i),{
        target:{value:'timetoshine'},
    })
    fireEvent.change(screen.getByLabelText(/password/i),{
        target:{value:'timetoshine'},
    })
    fireEvent.change(screen.getByLabelText(/email/i),{
        target:{value:'time@to.shine'},
    })
    fireEvent.click(screen.getByRole('button',{name: 'login'}))

    const alert= await screen.findByRole('alert')

    expect(alert).toHaveTextContent(/internal server error/i)
    expect(window.localStorage.getItem('token')).toBeNull()
    expect(window.localStorage.getItem('currentUser')).toBeNull()
    expect(window.localStorage.getItem('is_authenticated')).toBeNull()

})