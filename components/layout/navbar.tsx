import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@constants';
import { WrapperMaxWidth } from '@components';

const Navbar = () => {
  return (
    <nav className='p-6 shadow-md w-full'>
      {/* <WrapperMaxWidth> */}
      <div className=''>
        <Link
          href={ROUTES.home}
          className='flex items-end space-x-1 cursor-pointer'
        >
          <Image
            src='/brand.svg'
            alt='Arena Logo'
            width={30}
            height={50}
            priority
          />
          <Image
            src='/brand-name.svg'
            alt='Arena'
            width={100}
            height={50}
            priority
          />
        </Link>
      </div>
      {/* </WrapperMaxWidth> */}
    </nav>
  );
};

export { Navbar };
