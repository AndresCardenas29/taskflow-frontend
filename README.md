First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explicación del Proyecto

Este proyecto es una aplicación web desarrollada con Next.js, un framework de React para la construcción de aplicaciones web. La aplicación permite gestionar proyectos y tareas, asignar usuarios a proyectos y visualizar el estado de las tareas.

### Estructura del Proyecto

El proyecto está organizado en varias carpetas y archivos, cada uno con una responsabilidad específica:
- `src/app`: Contiene las páginas principales de la aplicación.
- `src/components`: Contiene los componentes reutilizables de la aplicación.
- `src/styles`: Contiene los archivos de estilos CSS.
- `public`: Contiene los archivos estáticos como imágenes y fuentes.

### Funcionalidades Principales

1. **Gestión de Proyectos**: La aplicación permite crear, editar y eliminar proyectos. Cada proyecto tiene un nombre, un estado (activo o inactivo) y una lista de usuarios asignados.

2. **Gestión de Tareas**: La aplicación permite crear, editar y eliminar tareas. Cada tarea tiene un título, una descripción, un estado (pendiente, en progreso o completada), una fecha límite y un proyecto al que pertenece.

3. **Asignación de Usuarios**: Los usuarios pueden ser asignados a proyectos y tareas. La aplicación permite ver la lista de usuarios asignados a cada proyecto y tarea.

4. **Visualización de Tareas**: La aplicación permite ver todas las tareas asignadas a un usuario específico. Las tareas se pueden filtrar por estado y fecha límite.

