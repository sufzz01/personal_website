import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowUp,
  Mail,
  Linkedin,
  Github,
  Instagram,
  MessageSquare,
  Code2,
  Database,
  Palette,
  Network,
  FileSpreadsheet,
  BarChart3,
  Server,
  GraduationCap,
  Briefcase,
  Target,
  Send,
  Monitor,
  HardDrive,
  Settings,
  Info,
  FileText,
  PresentationIcon,
  Pen,
  Cpu,
  Globe,
  Table2,
} from 'lucide-react';
import { useForm } from 'react-hook-form';

const skillCategories = [
  {
    label: 'Design & Creative',
    color: 'from-violet-500 to-purple-600',
    glow: 'group-hover:shadow-violet-500/30',
    border: 'hover:border-violet-400/40',
    skills: [
      { name: 'UI/UX Design', icon: Palette },
      { name: 'Graphic Design', icon: Pen },
    ],
  },
  {
    label: 'Development & Database',
    color: 'from-blue-500 to-indigo-600',
    glow: 'group-hover:shadow-blue-500/30',
    border: 'hover:border-blue-400/40',
    skills: [
      { name: 'Web Development', icon: Globe },
      { name: 'Database Management', icon: Database },
      { name: 'SQL', icon: Table2 },
    ],
  },
  {
    label: 'IT & Networking',
    color: 'from-cyan-500 to-blue-600',
    glow: 'group-hover:shadow-cyan-500/30',
    border: 'hover:border-cyan-400/40',
    skills: [
      { name: 'Jaringan Komputer', icon: Network },
      { name: 'Troubleshooting Hardware', icon: HardDrive },
      { name: 'Instalasi Sistem Operasi', icon: Monitor },
      { name: 'Sistem Informasi', icon: Server },
    ],
  },
  {
    label: 'Office & Data Management',
    color: 'from-emerald-500 to-teal-600',
    glow: 'group-hover:shadow-emerald-500/30',
    border: 'hover:border-emerald-400/40',
    skills: [
      { name: 'Microsoft Excel', icon: FileSpreadsheet },
      { name: 'Microsoft Word', icon: FileText },
      { name: 'Microsoft PowerPoint', icon: BarChart3 },
      { name: 'Pengolahan Data & Entry', icon: Cpu },
    ],
  },
];

const education = [
  {
    institution: 'Univrsitas Muhammadiyah Palembang',
    degree: 'Sarjana Teknologi Informasi',
    period: '2025 – Sekarang',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    institution: 'SMKN 01 Suak Tapeh',
    degree: 'Teknik Komputer dan Jaringan (TKJ)',
    period: '2021 – 2024',
    icon: Monitor,
    color: 'from-indigo-500 to-violet-600',
  },
  {
    institution: 'SMPN 01 Banyuasin III',
    degree: 'Sekolah Menengah Pertama',
    period: '2018 – 2021',
    icon: Info,
    color: 'from-violet-500 to-purple-600',
  },
  {
    institution: 'SDN 03 Pemulutan Barat',
    degree: 'Sekolah Dasar',
    period: '2012 – 2018',
    icon: Settings,
    color: 'from-purple-500 to-pink-600',
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Saya' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'career', label: 'Tujuan Karir' },
    { id: 'contact', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Terima kasih! Pesan Anda telah terkirim.');
    reset();
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                M. Yusuf
              </motion.div>

              <div className="hidden md:flex items-center space-x-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                  👋 Selamat Datang di Portfolio Saya
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  M. Yusuf
                </h1>
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4 font-medium">
                  Desain Grafis | Pengembangan Web
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                  Fokus pada desain UI/UX, pengembangan website, dan manajemen database.
                  Mengikuti perkembangan teknologi dengan pendekatan sistematis, fungsional, dan berpusat pada pengguna.
                </p>
                <div className="flex flex-wrap gap-4">
  <button
    onClick={() => scrollToSection('about')}
    className="w-full sm:flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
  >
    Tentang Saya
  </button>
  <button
    onClick={() => scrollToSection('contact')}
    className="w-full sm:flex-1 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
  >
    Hubungi Saya
  </button>
</div>
</motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <img src="/profilku.jpeg"
                    alt="profil"
                    className="relative w-full h-full object-cover rounded-full border-8 border-white dark:border-slate-800 shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tentang Saya
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  <p>
                    Halo, saya <span className="font-semibold text-blue-600 dark:text-blue-400">M. Yusuf</span>, lahir pada tahun 2007, dan saat ini merupakan mahasiswa Program Studi Teknologi Informasi angkatan 2025 di Universitas Muhammadiyah Palembang.
                  </p>
                  <p>
                    Saya merupakan lulusan SMKN 01 Suak Tapeh dengan jurusan Teknik Komputer dan Jaringan (TKJ). Selama menempuh pendidikan di SMK, saya mempelajari jaringan komputer, perangkat keras, sistem operasi, dan dasar-dasar teknologi informasi.
                  </p>
                  <p>
                    Saya juga menjalani Praktik Kerja Lapangan (PKL) selama enam bulan di PT Andalan Alam Sumatra (BBS Group). Dalam kegiatan tersebut, saya bertugas melakukan monitoring data hasil panen, pengolahan data, serta entri data menggunakan Microsoft Excel untuk mendukung kegiatan administrasi perusahaan.
                  </p>
                  <p>
                    Selain itu, saya memiliki pengalaman kerja selama 1 tahun 6 bulan di Mulia Jaya Computer sebagai Warehouse Helper & Shipping Assistant yang membantu operasional gudang, pengelolaan inventaris, entri data barang, serta proses pengiriman produk kepada pelanggan.
                  </p>
                  <p>
                    Saat ini saya terus mengembangkan kemampuan di bidang teknologi informasi melalui perkuliahan, pembelajaran mandiri, dan berbagai proyek yang saya kerjakan. Saya memiliki ketertarikan pada pengembangan website, desain antarmuka pengguna, basis data, serta sistem informasi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section — fixed timeline */}
        <section id="education" className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 mb-4">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Pendidikan
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              {/* Timeline container */}
              <div className="relative">
                {/* Vertical center line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 md:-translate-x-px" />

                <div className="space-y-12">
                  {education.map((edu, index) => {
                    const Icon = edu.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.12 }}
                        className="relative flex items-start md:items-center"
                      >
                        {/* Mobile layout: icon left, card right */}
                        {/* Desktop layout: card alternates left/right around center icon */}

                        {/* ── Desktop left card (even items) ── */}
                        <div className={`hidden md:flex flex-1 ${isEven ? 'justify-end pr-10' : 'pr-10 invisible'}`}>
  {isEven && (
    <div className="w-full max-w-xs bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-1 leading-tight break-words whitespace-normal">
        {edu.institution}
      </h3>
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-3">
        {edu.degree}
      </p>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${edu.color}`}>
        {edu.period}
      </span>
    </div>
  )}
</div>

                        {/* ── Center icon (desktop) / Left icon (mobile) ── */}
                        <div className="relative z-10 flex-shrink-0">
                          {/* Mobile dot strip (left-6 aligns with the line) */}
                          <div className="md:hidden flex items-start">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-900`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          {/* Desktop centered icon */}
                          <div className={`hidden md:flex w-14 h-14 rounded-full bg-gradient-to-br ${edu.color} items-center justify-center shadow-lg border-4 border-white dark:border-slate-900`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* ── Desktop right card (odd items) ── */}
                        <div className={`hidden md:flex flex-1 ${!isEven ? 'justify-start pl-10' : 'pl-10 invisible'}`}>
                          {!isEven && (
                            <div className="w-full max-w-xs bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1 leading-snug">
                                {edu.institution}
                              </h3>
                              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                                {edu.degree}
                              </p>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${edu.color}`}>
                                {edu.period}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* ── Mobile card (right of icon) ── */}
                        <div className="md:hidden flex-1 min-w-0 ml-3 sm:ml-5">
                        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 w-full max-w-full overflow-hidden">
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 mb-1 leading-snug break-words whitespace-normal pr-1">
                        {edu.institution}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-3 break-words">
                       {edu.degree}
                      </p>
                      <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${edu.color}`}>
                       {edu.period}
                      </span>
                      </div>
                      </div>
                      </motion.div>
                      );
                      })}
                      </div>
                      </div>
                      </motion.div>
                      </div>
                      </section>
        {/* Experience Section */}
        <section id="experience" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Briefcase className="w-10 h-10 text-blue-600" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Pengalaman Kerja
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Mulia Jaya Computer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    Warehouse Helper & Shipping Assistant
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Durasi: 1 Tahun 6 Bulan</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Tanggung Jawab:</p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    {[
                      'Membantu manajemen dan organisasi inventaris gudang',
                      'Melakukan entri data barang masuk dan keluar ke dalam sistem',
                      'Membantu pengecekan stok dan kontrol inventaris',
                      'Menyiapkan dan mengemas produk untuk pengiriman',
                      'Mendukung proses pengiriman dan distribusi produk',
                      'Membantu operasional gudang dan logistik harian',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    PT Andalan Alam Sumatra (BBS Group)
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    Data Monitoring & Administration Intern
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Durasi: 6 Bulan (Praktik Kerja Lapangan)</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Tanggung Jawab:</p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    {[
                      'Monitoring data hasil panen produksi',
                      'Mengolah data operasional menggunakan Microsoft Excel',
                      'Melakukan entri data dan verifikasi data',
                      'Mendukung kegiatan pelaporan administratif',
                      'Menjaga akurasi data dan dokumentasi',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section — categorized */}
        <section id="skills" className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Keahlian Teknis
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  Kemampuan teknis yang telah dikuasai melalui pendidikan, pelatihan, dan pengalaman kerja.
                </p>
              </div>

              <div className="space-y-10">
                {skillCategories.map((cat, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`h-px flex-1 bg-gradient-to-r ${cat.color} opacity-40`} />
                      <span className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${cat.color} shadow-md`}>
                        {cat.label}
                      </span>
                      <div className={`h-px flex-1 bg-gradient-to-l ${cat.color} opacity-40`} />
                    </div>

                    {/* Skill cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {cat.skills.map((skill, skillIndex) => {
                        const Icon = skill.icon;
                        return (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: skillIndex * 0.06 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            className={`group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-slate-200/50 dark:border-slate-700/50 ${cat.border} hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden`}
                          >
                            {/* Glow blob on hover */}
                            <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${cat.color} blur-sm -z-10`} />

                            {/* Icon */}
                            <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Name */}
                            <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-snug">
                              {skill.name}
                            </p>

                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Career Goal Section */}
        <section id="career" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Target className="w-10 h-10 text-blue-600" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Tujuan Karir
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Objektif Karir
                      </h3>
                      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        Menjadi profesional di bidang Teknologi Informasi yang mampu mengembangkan sistem dan solusi digital yang inovatif, efisien, dan bermanfaat bagi masyarakat serta dunia industri.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hubungi Saya
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg">
                  Tertarik untuk berkolaborasi? Silakan hubungi saya melalui form atau media sosial di bawah ini.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { href: 'mailto:sufzzz01@gmail.com', icon: Mail, label: 'Email', value: 'sufzzz01@gmail.com', color: 'from-blue-600 to-indigo-600' },
                    { href: 'https://www.linkedin.com/in/sufzz', icon: Linkedin, label: 'LinkedIn', value: 'sufzz', color: 'from-blue-700 to-blue-900' },
                    { href: 'https://github.com/sufzz01', icon: Github, label: 'GitHub', value: 'sufzz01', color: 'from-slate-700 to-slate-900' },
                    { href: 'https://wa.me/6285199799193', icon: MessageSquare, label: 'WhatsApp', value: '+62 851-9979-9193', color: 'from-green-600 to-green-700' },
                    { href: 'https://instagram.com/the_sufzz', icon: Instagram, label: 'Instagram',value: '@the_sufzz', color: 'from-pink-500 to-purple-600' }
                  ].map(({ href, icon: Icon, label, value, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{label}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2">Nama Lengkap</label>
                      <input
                        {...register('name', { required: 'Nama harus diisi' })}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2">Alamat Email</label>
                      <input
                        {...register('email', {
                          required: 'Email harus diisi',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Format email tidak valid' },
                        })}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                        placeholder="email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2">Pesan</label>
                      <textarea
                        {...register('message', { required: 'Pesan harus diisi' })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              M. Yusuf
            </h3>
            <p className="text-slate-400 mb-6">Graphic Design | Web Development</p>
            <div className="flex justify-center gap-4 mb-8">
              {[
                { href: 'mailto:sufzzz01@gmail.com', icon: Mail, label: 'Email', hover: 'hover:bg-blue-600' },
                { href: 'https://linkedin.com/in/sufzz', icon: Linkedin, label: 'LinkedIn', hover: 'hover:bg-blue-600' },
                { href: 'https://github.com/sufzz01', icon: Github, label: 'GitHub', hover: 'hover:bg-blue-600' },
                { href: 'https://wa.me/6285199799193', icon: MessageSquare, label: 'WhatsApp', hover: 'hover:bg-green-600' },
                { href: 'https://instagram.com/the_sufzz', icon: Instagram, label: 'Instagram', hover: 'hover:bg-pink-500' },
              ].map(({ href, icon: Icon, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-12 h-12 bg-slate-800 ${hover} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-500">© 2026 M. Yusuf. All Rights Reserved</p>
            </div>
          </div>
        </footer>

        {/* Back to Top */}
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
