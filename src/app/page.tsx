import Image from 'next/image';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import SignIn from '../components/SignIn';
import Hero from '../components/Hero';
import CopyRight from '../components/Copyright';
import { getUser } from '@/lib/auth';
config.autoAddCss = false;
export default function Home() {
  const user = getUser();
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="flex md:w-1/2 flex-col  items-start justify-between px-8 py-4 md:px-28 md:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full blur-full bg-purple-700 translate-x-1/2 opacity-50 -translate-y-1/2"></div>
        {!user.id && <SignIn />}
        <Hero />
        <CopyRight />
      </div>
      <div className="flex flex-col p-16 md:w-1/2">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a className="underline hover:text-gray-50"> criar agora</a>
          </p>
        </div>
      </div>
    </main>
  );
}
