"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
// import { gql } from "@apollo/client";

// const QUERY_PRODUCTOS = gql`
//   query ObtenerProductos {
//     obtenerProductos {
//       nombre
//       precio
//       existencia
//     }
//   }
// `;

function NuevaCuenta() {
  // const { data } = useQuery(QUERY_PRODUCTOS);

  // console.log(data);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required("El password no puede ir vacío")
        .min(6, "El password debe ser de al menos 6 caracteres"),
    }),
    onSubmit: (valores) => {
      console.log("enviando");
      console.log(valores);
    },
  });

  return (
    <>
      <h1 className="text-center text-2xl text-white font-light">
        Crear Nueva Cuenta
      </h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Nombre Usuario"
                type="text"
                value={formik.values.nombre}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="apellido"
                onChange={formik.handleChange}
                placeholder="Apellido Usuario"
                type="text"
                value={formik.values.apellido}
              />
            </div>
            {formik.touched.apellido && formik.errors.apellido ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.apellido}</p>
              </div>
            ) : null}

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
                onChange={formik.handleChange}
                placeholder="Email Usuario"
                type="email"
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.email}</p>
              </div>
            ) : null}

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
                onChange={formik.handleChange}
                placeholder="Password Usuario"
                type="password"
                value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.password}</p>
              </div>
            ) : null}

            <input
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
              type="submit"
              value="Crear Cuenta"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default NuevaCuenta;
