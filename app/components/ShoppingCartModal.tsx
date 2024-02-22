'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';

import { useShoppingCart } from 'use-shopping-cart';

export default function ShoppingCartModal() {
  const {
    cartCount,
    decrementItem,
    incrementItem,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    addItem,
  } = useShoppingCart();

  function handleError(error: Error) {
    console.error(error);
    alert('An error occurred. Please try again later.');
  }

  async function handleCheckoutClick(event: React.MouseEvent) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log('result');
        handleError(new Error(result.error));
      }
    } catch (error) {
      console.log(error);
      handleError(new Error('An error occurred. Please try again later.'));
    }
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className='sm:max-w-lg w-[90vw]'>
        <SheetHeader>
          <SheetTitle className='text-left mb-12'>
            Shopping Cart (<span className='text-primary'> {cartCount} </span>)
          </SheetTitle>
        </SheetHeader>

        <div className='h-full flex flex-col justify-between'>
          <div className='mt-8 flex-1 overflow-y-auto'>
            <ul className='-my-6 divide-y divide-gray-200'>
              {cartCount === 0 ? (
                <div className='flex flex-col items-center justify-center w-full h-[760px]'>
                  <h3 className='text-lg uppercase text-primary dark:text-gray-100'>
                    Your cart is empty
                  </h3>
                </div>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className='flex py-6'>
                      <div className='h-24 w-24 overflow-hidden rounded-md border border-gray-200'>
                        <Image
                          src={entry.image as string}
                          priority
                          alt='Product image'
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className='ml-4 flex flex-1 flex-col'>
                        <div>
                          <div className='flex justify-between text-base font-medium text-gray-900 dark:text-gray-100'>
                            <h3>{entry.name}</h3>
                            <p className='ml-4 font-normal text-right'>
                              ${entry.price * entry.quantity}
                            </p>
                          </div>
                          <p className='mt-1 mb-3 text-sm text-gray-500 line-clamp-2'>
                            {entry.description}
                          </p>
                        </div>

                        <div className='flex flex-1 items-end justify-between text-sm'>
                          <div className='flex flex-row items-center gap-4'>
                            QTY:
                            <button onClick={() => decrementItem(entry.id)}>
                              <Minus className='w-4 h-4' />
                            </button>
                            <p className='font-semibold text-gray-500'>
                              {entry.quantity}
                            </p>
                            <button onClick={() => incrementItem(entry.id)}>
                              <Plus className='w-4 h-4' />
                            </button>
                          </div>

                          <div className='flex'>
                            <button
                              type='button'
                              onClick={() => removeItem(entry.id)}
                              className='font-medium text-primary hover:text-primary/80'
                            >
                              {/* <X className='w-6 h-6' /> */}
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
            <div className='flex justify-between text-base font-medium text-gray-900 dark:text-gray-100'>
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className='mt-0.5 text-sm text-gray-500'>
              Shipping and taxes are calculated at checkout.
            </p>

            <div className='mt-6'>
              <Button onClick={handleCheckoutClick} className='w-full'>
                Checkout
              </Button>
            </div>

            <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
              <p>
                OR{' '}
                <button
                  onClick={() => handleCartClick()}
                  className='font-medium text-primary hover:text-primary/80'
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
