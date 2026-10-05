import { useMemo, useState } from "react";
import logoImage from "./assets/china-house-market-logo.png";
import ramenCategoryImage from "./assets/Ramen.jpg";
import snacksCategoryImage from "./assets/Snacks.png";
import beveragesCategoryImage from "./assets/Bebestibles.png";
import saucesCategoryImage from "./assets/Salsas.png";
import infusionsCategoryImage from "./assets/Infusiones.png";
import homeCategoryImage from "./assets/Hogar.png";

const categories = [
  {
    name: "Ramen",
    image: ramenCategoryImage,
  },
  {
    name: "Snacks",
    image: snacksCategoryImage,
  },
  {
    name: "Bebestibles",
    image: beveragesCategoryImage,
  },
  {
    name: "Salsas",
    image: saucesCategoryImage,
  },
  {
    name: "Infusiones",
    image: infusionsCategoryImage,
  },
  {
    name: "Hogar",
    image: homeCategoryImage,
  },
];

const products = [
  {
    name: "Bowl para Ramen con Tapa Panda",
    category: "Ramen",
    price: "$13.800",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/imagen-2025-03-25-1626405870985.png",
    badge: "Nuevo",
  },
  {
    name: "Calpis Uva 500 ml",
    category: "Bebestibles",
    price: "$2.500",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/tb2pgoongatbunjsszfxxxgfpxa_-21385812926015.jpg",
    badge: "Favorito",
  },
  {
    name: "Pack Soju Jinro",
    category: "Bebestibles",
    price: "$13.000",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/imagen-2025-04-07-1545026883076.png",
    badge: "Pack",
  },
  {
    name: "Bowl Ramen Gatito Cat Time",
    category: "Hogar",
    price: "$13.800",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/o1cn01v99k3r1oyxjhdnrkf_-1117461774_800x800q907497.jpg",
    badge: "Nuevo",
  },
  {
    name: "Salsa de Soya CHM 1,79 L",
    category: "Salsas",
    price: "$5.900",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/silicone-animal-head-children-study-silicone-chopsticks-holder-4-1-3-5-3-10-3-656474208.png",
    badge: "Esencial",
  },
  {
    name: "Masa para Gyozas 310 g",
    category: "Congelados",
    price: "$2.800",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/2_84652455ee18164cba3e8c06b5fe04fe3275.jpg",
    badge: "Popular",
  },
  {
    name: "Bowl Cerámica Ramen Chanchito",
    category: "Hogar",
    price: "$13.800",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/l_silicone-animal-head-children-study-silicone-chopsticks-holder-4-1-3-1-1-1-1-2-3-27767-1-3-14659.jpg",
    badge: "Nuevo",
  },
  {
    name: "Adorno Oriental Buena Fortuna",
    category: "Hogar",
    price: "$1.800",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/product/imagen-2026-04-24-1337355656599.png",
    badge: "Suerte",
  },
  {
    name: "Honey Butter Chips Haitai",
    category: "Snacks",
    price: "$3.200",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/2/haitai-honey-butter-chip-snack-11522.jpg",
    badge: "Corea",
  },
  {
    name: "Té oriental selección de la casa",
    category: "Infusiones",
    price: "$4.500",
    image:
      "https://dojiw2m9tvv09.cloudfront.net/22913/2/infusiones9126.png",
    badge: "Selección",
  },
];

function Icon({
  name,
  size = 21,
}: {
  name: "search" | "bag" | "menu" | "user" | "heart" | "arrow" | "close";
  size?: number;
}) {
  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4.2-4.2" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    heart: <path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function LuckyCat() {
  return (
    <svg className="lucky-cat" viewBox="0 0 420 420" role="img" aria-label="Gato de la suerte ilustrado">
      <circle cx="210" cy="210" r="196" fill="#f8e7c8" stroke="#b78d44" strokeWidth="12" />
      <circle cx="210" cy="210" r="168" fill="#b9252c" />
      <path d="M73 295c44-30 93-45 144-45 54 0 101 16 136 47v57H70Z" fill="#d44842" opacity=".65" />
      <path d="M102 285c22 9 40 26 52 50m-45-81c30 16 50 40 62 73m86-79c-8 38-3 74 15 104m35-96c-20 28-29 59-27 94" fill="none" stroke="#7f1820" strokeWidth="5" opacity=".65" />
      <path d="M124 140 143 72l55 43c18-5 39-5 58 1l54-42 18 72c20 24 27 54 20 88-10 50-57 86-128 86-73 0-122-37-132-89-6-34 6-68 36-91Z" fill="#fff9ed" stroke="#52161a" strokeWidth="8" strokeLinejoin="round" />
      <path d="m145 100 28 22-34 22Zm137 22 27-21 6 43Z" fill="#ee8071" />
      <path d="M253 117c22 3 39 11 52 25l-9 29-31-18Z" fill="#eaa52d" />
      <path d="M151 119c19-11 38-14 57-8l-2 33-38 5Z" fill="#d5543f" />
      <path d="M142 208q17 17 35 0m85 0q17 17 35 0" fill="none" stroke="#52161a" strokeWidth="7" strokeLinecap="round" />
      <path d="m220 216 10 8-10 8-10-8Z" fill="#d83e4d" stroke="#52161a" strokeWidth="3" />
      <path d="M220 232q-2 20-22 18m22-18q2 20 22 18" fill="none" stroke="#52161a" strokeWidth="4" strokeLinecap="round" />
      <path d="M120 236c-12 5-22 13-29 23m38-8c-13 7-21 17-26 28m210-43c12 5 22 13 29 23m-38-8c13 7 21 17 26 28" fill="none" stroke="#52161a" strokeWidth="4" strokeLinecap="round" />
      <circle cx="165" cy="234" r="15" fill="#f4a2a2" opacity=".7" />
      <circle cx="275" cy="234" r="15" fill="#f4a2a2" opacity=".7" />
      <path d="M171 300q49 27 98 0l-8 57h-82Z" fill="#e8b83f" stroke="#52161a" strokeWidth="7" />
      <circle cx="220" cy="319" r="19" fill="#d94b3e" stroke="#52161a" strokeWidth="5" />
      <path d="M302 288c9-12 22-31 24-55 2-21-7-46-25-44-17 2-19 20-10 30 7 9 20 4 25-2" fill="#fff9ed" stroke="#52161a" strokeWidth="8" strokeLinecap="round" />
      <path d="M144 150c-19 11-31 26-34 45" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity=".7" />
      <text x="220" y="383" textAnchor="middle" fill="#fff5df" fontSize="23" fontFamily="serif" fontWeight="700">招 財</text>
    </svg>
  );
}

function BlossomBranch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 620 240" aria-hidden="true">
      <path d="M8 40c152 48 244 86 328 164M155 92c63 3 116-17 166-61m-72 112c86-7 165 6 235 51m-126 8c69-13 139-13 222 8" fill="none" stroke="#6c2022" strokeWidth="8" strokeLinecap="round" />
      {[
        [85, 63, 1], [154, 94, .8], [220, 75, 1.1], [286, 50, .85],
        [332, 194, 1], [390, 176, .75], [452, 190, 1.05], [538, 210, .8],
      ].map(([x, y, s], index) => (
        <g key={index} transform={`translate(${x} ${y}) scale(${s})`}>
          <circle cy="-13" r="12" fill="#f2a1a5" stroke="#8c2e32" strokeWidth="2" />
          <circle cx="13" cy="-2" r="12" fill="#f7c5c2" stroke="#8c2e32" strokeWidth="2" />
          <circle cx="8" cy="14" r="12" fill="#f2a1a5" stroke="#8c2e32" strokeWidth="2" />
          <circle cx="-8" cy="14" r="12" fill="#f8d7cf" stroke="#8c2e32" strokeWidth="2" />
          <circle cx="-13" cy="-2" r="12" fill="#f6bab8" stroke="#8c2e32" strokeWidth="2" />
          <circle r="5" fill="#d79536" />
        </g>
      ))}
    </svg>
  );
}

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <main>
      <div className="topbar">
        <span>Despacho a todo Chile</span>
        <span>Envío gratis en compras sobre $60.000</span>
        <span>Retiro en tienda disponible</span>
      </div>

      <header className="site-header">
        <div className="header-start">
          <button className="header-action menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <Icon name={menuOpen ? "close" : "menu"} />
            <span>Menú</span>
          </button>
          <button className="header-action search-trigger" onClick={() => setSearchOpen(true)} aria-label="Buscar productos">
            <Icon name="search" />
            <span>Buscar</span>
          </button>
        </div>
        <a className="logo" href="#inicio" aria-label="China House Market">
          <img className="logo-image" src={logoImage} alt="China House Market" />
          <span className="logo-copy">CHINA HOUSE<small>MARKET</small></span>
        </a>
        <div className="header-end">
          <label className="quick-search">
            <Icon name="search" size={16} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setSearchOpen(true)}
              placeholder="Buscar"
              aria-label="Buscar en la tienda"
            />
          </label>
          <button
            className="header-action account-action"
            onClick={() => setLoginOpen(true)}
            aria-label={loggedIn ? "Cerrar sesión" : "Iniciar sesión"}
          >
            <Icon name="user" /><span>{loggedIn ? "Salir" : "Mi cuenta"}</span>
          </button>
          <button className="header-action cart-action" onClick={() => document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" })} aria-label={`Carrito con ${cartCount} productos`}>
            <Icon name="bag" /><span>Carrito</span><b>{cartCount}</b>
          </button>
        </div>
        <nav className={menuOpen ? "nav-drawer open" : "nav-drawer"} aria-label="Menú de productos">
          <div>
            <span className="nav-kicker">Explora la tienda</span>
            {["Novedades", "Ramen", "Snacks", "Bebestibles", "Salsas", "Congelados", "Hogar"].map((item) => (
              <a
                key={item}
                href="#productos"
                onClick={() => {
                  setActiveCategory(item === "Novedades" ? "Todos" : item);
                  setMenuOpen(false);
                }}
              >
                {item}<Icon name="arrow" size={18} />
              </a>
            ))}
          </div>
          <div className="nav-note"><img src={logoImage} alt="China House Market" /><p>Sabores y tesoros de Asia, ahora más cerca de ti.</p></div>
        </nav>
        {searchOpen && (
          <div className="search-overlay">
            <div className="search-box">
              <Icon name="search" size={26} />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca ramen, snacks, salsas y más..." />
              <button onClick={() => setSearchOpen(false)} aria-label="Cerrar búsqueda"><Icon name="close" /></button>
            </div>
          </div>
        )}
        {loginOpen && (
          <div className="login-backdrop" role="presentation" onMouseDown={() => setLoginOpen(false)}>
            <section className="login-panel" role="dialog" aria-modal="true" aria-labelledby="login-title" onMouseDown={(event) => event.stopPropagation()}>
              <button className="login-close" onClick={() => setLoginOpen(false)} aria-label="Cerrar inicio de sesión"><Icon name="close" /></button>
              {loggedIn ? (
                <div className="login-success">
                  <span className="login-seal"><Icon name="user" size={28} /></span>
                  <span className="eyebrow">Sesión iniciada</span>
                  <h2>Qué bueno verte</h2>
                  <p>{loginEmail}</p>
                  <button className="login-submit" onClick={() => { setLoggedIn(false); setLoginOpen(false); }}>Cerrar sesión</button>
                </div>
              ) : (
                <form className="login-form" onSubmit={(event) => { event.preventDefault(); setLoggedIn(true); setLoginOpen(false); }}>
                  <span className="eyebrow">China House Market</span>
                  <h2 id="login-title">Bienvenido a casa</h2>
                  <p>Ingresa para guardar tus favoritos y revisar tus compras.</p>
                  <label htmlFor="login-email">Correo electrónico</label>
                  <input id="login-email" type="email" value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} placeholder="tu@correo.com" required />
                  <label htmlFor="login-password">Contraseña</label>
                  <input id="login-password" type="password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} placeholder="Tu contraseña" minLength={6} required />
                  <a href="#inicio" className="forgot-password" onClick={(event) => event.preventDefault()}>¿Olvidaste tu contraseña?</a>
                  <button className="login-submit" type="submit">Iniciar sesión <Icon name="arrow" size={17} /></button>
                  <span className="login-register">¿Aún no tienes cuenta? <button type="button" onClick={() => setLoginOpen(false)}>Crear una cuenta</button></span>
                </form>
              )}
            </section>
          </div>
        )}
      </header>

      <section className="hero" id="inicio">
        <BlossomBranch className="branch branch-top" />
        <BlossomBranch className="branch branch-bottom" />
        <span className="pattern-circle circle-one" />
        <span className="pattern-circle circle-two" />
        <div className="cat-wrap">
          <img className="lucky-cat" src={logoImage} alt="Logo China House Market" />
          <span className="cat-caption">Buena fortuna en cada compra</span>
        </div>
        <div className="hero-copy">
          <span className="eyebrow">Supermercado oriental · 亚洲超市</span>
          <h1>CHINA HOUSE<br /><span>MARKET</span></h1>
          <p>Descubre sabores, tendencias y tesoros de China, Corea, Japón y mucho más.</p>
          <a className="primary-button" href="#productos">Comprar ahora <Icon name="arrow" /></a>
          <div className="hero-tags"><span>China</span><i>•</i><span>Corea</span><i>•</i><span>Japón</span><i>•</i><span>Tailandia</span></div>
        </div>
        <div className="mountain mountain-back" />
        <div className="mountain mountain-front" />
        <div className="pagoda">
          <span className="roof roof-1" /><span className="floor floor-1" />
          <span className="roof roof-2" /><span className="floor floor-2" />
          <span className="roof roof-3" /><span className="floor floor-3" />
        </div>
      </section>

      <section className="category-section" id="categorias">
        <div className="section-title">
          <span className="title-ornament">花</span>
          <div><span className="eyebrow">Todo lo que buscas</span><h2>Compra por categoría</h2></div>
          <a href="#productos" onClick={() => setActiveCategory("Todos")}>Ver todo <Icon name="arrow" size={18} /></a>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <button
              key={category.name}
              className={activeCategory === category.name ? "category-card active" : "category-card"}
              onClick={() => {
                setActiveCategory(category.name);
                document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="category-image"><img src={category.image} alt="" /></span>
              <strong>{category.name}</strong>
              <small>Ver productos</small>
            </button>
          ))}
        </div>
      </section>

      <section className="benefits">
        <div><span>宅</span><strong>Despacho nacional</strong><small>Llegamos a todo Chile</small></div>
        <div><span>品</span><strong>Productos originales</strong><small>Seleccionados por nosotros</small></div>
        <div><span>店</span><strong>Retiro en tienda</strong><small>Compra online y retira</small></div>
        <div><span>福</span><strong>Novedades semanales</strong><small>Siempre algo por descubrir</small></div>
      </section>

      <section className="products-section" id="productos">
        <div className="section-title product-heading">
          <span className="title-ornament">新</span>
          <div><span className="eyebrow">Recién llegados</span><h2>Novedades de la semana</h2></div>
          <div className="category-tabs">
            {["Todos", "Hogar", "Bebestibles", "Salsas", "Congelados"].map((item) => (
              <button key={item} className={activeCategory === item ? "active" : ""} onClick={() => setActiveCategory(item)}>{item}</button>
            ))}
          </div>
        </div>
        {filteredProducts.length ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <span className="product-badge">{product.badge}</span>
                  <button
                    className={favorites.includes(product.name) ? "favorite active" : "favorite"}
                    onClick={() =>
                      setFavorites((current) =>
                        current.includes(product.name)
                          ? current.filter((item) => item !== product.name)
                          : [...current, product.name],
                      )
                    }
                    aria-label={`Guardar ${product.name}`}
                  >
                    <Icon name="heart" size={19} />
                  </button>
                  <img src={product.image} alt={product.name} />
                  <button className="add-button" onClick={() => setCartCount((count) => count + 1)}>Añadir al carrito</button>
                </div>
                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-products">
            <span>探</span><h3>No encontramos ese producto</h3><p>Prueba con otra búsqueda o revisa todas nuestras novedades.</p>
            <button onClick={() => { setQuery(""); setActiveCategory("Todos"); }}>Ver todos</button>
          </div>
        )}
      </section>

      <section className="promo-grid">
        <article className="promo-card red">
          <div><span className="eyebrow">El favorito de todos</span><h2>Tu ramen, a tu manera</h2><p>Picante, suave, clásico o con queso. Encuentra tu próximo favorito.</p><a href="#productos" onClick={() => setActiveCategory("Ramen")}>Explorar ramen <Icon name="arrow" /></a></div>
          <img src="https://dojiw2m9tvv09.cloudfront.net/22913/2/m-categoriaramen83233772.jpg" alt="Selección de ramen oriental" />
        </article>
        <article className="promo-card pink">
          <div><span className="eyebrow">Dulce descubrimiento</span><h2>Snacks para compartir</h2><p>Sabores curiosos, ediciones especiales y tus clásicos favoritos.</p><a href="#productos" onClick={() => setActiveCategory("Snacks")}>Ver snacks <Icon name="arrow" /></a></div>
          <img src="https://dojiw2m9tvv09.cloudfront.net/22913/2/haitai-honey-butter-chip-snack-11522.jpg" alt="Snacks asiáticos" />
        </article>
      </section>

      <section className="newsletter">
        <BlossomBranch className="newsletter-branch" />
        <span className="newsletter-seal">信</span>
        <div><span className="eyebrow">Sé parte de la casa</span><h2>Novedades directo a tu correo</h2><p>Recibe lanzamientos, ofertas y datos para descubrir Asia a través de sus sabores.</p></div>
        {subscribed ? (
          <div className="success">¡Gracias! Ya eres parte de China House.</div>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true); }}>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Tu correo electrónico" required aria-label="Correo electrónico" />
            <button type="submit">Suscribirme</button>
          </form>
        )}
      </section>

      <footer>
        <BlossomBranch className="footer-branch" />
        <div className="footer-brand"><a className="logo" href="#inicio"><img className="logo-image" src={logoImage} alt="China House Market" /><span className="logo-copy">CHINA HOUSE<small>MARKET</small></span></a><p>Sabores y tesoros de Asia, ahora en Chile.</p></div>
        <div><strong>Compra</strong><a href="#categorias">Categorías</a><a href="#productos">Novedades</a><a href="#productos">Ofertas</a></div>
        <div><strong>Ayuda</strong><a href="#inicio">Despachos</a><a href="#inicio">Preguntas frecuentes</a><a href="#inicio">Contacto</a></div>
        <div><strong>Visítanos</strong><p>Antonia López de Bello 297<br />Recoleta, Santiago</p><small>Lun–Sáb · 10:00 a 18:30</small></div>
        <span className="copyright">© 2025 China House Market · Todos los derechos reservados</span>
      </footer>
    </main>
  );
}
