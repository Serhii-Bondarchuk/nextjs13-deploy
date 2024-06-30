import Home from '@/components/home/Home';
import Title from '@/components/title/Title';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className="home_page">
        <Title title="Home page" />
        <Home />
      </div>
    </>
  );
}
