import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Programmer from '../images/programmer.svg'
import { FaAward, FaClock, FaMoneyBillWave } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Base TI Project</title>
        <meta name="description" content="Landing Page Base TI" />
      </Head>

      <div className="h-screen max-w-[1500px] mx-auto px-24">
        <header className="flex items-center">
          <nav className="flex items-center justify-between w-full py-5">
            <div className="flex items-center justify-center">
              <Link href={"/"}>
                <a className="text-2xl font-bold">Base TI</a>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <ul className="flex items-center gap-5">
                <li className="hover:text-blue-600">
                  <a href="#beranda" className="font-normal">
                    Beranda
                  </a>
                </li>
                <li className="hover:text-blue-600">
                  <a href="#layanan" className="font-normal">
                    Layanan
                  </a>
                </li>
                <li className="hover:text-blue-600">
                  <a href="#projects" className="font-normal">
                    Projects
                  </a>
                </li>
                <li className="hover:text-blue-600">
                  <a href="#tentang" className="font-normal">
                    Tentang
                  </a>
                </li>
                <li className="hover:text-blue-600">
                  <a href="#kontak" className="font-normal">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="mt-5">
          <section id="beranda" className="flex items-center justify-center">
            <div className="flex flex-col items-start justify-start gap-5 flex-1">
              <h1 className="text-2xl font-bold">Hello, We are BaseTI</h1>
              <p className="font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore suscipit modi quaerat libero eaque sint, iusto nemo id ipsa laudantium voluptatibus commodi. Quibusdam in sunt tempore, impedit explicabo ea cupiditate? Asperiores nemo magnam quasi temporibus id debitis provident quo corrupti.
              </p>
            </div> 
            
            <div className="flex items-center justify-center flex-1">
              <Image src={ Programmer } alt="Programmer" width={ 450 } height={ 450 }/>
            </div>
          </section>
          
          <section className="flex items-center justify-center mt-20">
            <div className="p-12 grid grid-cols-3 gap-5 bg-blue-600 rounded-lg shadow-lg w-full">
              <div className="flex">
                <FaAward className="text-[100px] text-white"/>
                <div>
                  <h3 className="text-xl font-semibold text-white">Tilte 1</h3>
                  <p className="text-white font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolorum modi harum vitae quia numquam ab temporibus quibusdam quod quaerat.
                  </p>
                </div>
              </div>
              <div className="flex">
                <FaClock className="text-[100px] text-white" />
                <div>
                  <h3 className="text-white font-semibold text-xl">Tilte 1</h3>
                  <p className="text-white font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolorum modi harum vitae quia numquam ab temporibus quibusdam quod quaerat.
                  </p>
                </div>
              </div>
              <div className="flex">
                <FaMoneyBillWave className="text-[100px] text-white" />
                <div>
                  <h3>Tilte 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolorum modi harum vitae quia numquam ab temporibus quibusdam quod quaerat.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Home
