"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const currentRoute = usePathname();

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black">CRM Clientes</p>
      </div>
      <nav className="mt-5 list-none">
        <li className={currentRoute === "/" ? "bg-blue-800 p-2" : "p-2"}>
          <Link href="/">
            <p className="text-white block">Clientes</p>
          </Link>
        </li>
        <li className={currentRoute === "/pedidos" ? "bg-blue-800 p-2" : "p-2"}>
          <Link href="/pedidos">
            <p className="text-white block">Pedidos</p>
          </Link>
        </li>
        <li
          className={currentRoute === "/productos" ? "bg-blue-800 p-2" : "p-2"}
        >
          <Link href="/productos">
            <p className="text-white block">Productos</p>
          </Link>
        </li>
      </nav>
    </aside>
  );
}

export default Sidebar;
