interface AboutProps {
  about: string
  experience: number
  currentRole: string
  highlights: string[]
}

export default function About({ data }: { data: AboutProps }) {
  const { about, experience, currentRole, highlights } = data

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {about}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/5">
              <div className="text-4xl font-bold text-gradient mb-2">{experience}+</div>
              <div className="text-gray-400">Years of Experience</div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/5">
              <div className="text-xl font-semibold text-white mb-2">{currentRole}</div>
              <div className="text-gray-400">Current Role</div>
            </div>
          </div>

          {highlights && highlights.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Highlights</h3>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}