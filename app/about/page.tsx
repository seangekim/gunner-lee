import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - Gunner Lee',
  description: 'Learn more about Gunner Lee',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About</h1>
        
        <div className="mb-12">
          <a  href="https://drive.google.com/file/d/1QxiERG_iQAhlkHT57l1bDAoqRO4kx8ve/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-md uppercase"
          >
            Resume
          </a>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start">
          <div className="w-full max-w-[300px] space-y-4">
            <Image
              src="/images/gunner_headshot.jpg"
              alt="Gunner Lee"
              width={300}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
            />
            
            <div className="space-y-2 text-gray-600">
              <p><a href="mailto:gunner.m.lee@gmail.com" className="hover:text-primary">gunner.m.lee@gmail.com</a></p>
              <p><a href="tel:+15108286946" className="hover:text-primary">(510) 828-6946</a></p>
            </div>
          </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Industrial designer by trade, tinkerer at heart. I'm a 21 year old California 
                based designer focused on creating physical experiences through products like 
                furniture, leatherwork, lighting, and other physical goods.
              </p>
              <p>
                Whether it be 3D printing, electronics, or woodworking, I am constantly exploring 
                new mediums to expand my toolkit and integrate them into my work. When I'm not in 
                the studio hammering, drilling, cutting, building, or breaking something, I'm out 
                backpacking, climbing, playing basketball, or repairing vintage video cameras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}