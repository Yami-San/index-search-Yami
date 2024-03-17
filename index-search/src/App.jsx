import './App.css'
// import { Button } from '@nextui-org/button'
// import { Link } from '@nextui-org/link'
import { Avatar } from '@nextui-org/avatar'
import ThemeToggle from './components/ThemeToggle'

export function App () {
  return (
    <>
      <nav className='py-4 relative bg-slate-100'>
        <section className='container mx-auto flex ml-2 min-w-max max-w-full'>
          <section className='flex flex-grow'>
            <Avatar isBordered className='max-w-10' color='secondary' src='https://unavatar.io/github/Yami-San' />
            <p className='ml-4 flex items-center'>English Enviromnent</p>
          </section>
          <section className='flex justify-end mr-6'>
            <Avatar isBordered className='max-w-10' color='secondary' src='https://unavatar.io/github/Yami-San' />
          </section>
        </section>
      </nav>
    </>
  )
}

export default App
