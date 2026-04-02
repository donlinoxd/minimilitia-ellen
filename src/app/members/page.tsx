'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Student {
    fullname: string
    nickname: string
    birthday: string
    achievements: string[]
    shortQuote?: string
    hobbies: string
    skillsTalent: string
    dreamJob: string
    favoriteSubject?: string
    favoriteSong: string
    profile: string
}

const students: Student[] = [
    {
        fullname: 'CURAMMENG, JASMINE',
        nickname: 'ASZY',
        birthday: 'February 25, 2009',
        achievements: [
            'Grade 1: 1st Honor, Araling Panlipunan 2nd Place Quiz Bee, Star Scout of the Year, 3rd Place Elementary Level Scrabble, Subject Excellence',
            'Grade 2: 1st Honor, Champion English Storytelling, Subject Excellence',
            'Grade 3: With Honor, Subject Excellence',
            'Grade 4: With Honor, YES-O Vice President, 3rd Place Science Quiz Bee',
            'Grade 5: SPG/SSLG President, With Honor',
            'Grade 6: SSLG President, Batch 2020-2021 Salutatorian, With Honor',
            'Grade 7: With Honor, SSSP/SSC Passer, Campus News Journalist, Subject Excellence',
            'Grade 8: With Honor, RCY Representative, Campus News Journalist, Festival Dance Champion',
            'Grade 9: With Honor, YFC Club Vice-President, YES-O Grade 9 Representative, Campus News Journalist, Grade 9 Women Volleyball Representative',
            'Grade 10: YES-O Grade 10 Representative, Ang Bantayog News Journalist, FHMS Club Project Manager, YFC G10 Representative, TechVoch Gold Medalist, FHMS Club Awardee, With Honor, Filipino Pagbigkas Qualifier, Consistent SSSP/SSC Student G7–G10',
            'Grade 11: With High Honor (1st Sem), Subject Excellence',
        ],
        shortQuote: '"We know what we are, but not what we may be." — William Shakespeare',
        hobbies: 'Volleyball, Watching Musicals, Watching Jdrama, Cooking, Drawing, Writing Poems, Reading Novels, Playing Instruments',
        skillsTalent: 'Singing',
        dreamJob: 'Doctor',
        favoriteSubject: 'N/A',
        favoriteSong: 'Gimme Chocolate!!!',
        profile: '/images/cumareng.jfif',
    },
    {
        fullname: 'CARPIO, JHOANNA MAE S.',
        nickname: 'KEKE',
        birthday: 'December 16, 2008',
        achievements: ['Honors'],
        shortQuote: undefined,
        hobbies: 'Playing Badminton, Watching Kdrama',
        skillsTalent: "Can solve a 3×3 Rubik's Cube",
        dreamJob: 'Lawyer',
        favoriteSubject: 'Math',
        favoriteSong: 'Ang Balikat at Baywang',
        profile: '/images/carpio.jfif',
    },
    {
        fullname: 'DALANGPAN, NHICOLE',
        nickname: 'NHICS',
        birthday: 'February 9, 2009',
        achievements: [
            "Learned to accept criticisms and understand that things won't always go as planned",
            'Developed respect for differing perspectives',
            'Became an optimist and learned to understand myself better to avoid irrational actions',
        ],
        shortQuote: '"No one can do everything, but everyone can do something." — Max Lucado',
        hobbies: 'Playing Drums, Dancing, Paleontology, Mythology, Music',
        skillsTalent: 'Dancing',
        dreamJob: 'Chemical Engineer / Cardiologist',
        favoriteSubject: 'Science',
        favoriteSong: 'With a Smile — Eraserheads',
        profile: '/images/dalangpan.jfif',
    },
    {
        fullname: 'LUMAYAG, KRIS ZHYREILL A.',
        nickname: 'KIT',
        birthday: 'January 30, 2009',
        achievements: [
            'With High Honor — Grade 8',
            'With Honors — Grades 9–11',
            'P.I.O. Math Club 2024–2025',
            'Vice President Choir 2023–2025',
            'Senior Editor at Paradigm (Journalism)',
            'DSPC Representative for Editorial Writing',
            'Circulation Manager at Paradigm (Journalism)',
            'Completed Youth Volunteer Formation Course — Red Cross Valenzuela Chapter',
            "Champion Men's Volleyball 2024–2025, Outstanding Medal Award in Mobile",
            'Computer Training Course on Basic Programming Robotics',
            "1st Place Swimming Men's 25M Freestyle — Buhay at Patuloy na Lumalaban",
        ],
        shortQuote: '"The only person you need to impress is yourself."',
        hobbies:
            'Singing, Swimming, Volleyball, Running, Jogging, Writing, Reading, Exercising, Watching Movies and Documentaries; Interests: Politics, Psychology, Law, Economics, Literature, Philosophy, Chemistry, Social Sciences, Medicine',
        skillsTalent: 'Singing; Critical Thinker, Athletic, Flexible',
        dreamJob: 'Singer, Lawyer, Nurse, Economist, Chemist, and Organization Founder for homeless children',
        favoriteSubject: 'Chemistry, Philosophy, Law, and Politics',
        favoriteSong: 'Too Little Too Late · Complicated · Bituin',
        profile: '/images/lumayag.jfif',
    },
    {
        fullname: 'ERMAC, KRISTINE ANNE',
        nickname: 'TINE',
        birthday: 'July 29, 2009',
        achievements: ['With Honors throughout Junior High School'],
        shortQuote: '"It always seems impossible until it\'s done." — Nelson Mandela',
        hobbies: 'Reading',
        skillsTalent: '👁️👄👁️',
        dreamJob: 'Doctor',
        favoriteSubject: undefined,
        favoriteSong: 'I Like Me Better — Lauv',
        profile: '/images/ermac.jfif',
    },
    {
        fullname: 'MALENAB, JOVANIE G.',
        nickname: 'JV',
        birthday: 'September 13, 2007',
        achievements: ['ML Tournament Champion'],
        shortQuote: '"The concept of hope is nothing more than giving up."',
        hobbies: 'Drawing, Gaming',
        skillsTalent: 'Drawing',
        dreamJob: 'Manga Writer',
        favoriteSubject: undefined,
        favoriteSong: 'In Luv W U',
        profile: '/images/malenab.jfif',
    },
    {
        fullname: 'PANGILINAN, PREECZHA C.',
        nickname: 'PRISHA',
        birthday: 'November 28, 2008',
        achievements: [
            'With Honors — Grades 1–7',
            'With High Honors — Grades 8–10',
            "3rd Place Pagsulat ng Editoryal: Pampaaralang Komperensiya sa Pamamahayag '23–'24",
            "Best in TLE (S.Y. '23–'24)",
            "Top Achiever in Science (S.Y. '23–'24)",
            "Outstanding Performance in Comm Arts Filipino (S.Y. '24–'25)",
            "1st Place Filipino Values Month Slogan Making (S.Y. '24–'25)",
            "2nd Place Buwan ng Wika Sulat-Baybayin Slogan (S.Y. '24–'25)",
            "2nd Place English Month Slogan Making Contest (S.Y. '24–'25)",
            'With High Honors — Grade 11 1st Sem',
            'Subject Excellence: Earth Sci, GenMath, Fil 1, PreCal',
            "Ang Gatdula (School Publication) Patnugot ng Balita (S.Y. '24–'25)",
            'BKD Hobby of the Month: Calligraphy & Crocheting (Tutor)',
            'MonSo Preskon 2024: Pagwawasto at Pag-uulo ng Balita (Participant)',
        ],
        shortQuote: '"Feel the fear and do it anyway."',
        hobbies: 'Watching Movies/Series, Listening to Music/Podcasts, Crocheting, Cooking, Collecting Items, Kpop/Kdramas, Cats',
        skillsTalent: 'Crocheting, Calligraphy, Graphic Design',
        dreamJob: 'Veterinarian',
        favoriteSubject: 'Math',
        favoriteSong: 'Circles — Seventeen',
        profile: '/images/pangilinan.jfif',
    },
    {
        fullname: 'TABUZO, JOHN CARLO',
        nickname: 'JC',
        birthday: 'August 8, 2009',
        achievements: ['Most Loyal'],
        shortQuote: '"It is what it is."',
        hobbies: 'Basketball',
        skillsTalent: 'Magmahal',
        dreamJob: 'Computer Engineer',
        favoriteSubject: 'ICT',
        favoriteSong: 'Nothing — Bruno Major',
        profile: '/images/tabuzo.jfif',
    },
]

export default function Members() {
    const [selected, setSelected] = useState(0)
    const student = students[selected]

    return (
        <div className='relative min-h-screen w-screen overflow-hidden'>
            {/* Background */}
            <div className='absolute inset-0 -z-10'>
                <Image src='/images/bg.webp' alt='Background' fill className='object-cover' />
                <div className='absolute inset-0 bg-black/50' />
            </div>

            {/* Decorative back image */}
            <div className='absolute bottom-0 right-0 -z-10 opacity-20 pointer-events-none'>
                <Image src='/images/back.png' alt='' width={200} height={200} className='object-cover' />
            </div>

            {/* Header */}
            <div className='flex justify-center pt-0 relative'>
                <Link
                    href='/'
                    className='absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm'
                >
                    <span className='text-lg'>←</span> Back
                </Link>
                <div className='bg-black border-b-2 border-x-2 border-gray-100 rounded-b-2xl text-gray-100 h-16 px-16 flex items-center'>
                    <p className='font-bold text-2xl tracking-widest'>GROUP 2</p>
                </div>
            </div>

            <div className='flex h-[calc(100vh-4rem)] px-4 gap-4 py-4'>
                {/* Sidebar — student list */}
                <div className='w-56 flex flex-col gap-2 overflow-y-auto pr-1'>
                    {students.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(i)}
                            className={`flex items-center gap-3 p-2 h-[62px] rounded-xl border transition-all text-left ${
                                selected === i
                                    ? 'bg-white/20 border-white text-white'
                                    : 'bg-black/40 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/50'
                            }`}
                        >
                            <Image
                                src={s.profile}
                                alt={s.nickname}
                                width={44}
                                height={44}
                                className='rounded-full min-h-11 max-h-11 object-cover shrink-0'
                            />
                            <div className='min-w-0'>
                                <p className='text-xs font-bold truncate'>{s.nickname}</p>
                                <p className='text-[10px] text-gray-400 truncate'>{s.fullname.split(',')[0]}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Main detail card */}
                <div className='flex-1 bg-black/60 border border-white/20 rounded-2xl overflow-y-auto'>
                    {/* Card header */}
                    <div className='sticky top-0 z-10 bg-black/80 backdrop-blur border-b border-white/10 px-8 py-4 flex items-center gap-6'>
                        <Image
                            src={student.profile}
                            alt={student.nickname}
                            width={72}
                            height={72}
                            className='rounded-full object-cover ring-2 ring-white/30 shrink-0'
                        />
                        <div>
                            <p className='text-white font-bold text-xl tracking-wide'>{student.fullname}</p>
                            <p className='text-gray-400 text-sm'>
                                "{student.nickname}" · {student.birthday}
                            </p>
                            {student.shortQuote && <p className='text-gray-300 italic text-sm mt-1'>{student.shortQuote}</p>}
                        </div>
                    </div>

                    <div className='px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-gray-200'>
                        {/* Achievements */}
                        <div className='lg:col-span-2'>
                            <SectionTitle>Achievements</SectionTitle>
                            <ul className='mt-2 space-y-1 list-none'>
                                {student.achievements.map((a, i) => (
                                    <li key={i} className='flex gap-2 items-start'>
                                        <span className='text-yellow-400 mt-0.5 shrink-0'>★</span>
                                        <span>{a}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Field label='Hobbies / Interests'>{student.hobbies}</Field>
                        <Field label='Skills / Talents'>{student.skillsTalent}</Field>
                        <Field label='Dream Job'>{student.dreamJob}</Field>
                        {student.favoriteSubject && <Field label='Favorite Subject'>{student.favoriteSubject}</Field>}
                        <Field label='Favorite Song'>{student.favoriteSong}</Field>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h3 className='text-white font-semibold text-sm uppercase tracking-widest border-b border-white/20 pb-1'>{children}</h3>
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <SectionTitle>{label}</SectionTitle>
            <p className='mt-2 text-gray-300'>{children}</p>
        </div>
    )
}
