import { FaPython } from 'react-icons/fa';

function Logo1() {
  return (
    <div className="relative w-16 h-16">
      {/* Bottom part - Yellow */}
      <FaPython
        style={{
          color: '#FFD750',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '75%',
          height: '75%',
          clipPath: 'inset(50% 0 0 0)', // Show bottom half
        }}
      />

      {/* Top part - Blue */}
      <FaPython
        style={{
          color: '#306998',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '75%',
          height: '75%',
          clipPath: 'inset(0 0 50% 0)', // Show top half
        }}
      />
    </div>
  );
}

export default Logo1;
