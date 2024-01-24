import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../hook/useAuth.js'
import { useForm } from 'react-hook-form'
import {headerLogo} from "../../assets/images/index.js";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signIn } = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const { register, handleSubmit, reset } = useForm({
        mode: 'onChange'
    })

    const loginUser = (data) => {

        const requestData = {
            email: data.email,
            password: data.password
        }

        axios.post('http://localhost:5001/login', requestData)
            .then(res => {
                if (res.data.Status === 'Успешно') {
                    signIn(data.email, () => navigate(fromPage, { replace: true }))
                } else {
                    alert(res.data.Error)
                }
            })

        reset(data)
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <a href='/'>
                <img
                    src={headerLogo}
                    alt='logo'
                    width={129}
                    height={59}
                    className='m-0 w-[129px] h-[59px] absolute top-10 left-10'
                />
            </a>
            <form
                className="bg-blue border-2 rounded-2xl py-4 px-8 mx-2 text-white flex flex-col items-center justify-center max-w-md lg:w-1/2"
                onSubmit={handleSubmit(loginUser)}>
                <h2 className="font-palanquin lg:text-3xl py-8">Авторизация</h2>
                <div className="py-3 px-4 w-full">
                    <input
                        id="email"
                        className="bg-blue text-white placeholder-white border-b border-gray p-2 w-full focus:outline-none focus:border-black"
                        type="email"
                        placeholder="Почта:"
                        {...register('email')}
                    />
                </div>
                <div className="py-3 px-4 w-full">
                    <input
                        id="password"
                        className="bg-blue text-white placeholder-white border-b border-gray p-2 w-full focus:outline-none focus:border-black"
                        type="password"
                        placeholder="Пароль:"
                        {...register('password')}
                    />
                </div>
                <div className="py-8 px-4 w-full text-center">
                    <button
                        className="bg-white w-full border-2 text-black rounded-2xl p-1 mb-5 hover:bg-blue hover:text-white hover:border-2 border-white text-md">Вход
                    </button>
                    <div className="text-lg mt-10 flex justify-center">
                        <p className="opacity-75 text-black">Нет аккаунта?</p>
                        <Link to="/register" className="hover:underline text-white ml-1">Зарегистрироваться</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login