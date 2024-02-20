import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

export default function MenubarDemo() {
  return (
    <Menubar className='mx-auto'>
      <MenubarMenu>
        <MenubarTrigger>Home</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Products</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Men</MenubarItem>
          <MenubarItem>Women</MenubarItem>
          <MenubarItem>Teens</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Blog</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Contact Me</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
