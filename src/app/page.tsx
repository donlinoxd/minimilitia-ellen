import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='relative grid place-items-center h-screen w-screen'>
            <div className='absolute w-screen h-screen'>
                <Image src='/images/bg_home.webp' alt='Background' fill className='object-cover object-[calc(50%-45px)_50%]' />
            </div>
            <div className='absolute top-14 right-24 flex flex-col gap-4 items-center cursor-pointer'>
                <Image src='/images/settings.webp' alt='Logo' width={72} height={72} />
                <p className='text-gray-100'>SETTINGS</p>
            </div>
            <div className='flex flex-col gap-3 items-center z-10 pt-40'>
                <Link
                    href='/'
                    className='transition-all hover:bg-black/30 hover:scale-105 text-gray-200 rounded-2xl items-center justify-center bg-black/50 flex border-3 border-gray-300 h-20 w-[420px]'
                >
                    TEAM HQ
                </Link>
                <Link
                    href='/members'
                    className='transition-all hover:bg-black/30 hover:scale-105 text-gray-200 rounded-2xl items-center justify-center bg-black/50 flex border-3 border-gray-300 h-20 w-[420px]'
                >
                    THE BUILDERS
                </Link>
            </div>
        </div>
    )
}
