interface FooterProps {
  name: string
}

export default function Footer({ data }: { data: FooterProps }) {
  const { name } = data
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} <span className="text-gradient font-medium">{name}</span>. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with <span className="text-pink-500">Next.js</span> and <span className="text-purple-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}