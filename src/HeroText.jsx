import { Typewriter } from 'react-simple-typewriter';

function HeroText() {
  return (
    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Source Code Pro, monospace' }}>
      <Typewriter
        words={[
          'Aspiring Software Engineer passionate about creating innovative solutions and building amazing digital experiences....',
        ]}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={40}
        delaySpeed={5000}
      />
    </p>
  );
}

export default HeroText;