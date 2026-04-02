'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Description() {
    return (
        <div className='relative min-h-screen w-screen overflow-hidden flex flex-col items-center justify-center'>
            {/* Background */}
            <div className='absolute inset-0 -z-10'>
                <Image src='/images/bg.webp' alt='Background' fill className='object-cover' />
                <div className='absolute inset-0 bg-black/65' />
            </div>

            {/* Decorative corner object */}
            <div className='absolute bottom-0 right-0 -z-10 opacity-15 pointer-events-none'>
                <Image src='/images/back.png' alt='' width={220} height={220} className='object-cover' />
            </div>
            <div className='absolute top-0 left-0 -z-10 opacity-10 pointer-events-none rotate-180'>
                <Image src='/images/back.png' alt='' width={180} height={180} className='object-cover' />
            </div>

            {/* Header bar */}
            <div className='flex justify-center w-full pt-0 relative'>
                <Link
                    href='/'
                    className='absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm'
                >
                    <span className='text-lg'>←</span> Back
                </Link>
                <div className='bg-black border-b-2 border-x-2 border-gray-100 rounded-b-2xl text-gray-100 h-16 px-16 flex items-center'>
                    <p className='font-bold text-2xl tracking-widest'>GROUP 3</p>
                </div>
            </div>

            {/* Main card */}
            <div className='flex-1 flex items-center justify-center px-4 py-10 w-full'>
                <div className='relative max-w-2xl w-full'>
                    {/* Outer glow border */}
                    <div className='absolute -inset-0.5 rounded-2xl bg-linear-to-br from-yellow-500/60 via-orange-600/40 to-yellow-700/60 blur-sm' />

                    {/* Card body */}
                    <div className='relative bg-black/80 border-2 border-yellow-600/70 rounded-2xl overflow-hidden'>

                        {/* Tactical top strip */}
                        <div className='bg-linear-to-r from-yellow-700 via-orange-600 to-yellow-700 px-6 py-2 flex items-center justify-between'>
                            <div className='flex gap-1.5'>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className='w-2 h-2 rounded-full bg-black/40' />
                                ))}
                            </div>
                            <span className='text-black text-xs font-black tracking-[0.3em] uppercase'>Classified Intel</span>
                            <div className='flex gap-1.5'>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className='w-2 h-2 rounded-full bg-black/40' />
                                ))}
                            </div>
                        </div>

                        {/* Squad badge row */}
                        <div className='flex items-center justify-center gap-4 px-8 pt-6 pb-2'>
                            <div className='h-px flex-1 bg-linear-to-r from-transparent to-yellow-600/60' />
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 rounded-full border-2 border-yellow-500 bg-black/60 flex items-center justify-center overflow-hidden shadow-lg shadow-yellow-900/50'>
                                    <Image src='/images/object.webp' alt='Squad Icon' width={56} height={56} className='object-cover opacity-90' />
                                </div>
                                <span className='mt-1 text-yellow-400 text-[10px] tracking-[0.4em] uppercase font-bold'>Squad</span>
                            </div>
                            <div className='h-px flex-1 bg-linear-to-l from-transparent to-yellow-600/60' />
                        </div>

                        {/* Title */}
                        <div className='text-center pb-4'>
                            <h1
                                className='text-4xl font-black tracking-[0.15em] uppercase'
                                style={{
                                    color: '#f5c518',
                                    textShadow: '0 0 20px rgba(245,197,24,0.5), 2px 2px 0 #7a3f00, 4px 4px 0 #3d1f00',
                                }}
                            >
                                The All-Rounders
                            </h1>
                            <p className='text-orange-400/70 text-xs tracking-[0.5em] uppercase mt-1'>Group 3 · Recon File</p>
                        </div>

                        {/* Divider */}
                        <div className='mx-6 h-px bg-linear-to-r from-transparent via-yellow-600/60 to-transparent' />

                        {/* Description text */}
                        <div className='px-8 pt-6 pb-4'>
                            {/* Corner brackets decoration */}
                            <div className='relative border border-yellow-700/40 rounded-lg p-5 bg-yellow-950/10'>
                                <span className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500 rounded-tl' />
                                <span className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500 rounded-tr' />
                                <span className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500 rounded-bl' />
                                <span className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500 rounded-br' />

                                <p className='text-gray-200 text-sm leading-relaxed text-center'>
                                    Sounds like a fun group, right? Because it is! It&apos;s the group where{' '}
                                    <span className='text-yellow-400 font-semibold'>all-rounders belong</span>. The type of students who are{' '}
                                    <span className='text-yellow-400 font-semibold'>smart and can ace every exam</span> without even reviewing. They&apos;re sporty, yet maintain a{' '}
                                    <span className='text-yellow-400 font-semibold'>carefree attitude</span> most of the time.
                                </p>
                                <p className='text-gray-200 text-sm leading-relaxed text-center mt-3'>
                                    This group has a <span className='text-yellow-400 font-semibold'>unique personality</span>. They can understand every joke, and their wit is always appreciated. They&apos;re the ones who{' '}
                                    <span className='text-yellow-400 font-semibold'>excel in academics</span>, shine in sports, and bring laughter to every moment.
                                </p>
                                <p className='text-gray-200 text-sm leading-relaxed text-center mt-3'>
                                    Truly, <span className='text-orange-400 font-bold'>Group 3</span> embodies the perfect blend of{' '}
                                    <span className='text-yellow-400 font-semibold'>brains, athletes, and joy</span>.
                                </p>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className='grid grid-cols-3 gap-3 px-8 pb-6 pt-2'>
                            {[
                                { icon: '🧠', label: 'Brains', value: 'MAX' },
                                { icon: '🏆', label: 'Athletics', value: 'MAX' },
                                { icon: '😄', label: 'Vibe', value: 'MAX' },
                            ].map(({ icon, label, value }) => (
                                <div
                                    key={label}
                                    className='flex flex-col items-center gap-1 bg-black/40 border border-yellow-700/40 rounded-xl py-3'
                                >
                                    <span className='text-xl'>{icon}</span>
                                    <span className='text-yellow-500 text-[10px] tracking-widest uppercase font-bold'>{label}</span>
                                    <span
                                        className='text-xs font-black tracking-widest'
                                        style={{ color: '#f5c518', textShadow: '0 0 8px rgba(245,197,24,0.6)' }}
                                    >
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom strip */}
                        <div className='bg-linear-to-r from-yellow-700 via-orange-600 to-yellow-700 px-6 py-1.5 flex items-center justify-center'>
                            <span className='text-black text-[10px] font-black tracking-[0.4em] uppercase'>End of File</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
