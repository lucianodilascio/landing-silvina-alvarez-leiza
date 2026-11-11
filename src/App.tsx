import LinkButton from './components/LinkButton'
import { links } from './data/links'

const currentYear = new Date().getFullYear()

const App = () => (
  <div className="min-h-screen bg-arquitecta px-4 py-12 text-stone-900 sm:py-20">
    <main className="mx-auto flex w-full max-w-md flex-col items-center">
      <header className="mb-10 flex w-full flex-col items-center">
        {/* El ancho de este bloque lo manda el título h1 */}
        <div className="flex w-fit flex-col items-center">
          
          {/* 1. Logo: toma el ancho exacto del título (scale-110 compensa el margen blanco de la imagen) */}
          <div className="w-0 min-w-full">
            <img
              src="/logo1.png"
              alt="Logo de Silvina Álvarez Leiza"
              className="h-auto w-full scale-110 rounded-none object-contain"
            />
          </div>
          
          {/* 2. Título: 5xl en móvil y 6xl en PC, forzado a una sola línea */}
          <h1 className="mt-2 whitespace-nowrap font-riesling text-5xl leading-none tracking-wide text-[#BA2C1E] sm:text-6xl">
            Silvina álvarez leiza
          </h1>
          
          {/* 3. Subtítulo: reparte las letras de punta a punta del título sin dejar huecos */}
          <p
            aria-label="arquitectura e inmobiliaria"
            className="mt-2 flex w-0 min-w-full justify-between font-neogothis text-xs font-normal text-[#BA2C1E] lowercase sm:text-base"
          >
            {'arquitectura e inmobiliaria'.split('').map((char, index) => (
              <span key={index} aria-hidden="true">
                {char === ' ' ? '\u00A0\u00A0' : char}
              </span>
            ))}
          </p>

        </div>
      </header>

      <nav aria-label="Enlaces" className="flex w-full flex-col border-t border-[#C7BEB8]">
        {links.map((link) => (
          <LinkButton key={link.id} link={link} />
        ))}
      </nav>

      <footer className="mt-12 font-neogothis text-xs text-stone-600">
        © {currentYear} Silvina Álvarez Leiza
      </footer>
    </main>
  </div>
)

export default App
