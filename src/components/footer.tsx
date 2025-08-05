'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Send, Twitter, Facebook, Instagram, Linkedin, Youtube, Github, ExternalLink, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'News & Articles', href: '/blog' },
      { name: 'Opportunities', href: '/opportunities' },
      { name: 'Campaigns', href: '/campaigns' },
      { name: 'About Us', href: '/about' },
      { name: 'Join Us', href: '/join' },
    ],
    'Categories': [
      { name: 'Research', href: '/blog?category=research' },
      { name: 'Student Stories', href: '/blog?category=stories' },
      { name: 'Opinion Pieces', href: '/blog?category=opinion' },
      { name: 'Creative Works', href: '/blog?category=creative' },
      { name: 'Scholarships', href: '/opportunities?type=scholarships' },
      { name: 'Events', href: '/opportunities?type=events' },
    ],
    'Resources': [
      { name: 'Writer Guidelines', href: '/guidelines' },
      { name: 'Submission Portal', href: '/submit' },
      { name: 'Archive', href: '/archive' },
      { name: 'Newsletter', href: '/newsletter' },
      { name: 'Press Kit', href: '/press' },
      { name: 'FAQ', href: '/faq' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Code of Conduct', href: '/conduct' },
      { name: 'DMCA', href: '/dmca' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/thedailyscholar', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/thedailyscholar', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/thedailyscholar', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/thedailyscholar', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/thedailyscholar', color: 'hover:text-red-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/the-daily-scholar', color: 'hover:text-gray-600' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@thedailyscholar.com', href: 'mailto:contact@thedailyscholar.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Scholar Street, Academic City, AC 12345', href: '#' },
  ];

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      alert('Successfully subscribed to newsletter!');
    }, 1500);
  };

  return (
    <footer className="bg-deep-charcoal text-paper-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-pure-white mb-2">The Daily Scholar</h2>
              <p className="text-gray-300 mb-4">
                A global student-driven platform combining digital journalism with opportunity sharing, 
                research collaboration, and community empowerment.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-pure-white mb-3">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubscribe} className="space-y-3">
                <div>
                  <Label htmlFor="newsletter-email" className="text-gray-300 text-sm">
                    Subscribe to our newsletter
                  </Label>
                  <div className="flex mt-1">
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="bg-deep-charcoal border-gray-600 text-pure-white placeholder-gray-400 rounded-r-none focus:border-brand-tertiary"
                    />
                    <Button
                      type="submit"
                      disabled={isSubscribing}
                      className="bg-brand-primary hover:bg-brand-secondary text-pure-white rounded-l-none px-3"
                    >
                      {isSubscribing ? (
                        <div className="animate-spin h-4 w-4 border-2 border-pure-white border-t-transparent rounded-full" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </form>
              <p className="text-xs text-gray-400 mt-2">
                Get the latest articles, opportunities, and updates delivered to your inbox.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <info.icon className="h-4 w-4 text-brand-tertiary" />
                  {info.href.startsWith('mailto') || info.href.startsWith('tel') ? (
                    <a 
                      href={info.href} 
                      className="text-sm hover:text-brand-tertiary transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-sm">{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-pure-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-brand-tertiary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <p>Connect with our global student community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-charcoal border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© {new Date().getFullYear()} The Daily Scholar. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-brand-tertiary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-tertiary transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-brand-tertiary transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="hover:text-brand-tertiary transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <p>Made with ❤️ by students, for students</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}