
"use client";

import { useState } from "react";

const products = [
  {
    name: "EarthRise Organic Compost",
    category: "Soil Enrichment",
    price: 850,
    unit: "5 kg bag",
    image: "photo-1416879595882-3373a0480b5b",
    description: "Organic matter to improve soil structure and support healthy roots.",
    safe: "Established garden plants",
    precautions: "Use mature compost; avoid contaminated material.",
    crops: ["Tomato", "Wheat", "Rice", "Chili", "All crops"],
    soils: ["Clay", "Loamy", "Sandy"],
    seasons: ["Spring", "Summer", "Autumn", "Winter"],
    tag: "BESTSELLER",
  },
  {
    name: "GreenRoot Vermicompost",
    category: "Natural Nutrition",
    price: 650,
    unit: "3 kg bag",
    image: "photo-1585320806297-9794b3e4eeae",
    description: "Worm-processed organic matter for garden beds and containers.",
    safe: "Vegetable beds and pots",
    precautions: "Follow label rates; do not overapply.",
    crops: ["Tomato", "Chili", "All crops"],
    soils: ["Loamy", "Sandy"],
    seasons: ["Spring", "Summer"],
    tag: "GARDENER'S PICK",
  },
  {
    name: "TerraBloom Neem Blend",
    category: "Plant Care",
    price: 720,
    unit: "2 kg bag",
    image: "photo-1497250681960-ef046c08a56e",
    description: "A neem-based soil amendment for a thoughtful plant-care routine.",
    safe: "Ornamental plants and gardens",
    precautions: "Check label for edible crops and application rates.",
    crops: ["Tomato", "Chili", "All crops"],
    soils: ["Clay", "Loamy"],
    seasons: ["Spring", "Summer", "Autumn"],
    tag: "NATURAL CHOICE",
  },
  {
    name: "SoilSoul Bone Meal",
    category: "Root Support",
    price: 950,
    unit: "2 kg bag",
    image: "photo-1466692476868-aef1dfb1e735",
    description: "A slow-release phosphorus source for suitable garden soils.",
    safe: "Suitable flowering plants",
    precautions: "Keep away from pets; test soil pH first.",
    crops: ["Tomato", "All crops"],
    soils: ["Loamy", "Clay"],
    seasons: ["Spring", "Autumn"],
    tag: "ROOT FOCUS",
  },
  {
    name: "HarvestHug Mustard Cake",
    category: "Organic Soil Care",
    price: 780,
    unit: "3 kg bag",
    image: "photo-1501004318641-b39e6451bec6",
    description: "Plant-derived soil amendment for a balanced garden-care plan.",
    safe: "Ornamental garden beds",
    precautions: "Use only as directed; keep away from pets.",
    crops: ["Tomato", "Chili", "Wheat", "All crops"],
    soils: ["Clay", "Loamy"],
    seasons: ["Spring", "Autumn"],
    tag: "EARTH FRIENDLY",
  },
  {
    name: "PureEarth Seaweed Blend",
    category: "Plant Nutrition",
    price: 1100,
    unit: "1 L bottle",
    image: "photo-1500651230702-0e2d8a49d4ad",
    description: "Seaweed-based plant supplement for use according to its label.",
    safe: "Ornamental and container plants",
    precautions: "Dilute exactly as directed on the product label.",
    crops: ["Tomato", "Rice", "Chili", "All crops"],
    soils: ["Sandy", "Loamy"],
    seasons: ["Spring", "Summer"],
    tag: "PLANT BOOST",
  },
];

const categories = ["All Products", "Soil Enrichment", "Natural Nutrition", "Plant Care", "Root Support", "Plant Nutrition"];

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export default function Home() {
  const [crop, setCrop] = useState("Tomato");
  const [season, setSeason] = useState("Spring");
  const [soil, setSoil] = useState("Loamy");
  const [searched, setSearched] = useState(false);
  const [category, setCategory] = useState("All Products");
  const [search, setSearch] = useState("");

  const recommendations = products.filter(
    (product) =>
      product.crops.includes(crop) &&
      product.seasons.includes(season) &&
      product.soils.includes(soil)
  );

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      category === "All Products" || product.category === category;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f6f3e9] text-[#233c2d]">
      <div className="bg-[#203c2b] px-4 py-2 text-center text-[10px] font-bold tracking-[0.2em] text-[#e8d6b7] sm:text-xs">
        GROW NATURALLY · NOURISH YOUR SOIL · HARVEST WITH CARE
      </div>

      <header className="sticky top-0 z-30 border-b border-[#e1dfd0] bg-[#f6f3e9]/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="text-3xl">❧</span>
            <span>
              <span className="block font-serif text-xl font-bold tracking-tight sm:text-2xl">Root & Earth</span>
              <span className="block text-[9px] font-bold tracking-[0.22em] text-[#9b6248]">GROW WITH NATURE</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-semibold lg:flex">
            <a href="#products" className="hover:text-[#a85f43]">SHOP PRODUCTS</a>
            <a href="#crop-doctor" className="hover:text-[#a85f43]">CROP DOCTOR</a>
            <a href="#our-promise" className="hover:text-[#a85f43]">OUR PROMISE</a>
          </nav>
          <a href="#crop-doctor" className="rounded-full bg-[#a85f43] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#87462f] sm:px-6">
            Find my fertilizer ↗
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a85f43]">
            A healthier earth starts here
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
            Let nature do
            <span className="block italic text-[#668052]">what it does best.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-8 text-[#687365] sm:text-base">
            Discover thoughtfully selected organic soil amendments and plant
            nutrition for home gardens, kitchen patches and growing spaces.
            Give your soil the care it deserves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#crop-doctor" className="rounded-full bg-[#294a34] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#3b6145]">
              Meet your Crop Doctor
            </a>
            <a href="#products" className="rounded-full border border-[#c9cbb7] px-7 py-4 text-sm font-bold transition hover:bg-[#e8e8d9]">
              Explore the marketplace
            </a>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-3 border-t border-[#dcdccf] pt-6">
            {[
              ["01", "Soil first"],
              ["02", "Plant mindful"],
              ["03", "Grow wisely"],
            ].map(([n, label]) => (
              <div key={n}>
                <p className="font-serif text-2xl italic text-[#a85f43]">{n}</p>
                <p className="mt-1 text-xs font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-[#dce2ce]" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-[#f6f3e9] shadow-xl">
            <img
              src={photo("photo-1416879595882-3373a0480b5b")}
              alt="Lush green plants thriving in rich garden soil"
              className="h-[380px] w-full object-cover sm:h-[510px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172e20]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9">
              <span className="rounded-full border border-white/40 bg-white/15 px-3 py-2 text-[10px] font-bold tracking-[0.18em] backdrop-blur-sm">
                FROM SOIL TO SPROUT
              </span>
              <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                Small seeds. Strong roots. Beautiful beginnings.
              </h2>
              <p className="mt-3 text-xs text-white/80">A little more care for the ground beneath us.</p>
            </div>
          </div>
          <div className="absolute -right-2 top-8 rounded-2xl bg-[#f6f3e9] p-4 shadow-lg sm:-right-5">
            <span className="text-2xl">🌱</span>
            <p className="mt-1 text-xs font-bold">Rooted in nature</p>
            <p className="mt-1 text-[10px] text-[#78806c]">Made for mindful growing</p>
          </div>
        </div>
      </section>

      <section id="our-promise" className="border-y border-[#dfe0d2] bg-[#e9eadc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4">
          {[
            ["🌿", "Soil-conscious", "Choose amendments with care"],
            ["🪴", "Garden friendly", "Options for growing spaces"],
            ["♻️", "Nature inspired", "Explore organic alternatives"],
            ["🌾", "Grow informed", "Read every product label"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="text-center">
              <span className="text-2xl">{icon}</span>
              <h3 className="mt-2 text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs leading-5 text-[#707969]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="crop-doctor" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a85f43]">Personalised plant care</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Meet your
              <span className="block italic text-[#668052]">Crop Doctor.</span>
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#687365]">
              Every garden is different. Tell us what you grow, which season
              you're in and what soil you have. We'll suggest products that
              match those selections.
            </p>
            <div className="mt-7 rounded-2xl border border-[#dcdccf] bg-white p-5">
              <p className="font-serif text-xl">Why these three details?</p>
              <ul className="mt-4 space-y-3 text-xs leading-6 text-[#687365]">
                <li><span className="font-bold text-[#a85f43]">01 / Crop</span> — plants have different nutrient needs.</li>
                <li><span className="font-bold text-[#a85f43]">02 / Season</span> — timing affects growing and application.</li>
                <li><span className="font-bold text-[#a85f43]">03 / Soil</span> — texture and soil tests guide better choices.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#dce0d1] bg-white p-5 shadow-xl shadow-[#314a32]/5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7eadb] text-2xl">🌱</div>
              <div>
                <h3 className="font-serif text-2xl">Your growing profile</h3>
                <p className="mt-1 text-xs text-[#7b8272]">Choose the options that describe your garden.</p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold">
                01 · What are you growing?
                <select value={crop} onChange={(e) => { setCrop(e.target.value); setSearched(false); }} className="mt-2 w-full rounded-xl border border-[#dcdccf] bg-[#f6f3e9] p-4 outline-none focus:border-[#668052]">
                  <option>Tomato</option>
                  <option>Wheat</option>
                  <option>Rice</option>
                  <option>Chili</option>
                  <option>All crops</option>
                </select>
              </label>
              <label className="text-xs font-bold">
                02 · Growing season
                <select value={season} onChange={(e) => { setSeason(e.target.value); setSearched(false); }} className="mt-2 w-full rounded-xl border border-[#dcdccf] bg-[#f6f3e9] p-4 outline-none focus:border-[#668052]">
                  <option>Spring</option>
                  <option>Summer</option>
                  <option>Autumn</option>
                  <option>Winter</option>
                </select>
              </label>
              <label className="text-xs font-bold sm:col-span-2">
                03 · Your soil type
                <select value={soil} onChange={(e) => { setSoil(e.target.value); setSearched(false); }} className="mt-2 w-full rounded-xl border border-[#dcdccf] bg-[#f6f3e9] p-4 outline-none focus:border-[#668052]">
                  <option>Loamy</option>
                  <option>Clay</option>
                  <option>Sandy</option>
                </select>
              </label>
            </div>

            <button onClick={() => setSearched(true)} className="mt-6 w-full rounded-full bg-[#294a34] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#456448]">
              Find my recommendations ↗
            </button>

            {searched && (
              <div className="mt-6 rounded-2xl border border-[#d9e0ce] bg-[#f1f3e9] p-5" aria-live="polite">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#60794d]">Your Crop Doctor results</p>
                <h4 className="mt-2 font-serif text-xl">{recommendations.length ? "Products matching your selections" : "No exact matches found"}</h4>
                <p className="mt-2 text-xs leading-6 text-[#687365]">
                  Profile: {crop} · {season} · {soil} soil
                </p>
                {recommendations.length > 0 ? (
                  <div className="mt-4 space-y-3">
                    {recommendations.map((product) => (
                      <div key={product.name} className="flex items-center justify-between gap-3 rounded-xl bg-white p-3">
                        <div>
                          <p className="text-sm font-bold">{product.name}</p>
                          <p className="mt-1 text-[10px] text-[#78806c]">{product.description}</p>
                        </div>
                        <span className="shrink-0 text-xs font-bold text-[#a85f43]">Rs. {product.price.toLocaleString("en-PK")}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-xs leading-6 text-[#687365]">Try a different combination or browse all products below. These filters are demonstration data, not a substitute for a soil test or local agricultural advice.</p>
                )}
                <a href="#products" className="mt-4 inline-block text-xs font-bold text-[#a85f43] underline">Browse the marketplace ↓</a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#eeeddf]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a85f43]">The earth-friendly edit</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Nourish your little world.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#687365]">Explore soil amendments and plant-care essentials for your next growing season.</p>
            </div>
            <label className="text-xs font-bold">
              Search products
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Try compost..." className="mt-2 block w-full rounded-full border border-[#d3d5c5] bg-white px-5 py-3 outline-none focus:border-[#668052] sm:w-64" />
            </label>
          </div>

          <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button key={item} onClick={() => setCategory(item)} className={`shrink-0 rounded-full px-4 py-3 text-[10px] font-bold transition sm:text-xs ${category === item ? "bg-[#294a34] text-white" : "border border-[#d1d3c2] bg-white text-[#435442] hover:border-[#668052]"}`}>
                {item}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-2xl border border-[#dedecf] bg-[#faf9f2] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#203c2b]/10">
                <div className="relative overflow-hidden">
                  <img src={photo(product.image)} alt={product.name} loading="lazy" className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f6f3e9]/95 px-3 py-2 text-[9px] font-bold tracking-[0.13em] text-[#294a34]">{product.tag}</span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a85f43]">{product.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl">{product.name}</h3>
                    <span className="shrink-0 text-sm font-bold">Rs. {product.price.toLocaleString("en-PK")}</span>
                  </div>
                  <p className="mt-1 text-[10px] text-[#7a806f]">{product.unit}</p>
                  <p className="mt-3 text-xs leading-6 text-[#687365]">{product.description}</p>
                  <div className="mt-4 rounded-xl border border-[#dce2d2] bg-[#edf1e6] p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#426344]">✓ Safe for</p>
                    <p className="mt-1 text-xs leading-5 text-[#4e624c]">{product.safe}</p>
                  </div>
                  <div className="mt-2 rounded-xl border border-[#e8d1c4] bg-[#f8eee8] p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#9b5138]">! Precautions</p>
                    <p className="mt-1 text-xs leading-5 text-[#855e4b]">{product.precautions}</p>
                  </div>
                  <button onClick={() => { setCrop(product.crops[0]); setCategory("All Products"); setSearch(""); document.getElementById("crop-doctor")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-4 w-full rounded-full border border-[#b8c2ad] px-4 py-3 text-xs font-bold transition hover:bg-[#294a34] hover:text-white">
                    Check growing suitability ↗
                  </button>
                </div>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <p className="mt-8 rounded-2xl bg-white p-8 text-center text-sm text-[#687365]">No products match your search. Try another keyword or category.</p>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem]">
          <img src={photo("photo-1497250681960-ef046c08a56e")} alt="Sunlight on fresh green leaves" loading="lazy" className="h-72 w-full object-cover sm:h-96" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a85f43]">A more thoughtful way to grow</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Healthy soil is where the story begins.</h2>
          <p className="mt-5 text-sm leading-8 text-[#687365]">
            The best results begin with understanding your soil, choosing suitable
            products and following application guidance. Build your growing routine
            one thoughtful step at a time.
          </p>
          <a href="#crop-doctor" className="mt-7 inline-flex rounded-full bg-[#a85f43] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#87462f]">
            Find your growing match ↗
          </a>
        </div>
      </section>

      <footer className="bg-[#203c2b] px-5 py-10 text-center text-[#e8e9dc] sm:px-8">
        <div className="font-serif text-3xl font-bold">Root & Earth <span className="text-[#d39b75]">❧</span></div>
        <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-[#c4cebb]">
          Helping home growers explore soil-conscious products and nurture greener spaces.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs">
          <a href="#products" className="hover:text-white">Marketplace</a>
          <a href="#crop-doctor" className="hover:text-white">Crop Doctor</a>
          <a href="#our-promise" className="hover:text-white">Our promise</a>
        </div>
        <p className="mt-7 border-t border-white/15 pt-5 text-[10px] text-[#b9c5b0]">© 2026 Root & Earth · Organic Marketplace Demo</p>
      </footer>
    </main>
  );
}
