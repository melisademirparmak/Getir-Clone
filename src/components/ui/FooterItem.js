import { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size';
import { RiArrowDownSLine } from 'react-icons/ri';

const FooterItem = ({ footerMenu: { title, items } }) => {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  const toogleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth, isOpen]);
  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6
          onClick={toogleCollapse}
          className="text-lg text-primary-brand-color mb-3 flex items-center justify-between"
        >
          {title}

          <button className="w-8 h-8  md:hidden rounded-lg bg-primary-brand-color bg-opacity-5  text-primary-brand-color flex items-center justify-center">
            <span
              className={`transition-all transform 
              ${isOpen ? 'rotate-180 ' : ''}`}
            >
              <RiArrowDownSLine size={14} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid  md:gap-y-2">
              {items.map((item, key) => (
                <li key={key}>
                  <a href="/" className="text-sm  hover:text-brand-color">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
};

export default FooterItem;
