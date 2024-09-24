import React from 'react'
import Image from 'next/image'  
function UserCart({user}) {
  return (
    <div
    key={user.id}
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4"
  >
    <Image
      src={user.avatar}
      alt={user.first_name}
      width={100}
      height={100}
      className="rounded-full object-cover"
    />
    <h2 className="text-gray-800 text-xl font-semibold">
      {user.first_name} {user.last_name}
    </h2>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      Perfil
    </button>
  </div>
  )

}

export default UserCart