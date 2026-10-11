import sumAssuredLinks from "@/constants/sumAssureLinks";

export const calculatorCategories = [
  { label: "All", value: "all" },
  { label: "Weight & Body Health", value: "health" },
  { label: "Women Health & Pregnancy", value: "women" },
  { label: "Fitness & Performance", value: "fitness" },
  { label: "Calories, Diet & Nutrition", value: "nutrition" },
  { label: "Health Checks & Medical Metrics", value: "medical" },
];

const badgeBase = "https://cdn.oneassure.in/static_assets/oneassure_site";
const baseUrl = "https://www.oneassure.in";

export const footerBrand = {
  logo: "https://cdn.oasr.in/oa-site/cms-uploads/media/Logo_File_7th_August_4ea73a2feb.svg",
  description: "OneAssure is a full-stack digital Insurance Platform",
  badges: [
    {
      src: `${badgeBase}/irdai.svg`,
      alt: "IRDAI",
      width: 64,
      height: 64,
    },
    {
      src: "https://cdn.oasr.in/oa-site/cms-uploads/media/ISO_27001_9d22b24184.png",
      alt: "ISO 27001",
      width: 72,
      height: 72,
    },
    {
      src: "https://cdn.oasr.in/oa-site/cms-uploads/media/SOC_2_facf1e938d.png",
      alt: "SOC 2",
      width: 72,
      height: 72,
    },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://x.com/OneAssure?s=20",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_twitter.svg-1698751099",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/oneassure/",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_facebook.svg-1698751122",
    },
    {
      name: "LinkedIn",
      href: "https://in.linkedin.com/company/oneassure",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_linked.svg-1698751149",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/oneassureindia/",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Gloab_solid_instagram.svg-1698751177",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@oneassure8897?si=0iVX41Bhs_cR-AIS",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_youtube.svg-1698751200",
    },
  ],
};

export const footerNav = [
  {
    title: "Insurance",
    links: [
      { label: "Term Insurance", href: `${baseUrl}/term-insurance` },
      { label: "Health Insurance", href: `${baseUrl}/health-insurance` },
      {
        label: "Compare Health Insurance Plans",
        href: `${baseUrl}/compare-health-insurance-plans`,
      },
      {
        label: "Explore Health Insurance Comparison",
        href: `${baseUrl}/html-sitemaps/compare-health-insurance`,
      },
      {
        label: "Explore Health Insurance",
        href: `${baseUrl}/html-sitemaps/health`,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: `${baseUrl}/about` },
      { label: "Contact Us", href: `${baseUrl}/contact-us` },
      { label: "Careers", href: `${baseUrl}/careers` },
      { label: "Blogs", href: `${baseUrl}/insurance` },
      { label: "Claims", href: `${baseUrl}/claims` },
      { label: "LLM Info", href: `${baseUrl}/llm-info` },
    ],
  },
  {
    title: "Policy",
    links: [
      { label: "Privacy Policy", href: `${baseUrl}/documents/privacy-policy` },
      {
        label: "Payments Terms",
        href: `${baseUrl}/documents/cancellation-and-refund`,
      },
      {
        label: "Terms & Conditions",
        href: `${baseUrl}/documents/terms-and-conditions`,
      },
      {
        label: "License Information",
        href: `${baseUrl}/documents/license-information`,
      },
      {
        label: "Code of Conduct",
        href: `${baseUrl}/documents/code-of-conduct`,
      },
      {
        label: "Grievance Redressal",
        href: `${baseUrl}/documents/grievance-redressal`,
      },
    ],
  },
];

export const calculators = [
  {
    label: "BMI Calculator",
    href: `${baseUrl}/bmi-calculator-men-women`,
    category: "health",
  },
  {
    label: "TDEE Calculator",
    href: `${baseUrl}/tdee-calculator/hc/1ARBuMw1laqbLWxy`,
    category: "nutrition",
  },
  {
    label: "GFR Calculator",
    href: `${baseUrl}/gfr-calculator/hc/1ARQX8E7PBAZKn7i`,
    category: "medical",
  },
  {
    label: "Pregnancy Weight Gain Calculator",
    href: `${baseUrl}/pregnancy-weight-gain-calculator/hc/1AQqOfjtdE8sYW6T`,
    category: "women",
  },
  {
    label: "Due Date Calculator",
    href: `${baseUrl}/due-date-calculator/hc/1AQr8ZX2FAu3WHtQ`,
    category: "women",
  },
  {
    label: "Healthy Weight Calculator",
    href: `${baseUrl}/healthy-weight-calculator/hc/1APzxLlpNqKVxfsP`,
    category: "health",
  },
  {
    label: "Body Fat Calculator",
    href: `${baseUrl}/body-fat-calculator/hc/1APqEtKj6A48D72U`,
    category: "health",
  },
  {
    label: "Carbohydrate Calculator",
    href: `${baseUrl}/carbohydrate-calculator/hc/1AR3M41GSUyLOUYs`,
    category: "nutrition",
  },
  {
    label: "Calorie Calculator",
    href: `${baseUrl}/calorie-calculator/hc/1AFcebfCme0ST8bH`,
    category: "nutrition",
  },
  {
    label: "BMR Calculator",
    href: `${baseUrl}/bmr-calculator/hc/1APqyjJoPyKqlIci`,
    category: "nutrition",
  },
  {
    label: "Ideal Weight Calculator",
    href: `${baseUrl}/ideal-weight-calculator/hc/1APrmzlQkDYNWYwH`,
    category: "health",
  },
  {
    label: "Pace Calculator",
    href: `${baseUrl}/pace-calculator/hc/1APsm9lin7QqqGyX`,
    category: "fitness",
  },
  {
    label: "Army Body Fat Percentage Calculator",
    href: `${baseUrl}/army-body-fat-percentage-calculator/hc/1APtVarfF8Co2T84`,
    category: "health",
  },
  {
    label: "Lean Body Mass Calculator",
    href: `${baseUrl}/lean-body-mass-calculator/hc/1APyr5jT8UKTwdfT`,
    category: "health",
  },
  {
    label: "Calories Burned Calculator",
    href: `${baseUrl}/calories_burned_calculator/hc/1AR8oFXKwXATRP7U`,
    category: "nutrition",
  },
  {
    label: "Pregnancy Conception Calculator",
    href: `${baseUrl}/pregnancy-conception-calculator/hc/1AR9AjuP2aefihWO`,
    category: "women",
  },
  {
    label: "One Rep Max Calculator",
    href: `${baseUrl}/one_rep_max_calculator/hc/1ARANDFu8hcN35uL`,
    category: "fitness",
  },
  {
    label: "Ovulation Calculator",
    href: `${baseUrl}/ovulation-calculator/hc/1ARAQWJXkZcHSwtL`,
    category: "women",
  },
  {
    label: "Conception Calculator",
    href: `${baseUrl}/conception-calculator/hc/1ARAVPmHxvksYcnw`,
    category: "women",
  },
  {
    label: "Target Heart Rate Calculator",
    href: `${baseUrl}/target_heart_rate_calculator/hc/1ARAzQLPM0W329pQ`,
    category: "fitness",
  },
  {
    label: "Pregnancy Calculator",
    href: `${baseUrl}/pregnancy_calculator/hc/1ARBWmm1c80cj64W`,
    category: "women",
  },
  {
    label: "Macro Calculator",
    href: `${baseUrl}/macro-calculator/hc/1ARBdvH6k1AxqQN2`,
    category: "nutrition",
  },
  {
    label: "Protein Calculator",
    href: `${baseUrl}/protein-calculator/hc/1ARBeXdZZyqHUqPz`,
    category: "nutrition",
  },
  {
    label: "Fat Intake Calculator",
    href: `${baseUrl}/fat-intake-calculator/hc/1ARBf1jWsiGMLcqp`,
    category: "nutrition",
  },
  {
    label: "Body Surface Area Calculator",
    href: `${baseUrl}/body-surface-area-calculator/hc/1ARBh6Y10l6jvvZD`,
    category: "health",
  },
  {
    label: "BAC Calculator",
    href: `${baseUrl}/bac-calculator/hc/1ARBi6QHgtk9dx9L`,
    category: "medical",
  },
  {
    label: "Body Type Calculator",
    href: `${baseUrl}/body-type-calculator/hc/1ARTkLyR2mG2AtRl`,
    category: "health",
  },
  {
    label: "Period Calculator",
    href: `${baseUrl}/period-calculator/hc/1ARBdOO6WnIqWiUo`,
    category: "women",
  },
];

export const contactInfo = {
  company: "Prost Technologies Private Limited",
  cin: "CIN - U74999KA2019PTC128430",
  address:
    "Address - 1st Floor, Gopala Krishna Complex, Residency Road, Bengaluru, Karnataka, India - 560025",
  phone: "+91 6364334343",
  email: "support@oneassure.in",
};

export const linkCloudGroups = [
  {
    title: "Insurer",
    collapsedCount: 6,
    links: [
      {
        label: "Niva Bupa Health Insurance",
        href: `${baseUrl}/niva-bupa-health-insurance/hi/18TzTOgEeotq8X3w`,
      },
      {
        label: "Aditya Birla Health Insurance",
        href: `${baseUrl}/aditya-birla-health-insurance/hi/18Z6l2lLbbEJ5kf3`,
      },
      {
        label: "Star Health Insurance",
        href: `${baseUrl}/star-health-insurance/hi/18mIC5vyQCnuFx76`,
      },
      {
        label: "ICICI Lombard Health Insurance",
        href: `${baseUrl}/icici-lombard-health-insurance/hi/18TzMT7LGohy13QG`,
      },
      {
        label: "Royal Sundaram Health Insurance",
        href: `${baseUrl}/royal-sundaram-health-insurance/hi/18mIPtYKhtWVnMNK`,
      },
      {
        label: "Manipal Cigna Health Insurance",
        href: `${baseUrl}/manipal-cigna-health-insurance/hi/18mIL9nnaE2piamh`,
      },
      {
        label: "HDFC ERGO Health Insurance",
        href: `${baseUrl}/hdfc-ergo-health-insurance/hi/18TzSCuCv5d8qwXz`,
      },
      {
        label: "Tata AIG Health Insurance",
        href: `${baseUrl}/tata-aig-health-insurance/hi/18mIEWEHtUC56dw0`,
      },
      {
        label: "Zuno Health Insurance",
        href: `${baseUrl}/zuno-health-insurance/hi/18mIU5GbeWGS37Yl`,
      },
      {
        label: "Cholamandalam Health Insurance",
        href: `${baseUrl}/cholamandalam-health-insurance/hi/18nQ9tEdDOlOorxF`,
      },
      {
        label: "Digit Health Insurance",
        href: `${baseUrl}/godigit-health-insurance/hi/18mI5HkmbL4L9skK`,
      },
      {
        label: "New India Health Insurance",
        href: `${baseUrl}/the-new-india-health-insurance/hi/18mIIkSVW3Y1KauV`,
      },
      {
        label: "SBI Health Insurance",
        href: `${baseUrl}/sbi-health-insurance/hi/18mIWUFYhknSAUe0`,
      },
      {
        label: "IFFCO Tokio Health Insurance",
        href: `${baseUrl}/iffco-tokio-health-insurance/hi/18mINfzOOBGpC2r1`,
      },
      {
        label: "Care Health Insurance",
        href: `${baseUrl}/care-health-insurance/hi/18TzPsnRGKOoJ8F7`,
      },
      {
        label: "Bajaj Health Insurance",
        href: `${baseUrl}/bajaj-allianz-health-insurance/hi/18mHuYSmB3JTRdFT`,
      },
      {
        label: "Magma Health Insurance",
        href: `${baseUrl}/magma-health-insurance/hi/19vwA5qA48mavorr`,
      },
      {
        label: "Zurich Kotak Health Insurance",
        href: `${baseUrl}/zurich-kotak-health-insurance/hi/19wEX6lOPWip6t1U`,
      },
      {
        label: "National Health Insurance",
        href: `${baseUrl}/national-health-insurance/hi/18nTsO7bNQ8hfodm`,
      },
      {
        label: "Oriental Health Insurance",
        href: `${baseUrl}/oriental-health-insurance/hi/18nTyZ2dbq5QK7Az`,
      },
      {
        label: "Raheja QBE Health Insurance",
        href: `${baseUrl}/raheja-qbe-health-insurance/hi/19wEsMfITWCPVye9`,
      },
      {
        label: "Reliance Health Insurance",
        href: `${baseUrl}/reliance-health-insurance/hi/19wEtnn9wi82VVkf`,
      },
      {
        label: "Future Generali Health Insurance",
        href: `${baseUrl}/future-generali-health-insurance/hi/19wEd8HhkzAykp96`,
      },
      {
        label: "United India Health Insurance",
        href: `${baseUrl}/united-india-health-insurance/hi/18nU0a8YJCMjlMRl`,
      },
    ],
  },
  {
    title: "Health Plans",
    collapsedCount: 6,
    links: [
      {
        label: "Niva Bupa Health Insurance Plans",
        href: `${baseUrl}/niva-bupa-health-insurance-plans/hl/18TzTOgEeotq8X3w`,
      },
      {
        label: "Aditya Birla Health Insurance Plans",
        href: `${baseUrl}/aditya-birla-health-insurance-plans/hl/18Z6l2lLbbEJ5kf3`,
      },
      {
        label: "Star Health Insurance Plans",
        href: `${baseUrl}/star-health-insurance-plans/hl/18mIC5vyQCnuFx76`,
      },
      {
        label: "ICICI Lombard Health Insurance Plans",
        href: `${baseUrl}/icici-lombard-health-insurance-plans/hl/18TzMT7LGohy13QG`,
      },
      {
        label: "Royal Sundaram Health Insurance Plans",
        href: `${baseUrl}/royal-sundaram-health-insurance-plans/hl/18mIPtYKhtWVnMNK`,
      },
      {
        label: "Manipal Cigna Health Insurance Plans",
        href: `${baseUrl}/manipal-cigna-health-insurance-plans/hl/18mIL9nnaE2piamh`,
      },
      {
        label: "HDFC ERGO Health Insurance Plans",
        href: `${baseUrl}/hdfc-ergo-health-insurance-plans/hl/18TzSCuCv5d8qwXz`,
      },
      {
        label: "Tata AIG Health Insurance Plans",
        href: `${baseUrl}/tata-aig-health-insurance-plans/hl/18mIEWEHtUC56dw0`,
      },
      {
        label: "Zuno Health Insurance Plans",
        href: `${baseUrl}/zuno-health-insurance-plans/hl/18mIU5GbeWGS37Yl`,
      },
      {
        label: "Cholamandalam Health Insurance Plans",
        href: `${baseUrl}/cholamandalam-health-insurance-plans/hl/18nQ9tEdDOlOorxF`,
      },
      {
        label: "Digit Health Insurance Plans",
        href: `${baseUrl}/godigit-health-insurance-plans/hl/18mI5HkmbL4L9skK`,
      },
      {
        label: "New India Health Insurance Plans",
        href: `${baseUrl}/the-new-india-health-insurance-plans/hl/18mIIkSVW3Y1KauV`,
      },
      {
        label: "SBI Health Insurance Plans",
        href: `${baseUrl}/sbi-health-insurance-plans/hl/18mIWUFYhknSAUe0`,
      },
      {
        label: "IFFCO Tokio Health Insurance Plans",
        href: `${baseUrl}/iffco-tokio-health-insurance-plans/hl/18mINfzOOBGpC2r1`,
      },
      {
        label: "Care Health Insurance Plans",
        href: `${baseUrl}/care-health-insurance-plans/hl/18TzPsnRGKOoJ8F7`,
      },
      {
        label: "Bajaj Health Insurance Plans",
        href: `${baseUrl}/bajaj-allianz-health-insurance-plans/hl/18mHuYSmB3JTRdFT`,
      },
      {
        label: "Magma Health Insurance Plans",
        href: `${baseUrl}/magma-health-insurance-plans/hl/19vwA5qA48mavorr`,
      },
      {
        label: "Zurich Kotak Health Insurance Plans",
        href: `${baseUrl}/zurich-kotak-health-insurance-plans/hl/19wEX6lOPWip6t1U`,
      },
      {
        label: "National Health Insurance Plans",
        href: `${baseUrl}/national-health-insurance-plans/hl/18nTsO7bNQ8hfodm`,
      },
      {
        label: "Oriental Health Insurance Plans",
        href: `${baseUrl}/oriental-health-insurance-plans/hl/18nTyZ2dbq5QK7Az`,
      },
      {
        label: "Raheja QBE Health Insurance Plans",
        href: `${baseUrl}/raheja-qbe-health-insurance-plans/hl/19wEsMfITWCPVye9`,
      },
      {
        label: "Reliance Health Insurance Plans",
        href: `${baseUrl}/reliance-health-insurance-plans/hl/19wEtnn9wi82VVkf`,
      },
      {
        label: "Future Generali Health Insurance Plans",
        href: `${baseUrl}/future-generali-health-insurance-plans/hl/19wEd8HhkzAykp96`,
      },
      {
        label: "United India Health Insurance Plans",
        href: `${baseUrl}/united-india-health-insurance-plans/hl/18nU0a8YJCMjlMRl`,
      },
    ],
  },
  {
    title: "Claim",
    collapsedCount: 6,
    links: [
      {
        label: "Niva Bupa Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/niva-bupa-health-insurance-claim-settlement-ratio/cs/18TzTOgEeotq8X3w`,
      },
      {
        label: "Aditya Birla Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/aditya-birla-health-insurance-claim-settlement-ratio/cs/18Z6l2lLbbEJ5kf3`,
      },
      {
        label: "Star Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/star-health-insurance-claim-settlement-ratio/cs/18mIC5vyQCnuFx76`,
      },
      {
        label: "ICICI Lombard Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/icici-lombard-health-insurance-claim-settlement-ratio/cs/18TzMT7LGohy13QG`,
      },
      {
        label: "Royal Sundaram Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/royal-sundaram-health-insurance-claim-settlement-ratio/cs/18mIPtYKhtWVnMNK`,
      },
      {
        label: "Manipal Cigna Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/manipal-cigna-health-insurance-claim-settlement-ratio/cs/18mIL9nnaE2piamh`,
      },
      {
        label: "HDFC ERGO Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/hdfc-ergo-health-insurance-claim-settlement-ratio/cs/18TzSCuCv5d8qwXz`,
      },
      {
        label: "Tata AIG Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/tata-aig-health-insurance-claim-settlement-ratio/cs/18mIEWEHtUC56dw0`,
      },
      {
        label: "Zuno Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/zuno-health-insurance-claim-settlement-ratio/cs/18mIU5GbeWGS37Yl`,
      },
      {
        label: "Cholamandalam Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/cholamandalam-health-insurance-claim-settlement-ratio/cs/18nQ9tEdDOlOorxF`,
      },
      {
        label: "Digit Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/digit-health-insurance-claim-settlement-ratio/cs/18mI5HkmbL4L9skK`,
      },
      {
        label: "New India Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/new-india-health-insurance-claim-settlement-ratio/cs/18mIIkSVW3Y1KauV`,
      },
      {
        label: "SBI Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/sbi-health-insurance-claim-settlement-ratio/cs/18mIWUFYhknSAUe0`,
      },
      {
        label: "IFFCO Tokio Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/iffco-tokio-health-insurance-claim-settlement-ratio/cs/18mINfzOOBGpC2r1`,
      },
      {
        label: "Care Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/care-health-insurance-claim-settlement-ratio/cs/18TzPsnRGKOoJ8F7`,
      },
      {
        label: "Bajaj Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/bajaj-allianz-health-insurance-claim-settlement-ratio/cs/18mHuYSmB3JTRdFT`,
      },
      {
        label: "Magma Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/magma-health-insurance-claim-settlement-ratio/cs/19vwA5qA48mavorr`,
      },
      {
        label: "Zurich Kotak Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/zurich-kotak-health-insurance-claim-settlement-ratio/cs/19wEX6lOPWip6t1U`,
      },
      {
        label: "National Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/national-health-insurance-claim-settlement-ratio/cs/18nTsO7bNQ8hfodm`,
      },
      {
        label: "Oriental Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/oriental-health-insurance-claim-settlement-ratio/cs/18nTyZ2dbq5QK7Az`,
      },
      {
        label: "Raheja QBE Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/raheja-qbe-health-insurance-claim-settlement-ratio/cs/19wEsMfITWCPVye9`,
      },
      {
        label: "Reliance Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/reliance-health-insurance-claim-settlement-ratio/cs/19wEtnn9wi82VVkf`,
      },
      {
        label: "Future Generali Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/future-generali-health-insurance-claim-settlement-ratio/cs/19wEd8HhkzAykp96`,
      },
      {
        label: "United India Health Insurance Claim Settlement Ratio",
        href: `${baseUrl}/united-india-health-insurance-claim-settlement-ratio/cs/18nU0a8YJCMjlMRl`,
      },
    ],
  },
  {
    title: "Coverage",
    collapsedCount: 6,
    links: [
      {
        label: "Niva Bupa Health Insurance Coverage & Benefits",
        href: `${baseUrl}/niva-bupa-health-insurance-coverage-benefits/cb/18TzTOgEeotq8X3w`,
      },
      {
        label: "Aditya Birla Health Insurance Coverage & Benefits",
        href: `${baseUrl}/aditya-birla-health-insurance-coverage-benefits/cb/18Z6l2lLbbEJ5kf3`,
      },
      {
        label: "Star Health Insurance Coverage & Benefits",
        href: `${baseUrl}/star-health-insurance-coverage-benefits/cb/18mIC5vyQCnuFx76`,
      },
      {
        label: "ICICI Lombard Health Insurance Coverage & Benefits",
        href: `${baseUrl}/icici-lombard-health-insurance-coverage-benefits/cb/18TzMT7LGohy13QG`,
      },
      {
        label: "Royal Sundaram Health Insurance Coverage & Benefits",
        href: `${baseUrl}/royal-sundaram-health-insurance-coverage-benefits/cb/18mIPtYKhtWVnMNK`,
      },
      {
        label: "Manipal Cigna Health Insurance Coverage & Benefits",
        href: `${baseUrl}/manipal-cigna-health-insurance-coverage-benefits/cb/18mIL9nnaE2piamh`,
      },
      {
        label: "HDFC ERGO Health Insurance Coverage & Benefits",
        href: `${baseUrl}/hdfc-ergo-health-insurance-coverage-benefits/cb/18TzSCuCv5d8qwXz`,
      },
      {
        label: "Tata AIG Health Insurance Coverage & Benefits",
        href: `${baseUrl}/tata-aig-health-insurance-coverage-benefits/cb/18mIEWEHtUC56dw0`,
      },
      {
        label: "Zuno Health Insurance Coverage & Benefits",
        href: `${baseUrl}/zuno-health-insurance-coverage-benefits/cb/18mIU5GbeWGS37Yl`,
      },
      {
        label: "Cholamandalam Health Insurance Coverage & Benefits",
        href: `${baseUrl}/cholamandalam-health-insurance-coverage-benefits/cb/18nQ9tEdDOlOorxF`,
      },
      {
        label: "Digit Health Insurance Coverage & Benefits",
        href: `${baseUrl}/godigit-health-insurance-coverage-benefits/cb/18mI5HkmbL4L9skK`,
      },
      {
        label: "New India Health Insurance Coverage & Benefits",
        href: `${baseUrl}/the-new-india-health-insurance-coverage-benefits/cb/18mIIkSVW3Y1KauV`,
      },
      {
        label: "SBI Health Insurance Coverage & Benefits",
        href: `${baseUrl}/sbi-health-insurance-coverage-benefits/cb/18mIWUFYhknSAUe0`,
      },
      {
        label: "IFFCO Tokio Health Insurance Coverage & Benefits",
        href: `${baseUrl}/iffco-tokio-health-insurance-coverage-benefits/cb/18mINfzOOBGpC2r1`,
      },
      {
        label: "Care Health Insurance Coverage & Benefits",
        href: `${baseUrl}/care-health-insurance-coverage-benefits/cb/18TzPsnRGKOoJ8F7`,
      },
      {
        label: "Bajaj Health Insurance Coverage & Benefits",
        href: `${baseUrl}/bajaj-allianz-health-insurance-coverage-benefits/cb/18mHuYSmB3JTRdFT`,
      },
      {
        label: "Magma Health Insurance Coverage & Benefits",
        href: `${baseUrl}/magma-health-insurance-coverage-benefits/cb/19vwA5qA48mavorr`,
      },
      {
        label: "Zurich Kotak Health Insurance Coverage & Benefits",
        href: `${baseUrl}/zurich-kotak-health-insurance-coverage-benefits/cb/19wEX6lOPWip6t1U`,
      },
      {
        label: "National Health Insurance Coverage & Benefits",
        href: `${baseUrl}/national-health-insurance-coverage-benefits/cb/18nTsO7bNQ8hfodm`,
      },
      {
        label: "Oriental Health Insurance Coverage & Benefits",
        href: `${baseUrl}/oriental-health-insurance-coverage-benefits/cb/18nTyZ2dbq5QK7Az`,
      },
      {
        label: "Raheja QBE Health Insurance Coverage & Benefits",
        href: `${baseUrl}/raheja-qbe-health-insurance-coverage-benefits/cb/19wEsMfITWCPVye9`,
      },
      {
        label: "Reliance Health Insurance Coverage & Benefits",
        href: `${baseUrl}/reliance-health-insurance-coverage-benefits/cb/19wEtnn9wi82VVkf`,
      },
      {
        label: "Future Generali Health Insurance Coverage & Benefits",
        href: `${baseUrl}/future-generali-health-insurance-coverage-benefits/cb/19wEd8HhkzAykp96`,
      },
      {
        label: "United India Health Insurance Coverage & Benefits",
        href: `${baseUrl}/united-india-health-insurance-coverage-benefits/cb/18nU0a8YJCMjlMRl`,
      },
    ],
  },
  // {
  //   title: "Most Visited",
  //   collapsedCount: 6,
  //   links: [
  //     { label: "Niva Bupa Health Insurance", href: "/niva-bupa-health-insurance/hi/18TzTOgEeotq8X3w` },
  //     { label: "Aditya Birla Health Insurance", href: "/aditya-birla-health-insurance/hi/18Z6l2lLbbEJ5kf3` },
  //     { label: "Star Health Insurance", href: "/star-health-insurance/hi/18mIC5vyQCnuFx76` },
  //     { label: "ICICI Lombard Health Insurance", href: "/icici-lombard-health-insurance/hi/18TzMT7LGohy13QG` },
  //     { label: "Royal Sundaram Health Insurance", href: "/royal-sundaram-health-insurance/hi/18mIPtYKhtWVnMNK` },
  //     { label: "Manipal Cigna Health Insurance", href: "/manipal-cigna-health-insurance/hi/18mIL9nnaE2piamh` },
  //     { label: "HDFC ERGO Health Insurance", href: "/hdfc-ergo-health-insurance/hi/18TzSCuCv5d8qwXz` },
  //     { label: "Tata AIG Health Insurance", href: "/tata-aig-health-insurance/hi/18mIEWEHtUC56dw0` },
  //     { label: "Zuno Health Insurance", href: "/zuno-health-insurance/hi/18mIU5GbeWGS37Yl` },
  //     { label: "Cholamandalam Health Insurance", href: "/cholamandalam-health-insurance/hi/18nQ9tEdDOlOorxF` },
  //     { label: "Digit Health Insurance", href: "/godigit-health-insurance/hi/18mI5HkmbL4L9skK` },
  //     { label: "New India Health Insurance", href: "/the-new-india-health-insurance/hi/18mIIkSVW3Y1KauV` },
  //     { label: "SBI Health Insurance", href: "/sbi-health-insurance/hi/18mIWUFYhknSAUe0` },
  //     { label: "IFFCO Tokio Health Insurance", href: "/iffco-tokio-health-insurance/hi/18mINfzOOBGpC2r1` },
  //     { label: "Care Health Insurance", href: "/care-health-insurance/hi/18TzPsnRGKOoJ8F7` },
  //     { label: "Bajaj Allianz Health Insurance", href: "/bajaj-allianz-health-insurance/hi/18mHuYSmB3JTRdFT` },
  //     { label: "Magma Health Insurance", href: "/magma-health-insurance/hi/19vwA5qA48mavorr` },
  //     { label: "Zurich Kotak Health Insurance", href: "/zurich-kotak-health-insurance/hi/19wEX6lOPWip6t1U` },
  //     { label: "National Health Insurance", href: "/national-health-insurance/hi/18nTsO7bNQ8hfodm` },
  //     { label: "Oriental Health Insurance", href: "/oriental-health-insurance/hi/18nTyZ2dbq5QK7Az` },
  //     { label: "Raheja QBE Health Insurance", href: "/raheja-qbe-health-insurance/hi/19wEsMfITWCPVye9` },
  //     { label: "Reliance Health Insurance", href: "/reliance-health-insurance/hi/19wEtnn9wi82VVkf` },
  //     { label: "Future Generali Health Insurance", href: "/future-generali-health-insurance/hi/19wEd8HhkzAykp96` },
  //     { label: "United India Health Insurance", href: "/united-india-health-insurance/hi/18nU0a8YJCMjlMRl` },
  //   ],
  // },
  {
    title: "Sum Assured",
    collapsedCount: 6,
    links: sumAssuredLinks,
  },
  {
    title: "Super Topup",
    collapsedCount: 6,
    links: [
      {
        label: "Niva Bupa Health Insurance Super Topup",
        href: `${baseUrl}/niva-bupa-health-insurance-super-top-up-plans/st/18TzTOgEeotq8X3w`,
      },
      {
        label: "Aditya Birla Health Insurance Super Topup",
        href: `${baseUrl}/aditya-birla-health-insurance-super-top-up-plans/st/18Z6l2lLbbEJ5kf3`,
      },
      {
        label: "Star Health Insurance Super Topup",
        href: `${baseUrl}/star-health-insurance/st/18mIC5vyQCnuFx76`,
      },
      {
        label: "ICICI Lombard Health Insurance Super Topup",
        href: `${baseUrl}/icici-lombard-health-insurance-super-top-up-plans/st/18TzMT7LGohy13QG`,
      },
      {
        label: "Royal Sundaram Health Insurance Super Topup",
        href: `${baseUrl}/royal-sundaram-health-insurance-super-top-up-plans/st/18mIPtYKhtWVnMNK`,
      },
      {
        label: "Manipal Cigna Health Insurance Super Topup",
        href: `${baseUrl}/manipal-cigna-health-insurance-super-top-up-plans/st/18mIL9nnaE2piamh`,
      },
      {
        label: "HDFC ERGO Health Insurance Super Topup",
        href: `${baseUrl}/hdfc-ergo-health-insurance-super-top-up-plans/st/18TzSCuCv5d8qwXz`,
      },
      {
        label: "Tata AIG Health Insurance Super Topup",
        href: `${baseUrl}/tata-aig-health-insurance-super-top-up-plans/st/18mIEWEHtUC56dw0`,
      },
      {
        label: "Zuno Health Insurance Super Topup",
        href: `${baseUrl}/zuno-health-insurance-super-top-up-plans/st/18mIU5GbeWGS37Yl`,
      },
      {
        label: "Cholamandalam Health Insurance Super Topup",
        href: `${baseUrl}/cholamandalam-health-insurance-super-top-up-plans/st/18nQ9tEdDOlOorxF`,
      },
      {
        label: "Digit Health Insurance Super Topup",
        href: `${baseUrl}/godigit-health-insurance-super-top-up-plans/st/18mI5HkmbL4L9skK`,
      },
      {
        label: "New India Health Insurance Super Topup",
        href: `${baseUrl}/the-new-india-health-insurance-super-top-up-plans/st/18mIIkSVW3Y1KauV`,
      },
      {
        label: "SBI Health Insurance Super Topup",
        href: `${baseUrl}/sbi-health-insurance-super-top-up-plans/st/18mIWUFYhknSAUe0`,
      },
      {
        label: "IFFCO Tokio Health Insurance Super Topup",
        href: `${baseUrl}/iffco-tokio-health-insurance-super-top-up-plans/st/18mINfzOOBGpC2r1`,
      },
      {
        label: "Care Health Insurance Super Topup",
        href: `${baseUrl}/care-health-insurance-super-top-up-plans/st/18TzPsnRGKOoJ8F7`,
      },
      {
        label: "Bajaj Health Insurance Super Topup",
        href: `${baseUrl}/bajaj-allianz-health-insurance-super-top-up-plans/st/18mHuYSmB3JTRdFT`,
      },
      {
        label: "Magma Health Insurance Super Topup",
        href: `${baseUrl}/magma-health-insurance-super-top-up-plans/st/19vwA5qA48mavorr`,
      },
      {
        label: "Zurich Kotak Health Insurance Super Topup",
        href: `${baseUrl}/zurich-kotak-health-insurance-super-top-up-plans/st/19wEX6lOPWip6t1U`,
      },
      {
        label: "National Health Insurance Super Topup",
        href: `${baseUrl}/national-health-insurance-super-top-up-plans/st/18nTsO7bNQ8hfodm`,
      },
      {
        label: "Oriental Health Insurance Super Topup",
        href: `${baseUrl}/oriental-health-insurance-super-top-up-plans/st/18nTyZ2dbq5QK7Az`,
      },
      {
        label: "Raheja QBE Health Insurance Super Topup",
        href: `${baseUrl}/raheja-qbe-health-insurance-super-top-up-plans/st/19wEsMfITWCPVye9`,
      },
      {
        label: "Reliance Health Insurance Super Topup",
        href: `${baseUrl}/reliance-health-insurance-super-top-up-plans/st/19wEtnn9wi82VVkf`,
      },
      {
        label: "Future Generali Health Insurance Super Topup",
        href: `${baseUrl}/future-generali-health-insurance-super-top-up-plans/st/19wEd8HhkzAykp96`,
      },
      {
        label: "United India Health Insurance Super Topup",
        href: `${baseUrl}/united-india-health-insurance-super-top-up-plans/st/18nU0a8YJCMjlMRl`,
      },
    ],
  },
  // {
  //   title: "Popular Blogs",
  //   collapsedCount: 6,
  //   links: [
  //     { label: "Niva Bupa Health Insurance Blogs", href: "/niva-bupa-health-insurance/hi/18TzTOgEeotq8X3w` },
  //     { label: "Aditya Birla Health Insurance Blogs", href: "/aditya-birla-health-insurance/hi/18Z6l2lLbbEJ5kf3` },
  //     { label: "Star Health Insurance Blogs", href: "/star-health-insurance/hi/18mIC5vyQCnuFx76` },
  //     { label: "ICICI Lombard Health Insurance Blogs", href: "/icici-lombard-health-insurance/hi/18TzMT7LGohy13QG` },
  //     { label: "Royal Sundaram Health Insurance Blogs", href: "/royal-sundaram-health-insurance/hi/18mIPtYKhtWVnMNK` },
  //     { label: "Manipal Cigna Health Insurance Blogs", href: "/manipal-cigna-health-insurance/hi/18mIL9nnaE2piamh` },
  //     { label: "HDFC ERGO Health Insurance Blogs", href: "/hdfc-ergo-health-insurance/hi/18TzSCuCv5d8qwXz` },
  //     { label: "Tata AIG Health Insurance Blogs", href: "/tata-aig-health-insurance/hi/18mIEWEHtUC56dw0` },
  //     { label: "Zuno Health Insurance Blogs", href: "/zuno-health-insurance/hi/18mIU5GbeWGS37Yl` },
  //     { label: "Cholamandalam Health Insurance Blogs", href: "/cholamandalam-health-insurance/hi/18nQ9tEdDOlOorxF` },
  //     { label: "Digit Health Insurance Blogs", href: "/godigit-health-insurance/hi/18mI5HkmbL4L9skK` },
  //     { label: "New India Health Insurance Blogs", href: "/the-new-india-health-insurance/hi/18mIIkSVW3Y1KauV` },
  //     { label: "SBI Health Insurance Blogs", href: "/sbi-health-insurance/hi/18mIWUFYhknSAUe0` },
  //     { label: "IFFCO Tokio Health Insurance Blogs", href: "/iffco-tokio-health-insurance/hi/18mINfzOOBGpC2r1` },
  //     { label: "Care Health Insurance Blogs", href: "/care-health-insurance/hi/18TzPsnRGKOoJ8F7` },
  //     { label: "Bajaj Allianz Health Insurance Blogs", href: "/bajaj-allianz-health-insurance/hi/18mHuYSmB3JTRdFT` },
  //     { label: "Magma Health Insurance Blogs", href: "/magma-health-insurance/hi/19vwA5qA48mavorr` },
  //     { label: "Zurich Kotak Health Insurance Blogs", href: "/zurich-kotak-health-insurance/hi/19wEX6lOPWip6t1U` },
  //     { label: "National Health Insurance Blogs", href: "/national-health-insurance/hi/18nTsO7bNQ8hfodm` },
  //     { label: "Oriental Health Insurance Blogs", href: "/oriental-health-insurance/hi/18nTyZ2dbq5QK7Az` },
  //     { label: "Raheja QBE Health Insurance Blogs", href: "/raheja-qbe-health-insurance/hi/19wEsMfITWCPVye9` },
  //     { label: "Reliance Health Insurance Blogs", href: "/reliance-health-insurance/hi/19wEtnn9wi82VVkf` },
  //     { label: "Future Generali Health Insurance Blogs", href: "/future-generali-health-insurance/hi/19wEd8HhkzAykp96` },
  //     { label: "United India Health Insurance Blogs", href: "/united-india-health-insurance/hi/18nU0a8YJCMjlMRl` },
  //   ],
  // },
  // {
  //   title: "Govt. Schemes",
  //   collapsedCount: 6,
  //   links: [
  //     { label: "Niva Bupa Health Insurance Govt. Schemes", href: "/niva-bupa-health-insurance/hi/18TzTOgEeotq8X3w` },
  //     { label: "Aditya Birla Health Insurance Govt. Schemes", href: "/aditya-birla-health-insurance/hi/18Z6l2lLbbEJ5kf3` },
  //     { label: "Star Health Insurance Govt. Schemes", href: "/star-health-insurance/hi/18mIC5vyQCnuFx76` },
  //     { label: "ICICI Lombard Health Insurance Govt. Schemes", href: "/icici-lombard-health-insurance/hi/18TzMT7LGohy13QG` },
  //     { label: "Royal Sundaram Health Insurance Govt. Schemes", href: "/royal-sundaram-health-insurance/hi/18mIPtYKhtWVnMNK` },
  //     { label: "Manipal Cigna Health Insurance Govt. Schemes", href: "/manipal-cigna-health-insurance/hi/18mIL9nnaE2piamh` },
  //     { label: "HDFC ERGO Health Insurance Govt. Schemes", href: "/hdfc-ergo-health-insurance/hi/18TzSCuCv5d8qwXz` },
  //     { label: "Tata AIG Health Insurance Govt. Schemes", href: "/tata-aig-health-insurance/hi/18mIEWEHtUC56dw0` },
  //     { label: "Zuno Health Insurance Govt. Schemes", href: "/zuno-health-insurance/hi/18mIU5GbeWGS37Yl` },
  //     { label: "Cholamandalam Health Insurance Govt. Schemes", href: "/cholamandalam-health-insurance/hi/18nQ9tEdDOlOorxF` },
  //     { label: "Digit Health Insurance Govt. Schemes", href: "/godigit-health-insurance/hi/18mI5HkmbL4L9skK` },
  //     { label: "New India Health Insurance Govt. Schemes", href: "/the-new-india-health-insurance/hi/18mIIkSVW3Y1KauV` },
  //     { label: "SBI Health Insurance Govt. Schemes", href: "/sbi-health-insurance/hi/18mIWUFYhknSAUe0` },
  //     { label: "IFFCO Tokio Health Insurance Govt. Schemes", href: "/iffco-tokio-health-insurance/hi/18mINfzOOBGpC2r1` },
  //     { label: "Care Health Insurance Govt. Schemes", href: "/care-health-insurance/hi/18TzPsnRGKOoJ8F7` },
  //     { label: "Bajaj Allianz Health Insurance Govt. Schemes", href: "/bajaj-allianz-health-insurance/hi/18mHuYSmB3JTRdFT` },
  //     { label: "Magma Health Insurance Govt. Schemes", href: "/magma-health-insurance/hi/19vwA5qA48mavorr` },
  //     { label: "Zurich Kotak Health Insurance Govt. Schemes", href: "/zurich-kotak-health-insurance/hi/19wEX6lOPWip6t1U` },
  //     { label: "National Health Insurance Govt. Schemes", href: "/national-health-insurance/hi/18nTsO7bNQ8hfodm` },
  //     { label: "Oriental Health Insurance Govt. Schemes", href: "/oriental-health-insurance/hi/18nTyZ2dbq5QK7Az` },
  //     { label: "Raheja QBE Health Insurance Govt. Schemes", href: "/raheja-qbe-health-insurance/hi/19wEsMfITWCPVye9` },
  //     { label: "Reliance Health Insurance Govt. Schemes", href: "/reliance-health-insurance/hi/19wEtnn9wi82VVkf` },
  //     { label: "Future Generali Health Insurance Govt. Schemes", href: "/future-generali-health-insurance/hi/19wEd8HhkzAykp96` },
  //     { label: "United India Health Insurance Govt. Schemes", href: "/united-india-health-insurance/hi/18nU0a8YJCMjlMRl` },
  //   ],
  // },
  {
    title: "Hot Topics",
    collapsedCount: 6,
    links: [
      {
        label: "Mediclaim Insurance",
        href: `${baseUrl}/mediclaim-insurance/sp/1ADKV6x1e76k4KKt`,
      },
      {
        label: "Section 80D Deductions",
        href: `${baseUrl}/section-80d-deductions/sp/1ADaQG6aSJscduXd`,
      },
      {
        label: "Personal Accident Insurance",
        href: `${baseUrl}/personal-accident-insurance/sp/1ADbDpMgGoqgAWxF`,
      },
      {
        label: "Parents Health Insurance",
        href: `${baseUrl}/parents-health-insurance/sp/1ADbhf4tqMqdB52I`,
      },
      {
        label: "Group Commercial Insurance",
        href: `${baseUrl}/group-commercial-insurance/sp/1ADc2H5K1rMu9ADF`,
      },
      {
        label: "Dental Insurance",
        href: `${baseUrl}/dental-insurance/sp/1ADcvhCferod2qcT`,
      },
      {
        label: "Critical Illness Insurance",
        href: `${baseUrl}/critical-illness-insurance/sp/1ADdQyvIb3oWOuYe`,
      },
      {
        label: "Senior Citizen Health Insurance",
        href: `${baseUrl}/senior-citizen-health-insurance/sp/19lcNmxU3Yu22UcJ`,
      },
      {
        label: "Family Health Insurance Plan",
        href: `${baseUrl}/family-health-insurance/sp/1ABFhZUENkmR01yv`,
      },
      {
        label: "Super Top-Up Health Insurance",
        href: `${baseUrl}/super-top-up-health-insurance/sp/1ADeTVk6L6eQgeSi`,
      },
      {
        label: "Cancer Health Insurance",
        href: `${baseUrl}/cancer-health-insurance/sp/1AENSQgYYm8okYqT`,
      },
      {
        label: "Health Insurance Portability",
        href: `${baseUrl}/health-insurance-portability/sp/1AEOFaZFwLATuifO`,
      },
      {
        label: "Cashless Health Insurance",
        href: `${baseUrl}/cashless-health-insurance/sp/1AEOkGWEbkux6xEd`,
      },
      {
        label: "Pre-Existing Disease Cover From Day One",
        href: `${baseUrl}/pre-existing-disease-cover-from-day-one/sp/1AESYU4j9cGKLDBE`,
      },
      {
        label: "Children Health Insurance",
        href: `${baseUrl}/children-health-insurance/sp/1AET6rEfg9o6mNd7`,
      },
      {
        label: "Students Health Insurance",
        href: `${baseUrl}/students-health-insurance/sp/1AETxkiCx4yaTKb9`,
      },
      {
        label: "Health Insurance Renewal",
        href: `${baseUrl}/health-insurance-renewal/sp/1AEUgrGQPEeE1jey`,
      },
      {
        label: "Hospital Cash Insurance",
        href: `${baseUrl}/hospital-cash-insurance/sp/1AFZvlNAW24lhpkQ`,
      },
      {
        label: "Health Insurance for Expats",
        href: `${baseUrl}/health-insurance-for-expats/sp/1AGoyhvM3lIxJmZj`,
      },
      {
        label: "Types of Health Insurance Plans",
        href: `${baseUrl}/types-of-health-insurance-plans/sp/1AGq0gu4ZQ8Cnw47`,
      },
      {
        label: "IVF Treatment Health Insurance",
        href: `${baseUrl}/ivf-treatment-health-insurance/sp/1AGqHjDPSeuISAug`,
      },
      {
        label: "Travel Health Insurance",
        href: `${baseUrl}/travel-health-insurance/sp/1AGqyLgRkCuJa2vf`,
      },
      {
        label: "Global Health Insurance",
        href: `${baseUrl}/global-health-insurance/sp/1AGvS1LXtxoeAUoe`,
      },
      {
        label: "Heart Patients Health Insurance",
        href: `${baseUrl}/heart-patients-health-insurance/sp/1AGvwZnrX600hfq4`,
      },
      {
        label: "Handicapped Health Insurance",
        href: `${baseUrl}/handicapped-health-insurance/sp/1AHCcmIi4e0lSAoF`,
      },
      {
        label: "Women Health Insurance",
        href: `${baseUrl}/women-health-insurance/sp/1AHDRgkz2voD4AWx`,
      },
      {
        label: "Health Insurance EMI",
        href: `${baseUrl}/health-insurance-emi/sp/1AHKPRIRIhcFE3DN`,
      },
      {
        label: "Health Insurance Claim: A Complete, Easy Guide by OneAssure",
        href: `${baseUrl}/health-insurance-claim-a-complete-easy-guide-by-oneassure/sp/1AHL3bctVHUxQYGB`,
      },
    ],
  },
  {
    title: "Popular Blogs",
    collapsedCount: 7,
    links: [
      {
        label: "What Is OPD?",
        href: `${baseUrl}/insurance/health-insurance-guides/what-is-opd-cover-health-insurance-and-why-do-you-need-it`,
      },
      {
        label: "Do You Need Proof For 80D Medical Expense Claims",
        href: `${baseUrl}/insurance/health-insurance-guides/Do-You-Need-Proof-For-80D-Medical-Expense-Claims`,
      },
      {
        label: "5 Points To Know About E-Insurance Accounts",
        href: `${baseUrl}/insurance/health-insurance-guides/5-Points-To-Know-About-E-Insurance-Accounts`,
      },
      {
        label: "What Is IPD?",
        href: `${baseUrl}/insurance/health-insurance-guides/what-is-ipd`,
      },
      {
        label: "Third Party Administrator (TPA) In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/Third-Party-Administrator-in-Health-Insurance-The-Unsung-Hero-Behind-Your-Smooth-Claim-Process`,
      },
      {
        label: "Family Floater Plans – Quick Overview",
        href: `${baseUrl}/insurance/health-insurance-guides/Family-Floater-Plans-A-Quick-Overview`,
      },
      {
        label: "Pre-Existing Disease In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/Pre-Existing-Disease-in-Health-Insurance-All-You-Need-to-Know-Before-Buying`,
      },
      {
        label: "Deductibles In Health Insurance – Simple Guide",
        href: `${baseUrl}/insurance/health-insurance-guides/Deductibles-in-Health-Insurance-A-Simple-Guide-to-Understanding-How-They-Work`,
      },
      {
        label: "Health Insurance Plans With No Waiting Period",
        href: `${baseUrl}/insurance/health-insurance-guides/Health-Insurance-Plans-With-No-Waiting-Period`,
      },
      {
        label: "Domiciliary Hospitalization In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/domiciliary-hospitalization-related-to-health-insurance`,
      },
      {
        label: "Impact Of GST On Health Insurance Premium",
        href: `${baseUrl}/insurance/health-insurance-guides/Impact-of-GST-on-Health-Insurance-Premium`,
      },
      {
        label: "Does Health Insurance Cover LASIK Eye Surgery?",
        href: `${baseUrl}/insurance/health-insurance-guides/Does-Health-Insurance-Cover-LASIK-Eye-Surgery`,
      },
      {
        label: "Day Care Treatment Vs OPD Treatment",
        href: `${baseUrl}/insurance/health-insurance-guides/day-care-treatment-vs-opd-treatment`,
      },
      {
        label: "Waiting Period In Maternity Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/Waiting-Period-in-Maternity-Health-Insurance`,
      },
      {
        label: "Waiting Period In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/Waiting-Period-in-Health-Insurance`,
      },
      {
        label: "How To Download Aarogya Setu Mobile App",
        href: `${baseUrl}/insurance/health-insurance-guides/How-to-Download-the-Aarogya-Setu-Mobile-App`,
      },
      {
        label: "Difference Between OPD And IPD",
        href: `${baseUrl}/insurance/health-insurance-guides/Difference-Between-OPD-and-IPD`,
      },
      {
        label: "Co-Pay And Voluntary Deductibles In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/The-Concept-Of-Co-Pay-And-Voluntary-Deductions-In-Health-Insurance`,
      },
      {
        label: "No Claim Bonus (NCB) In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/No-Claim-Bonus-in-Health-Insurance`,
      },
      {
        label: "Grace Period In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/What-Is-the-Grace-Period-in-Health-Insurance-Plans`,
      },
      {
        label: "Maternity Insurance If Already Pregnant?",
        href: `${baseUrl}/insurance/health-insurance-guides/Can-You-Get-Maternity-Insurance-If-Already-Pregnant`,
      },
      {
        label: "Day Care Treatment In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/Day-Care-Treatment-in-Health-Insurance`,
      },
      {
        label: "How To File Reimbursement Claim",
        href: `${baseUrl}/insurance/health-insurance-guides/How-To-File-a-Reimbursement-Claim-Under-Health-Insurance`,
      },
      {
        label: "Restoration Benefit In Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/Restoration-Benefit-in-Health-Insurance`,
      },
      {
        label: "Pre & Post Hospitalization Expenses",
        href: `${baseUrl}/insurance/health-insurance-guides/Pre-and-Post-Hospitalisation-Expenses-in-Health-Insurance`,
      },
    ],
  },
  {
    title: "Government Schemes",
    collapsedCount: 7,
    links: [
      {
        label: "Key Benefits Of ABHA Health ID Card",
        href: `${baseUrl}/insurance/health-insurance-guides/Key-Benefits-Of-Abha-Health-ID-Card`,
      },
      {
        label: "How To Download Ayushman Bharat Card",
        href: `${baseUrl}/insurance/health-insurance-guides/how-to-download-ayushman-bharat-card`,
      },
      {
        label: "Government Scheme Health Insurance",
        href: `${baseUrl}/insurance/health-insurance-guides/govt-scheme-health-insurance`,
      },
      {
        label: "Chiranjeevi Health Insurance Govt Scheme",
        href: `${baseUrl}/insurance/health-insurance-guides/chiranjeevi-health-insurance-govt-scheme`,
      },
      {
        label: "How To Login Ayushman Bharat Yojana",
        href: `${baseUrl}/insurance/health-insurance-guides/how-to-login-ayushman-bharat-yojana`,
      },
      {
        label: "How To Register Ayushman Bharat Yojana",
        href: `${baseUrl}/insurance/health-insurance-guides/how-to-register-ayushman-bharat-yojana`,
      },
      {
        label: "Mahatma Jyoti Rao Phule Jan Arogya Scheme",
        href: `${baseUrl}/insurance/health-insurance-guides/mahatma-jyoti-rao-phule-jan-arogya-govt-scheme`,
      },
      {
        label: "Check PMJAY Card Status Online",
        href: `${baseUrl}/insurance/health-insurance-guides/check-ayushman-bharat-card-status-online`,
      },
      {
        label: "Differences Between ABHA And Ayushman Card",
        href: `${baseUrl}/insurance/health-insurance-guides/differences-between-abha-card-and-ayushman-card`,
      },
      {
        label: "What Is Ayushman Bharat Yojana?",
        href: `${baseUrl}/insurance/health-insurance-guides/what-is-ayushman-bharat-yojana-govt-scheme`,
      },
      {
        label: "What Is Chiranjeevi Health Insurance?",
        href: `${baseUrl}/insurance/health-insurance-guides/what-is-chiranjeevi-health-insurance-govt-scheme`,
      },
      {
        label: "What Is National Health Insurance Scheme?",
        href: `${baseUrl}/insurance/health-insurance-guides/What-Is-National-Health-Insurance-Govt-Scheme`,
      },
      {
        label: "ABHA Card Eligibility",
        href: `${baseUrl}/insurance/health-insurance-guides/abha-card-eligibility-criteria`,
      },
      {
        label: "How To Check PMJAY Eligibility",
        href: `${baseUrl}/insurance/health-insurance-guides/how-to-check-your-pmjay-eligibility-online`,
      },
      {
        label: "PMJAY Beneficiary Identification System (BIS)",
        href: `${baseUrl}/insurance/health-insurance-guides/pmjay-beneficiary-identification-system`,
      },
      {
        label: "Major Benefits Of Ayushman Bharat",
        href: `${baseUrl}/insurance/health-insurance-guides/major-benefits-of-ayushman-bharat-yojana`,
      },
      {
        label: "How To Download ABHA Health ID",
        href: `${baseUrl}/insurance/health-insurance-guides/how-to-download-abha-health-id-card`,
      },
      {
        label: "Universal Health Insurance Scheme (UHIC)",
        href: `${baseUrl}/insurance/health-insurance-guides/universal-health-insurance-scheme`,
      },
      {
        label: "Ayushman Vaya Vandana Card Download",
        href: `${baseUrl}/insurance/health-insurance-guides/ayushman-vaya-vandana-card-download`,
      },
      {
        label: "How To Apply Ayushman Bharat Card",
        href: `${baseUrl}/insurance/health-insurance-guides/how-to-apply-ayushman-bharat-yojana-card`,
      },
    ],
  },
];

export const legalColumns = [
  {
    title: "Privacy Policy",
    links: [
      { label: "Privacy Policy", href: `${baseUrl}/documents/privacy-policy` },
      {
        label: "Terms and Conditions",
        href: `${baseUrl}/documents/terms-and-conditions`,
      },
    ],
  },
  {
    title: "Terms & Conditions",
    links: [
      { label: "Privacy Policy", href: `${baseUrl}/documents/privacy-policy` },
      {
        label: "Terms and Conditions",
        href: `${baseUrl}/documents/terms-and-conditions`,
      },
    ],
  },
  {
    title: "Privacy Policy",
    links: [
      { label: "Privacy Policy", href: `${baseUrl}/documents/privacy-policy` },
      {
        label: "Terms and Conditions",
        href: `${baseUrl}/documents/terms-and-conditions`,
      },
    ],
  },
  {
    title: "Terms & Conditions",
    links: [
      { label: "Privacy Policy", href: `${baseUrl}/documents/privacy-policy` },
      {
        label: "Terms and Conditions",
        href: `${baseUrl}/documents/terms-and-conditions`,
      },
    ],
  },
];

export const complianceNote =
  "Prost Insurance Brokers Pvt. Ltd.(OneAssure), 1st floor, 91springboard, MG Road, Gopala Krishna Complex 45/3, Residency Road, Mahatma Gandhi Rd, Bengaluru, Karnataka 560025.License No. 756, Direct Broker (Life & General), Valid from: 22/07/2024 to 21/07/2027";
