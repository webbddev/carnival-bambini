import { client, urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, ShoppingBag } from 'lucide-react';
import { Metadata } from 'next';

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function About() {
  const data = await getData();

  // Check for the existence of data and image1 specifically
  const hasImage = data?.image1?.asset;

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-8 h-full py-12 lg:py-24'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-between gap-y-12 lg:gap-x-20'>
        {/* Left Side: Dynamic Image from Sanity */}
        <div className='w-full lg:flex-1 relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl bg-muted shadow-2xl'>
          {hasImage ? (
            <Image
              src={urlFor(data.image1).url()}
              alt='CarnivalBambini boutique fashion'
              className='h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105'
              fill
              priority
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          ) : (
            <div className='h-full w-full flex flex-col items-center justify-center text-muted-foreground bg-secondary space-y-2'>
              <ShoppingBag className='h-10 w-10 opacity-20' />
              <span className='uppercase tracking-widest text-xs font-semibold opacity-50'>
                Image Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Right Side: Text Content */}
        <div className='w-full lg:flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
          <h1 className='text-5xl md:text-6xl lg:text-8xl pb-6 dark:text-gray-100 font-bold tracking-tighter font-display uppercase leading-none'>
            About Us
          </h1>

          <div className='mb-10 max-w-[550px] font-light text-muted-foreground text-lg leading-relaxed space-y-6'>
            <h2 className='text-2xl font-semibold text-foreground'>
              Making Every Childhood Moment Magical
            </h2>
            <p>
              At <strong className='text-foreground'>CarnivalBambini</strong>,
              we believe that every child deserves to be the star of their own
              story. Our boutique was born from a passion for exquisite
              craftsmanship and the belief that special occasions deserve
              extraordinary attire.
            </p>

            <p>
              We understand that &quot;Top Fashion&quot; isn&apos;t just about
              the aesthetic—it&apos;s about the feeling of a perfect fit and the
              durability of premium materials. We source only the most exclusive
              products to ensure your children stand out at every party.
            </p>

            <p className='italic border-l-4 border-primary pl-6 py-2 text-foreground font-medium'>
              Come and shop with us—because your little ones deserve the best.
            </p>
          </div>

          <div className='flex flex-wrap justify-center lg:justify-start gap-4 w-full'>
            <Button
              asChild
              size='lg'
              className='px-8 h-14 text-base uppercase tracking-wider'
            >
              <Link href='/all'>
                <ShoppingBag className='mr-2 h-5 w-5' />
                Shop Collection
              </Link>
            </Button>

            <Button
              variant='outline'
              size='lg'
              asChild
              className='px-8 h-14 text-base uppercase tracking-wider'
            >
              <Link href='/contact'>
                <Mail className='mr-2 h-5 w-5' />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
