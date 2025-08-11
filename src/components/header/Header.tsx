import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
  const [language, setLanguage] = useState<string>('en');

  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  const handleLanguageChange = (value : string) => {
    setLanguage(value);
    changeLanguage(value)
  }

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
            <Select
                value={language}
                sx={{
                    bgcolor: language === 'en' ? 'primary.main' : 'success.main',
                    color: 'white',
                    '& .MuiSelect-select': {
                        py: 1,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&:hover': {
                        bgcolor: language === 'en' ? 'primary.dark' : 'success.dark',
                    }
                }}
                onChange={(e) => handleLanguageChange(e.target.value)}
            >
                <MenuItem sx={{ color: 'text.primary' }} selected value={'en'}>English</MenuItem>
                <MenuItem sx={{ color: 'text.primary' }} value={'hi'}>हिंदी</MenuItem>
            </Select>
        </div>
      </nav>
    </header>
  )
}
