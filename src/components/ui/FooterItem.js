const FooterItem = ({ footerMenu: { title, items } }) => {
  return (
    <section>
      <nav>
        <h6 className="text-lg text-primary-brand-color mb-3">{title}</h6>
        <nav>
          <ul className="grid gap-y-2">
            {items.map((item, key) => (
              <li key={key}>
                <a href="/" className="text-sm  hover:text-brand-color">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
};

export default FooterItem;
