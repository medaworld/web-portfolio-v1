import Head from 'next/head';
import Image from 'next/image';
import { Main } from '../styles';
import MyLogo from '/public/favicon.png';
export default function Home() {
  return (
    <Main>
      <Image src={MyLogo.src} alt={'My Logo'} width={100} height={100} />
    </Main>
  );
}
