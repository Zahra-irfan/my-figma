import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[#252B42] headerr">
      <nav className="flex justify-between items-center">
        <div className="text-white text-xl font-bold ml-11 top-13 max-h-32 mt-8 ">BrandName</div>
        <ul className="flex space-x-11">
        <nav className=' navv flex space-x-7 justify-between items-center mr-12 mt-8 font-bold font-montserrat '>
          <li>
            <Link href="/" className="text-white hover:text-blue-300 ">Home</Link>
          </li>
          <li>
            <Link href="/Product" className="text-white hover:text-blue-300">Product</Link>
          </li>
          <li>
            <Link href="/Pricing" className="text-white hover:text-blue-300">Pricing</Link>
          </li>
          <li>
            <Link href="/Contact" className="text-white hover:text-blue-300 ">Contact
            </Link>
          </li>
         </nav>
         <nav className='flex justify-between gap-x-4 mt-8 font-bold'>
          <li>
            <Link href="/Login" className="text-white hover:text-blue-300 hover:underline font-montserrat">Login</Link>
          </li>
          <li>
            <button className=" text-white rounded-md px-4 py-1 font-bold bg-[#23A6F0] button hover:bg-blue-600">
                JOIN USS
            </button>
            
          </li>
          </nav>
        </ul>
      </nav>
    </header>
  );
}