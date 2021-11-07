import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { FaLock } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION, LoginData, LoginVariable } from '../action'
import { Loading } from '@components/Loading'
const LoginPage: React.FC<{}> = () => {
  const history = useHistory()
  // const routerQuery = new URLSearchParams(useLocation().search)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [login, { data, loading, error }] = useMutation<LoginData, LoginVariable>(LOGIN_MUTATION)
  const handlerSubmit = (e: any) => {
    e.preventDefault()
    console.log(username, password)
    login({
      variables: {
        userInput: {
          password,
          username,
        },
      },
    })
  }
  if (loading) return <Loading />
  if (data?.login?.token) {
    localStorage.setItem('token', data.login.token)
    localStorage.setItem('tokenExpiration', data.login.tokenExpiration)
    // history.push(routerQuery.get('redirect_url') || '/')
    history.push('/')
  }
  return (
    <div className="bg-white w-4/5 mx-auto min-h-screen">
      <nav className="bg-grey-light rounded font-sans w-full p-3">
        <ol className="flex text-lightBlue-500">
          <li>
            <Link to={'/'}>Trang chủ</Link>
          </li>
          <li>
            <span className="mx-2">»</span>
          </li>
          <li>
            <Link to={'#'}>Đăng nhập</Link>
          </li>
        </ol>
      </nav>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng nhập</h2>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm text-gray-700 py-2" htmlFor="username">
                Tên người dùng hoặc email
              </label>
              <input
                id="username"
                name="username"
                type="username"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm py-2">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <div>
                <span className="flex items-center text-sm text-red-500">{error.message}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">Ghi nhớ đăng nhập</label>
              </div>

              <div className="text-sm">
                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Quên mật khẩu
                </a>
              </div>
            </div>
            <div>
              <button
                onClick={handlerSubmit}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaLock />
                </span>
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
