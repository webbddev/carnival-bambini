import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

import img from '/public/undraw_questions_re_1fy7.svg';

export default function stripeError() {
  return (
    <div className='h-screen'>
      <div className='mt-32 flex flex-col justify-center items-center'>
        <div className='mb-10'>
          <Image src={img} alt='Error Image' width={500} height={500} />
        </div>

        <div className='text-center'>
          <h3 className='md:text-xl text-base text-gray-700 dark:text-gray-200 font-semibold text-center'>
            Something went wrong!
          </h3>

          <Button asChild className='mt-5'>
            <Link href='/'>Back to the homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
