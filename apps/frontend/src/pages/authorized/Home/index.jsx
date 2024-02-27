import Background from './Background';
import Section1 from './Section1';
import Section2 from './Section2';

export default function HomePage() {
  return (
    <Background className='space-y-6'>
      <Section1 />

      <hr />

      <Section2 />
    </Background>
  );
}
