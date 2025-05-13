interface FooterProps {
  darkMode: boolean
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`px-8 py-6 text-center ${darkMode ? "bg-gray-800/50 text-white" : "bg-purple-100/30 text-gray-800"}`}
    >
      <p className="text-xl font-medium mb-1">
        Made with love by Vedant <span className="text-red-500">❤️</span>...
      </p>
      <p className="text-sm">© 2024 GrowSphere</p>
    </footer>
  )
}
