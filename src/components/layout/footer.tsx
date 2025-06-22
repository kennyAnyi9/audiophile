import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const footerNavigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Headphones', href: '/products?category=headphones' },
      { name: 'Speakers', href: '/products?category=speakers' },
      { name: 'Earphones', href: '/products?category=earphones' },
    ],
  }

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="flex flex-col gap-12 place-items-center md:place-items-start">
          {/* Orange accent bar */}
          <div className="h-1 w-[101px] bg-primary absolute top-0 left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none lg:left-8"></div>
          
          {/* Logo and Navigation */}
          <div className="flex flex-col lg:flex-row place-items-center md:place-items-start w-full lg:justify-between gap-12">
            <Link href="/">
              <Image 
                alt="audiophile logo" 
                src="/assets/shared/desktop/logo.svg" 
                width={143} 
                height={25} 
              />
            </Link>
            <div>
              <ul className="flex flex-col md:flex-row gap-9 items-center font-bold">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-white hover:text-primary transition-colors uppercase text-sm tracking-wide"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Description and Social Links */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-12 lg:gap-0">
            <p className="text-[15px] text-white/50 lg:max-w-[540px] text-center md:text-left leading-relaxed">
              Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and
              sound specialists who are devoted to helping you get the most out of personal audio. Come and visit
              our demo facility - we&apos;re open 7 days a week.
            </p>
            <div className="hidden lg:flex items-end">
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright and Mobile Social Links */}
          <div className="flex flex-col md:flex-row items-center w-full md:justify-between gap-12">
            <p className="text-white/50 font-bold text-[15px]">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
            <div className="lg:hidden flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}