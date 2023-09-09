import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='border-2 border-black h-screen w-full lg:w-1/2 mx-auto'>
        <Navbar />
        <div className='mt-5'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
