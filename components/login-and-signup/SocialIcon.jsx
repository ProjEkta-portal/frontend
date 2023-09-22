import Image from 'next/image';
import React from 'react';

const SocialIcon = ({ src, alt, onClick }) => (
  <Image src={src} alt={alt} width={45} height={45} className="cursor-pointer" onClick={onClick} />
);

export default SocialIcon;