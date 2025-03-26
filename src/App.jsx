import React from "react";

const menu = [
  {
    categoria: "Entradas",
    items: [
      {
        nombre: "Guacamole con totopos",
        descripcion: "Aguacate fresco, jitomate, cebolla y limón.",
        precio: "$65",
        imagen: "https://source.unsplash.com/400x300/?guacamole",
      },
      {
        nombre: "Queso fundido",
        descripcion: "Queso derretido con chorizo y tortillas.",
        precio: "$80",
        imagen: "https://source.unsplash.com/400x300/?cheese",
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
        imagen: "https://source.unsplash.com/400x300/?tacos",
      },
      {
        nombre: "Pechuga a la plancha",
        descripcion: "Acompañada con arroz y ensalada fresca.",
        precio: "$110",
        imagen: "https://source.unsplash.com/400x300/?grilled-chicken",
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
        imagen: "https://source.unsplash.com/400x300/?jamaica-drink",
      },
      {
        nombre: "Cerveza artesanal",
        descripcion: "Variedad local.",
        precio: "$45",
        imagen: "https://source.unsplash.com/400x300/?beer",
      },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Menú del Restaurantito</h1>

      {menu.map((seccion, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{seccion.categoria}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {seccion.items.map((item, i) => (
              <div key={i} className="bg-white shadow-md rounded-2xl overflow-hidden">
                <img src={item.imagen} alt={item.nombre} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.nombre}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.descripcion}</p>
                  <p className="text-blue-700 font-bold">{item.precio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
