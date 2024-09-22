import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className='w-full h-20 flex justify-center bg-white shadow-md z-50'>
      <div className='max-w-6xl w-full flex justify-between items-center py-4 px-8'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logo.png'
              width={154}
              height={37}
              alt='logo'
              style={{ width: 154, height: 37 }}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className='flex space-x-8 text-darklava text-lg'>
          <Link href='/myplan'>
            <span className='hover:text-green-600 cursor-pointer'>
              나의플랜
            </span>
          </Link>
          <Link href='/campinglog'>
            <span className='hover:text-green-600 cursor-pointer'>
              캠핑로그
            </span>
          </Link>
          <Link href='/recommendation'>
            <span className='hover:text-green-600 cursor-pointer'>
              장비추천
            </span>
          </Link>
          <Link href='/trade'>
            <span className='hover:text-green-600 cursor-pointer'>
              중고거래
            </span>
          </Link>
          <Link href='/community'>
            <span className='hover:text-green-600 cursor-pointer'>
              커뮤니티
            </span>
          </Link>
          <Link href='/notice'>
            <span className='hover:text-green-600 cursor-pointer'>
              이벤트/공지사항
            </span>
          </Link>
        </nav>

        {/* Utility Icons */}
        <div className='flex space-x-4'>
          <Image
            src='/icons/Util1.svg'
            width={30}
            height={30}
            alt='alarm'
            className='cursor-pointer'
          />
          <Image
            src='/icons/Util2.svg'
            width={30}
            height={30}
            alt='tent'
            className='cursor-pointer'
          />
          <Image
            src='/icons/Util3.svg'
            width={30}
            height={30}
            alt='mypage'
            className='cursor-pointer'
          />
        </div>
      </div>
    </header>
  )
}
