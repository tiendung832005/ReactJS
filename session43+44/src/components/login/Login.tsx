import React from 'react'
import d from './Login.scss'
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex">
        <div className="hidden md:block w-1/2">
          <img
            src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474063BWt/anh-binh-minh-dep-me-hon-tren-dinh-ta-chi-nhu-yen-bai_093052267.jpg"
            alt="Scenic Canyon"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="p-8 w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">E-Mail</label>
              <input
                type="email"
                placeholder="Placeholder content"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Placeholder content"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-600">or</span>
          </div>
          <button
            type="button"
            className="w-full mt-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Register now
          </button>
        </div>
      </div>
    </div>
  )
}
