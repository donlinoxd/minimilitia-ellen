import Image from 'next/image'

export default function Members() {
    return (
        <div className='relative grid place-items-center h-screen w-screen'>
            <div className='absolute top-0 left-0 h-full w-full'>
                <Image src='/images/bg.webp' alt='Background' fill className='object-cover' />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center z-10'></div>
        </div>
    )
}
