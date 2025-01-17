import vscExtensionImage from "../assets/images/vscode-extension.png";
import develmatchImage from "../assets/images/Develmatch.png";
import ducktripImage from "../assets/images/ducktrip-repo.png";

export const projects = [
  {
    id: "3",
    title: "Extensión para Visual Studio Code",
    date: "2024",
    description:
      "Forma visual y sencilla de consultar las reglas CSS y copiar algunas de ellas al portapapeles.",
    technologies: ["TypeScript", "JavaScript", "Node.js", "Mocha"],
    image: vscExtensionImage,
    link: "https://marketplace.visualstudio.com/items?itemName=ElenaExpositoo.flex-grid-cheatsheet",
    link2: "https://github.com/ElenaExposito/flex-grid-cheatsheet",
  },
  {
    id: "2",
    title: "Proyecto Develmatch",
    date: "Junio 2024",
    description:
      '"Develmatch" es una plataforma colaborativa donde los usuarios del rubro IT pueden encontrar y colaborar en proyectos hechos específicamente por juniors para juniors con la finalidad de encontrar oportunidades de aprendizaje, desarrollo y oportunidad de hacer networking.',
    technologies: [
      "UX/UI",
      "React",
      "JSX",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Netlify",
      "Markdown",
    ],
    image: develmatchImage,
    link: "https://github.com/JavierBrizuela/exceso_de_iteraciones",
  },
  {
    id: "1",
    title: "Proyecto DuckTrip",
    date: "Septiembre – Octubre 2023",
    description:
      '"Ducktrip" es un proyecto realizado durante el curso impartido por la EOI "Desarrollo web con Vue", Ducktrip es una aplicación para la preparación de tus viajes. Está pensado para poder gestionar vuelos, hoteles y meteorología, para que viajes sin ningún tipo de problema.',
    technologies: [
      "Framework VueJS",
      "Netlify",
      "JavaScript",
      "HTML+CSS",
      "Control de versiones (Git + GitHub)",
    ],
    image: ducktripImage,
    link: "https://github.com/davidgm26/ducktrip-app",
  },
];
