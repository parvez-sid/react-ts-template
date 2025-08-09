import TanStackComponent from '../test/TestComp';
import { useTranslation } from 'react-i18next';


export default function HomePage() {
  const { t } = useTranslation()


  return (
    <div className="p-6">
      
      <h1 className="text-2xl font-bold text-center">{t('common.welcome')}</h1>
      <hr />
      <TanStackComponent />
    </div>
  )
}
