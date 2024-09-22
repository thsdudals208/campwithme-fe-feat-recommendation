import Image from "next/image"

export default function Footer() {
  return (
    <footer className='w-full h-40 flex justify-center bg-white border-t border-[#EBEDE2]'>
      <div className='max-w-6xl w-full flex justify-between mt-4 py-4 px-8'>
        {/* Footer Logo */}
        <div>
          <Image
            src='/images/footerLogo.png'
            width={138}
            height={34}
            alt='footerlogo'
            style={{ width: 138, height: 34 }}
          />
        </div>

        {/* Contact Link */}
        <div>
          <span className='text-darklava cursor-pointer'>1:1 문의</span>
        </div>
      </div>
    </footer>
  )
}
