import { Github, Link, Star } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import specterGym from "../assets/specterGym.png";
import cashflow from "../assets/cashflow.png";
import mi_negocio from "../assets/mi-negocio.png";
import skillia from "../assets/skillia.png";
import { FaCss3, FaJs, FaHtml5, FaPaw, FaMobileAlt } from "react-icons/fa";
import {
  RiSupabaseFill,
  RiTailwindCssFill,
  RiReactjsLine,
} from "react-icons/ri";
import React from "react";
import { SiVite } from "react-icons/si";

const proyectos = [
  {
    nombre: "CashFlow",
    descripcion:
      "Aplicacion Movil de finanzas personales te permite gestionar tus cuentas de manera sencilla y eficiente. Con opciones para añadir ingresos, gastos, transferencias, y categorizar tus movimientos, tendrás una visión clara de tus finanzas. Además, incluye gráficos intuitivos para analizar tus hábitos financieros y un registro detallado para un seguimiento completo.",
    web: "",
    lenguajes: ["React_Native", "Tailwind", "Zustand", "Supabase", "Expo"],
    image: cashflow,
  },
  {
    nombre: "Mi Negocio",
    descripcion:
      "Aplicación móvil para gestionar tu negocio de forma sencilla y eficiente. Permite registrar ventas vinculando clientes y productos, controlar pagos pendientes, administrar tu catálogo y cartera de clientes, y analizar el rendimiento con gráficos de ventas y rankings. Todo el historial se guarda localmente en el dispositivo, sin necesidad de internet.",
    web: "",
    repo: "https://github.com/matiudev/Mi-Negocio",
    lenguajes: ["React_Native", "Tailwind", "Zustand", "Expo"],
    image: mi_negocio,
  },
  {
    nombre: "Skillia",
    descripcion:
      "Plataforma web de aprendizaje online. Permite explorar un catálogo de cursos premium, registrarse y gestionar el progreso desde un dashboard personalizado. Ofrece acceso ilimitado al contenido y certificados al finalizar cada trayecto. Todo el contenido se gestiona en la nube mediante Supabase.",
    web: "https://skillia-weld.vercel.app/",
    repo: "https://github.com/matiudev/Skillia",
    lenguajes: ["React", "Tailwind", "Zustand", "Supabase", "Vite"],
    image: skillia,
  },
  {
    nombre: "Specter GYM",
    descripcion:
      "Aplicación web de un gym desarrollada con React, que ofrece una experiencia interactiva para poder reservar tu visita a la hora de matricularte.",
    web: "SpecterGym",
    lenguajes: ["React", "Tailwind", "Vite"],
    image: specterGym,
  },
];

const ICONS = {
  JavaScript: {
    icon: () => <FaJs className="text-yellow-400" />,
    bg: "bg-yellow-400/20",
  },
  HTML: {
    icon: () => <FaHtml5 className="text-orange-500" />,
    bg: "bg-orange-500/20",
  },
  CSS: {
    icon: () => <FaCss3 className="text-blue-500" />,
    bg: "bg-blue-500/20",
  },
  Supabase: {
    icon: () => <RiSupabaseFill className="text-green-500" />,
    bg: "bg-green-500/20",
  },
  Tailwind: {
    icon: () => <RiTailwindCssFill className="text-blue-500" />,
    bg: "bg-blue-500/20",
  },
  React: {
    icon: () => <RiReactjsLine className="text-cyan-500" />,
    bg: "bg-cyan-500/20",
  },
  React_Native: {
    icon: () => <RiReactjsLine className="text-cyan-500" />,
    bg: "bg-cyan-500/20",
  },
  Zustand: {
    icon: () => <FaPaw className="text-orange-500" />,
    bg: "bg-orange-500/20",
  },
  Vite: {
    icon: () => <SiVite className="text-purple-500" />,
    bg: "bg-purple-500/20",
  },
  Expo: {
    icon: () => <FaMobileAlt className="text-slate-400" />,
    bg: "bg-slate-400/20",
  },
};

const IconsLenguajes = ({ lenguajes }) => {
  return (
    <div className="md:flex gap-4 grid grid-cols-3">
      {lenguajes.map((lang) => {
        const data = ICONS[lang] || {
          icon: () => <FaHtml5 className="text-gray-400" />,
          bg: "bg-gray-400/20",
        };

        const Icon = data.icon;

        return (
          <div
            key={lang}
            className={`${data.bg} py-3 px-4 md:flex items-center gap-3 rounded-xl mb-5`}
          >
            <Icon />
            <p className="font-semibold">{lang.replace("_", " ")}</p>
          </div>
        );
      })}
    </div>
  );
};

function Proyectos() {
  return (
    <>
      <div className="flex items-center justify-start gap-5 mt-20 mb-12">
        <Star size={40} />
        <h2 className="font-black text-4xl font-poetsen">Proyectos</h2>
      </div>

      {proyectos.map((proyecto) => (
        <React.Fragment key={proyecto.nombre}>
          <div className="flex justify-between mb-5">
            <p className="font-black text-3xl font-poetsen text-gray-200">
              {proyecto.nombre}
            </p>
            <div className="flex gap-3">
              {proyecto.web && (
                <RouterLink
                  to={proyecto.web}
                  className="bg-white py-2 px-5 flex items-center gap-1 rounded-xl"
                >
                  <Link color="black" size={18} />
                  <p className="text-black text-base font-semibold">Web</p>
                </RouterLink>
              )}
              {proyecto.repo && (
                <RouterLink
                  to={proyecto.repo}
                  className="bg-white py-2 px-5 flex items-center gap-1 rounded-xl"
                >
                  <Github color="black" size={18} />
                  <p className="text-black text-base font-semibold">Repo</p>
                </RouterLink>
              )}
            </div>
          </div>
          <p className="text-gray-300 font-semibold text-start mb-3">
            {proyecto.descripcion}
          </p>
          <IconsLenguajes lenguajes={proyecto.lenguajes} />
          <img
            src={proyecto.image}
            alt=""
            className="mb-10 rounded-2xl transition-transform duration-300 hover:scale-102"
          />
        </React.Fragment>
      ))}
    </>
  );
}

export default Proyectos;
