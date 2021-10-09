import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <nav className="flex gap-x-2 items-center">
      <a
        href="/"
        className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href="/"
        className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="/"
        className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="/"
        className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700"
      >
        <FiGlobe size={18} />
        Türkçe (TR)
      </a>
    </nav>
  );
};

export default SocialMedia;
