import React from "react";

const menu = [
  {
    categoria: "Entradas",
    items: [
      {
        nombre: "Guacamole con totopos",
        descripcion: "Aguacate fresco, jitomate, cebolla y limón.",
        precio: "$65",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Guacamole.jpg/800px-Guacamole.jpg",
      },
      {
        nombre: "Queso fundido",
        descripcion: "Queso derretido con chorizo y tortillas.",
        precio: "$80",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Queso_fundido.jpg/800px-Queso_fundido.jpg",
      },
    ],
  },
  {
    categoria: "Platillos principales",
    items: [
      {
        nombre: "Tacos de arrachera",
        descripcion: "Tortillas de maíz con carne asada, cebolla y cilantro.",
        precio: "$120",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/58/Tacos_de_arrachera.jpg",
      },
      {
        nombre: "Pechuga a la plancha",
        descripcion: "Acompañada con arroz y ensalada fresca.",
        precio: "$110",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Grilled_chicken_breast.jpg",
      },
    ],
  },
  {
    categoria: "Bebidas",
    items: [
      {
        nombre: "Agua de jamaica",
        descripcion: "Refrescante y natural.",
        precio: "$25",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Agua_de_jamaica.jpg",
      },
      {
        nombre: "Cerveza artesanal",
        descripcion: "Variedad local.",
        precio: "$45",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Craft_beer_glass.jpg",
      },
    ],
  },
];

export default function App() {

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-4">
      <header className="bg-red-600 text-white text-center py-5 rounded-xl shadow-md mb-6">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">¡Tailwind está funcionando! 🎉</h1>
    </div>
        <h1 className="text-3xl font-extrabold">Menú del Restaurantito</h1>
        <p className="text-sm">Escanea el QR para ver este menú desde tu celular 📱</p>
      </header>

      {menu.map((seccion, idx) => (
        <section key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">{seccion.categoria}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {seccion.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={item.imagen} alt={item.nombre} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{item.nombre}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.descripcion}</p>
                  <p className="text-red-600 font-bold">{item.precio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
