import Link from "next/link"

const Footer = () => {
    return (
      <footer className="container flex justify-center items-center">
        <section className="w-full bg-white text-zinc-400 text-center p-8 rounded-tr-[5rem] rounded-tl-[5rem] border border-sky-200">
            Develop by 
            <Link target="_blank" href="https://github.com/Ghorbani-Dev1985" className="ml-1 hover:text-sky-500 transition-colors">Ghorbani-Dev1985</Link>
        </section>
           
      </footer>
    )
  }
  
  export default Footer