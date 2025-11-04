'use client';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 px-4 flex flex-col items-center justify-center gap-4">
      <p className="text-center text-white text-sm">
        © 2025 Fintech — Todos os direitos reservados
      </p>

      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/gabs__0001/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white hover:text-teal-400 transition-colors text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-luiz-17bb32218/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-teal-400 transition-colors text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/gabs0001"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white hover:text-teal-400 transition-colors text-xl"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}