# Contexto del Proyecto
Proyecto: Landing page profesional (estilo Linktree) para una Arquitecta.
Objetivo: Crear una interfaz minimalista, elegante y de carga ultrarrápida (mobile-first) para centralizar sus redes sociales, portfolio y contacto.

# Stack Tecnológico
- **Framework:** React 18 con Vite.
- **Lenguaje:** TypeScript (Estricto. Prohibido usar `any`. Todo debe estar tipado mediante `interface` o `type`).
- **Estilos:** Tailwind CSS. Usar paletas neutras (stone/zinc) y bordes sutiles (`rounded-md` en lugar de `rounded-full` para un look más arquitectónico). No crear archivos CSS personalizados a menos que sea estrictamente necesario.
- **Íconos:** `lucide-react`.

# Reglas de Código para el Agente
1. **Componentes Funcionales:** Escribir siempre componentes funcionales de React usando arrow functions y hooks.
2. **Modularidad:** Separar la lógica de la vista. El arreglo de links debe estar separado y tipado con una interfaz (ej. `LinkItem`).
3. **Explicaciones Breves:** Cuando propongas un cambio o un código nuevo, explica brevemente qué hace y por qué tomaste esa decisión antes de mostrar el bloque de código.
4. **Diseño UX/UI:** Mantener animaciones sutiles (ej. `hover:-translate-y-1` y sombras suaves) que transmitan profesionalismo y solidez.

# Comandos de Referencia
- Para ejecutar el servidor de desarrollo: `pnpm run dev` (o `pnpm dev`).