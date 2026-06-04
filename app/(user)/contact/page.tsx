import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | CarnivalBambini',
  description:
    'Get in touch with CarnivalBambini for order support, styling advice, or business inquiries.',
};

export default function Contact() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2'>
        {/* Contact Information */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-5xl uppercase font-display'>
            Get in Touch
          </h1>
          <p className='mt-6 text-lg leading-8 text-muted-foreground'>
            Have a question about our exclusive collections or need help with an
            order? Our concierge team is here to assist you in making every
            childhood moment magical.
          </p>

          <dl className='mt-10 space-y-6 text-base leading-7 text-muted-foreground'>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Address</span>
                <MapPin className='h-7 w-6 text-primary' aria-hidden='true' />
              </dt>
              <dd>
                Boutique Headquarters
                <br />
                Chisinau, Moldova
              </dd>
            </div>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Telephone</span>
                <Phone className='h-7 w-6 text-primary' aria-hidden='true' />
              </dt>
              <dd>
                <a
                  className='hover:text-foreground transition-colors'
                  href='tel:+1 (555) 234-5678'
                >
                  +373 (XX) XXX-XXX
                </a>
              </dd>
            </div>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Email</span>
                <Mail className='h-7 w-6 text-primary' aria-hidden='true' />
              </dt>
              <dd>
                <a
                  className='hover:text-foreground transition-colors'
                  href='mailto:hello@carnivalbambini.com'
                >
                  hello@carnivalbambini.com
                </a>
              </dd>
            </div>
            <div className='flex gap-x-4'>
              <dt className='flex-none'>
                <span className='sr-only'>Hours</span>
                <Clock className='h-7 w-6 text-primary' aria-hidden='true' />
              </dt>
              <dd>
                Mon - Fri: 09:00 - 18:00
                <br />
                Sat: 10:00 - 14:00
              </dd>
            </div>
          </dl>
        </div>

        {/* Contact Form */}
        <div className='rounded-2xl bg-muted/30 p-8 lg:p-12 border border-border/50'>
          <form action='#' method='POST' className='space-y-6'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-semibold leading-6 text-foreground'
                >
                  First name
                </label>
                <div className='mt-2.5'>
                  <Input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-semibold leading-6 text-foreground'
                >
                  Last name
                </label>
                <div className='mt-2.5'>
                  <Input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semibold leading-6 text-foreground'
              >
                Email
              </label>
              <div className='mt-2.5'>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-semibold leading-6 text-foreground'
              >
                Message
              </label>
              <div className='mt-2.5'>
                <Textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='resize-none'
                />
              </div>
            </div>
            <div className='mt-10'>
              <Button
                type='submit'
                className='w-full text-lg py-6 uppercase tracking-wider'
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
