import Image from 'next/image'

interface HeroProps {
  name: string
  role: string
  tagline: string
  heroImageUrl?: string
}

export default function Hero({ data }: { data: HeroProps }) {
  const { name, role, tagline, heroImageUrl } = data

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {heroImageUrl && (
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse" />
            <Image
              src={heroImageUrl}
              alt={name}
              width={160}
              height={160}
              className="relative rounded-full border-4 border-white/20 object-cover shadow-2xl"
            />
          </div>
        )}
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-white">{name}</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          <span className="text-gradient">{role}</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="btn-gradient px-8 py-3 rounded-full text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}