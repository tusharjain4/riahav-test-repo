interface Skill {
  name: string
  skills: string[]
}

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ data }: { data: SkillsProps }) {
  const { skills } = data

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />

        <div className="space-y-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3" />
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-800/80 border border-white/10 rounded-lg text-gray-300 font-medium hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}