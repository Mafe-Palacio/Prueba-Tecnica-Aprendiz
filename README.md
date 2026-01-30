# Rick and Morty Characters  
**Autora:** Maria Fernanda Palacio Agudelo

Aplicación web que consume la API pública de Rick and Morty para mostrar una galería de personajes y permitir la interacción mediante votos de Like y Dislike.

Este proyecto fue desarrollado como parte de la Prueba Técnica para el rol de Aprendiz QA/Dev – CubiQ.

---

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API

---

## Consumo de la API
La aplicación consume la API pública de Rick and Morty desde el siguiente endpoint:

https://rickandmortyapi.com/api/character

Los datos obtenidos se procesan dinámicamente para renderizar tarjetas de personajes con su información principal.

---

## Funcionalidades
- Galería de personajes en formato grid
- Visualización de:
  - Imagen
  - Nombre
  - Estado
  - Especie
- Sistema de votos:
  - Botón Like
  - Botón Dislike
- Contador de votos independiente por personaje
- Diseño responsive básico
- Animaciones y efectos hover

---

## Estructura del proyecto

/
├── rickandmorty.html
├── rickandmorty.css
├── rickandmorty.js
├── img/
│ ├── like.png
│ └── dislike.png
└── README.md

---

## Decisiones técnicas

- Se utilizó **JavaScript Vanilla** para cumplir con los requisitos del ejercicio sin depender de frameworks, priorizando la comprensión de los fundamentos del lenguaje y del DOM.
- El consumo de la API se realizó mediante **Fetch API**.
- Los elementos visuales (tarjetas y botones) se generan dinámicamente a partir de los datos recibidos de la API.
- El diseño visual se construyó utilizando **Flexbox**, facilitando la adaptación a diferentes tamaños de pantalla.
- Se añadieron animaciones y transiciones suaves en CSS para mejorar la experiencia de usuario sin afectar el rendimiento.

---

## Nota de aprendizaje

Este proyecto representa mi primer acercamiento práctico al desarrollo con JavaScript.

El enfoque estuvo orientado a comprender los conceptos fundamentales como manipulación del DOM, consumo de APIs y manejo de eventos, priorizando claridad y funcionalidad sobre complejidad.

