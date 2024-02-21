import React from "react";

import { gql } from "@apollo/client";
// import { getClient } from "../ApolloClient";

// const queryProductos = gql`
//   query ObtenerProductos {
//     obtenerProductos {
//       nombre
//       precio
//       existencia
//     }
//   }
// `;

async function Login() {
  // const { data } = await getClient().query({ query: queryProductos });
  // console.log(data);
  return (
    <>
      <h1 className="text-center text-2xl text-white font-light">Login</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Email Usuario"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="Password Usuario"
                type="password"
              />
            </div>
            <input
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
              type="submit"
              value="Iniciar Sesión"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
