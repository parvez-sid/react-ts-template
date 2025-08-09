import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button';

export default function Header() {

  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <h2>G-Teck</h2>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
        </div>

        <div>
            <Button variant='contained' size="small" onClick={() => changeLanguage('en')} className="px-4 py-2 bg-blue-500 text-white">
                English
            </Button>{" "}
            <Button variant='contained' size="small" onClick={() => changeLanguage('hi')} className="px-4 py-2 bg-green-500 text-white">
                हिंदी
            </Button>
        </div>
      </nav>
    </header>
  )
}
