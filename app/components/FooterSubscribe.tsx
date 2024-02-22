import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Twitter,
  Youtube,
  Facebook,
  Leaf,
  Instagram,
  RussianRuble,
} from 'lucide-react';

import Link from 'next/link';

const FooterSubscribe = () => {
  return (
    <footer className='pt-8 pb-10 xl:pt-14 bg-primary text-white text-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8'>
          <div>
            <h2 className='capitalize leading-tight tracking-normal mb-2 text-2xl font-bold text-gray-100 dark:text-gray-200'>
              Subscribe to our newsletter
            </h2>
            <p className='text-white/80'>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
          </div>
          {/* form */}
          <form className='flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5'>
            <Input
              type='text'
              placeholder='Your email address'
              className='border-[1px] dark:border-gray-200 dark:focus:border-teal-500'
            />
            <Button className='w-full xl:max-w-[150px] rounded-md gap-x-2 border-[1px] dark:border-gray-200 bg-red-400 hover:bg-red-500 text-white'>
              <span className='text-sm font-bold tracking-wider uppercase'>
                Join
              </span>
            </Button>
          </form>
          {/* socials */}
          <div className='flex gap-10 mx-auto text-[20px] text-white/60 mb-8'>
            <Link href=''>
              <Youtube />
            </Link>
            <Link href=''>
              <Twitter />
            </Link>
            <Link href=''>
              <Facebook />
            </Link>
            <Link href=''>
              <Leaf />
            </Link>
            <Link href=''>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
      {/* copyright */}
      {/* <div className='py-6 border-t border-white/5 text-white'>
        Copyright &copy; {new Date().getFullYear()} Carnival Bambini. All rights
        reserved.
      </div> */}
    </footer>
  );
};

export default FooterSubscribe;
