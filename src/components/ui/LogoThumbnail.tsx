import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface LogoProps {
  type: 'black' | 'white'
}

const LogoThumbnail: FC<LogoProps> = ({ type }) => {
  return (
    <Link href="/" className="">
      <div className="h-[16px]">
        <Image
          src={
            type === 'black'
              ? '/logo.svg'
              : '/logo.svg'
          }
          height={100}
          width={100}
          alt="logo"
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  )
}

export default LogoThumbnail
