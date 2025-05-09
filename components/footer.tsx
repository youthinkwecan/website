import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 md:px-6 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple p-6 md:p-8 shadow-md">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <p className="text-white/90">
                Subscribe to our newsletter for the latest educational content, tips, and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button className="bg-white text-brand-blue hover:bg-slate-100 transition-all duration-300">
                Subscribe <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
              You Think We Can
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Professional educational platform for commerce students and CA aspirants by CA Amit Kumar.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/caamitkumar07" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full bg-slate-100 p-2 text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 dark:bg-slate-800">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/caamitkumar07/" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full bg-slate-100 p-2 text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 dark:bg-slate-800">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <Link href="https://www.facebook.com/caamitkumar07" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full bg-slate-100 p-2 text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 dark:bg-slate-800">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </div>
              </Link>
              <Link href="https://x.com/caamitkumar07" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full bg-slate-100 p-2 text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 dark:bg-slate-800">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter/X</span>
                </div>
              </Link>
              <Link href="https://www.youtube.com/@caamitkumar07" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full bg-slate-100 p-2 text-brand-pink hover:bg-brand-pink hover:text-white transition-all duration-300 dark:bg-slate-800">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Watch", href: "/watch" },
                { name: "Blog", href: "/blog" },
                { name: "Career", href: "/career" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-brand-blue transition-colors duration-300 dark:text-slate-300 dark:hover:text-brand-blue"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Cookie Policy", href: "/cookie" },
                { name: "Disclaimer", href: "/disclaimer" },
                { name: "DMCA", href: "/dmca" },
                { name: "Media Usage Policy", href: "/media-usage" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-brand-blue transition-colors duration-300 dark:text-slate-300 dark:hover:text-brand-blue"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:amit@aksandco.org" className="hover:text-brand-blue transition-colors duration-300">
                  amit@aksandco.org
                </a>
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+918287512393" className="hover:text-brand-blue transition-colors duration-300">
                  +91-8287512393
                </a>
              </li>
              <li>
                <Link
                  href="https://t.me/caamitkumar07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-brand-blue transition-colors duration-300 dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  Telegram: @caamitkumar07
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-center text-xs text-slate-600 dark:text-slate-300">
            &copy; {currentYear} You Think We Can. All rights reserved. Managed by CA Amit Kumar.
          </p>
        </div>
      </div>
    </footer>
  )
}
