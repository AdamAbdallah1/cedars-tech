import React from 'react';

const siteLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#solutions' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const contactLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/96181090757', external: true },
  { name: 'Instagram', href: 'https://instagram.com/cedars.tech', external: true },
  { name: 'Email', href: 'mailto:contact.cedarstech@proton.me', external: false },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left: wordmark + tagline */}
        <div>
          <p className="text-white font-black tracking-tight text-lg">
            CEDARS<span className="text-brand"> TECH</span>
          </p>
          <p className="mt-3 text-gray-500 text-sm">
            Websites that mean business.
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gray-600">
            Web Design Studio · Lebanon
          </p>
        </div>

        {/* Right: links */}
        <div className="grid grid-cols-2 gap-10">
          <nav aria-label="Footer">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-600 font-bold mb-4">Pages</p>
            <ul className="space-y-2.5">
              {siteLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-gray-400 hover:text-white transition">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-600 font-bold mb-4">Contact</p>
            <ul className="space-y-2.5">
              {contactLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-10">
        <p className="text-[11px] text-gray-600">© 2026 Cedars Tech</p>
      </div>
    </footer>
  );
};

export default Footer;
