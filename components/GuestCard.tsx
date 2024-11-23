import Image from 'next/image';
import Link from 'next/link';

interface GuestCardProps {
  imageSrc: string;
  name: string;
  designation: string;
  description: string;
  altText?: string;
  link: string;
}

export default function GuestCard({
  imageSrc,
  name,
  designation,
  description,
  altText,
  link,
}: GuestCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="cursor-pointer max-sm:w-[300px]"
    >
      <div className="mx-auto mt-10 flex flex-col gap-2 rounded-3xl border-2 border-slate-500 bg-gradient-to-br from-[#6dbbff75] to-[#6dbbff05] p-5 shadow-[0_1px_30px_rgba(98,182,255,0.4)] hover:from-blue-500 hover:to-purple-700 md:w-[450px]">
        <div className="overflow-visible py-2">
          <Image
            alt={altText || `${name}'s profile picture`}
            className="rounded-xl bg-white object-cover"
            src={imageSrc}
            loading="lazy"
            width={400}
            height={250}
          />
        </div>
        <div className="flex-col">
          <h2 className="text-2xl font-bold uppercase tracking-wider sm:text-3xl">
            {name}
          </h2>
          <h3 className="text-xl font-bold tracking-wider">{designation}</h3>
          <p className="text-default-500 tracking-wider">{description}</p>
        </div>
      </div>
    </Link>
  );
}
