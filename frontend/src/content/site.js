// All copy below is taken verbatim from https://tc-kinesiohealing.com/ — do not rewrite.
export const LIVE = "https://tc-kinesiohealing.com";
export const BOOKING_URL = "https://tc-kinesiohealing.setmore.com";
export const BOOKING_URL_CONTACT = "https://tc-kinesiohealing.setmore.com/teacernic";
export const CART_URL = `${LIVE}/cart-2/`;

export const CONTACT = {
  address: "Ljubljana, Ježica",
  email: "tckinesiohealing@gmail.com",
  phone: "00386 41 886 268",
  phoneHref: "tel:+38641886268",
  hours: "Vary by day",
  facebook: "https://www.facebook.com/kinesiohealingteacernic",
  instagram: "https://www.instagram.com/tckinesiohealing/",
  mapSrc: "https://maps.google.com/maps?q=Ljubljana%2C%20Slovenija&t=m&z=15&output=embed&iwloc=near",
};

export const NAV = [
  { label: "Domov", to: "/" },
  { label: "Bolečina", to: "/bolecina" },
  { label: "Napredek", to: "/napredek" },
  { label: "Samostojnost", to: "/samostojnost" },
  { label: "Programi", to: "/shop-2" },
  { label: "O meni", to: "/omeni" },
  { label: "Kontakt", to: "/kontakt" },
];

export const TAGLINE = "Celostni pristop do zdravja, dolgoživosti in odpornosti.";
export const SITE_DESCRIPTION = "Rehabilitacija, osebno trenerstvo in kondicijska priprava";

export const HERO = {
  title: "Vsaka bolečina pripoveduje zgodbo.",
  text: "Telo ne govori z besedami. Govori skozi gibanje, napetost, omejitve in bolečino. Zato pri obravnavi ne iščem le mesta, kjer boli, ampak poskušam razumeti, kako telo deluje kot celota in zakaj je do težav sploh prišlo.",
  image: "/assets/hero.webp",
};

export const PILLARS = [
  { key: "bolecina", title: "Bolečina", line: "Ne išči le mesta, kjer boli.", to: "/bolecina", image: "/assets/pillar-bolecina.webp" },
  { key: "napredek", title: "Napredek", line: "Več kot brez bolečin.", to: "/napredek", image: "/assets/pillar-napredek.webp" },
  { key: "samostojnost", title: "Samostojnost", line: "Znanje ostane s tabo.", to: "/samostojnost", image: "/assets/pillar-samostojnost.webp" },
];

export const GYM_SLIDES = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/gym-${i + 1}.jpg`,
  alt: i === 0 ? "Kinesio-Gym" : `Kinesio-Gym ${i + 1}`,
}));

export const RANCHGIRL = {
  kicker: "TRENUTNO AKTUALNO",
  title: "🐎 RANCHGIRL🐎",
  intro: [
    "Majhna semi-private trening skupnost za punce, ki vemo, kaj pomeni naziv »konjarka«.",
    "Ne gre za poseben »trening za jahače« in tudi ne za to, da moramo vsako vajo povezati s konji. 😄",
    "Gre za moč, gibanje, kondicijo, dobro počutje in družbo žensk, ki imamo rade podobno življenje.",
  ],
  ideaLabel: "Ideja je preprosta:",
  facts: ["150 € / mesec", "do 8 obiskov mesečno", "3 termini na teden", "največ 3 osebe na termin"],
  factLong: "majhna skupina, individualna pozornost in dovolj prostora, da vsaka trenira po svojih zmožnostih",
  outro: [
    "In ja — to bi bila naša RanchGirl aktivna čreda.",
    "Za začetek bi odprla samo nekaj mest, potem pa bomo videli, kam nas pelje.",
  ],
  askLabel: "❣️ Trenutno me predvsem zanima:",
  ask: "Bi te takšna skupnost zanimala? Potem",
  askLink: "klikni tukaj",
  to: "/ranchgirl-semi-privat-trening-skupnost",
  image: "/assets/ranchgirl.webp",
};

export const NINJA_HOME = {
  title: "The Ninja Movement Experience",
  paragraphs: [
    "Ninja Class je moja kreativnost, izražena skozi gibanje. Je posebnost, ki močno zaznamuje mojo znamko ter moj pristop k rehabilitaciji in treningu.",
    "Občasno organiziram Ninja Class v živo , kjer lahko preizkusiš, kako integrirano je tvoje gibanje – in kaj se zgodi, ko mora telo razmišljati, povezovati in iskati nove gibalne strategije.",
  ],
  more: "Več o Ninja Movement Experience →",
  moreLink: "KLIKNI TUKAJ",
  to: "/the-ninja-movement-experience",
  image: "/assets/ninja.jpg",
};

export const PRODUCTS = [
  {
    id: "the-ninja",
    name: "The Ninja",
    category: null,
    price: null,
    excerpt: null,
    image: "/assets/product-ninja.jpg",
    url: `${LIVE}/product/the-ninja/`,
    action: { label: "Read more", href: `${LIVE}/product/the-ninja/` },
  },
  {
    id: "food-for-spine",
    name: "Food for Spine",
    category: "Restoration Series",
    categoryUrl: `${LIVE}/product-category/restoration-series/`,
    price: "€ 79.90",
    excerpt: null,
    image: "/assets/product-food-for-spine.webp",
    url: `${LIVE}/product/food-for-spine/`,
    action: { label: "Add to cart", href: `${LIVE}/shop-2/?add-to-cart=2374` },
  },
  {
    id: "hybrid-summer",
    name: "Hybrid Summer – Built to Last",
    category: "Hybrid Conditioning",
    categoryUrl: `${LIVE}/product-category/hybrid-conditioning/`,
    price: "€ 100.00",
    excerpt: "8 weeks of in depth Strength & Conditioning, adjusted for summer time.",
    image: "/assets/product-hybrid-summer.webp",
    url: `${LIVE}/product/hybrid-summer-built-to-last/`,
    action: { label: "Add to cart", href: `${LIVE}/shop-2/?add-to-cart=2327` },
  },
];

export const TESTIMONIALS_TITLE = "Mnenja strank";
export const TESTIMONIALS = [
  {
    text: "Vadba s Teo mi je pomagala odkriti nove položaje in nove funkcije telesa, ki jih sama najbrž ne bi raziskala. Pogosto mi je pomagala, da sem po stresnem dnevu v službi spet prišla v stik s sabo. Srečanja so mi prinesla veselje ob raziskovanju in preseganju lastne gibljivosti ter lahkotnosti gibanja.",
    tag: "Movement therapy",
    image: "/assets/tag-movement-therapy.webp",
  },
  {
    text: "Najboljše pri tvojem vodenju je, da me nikoli ne skrbi, kako bom razumsko predstavila, kaj me teži. Tvoje vodenje procesa razblini vso nervozo ob nerazumevanju in kaosu v meni, k procesu pa pristopaš človeško in mu pustiš, da se odvije naravno.",
    tag: "Hybrid conditioning",
    image: "/assets/tag-hybrid-conditioning.webp",
  },
  {
    text: "Zlate roke, zlata energija. Občutek imam, da na naših gibalnih srečanjih vedno izbereš ravno pravšnjo mero »pritiska« oziroma intenzivnosti. Preprosto povedano: si super!",
    tag: "Movement therapy",
    image: "/assets/tag-movement-therapy.webp",
  },
  {
    text: "Srečanja s Teo so bila zame res dobra izkušnja in jih priporočam vsakomur, ki želi razumeti sebe in si pomagati. Njene izkušnje in prisotnost so zelo pomemben dejavnik, če želimo rasti kot osebe in se zavedati sebe. Ponudi vpogled v našo celovitost, v naše bistvo in nam pomaga, da se vrnemo k sebi. Tea je zelo pristna, prisotna, vsakemu srečanju se posveti posebej in vanj vloži veliko truda. Toplo priporočam!",
    tag: "Hybrid Conditioning",
    image: "/assets/tag-hybrid-conditioning.webp",
  },
  {
    text: "K Tei hodim vsakih 14 dni. Zakaj? Ker mi je pomembno, da si vzamem določen čas za razmislek in osebni razvoj. K njej hodim, ker dobim drugačen pogled in mi pomaga, da se poglobim v situacijo/težavo/občutke. Vedno znova me opomni, naj se vrnem k sebi, prisluhnem svojemu telesu in mu pustim, da opravi svoje, namesto da se priganjam in pretirano analiziram. Rada delam z njo, ker ima izjemen občutek za ljudi in zna terapijo prilagoditi potrebam, ravni in pripravljenosti posameznika. Z bogatim znanjem s področja gibanja in zgradbe telesa, ki ga povezuje s psihološkimi, duhovnimi in čustvenimi procesi v posamezniku, ti pomaga pogledati na svoj življenjski slog in ga s praktičnimi nasveti spremeniti na bolje. Hvala!",
    tag: "Hybrid Conditioning",
    image: "/assets/tag-hybrid-conditioning.webp",
  },
];

export const LOYALTY = {
  title: "Obstaja tudi Kinesiohealing Loyalty Club",
  respectLabel: "Ker spoštujem :",
  values: ["zvestobo", "zaupanje", "zavezanost k procesu", "dolgoročno sodelovanje", "recipročnost"],
  enterLabel: "Kako lahko vstopiš?",
  enterText: "Ko se zavežeš k rednemu trenažnemu procesu za obdobje, daljše od enega leta.",
  benefitsLabel: "Tvoje ugodnosti",
  benefits: [
    { title: "Stalni termin", lines: ["Tvoj termin ostane rezerviran zate."] },
    {
      title: "Prilagojena cena",
      lines: [
        "Individualni trening za člane: 50 € / obisk namesto redne cene 60 €.",
        "Semi-private vadba za člane: skladno s cenikom semi-private treningov.",
      ],
    },
  ],
  future: "Loyalty Club 🩵 se bo s časom razvijal skupaj s Kinesiohealing skupnostjo in prinašal še druge ugodnosti.",
  quote: ["Tvoje zdravje je tvoja odgovornost.", "Jaz pa te lahko ustrezno podpiram na poti."],
  welcome: "Dobrodošel/a v Kinesiohealing Loyalty Club.",
  image: "/assets/loyalty-club.webp",
};

export const FIRST_STEP = {
  title: "Naredi prvi korak.",
  text: "Ni treba, da imaš danes vse odgovore. Dovolj je, da narediš prvi korak. Za ostalo bova poskrbela skupaj.",
  button: "Rezerviraj termin",
  unsureTitle: "Če nisi prepričan/a kaj potrebuješ",
  unsureText: "Stopi v kontakt z mano. Z veseljem odgovorim na tvoja vprašanja in skupaj bova poiskala obliko sodelovanja, ki najbolj ustreza tvojim ciljem.",
};
