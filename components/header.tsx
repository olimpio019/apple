"use client"

import { SearchBar } from './search-bar'
import { UserNav } from './user-nav'

export function Header() {
  return (
    <header className="w-full py-6 flex flex-col items-center bg-white shadow">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 md:mb-0">
          Loja
        </h1>
        <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0 justify-center md:justify-end">
          <SearchBar />
          <UserNav />
        </div>
      </div>
    </header>
  )
} 