//Primer objetivo: Traer la lista de usurios de la API y mostrarla en la página principal
import Image from "next/image";
import UserCart from "./components/UserCart";
async function loadUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data);
  return data;
}

async function HomePage() {
  const users = await loadUsers();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Usuarios</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.data.map((user) => (
          <UserCart user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
