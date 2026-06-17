import datacenter from "./assets/datacenter.jpg";
import dell from "./assets/brands/dell.png";
import hp from "./assets/brands/hp.png";
import lenovo from "./assets/brands/lenovo.png";
import cisco from "./assets/brands/cisco.png";
import fortinet from "./assets/brands/fortinet.png";
import mikrotik from "./assets/brands/mikrotik.png";
import ubiquiti from "./assets/brands/ubiquiti.png";
import apc from "./assets/brands/apc.png";
import samsung from "./assets/brands/samsung.png";
import canon from "./assets/brands/canon.png";
import epson from "./assets/brands/epson.png";
import logitech from "./assets/brands/logitech.png";
import dlink from "./assets/brands/dlink.png";
import intel from "./assets/brands/intel.png";
import kingston from "./assets/brands/kingston.png";

function App() {
  const services = [
  "Cloud Solutions",
  "AWS EC2 Management",
  "Microsoft 365 Support",
  "Windows Server Administration",
  "Linux Server Administration",
  "Network & Firewall Management",
  "HPE & Dell Server Support",
  "Remote IT Support",

  "Bulk Laptop Supply",
  "Desktop Procurement",
  "Enterprise Server Supply",
  "Networking Equipment Supply",
  "IT Peripheral Distribution",
  "Data Center Hardware",
  "School & College IT Labs",
  "Corporate IT Procurement",
];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          NextGen Infra
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
<section
  className="relative min-h-screen flex items-center justify-center text-center"
  style={{
    backgroundImage: `url(${datacenter})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-5xl">
    <p className="text-cyan-400 font-semibold tracking-widest mb-4">
      GLOBAL IT INFRASTRUCTURE SERVICES
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-6">
  Enterprise IT Infrastructure,
  <br />
  Cloud Services &
  <br />
  Bulk Hardware Procurement
</h1>

 <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
  Serving businesses across India, Asia, USA, UK and Europe with
  enterprise IT infrastructure services, cloud solutions,
  networking, cybersecurity, server management and bulk IT hardware procurement.
</p>
    <div className="mb-8">
  <p className="text-cyan-400 font-semibold text-lg">
    Backed by 20+ Years of Expertise in Cloud, Servers, Networking & Enterprise IT Operations
  </p>

  <p className="text-slate-300">
    20+ Years IT Infrastructure Experience
  </p>

  <p className="text-slate-300">
    CISCO | MICROSOFT | AWS | Microsoft 365 | Windows Server | Linux | Network & Firewall Management
  </p>
</div>

    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="#contact"
        className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold"
      >
        Book Free Consultation
      </a>

      <a
        href="https://wa.me/919718922188"
        target="_blank"
        rel="noreferrer"
        className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold"
      >
        💬 Chat With Us
      </a>
    </div>
  </div>
</section>

      {/* Services */}
      <section id="services" className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500 transition"
            >
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>
          <section className="px-8 py-16 bg-slate-900">
  <h2 className="text-4xl font-bold text-center mb-10">
    Enterprise IT Hardware Supply
  </h2>

  <div className="max-w-5xl mx-auto text-center">
    <p className="text-slate-300 text-lg mb-8">
      We supply genuine IT hardware and peripherals in bulk quantities
      for Corporates, Educational Institutions, Government Organizations,
      Hospitals, Manufacturing Units and System Integrators.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ Bulk IT Procurement
      </div>

      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ Enterprise Hardware Supply
      </div>

      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ PAN India Delivery
      </div>

      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ Competitive Pricing
      </div>
    </div>
  </div>
</section>

          <section className="px-8 py-16">
  <h2 className="text-4xl font-bold text-center mb-10">
    IT Products We Supply
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-slate-900 p-5 rounded-lg">
      Laptops & Desktops
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Servers & Storage
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Routers & Switches
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Firewalls
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      CCTV & Security
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Printers
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      UPS Systems
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Monitors & Accessories
    </div>

  </div>
import datacenter from "./assets/datacenter.jpg";
import dell from "./assets/brands/dell.png";
import hp from "./assets/brands/hp.png";
import lenovo from "./assets/brands/lenovo.png";
import cisco from "./assets/brands/cisco.png";
import fortinet from "./assets/brands/fortinet.png";
import mikrotik from "./assets/brands/mikrotik.png";
import ubiquiti from "./assets/brands/ubiquiti.png";
import apc from "./assets/brands/apc.png";
import samsung from "./assets/brands/samsung.png";
import canon from "./assets/brands/canon.png";
import epson from "./assets/brands/epson.png";
import logitech from "./assets/brands/logitech.png";
import dlink from "./assets/brands/dlink.png";
import intel from "./assets/brands/intel.png";
import kingston from "./assets/brands/kingston.png";

function App() {
  const services = [
  "Cloud Solutions",
  "AWS EC2 Management",
  "Microsoft 365 Support",
  "Windows Server Administration",
  "Linux Server Administration",
  "Network & Firewall Management",
  "HPE & Dell Server Support",
  "Remote IT Support",

  "Bulk Laptop Supply",
  "Desktop Procurement",
  "Enterprise Server Supply",
  "Networking Equipment Supply",
  "IT Peripheral Distribution",
  "Data Center Hardware",
  "School & College IT Labs",
  "Corporate IT Procurement",
];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          NextGen Infra
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
<section
  className="relative min-h-screen flex items-center justify-center text-center"
  style={{
    backgroundImage: `url(${datacenter})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-5xl">
    <p className="text-cyan-400 font-semibold tracking-widest mb-4">
      GLOBAL IT INFRASTRUCTURE SERVICES
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-6">
  Enterprise IT Infrastructure,
  <br />
  Cloud Services &
  <br />
  Bulk Hardware Procurement
</h1>

 <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
  Serving businesses across India, Asia, USA, UK and Europe with
  enterprise IT infrastructure services, cloud solutions,
  networking, cybersecurity, server management and bulk IT hardware procurement.
</p>
    <div className="mb-8">
  <p className="text-cyan-400 font-semibold text-lg">
    Backed by 20+ Years of Expertise in Cloud, Servers, Networking & Enterprise IT Operations
  </p>

  <p className="text-slate-300">
    20+ Years IT Infrastructure Experience
  </p>

  <p className="text-slate-300">
    CISCO | MICROSOFT | AWS | Microsoft 365 | Windows Server | Linux | Network & Firewall Management
  </p>
</div>

    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="#contact"
        className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold"
      >
        Book Free Consultation
      </a>

      <a
        href="https://wa.me/919718922188"
        target="_blank"
        rel="noreferrer"
        className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold"
      >
        💬 Chat With Us
      </a>
    </div>
  </div>
</section>

      {/* Services */}
      <section id="services" className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500 transition"
            >
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>
          <section className="px-8 py-16 bg-slate-900">
  <h2 className="text-4xl font-bold text-center mb-10">
    Enterprise IT Hardware Supply
  </h2>

  <div className="max-w-5xl mx-auto text-center">
    <p className="text-slate-300 text-lg mb-8">
      We supply genuine IT hardware and peripherals in bulk quantities
      for Corporates, Educational Institutions, Government Organizations,
      Hospitals, Manufacturing Units and System Integrators.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ Bulk IT Procurement
      </div>

      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ Enterprise Hardware Supply
      </div>

      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ PAN India Delivery
      </div>

      <div className="bg-slate-800 p-5 rounded-lg">
        ✔ Competitive Pricing
      </div>
    </div>
  </div>
</section>

          <section className="px-8 py-16">
  <h2 className="text-4xl font-bold text-center mb-10">
    IT Products We Supply
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-slate-900 p-5 rounded-lg">
      Laptops & Desktops
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Servers & Storage
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Routers & Switches
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Firewalls
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      CCTV & Security
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Printers
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      UPS Systems
    </div>

    <div className="bg-slate-900 p-5 rounded-lg">
      Monitors & Accessories
    </div>

  </div>
          </section>

  <section className="px-8 py-16 bg-slate-900">
  <h2 className="text-4xl font-bold text-center mb-4">
    Brands We Supply
  </h2>

  <p className="text-center text-slate-300 mb-10">
    Trusted Global Technology Partners
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

    {[
      { logo: dell, name: "Dell" },
      { logo: hp, name: "HP" },
      { logo: lenovo, name: "Lenovo" },
      { logo: cisco, name: "Cisco" },
      { logo: fortinet, name: "Fortinet" },
      { logo: mikrotik, name: "MikroTik" },
      { logo: ubiquiti, name: "Ubiquiti" },
      { logo: apc, name: "APC" },
      { logo: samsung, name: "Samsung" },
      { logo: canon, name: "Canon" },
      { logo: epson, name: "Epson" },
      { logo: logitech, name: "Logitech" },
      { logo: dlink, name: "D-Link" },
      { logo: intel, name: "Intel" },
      { logo: kingston, name: "Kingston" }    
    ].map((brand) => (
      <div
        key={brand.name}
        className="bg-white rounded-xl p-5 flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-12 object-contain"
        />
      </div>
    ))}
  </div>
</section>
</section>

      {/* About */}
<section id="about" className="px-8 py-16 bg-slate-900">
  <h2 className="text-4xl font-bold mb-6">
    About NextGen Infra
  </h2>

  <p className="text-slate-300 max-w-4xl mb-6">
    NextGen Infra is led by an experienced IT professional with over
    20 years of hands-on expertise in IT infrastructure, cloud services,
    networking, server administration and enterprise technology support.
  </p>

  <p className="text-slate-300 max-w-4xl mb-6">
    We specialize in Microsoft 365, Google Workspace, Windows Server,
    Linux Server Administration, AWS EC2, Network & Firewall Management,
    HPE and Dell Server Support, IT Asset Management, and Remote IT Operations.
  </p>

  <p className="text-slate-300 max-w-4xl">
    Having managed enterprise IT environments and led teams of IT professionals,
    we help businesses improve reliability, security, productivity and operational
    efficiency through modern technology solutions.
  </p>

  <div className="grid md:grid-cols-4 gap-6 mt-10">
    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
      <p>Years Experience</p>
    </div>

    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">AWS</h3>
      <p>Cloud Management</p>
    </div>

    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">365</h3>
      <p>Microsoft 365 Support</p>
    </div>

    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
      <p>Remote IT Assistance</p>
    </div>
  </div>
</section>
<section className="px-8 py-16">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose NextGen Infra
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        20+ Years Experience
      </h3>
      <p className="text-slate-300">
        Proven expertise in enterprise IT infrastructure and operations.
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        Global Remote Support
      </h3>
      <p className="text-slate-300">
        Support for clients across North America, Europe and Asia.
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        Multi-Platform Expertise
      </h3>
      <p className="text-slate-300">
        AWS, Microsoft 365, Linux, Windows Server, Networking and Security.
      </p>
    </div>
  </div>
</section>
      {/* Contact */}
<section id="contact" className="px-8 py-16">
  <h2 className="text-4xl font-bold text-center mb-10">
    Contact NextGen Infra
  </h2>

  <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl p-8">
    <div className="grid md:grid-cols-2 gap-8">

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Get in Touch
        </h3>

        <p className="mb-3">
          📧 support@nextgeninfra.com
        </p>

        <p className="mb-3">
          📍 Noida, Uttar Pradesh, India
        </p>

        <p className="mb-6">
          🌎 Serving USA, UK, Canada & Italy
        </p>
          
       <a
  href="https://wa.me/919718922188"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg"
>
  💬 Chat With Us
</a>
      </div>

      <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-4"
>
  <input
    type="hidden"
    name="access_key"
    value="e5977293-aa43-49c9-9650-3f3fa0a45b71"
  />

  <input
    type="text"
    name="name"
    placeholder="👤 Full Name"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <input
    type="email"
    name="email"
    placeholder="📧 Business Email"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <input
    type="tel"
    name="mobile"
    placeholder="📱 Mobile / WhatsApp Number"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <input
    type="text"
    name="company"
    placeholder="🏢 Company Name"
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <select
    name="requirement"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  >
    <option value="">Select Requirement</option>
    <option>Bulk Laptop Procurement</option>
    <option>Desktop Computers</option>
    <option>Servers & Storage</option>
    <option>Networking Equipment</option>
    <option>Firewall Solutions</option>
    <option>Microsoft 365 Services</option>
    <option>AWS Cloud Services</option>
    <option>Data Center Setup</option>
    <option>CCTV & Security Systems</option>
    <option>Annual IT Support</option>
  </select>

  <input
    type="text"
    name="quantity"
    placeholder="📦 Required Quantity (Example: 50 Laptops)"
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <select
    name="budget"
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  >
    <option value="">Expected Budget</option>
    <option>Below ₹1 Lakh</option>
    <option>₹1 Lakh - ₹5 Lakhs</option>
    <option>₹5 Lakhs - ₹20 Lakhs</option>
    <option>₹20 Lakhs - ₹50 Lakhs</option>
    <option>Above ₹50 Lakhs</option>
  </select>

  <textarea
    name="message"
    rows="5"
    placeholder="📝 Describe your requirement..."
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-bold text-lg transition"
  >
    🚀 Request Bulk Quote
  </button>
</form>

    </div>
  </div>
</section>

<footer className="text-center py-8 border-t border-slate-800">
  © 2026 NextGen Infra. All Rights Reserved.
</footer>
</div>
);
}

export default App;

  <section className="px-8 py-16 bg-slate-900">
  <h2 className="text-4xl font-bold text-center mb-4">
    Brands We Supply
  </h2>

  <p className="text-center text-slate-300 mb-10">
    Trusted Global Technology Partners
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

    {[
      { logo: dell, name: "Dell" },
      { logo: hp, name: "HP" },
      { logo: lenovo, name: "Lenovo" },
      { logo: cisco, name: "Cisco" },
      { logo: fortinet, name: "Fortinet" },
      { logo: mikrotik, name: "MikroTik" },
      { logo: ubiquiti, name: "Ubiquiti" },
      { logo: apc, name: "APC" },
      { logo: samsung, name: "Samsung" },
      { logo: canon, name: "Canon" },
      { logo: epson, name: "Epson" },
      { logo: logitech, name: "Logitech" },
      { logo: dlink, name: "D-Link" },
      { logo: intel, name: "Intel" },
      { logo: kingston, name: "Kingston" }    
    ].map((brand) => (
      <div
        key={brand.name}
        className="bg-white rounded-xl p-5 flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-12 object-contain"
        />
      </div>
    ))}
  </div>
</section>

      {/* About */}
<section id="about" className="px-8 py-16 bg-slate-900">
  <h2 className="text-4xl font-bold mb-6">
    About NextGen Infra
  </h2>

  <p className="text-slate-300 max-w-4xl mb-6">
    NextGen Infra is led by an experienced IT professional with over
    20 years of hands-on expertise in IT infrastructure, cloud services,
    networking, server administration and enterprise technology support.
  </p>

  <p className="text-slate-300 max-w-4xl mb-6">
    We specialize in Microsoft 365, Google Workspace, Windows Server,
    Linux Server Administration, AWS EC2, Network & Firewall Management,
    HPE and Dell Server Support, IT Asset Management, and Remote IT Operations.
  </p>

  <p className="text-slate-300 max-w-4xl">
    Having managed enterprise IT environments and led teams of IT professionals,
    we help businesses improve reliability, security, productivity and operational
    efficiency through modern technology solutions.
  </p>

  <div className="grid md:grid-cols-4 gap-6 mt-10">
    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
      <p>Years Experience</p>
    </div>

    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">AWS</h3>
      <p>Cloud Management</p>
    </div>

    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">365</h3>
      <p>Microsoft 365 Support</p>
    </div>

    <div className="bg-slate-800 p-5 rounded-lg">
      <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
      <p>Remote IT Assistance</p>
    </div>
  </div>
</section>
<section className="px-8 py-16">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose NextGen Infra
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        20+ Years Experience
      </h3>
      <p className="text-slate-300">
        Proven expertise in enterprise IT infrastructure and operations.
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        Global Remote Support
      </h3>
      <p className="text-slate-300">
        Support for clients across North America, Europe and Asia.
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-3">
        Multi-Platform Expertise
      </h3>
      <p className="text-slate-300">
        AWS, Microsoft 365, Linux, Windows Server, Networking and Security.
      </p>
    </div>
  </div>
</section>
      {/* Contact */}
<section id="contact" className="px-8 py-16">
  <h2 className="text-4xl font-bold text-center mb-10">
    Contact NextGen Infra
  </h2>

  <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl p-8">
    <div className="grid md:grid-cols-2 gap-8">

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Get in Touch
        </h3>

        <p className="mb-3">
          📧 support@nextgeninfra.com
        </p>

        <p className="mb-3">
          📍 Noida, Uttar Pradesh, India
        </p>

        <p className="mb-6">
          🌎 Serving USA, UK, Canada & Italy
        </p>
          
       <a
  href="https://wa.me/919718922188"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg"
>
  💬 Chat With Us
</a>
      </div>

      <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-4"
>
  <input
    type="hidden"
    name="access_key"
    value="e5977293-aa43-49c9-9650-3f3fa0a45b71"
  />

  <input
    type="text"
    name="name"
    placeholder="👤 Full Name"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <input
    type="email"
    name="email"
    placeholder="📧 Business Email"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <input
    type="tel"
    name="mobile"
    placeholder="📱 Mobile / WhatsApp Number"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <input
    type="text"
    name="company"
    placeholder="🏢 Company Name"
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <select
    name="requirement"
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  >
    <option value="">Select Requirement</option>
    <option>Bulk Laptop Procurement</option>
    <option>Desktop Computers</option>
    <option>Servers & Storage</option>
    <option>Networking Equipment</option>
    <option>Firewall Solutions</option>
    <option>Microsoft 365 Services</option>
    <option>AWS Cloud Services</option>
    <option>Data Center Setup</option>
    <option>CCTV & Security Systems</option>
    <option>Annual IT Support</option>
  </select>

  <input
    type="text"
    name="quantity"
    placeholder="📦 Required Quantity (Example: 50 Laptops)"
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  />

  <select
    name="budget"
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  >
    <option value="">Expected Budget</option>
    <option>Below ₹1 Lakh</option>
    <option>₹1 Lakh - ₹5 Lakhs</option>
    <option>₹5 Lakhs - ₹20 Lakhs</option>
    <option>₹20 Lakhs - ₹50 Lakhs</option>
    <option>Above ₹50 Lakhs</option>
  </select>

  <textarea
    name="message"
    rows="5"
    placeholder="📝 Describe your requirement..."
    required
    className="w-full p-3 rounded bg-slate-800 border border-slate-700"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-bold text-lg transition"
  >
    🚀 Request Bulk Quote
  </button>
</form>

    </div>
  </div>
</section>

<footer className="text-center py-8 border-t border-slate-800">
  © 2026 NextGen Infra. All Rights Reserved.
</footer>
</div>
);
}

export default App;
