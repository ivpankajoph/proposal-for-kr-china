
import React, { useState } from 'react';
import { 
  Target, 
  Search, 
  TrendingUp, 
  Globe, 
  CheckCircle2, 
  BarChart3, 
  ArrowRight,
  ChevronDown,
  XCircle,
  AlertCircle,
  Zap,
  Cpu,
  Factory,
  MousePointerClick,
  Users,
  Layers,
  ShieldCheck,
  Mail,
  Phone,
  Monitor,
  LineChart,
  PieChart,
  Activity,
  Download,
  Calendar,
  Box,
  Truck,
  Award,
  ZapOff,
  Languages,
  Layout,
  ExternalLink,
  Smartphone,
  Gauge,
  MousePointer2,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-24 px-6 md:px-12 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const TRANSLATIONS = {
  en: {
    nav: ['Vision', 'Strategy', 'Showcase', 'Pricing', 'Why Us'],
    heroSub: 'Strategic Growth Roadmap',
    heroTitle1: 'Google Promotion',
    heroTitle2: 'Mastery',
    heroTitle3: 'Proposal for Kangrong',
    heroDesc: "A proprietary 4-Month roadmap to deploy Kangrong's technical superiority into 15+ countries.",
    heroCard1: 'Extension Strategy',
    heroCard1Val: '15+ Countries',
    heroCard2: 'Ad Injection',
    heroCard2Val: '$5,000 Power',
    heroCard3: 'Performance',
    heroCard3Val: 'Guaranteed Leads',
    strategyTitle: 'Multi-Country Google Extensions',
    strategy1Title: 'Country-Specific Domain Hijacking',
    strategy1Desc: 'We strategically pick and create country-specific domains (like sub-structures) for Kangrong. By promoting your brand directly on local Google extensions such as Google.co.uk, Google.ae, and Google.africa, we signal total local authority, ensuring 5x better visibility and trust among regional industrial buyers.',
    strategy2Title: 'Global Visibility Matrix',
    strategy2Desc: 'Instead of one global site, we deploy Kangrong on Google.com (Global), Google.co.uk (UK), Google.ae (Middle East), and Google.africa. This ensures that when a procurement officer in Dubai or London searches for LED solutions, Kangrong appears as their local technical partner.',
    showcaseTitle: 'The Growth Engine: SEO + Ads',
    showcaseSub: 'Integrated Performance Visualization',
    showcaseDesc: 'We combine the immediate lead-generation power of Google Ads with the long-term compounding authority of SEO. See how we dominate both paid and organic search result pages (SERPs).',
    adsLabel: 'Google Ads: Instant Dominance',
    adsDesc: 'Targeted "Search Ads" place Kangrong at the top of Google within 48 hours for high-intent B2B keywords.',
    seoLabel: 'Organic SEO: Long-Term Authority',
    seoDesc: 'Strategic content and technical data sheets ensure Kangrong stays ranked #1 for engineering specifications.',
    analyticsTitle: 'Global Performance Analytics Hub',
    analyticsSub: 'Real-Time Lead & Traffic Intelligence',
    metric1Title: 'Global Search Visibility',
    metric1Desc: '94% Traffic increase in Middle East via Google.ae localized extension strategy.',
    metric2Title: 'Inquiry Conversion Velocity',
    metric2Desc: 'Verified RFQ conversion rate: 12.5% across Tier-1 industrial terms globally.',
    previewLabel: 'Live Analytics Dashboard Preview',
    roadmapTitle: 'Project Roadmap',
    pricingTitle: 'Strategic Pricing',
    pricingSub: 'Choose Your Path to Dominance',
    matrixHeader: 'Expansion Matrix',
    pkgs: ["Standard Plan", "Advanced Plan", "Global Growth Plan"],
    whyTitle: 'Why Choose This For Export Business?',
    whyDesc: 'Our strategy is purpose-built for industrial manufacturers ready to conquer global supply chains.',
    whyItems: [
      { title: '15+ Countries Presence', desc: 'Localized authority in every major market, from Germany to USA.', icon: <Globe size={32} /> },
      { title: 'B2B Technical Precision', desc: 'We target high-intent technical terms that procurement officers use.', icon: <Cpu size={32} /> },
      { title: 'Verified RFQ Inquiries', desc: 'Focus on conversion-ready clicks that lead to mass production contracts.', icon: <Mail size={32} /> },
      { title: 'Multi-Lingual Edge', desc: 'Beyond English, we optimize for regional languages in 15+ countries.', icon: <Languages size={32} /> },
      { title: 'AI-Powered Keyword Intel', desc: 'We use deep-learning to identify low-competition, high-value technical terms.', icon: <Zap size={32} /> },
      { title: 'Industrial Data SEO', desc: 'Your 19x Thermal Radiation data becomes a searchable, indexable global asset.', icon: <Factory size={32} /> }
    ],
    footerTag: 'Strategic Global Proposal for KANGRONG CERAMIC LED SOLUTIONS',
    footerBrand: 'Online Promotion House',
    footerSub: 'B2B Expansion Partner',
    consultant: 'International Business Director',
    monthNames: ["Month 01", "Month 02", "Month 03", "Month 04"],
    roadmapSteps: [
      { title: "The Tech Foundation", items: ["Global Search Console Setup", "Technical Audit & Speed Fixes", "Country-specific Sub-domain Mapping", "Google Ads Account Setup"] },
      { title: "Content & Market Penetration", items: ["Product Page Optimization", "Google Search Ads Launch", "Local Language Keyword Injection", "Industry Backlink Building"] },
      { title: "Authority & Conversion", items: ["RFQ Form UX Optimization", "A/B Testing Search Ad Copies", "Technical Spec Sheet Distribution", "Engineering Blog Outreach"] },
      { title: "Global Dominance", items: ["Competitor Key-term Stealing", "Multi-country Performance Audit", "ROI Scaling for Top Countries", "Full Strategy Refresh"] }
    ],
    features: [
      { label: "Targeted Countries", values: ["4 Countries", "8 Countries", "15 Countries"] },
      { label: "High-Intent Keywords", values: ["50 Targeted", "100 Targeted", "250 Targeted"] },
      { label: "Country-Wise SEO Extension", values: [true, true, true], highlight: "blue" },
      { label: "Technical Data Sheet SEO", values: [true, true, true] },
      { label: "Competitor Market Stealing", values: [true, true, true] },
      { label: "Monthly GA4 & Ads Report", values: [true, true, true] },
      { label: "Guaranteed export Inquiry", values: [true, true, true], highlight: "blue" },
      { label: "Google Ads Management", values: ["Optional", "Optional", "Optional"], type: "ads-meta" },
      { label: "Paid Google Ads (4 Months)", values: ["$3,000", "$3,000", "$3,000"], type: "ads-meta" },
      { label: "Total: SEO Only (4 Months)", values: ["$5,000", "$12,000", "$17,500"], highlight: "orange" },
      { label: "Total: SEO + Google Ads", values: ["$8,000", "$15,000", "$22,500"], highlight: "orange" },
    ]
  },
  zh: {
    nav: ['愿景', '策略', '案例', '定价', '为什么选择我们'],
    heroSub: '战略增长路线图',
    heroTitle1: '谷歌推广',
    heroTitle2: '主导',
    heroTitle3: '康荣专用方案',
    heroDesc: "这是一个为期4个月的专属路线图，旨在将康荣的技术优势部署到15个以上的国家。",
    heroCard1: '扩展策略',
    heroCard1Val: '15+ 国家',
    heroCard2: '广告注入',
    heroCard2Val: '$5,000 实力',
    heroCard3: '表现',
    heroCard3Val: '保证询盘量',
    strategyTitle: '多国谷歌扩展',
    strategy1Title: '特定国家域名拦截',
    strategy1Desc: '我们战略性地为康荣挑选并创建特定国家的域名（子结构）。通过直接在本地谷歌扩展（如 Google.co.uk、Google.ae 和 Google.africa）上推广您的品牌，我们发出完全本地权威的信号，确保在区域工业买家中的可见度和信任度提高 5 倍。',
    strategy2Title: '全球可见性矩阵',
    strategy2Desc: '我们不只使用一个全球网站，而是将康荣部署在 Google.com（全球）、Google.co.uk（英国）、Google.ae（中东）和 Google.africa。这确保了当迪拜或伦敦的采购人员搜索 LED 解决方案时，康荣会作为他们的本地技术合作伙伴出现。',
    showcaseTitle: '增长引擎：SEO + 广告',
    showcaseSub: '综合绩效可视化',
    showcaseDesc: '我们将谷歌广告的即时获客能力与 SEO 的长期复利权威相结合。看看我们如何主导付费和自然搜索结果页面 (SERP)。',
    adsLabel: '谷歌广告：即时主导',
    adsDesc: '针对高意向 B2B 关键词，针对性“搜索广告”可在 48 小时内将康荣置于谷歌顶部。',
    seoLabel: '自然 SEO：长期权威',
    seoDesc: '战略内容和技术数据表确保康荣在工程规格方面的排名始终保持第一。',
    analyticsTitle: '全球绩效分析中心',
    analyticsSub: '实时询盘与流量情报',
    metric1Title: '全球搜索可见性',
    metric1Desc: '通过 Google.ae 本地化扩展策略，中东地区流量增长了 94%。',
    metric2Title: '询盘转化速率',
    metric2Desc: '全球范围内一级工业关键词的经核实 RFQ 转化率为 12.5%。',
    previewLabel: '实时分析仪表盘预览',
    roadmapTitle: '项目路线图',
    pricingTitle: '战略定价',
    pricingSub: '选择您的主导之路',
    matrixHeader: '扩张矩阵',
    pkgs: ["标准计划", "高级计划", "全球增长计划"],
    whyTitle: '为什么为出口业务选择此服务？',
    whyDesc: '我们的策略专为准备征服全球供应链的工业制造商量身定制。',
    whyItems: [
      { title: '15+ 国家存在', desc: '在从德国到美国的每个主要市场建立本地化的权威。', icon: <Globe size={32} /> },
      { title: 'B2B 技术精度', desc: '我们针对采购人员使用的高意向技术术语。', icon: <Cpu size={32} /> },
      { title: '经过验证的 RFQ 询盘', desc: '专注于能够带来批量生产合同的高转化点击。', icon: <Mail size={32} /> },
      { title: '多语言优势', desc: '除英语外，我们还针对 15 个以上国家的地区语言进行优化。', icon: <Languages size={32} /> },
      { title: 'AI 驱动关键词情报', desc: '我们使用深度学习识别低竞争、高价值的技术术语。', icon: <Zap size={32} /> },
      { title: '工业数据 SEO', desc: '您的 19 倍热辐射数据将成为可搜索、可索引的全球资产。', icon: <Factory size={32} /> }
    ],
    footerTag: '康荣陶瓷LED解决方案全球战略提案',
    footerBrand: '线上推广之家',
    footerSub: 'B2B 扩张合作伙伴',
    consultant: '国际业务总监',
    monthNames: ["第 01 个月", "第 02 个月", "第 03 个月", "第 04 个月"],
    roadmapSteps: [
      { title: "技术基础", items: ["全球搜索控制台设置", "技术审计与速度修复", "特定国家子域名映射", "谷歌广告账户设置"] },
      { title: "内容与市场渗透", items: ["产品页面优化", "谷歌搜索广告发布", "本地语言关键词注入", "行业反向链接建设"] },
      { title: "权威与转化", items: ["询盘表单用户体验优化", "A/B测试搜索广告文案", "技术规格书分发", "工程博客外链拓展"] },
      { title: "全球霸主", items: ["竞争对手关键词拦截", "多国表现审计", "重点国家ROI扩增", "全盘策略更新"] }
    ],
    features: [
      { label: "目标国家", values: ["4个国家", "8个国家", "15个国家"] },
      { label: "高意向关键词", values: ["50个目标词", "100个目标词", "250个目标词"] },
      { label: "各国家SEO扩展", values: [true, true, true], highlight: "blue" },
      { label: "技术数据表SEO", values: [true, true, true] },
      { label: "竞争对手市场拦截", values: [true, true, true] },
      { label: "每月GA4与广告报告", values: [true, true, true] },
      { label: "保证出口询盘", values: [true, true, true], highlight: "blue" },
      { label: "谷歌广告管理", values: ["可选", "可选", "可选"], type: "ads-meta" },
      { label: "付费谷歌广告（4个月）", values: ["$3,000", "$3,000", "$3,000"], type: "ads-meta" },
      { label: "总计：仅SEO（4个月）", values: ["$5,000", "$12,000", "$17,500"], highlight: "orange" },
      { label: "总计：SEO + 谷歌广告", values: ["$8,000", "$15,000", "$22,500"], highlight: "orange" },
    ]
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'zh' | null>(null);
  const t = lang ? TRANSLATIONS[lang] : TRANSLATIONS.en;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderVal = (val: any, isOrange?: boolean) => {
    if (val === true) return <CheckCircle2 className={`${isOrange ? 'text-white' : 'text-[#005bab]'} mx-auto`} size={32} />;
    if (val === false) return <XCircle className="text-slate-200 mx-auto" size={32} />;
    return (
      <span className={`block w-full text-center leading-tight ${isOrange ? 'text-white text-4xl font-black drop-shadow-md' : 'text-slate-900 text-lg font-bold'}`}>
        {val}
      </span>
    );
  };

  if (!lang) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#005bab22_0%,_transparent_70%)]"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="max-w-4xl w-full bg-white rounded-[4rem] shadow-2xl p-12 md:p-24 text-center relative z-10 border border-white/20"
        >
          <div className="mb-12">
            <p className="text-[#005bab] font-black text-xs uppercase tracking-[0.5em] mb-4">Online Promotion House</p>
            <div className="w-20 h-20 bg-[#005bab] rounded-3xl flex items-center justify-center text-white font-black text-4xl mx-auto shadow-2xl shadow-blue-500/40">KR</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-6 uppercase tracking-tight leading-none">
            Google Promotion <br/> <span className="text-[#005bab]">Proposal</span>
          </h1>
          <p className="text-slate-500 text-xl mb-16 font-medium uppercase tracking-[0.2em]">Select your language</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <button 
              onClick={() => setLang('en')}
              className="group relative bg-[#005bab] hover:bg-slate-900 text-white p-10 rounded-[3rem] transition-all duration-500 flex flex-col items-center justify-center gap-4 shadow-xl hover:-translate-y-2"
            >
              <Languages className="mb-2" size={32} />
              <span className="text-xl font-black uppercase tracking-widest leading-snug">Check Google Promotion Proposal in English Language</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-[3rem] transition-opacity"></div>
            </button>
            
            <button 
              onClick={() => setLang('zh')}
              className="group relative bg-slate-900 hover:bg-[#005bab] text-white p-10 rounded-[3rem] transition-all duration-500 flex flex-col items-center justify-center gap-4 shadow-xl hover:-translate-y-2"
            >
              <Languages className="mb-2" size={32} />
              <span className="text-xl font-black uppercase tracking-widest leading-relaxed">用中文语言查看谷歌推广方案<br/>(Check in Chinese)</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-[3rem] transition-opacity"></div>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-white text-slate-900 overflow-x-hidden selection:bg-[#005bab] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center no-print shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#005bab] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">KR</div>
          <div>
            <p className="text-slate-900 font-black tracking-tighter leading-none text-lg uppercase">{t.footerBrand}</p>
            <p className="text-[#005bab] text-[10px] font-black uppercase tracking-widest">{t.footerSub}</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {t.nav.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollToSection(['vision', 'strategy', 'showcase', 'pricing', 'whyus'][idx])}
              className="text-slate-500 hover:text-[#005bab] font-bold text-xs uppercase tracking-widest transition-colors"
            >
              {item}
            </button>
          ))}
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="ml-6 flex items-center gap-2 text-[#005bab] font-black text-[10px] uppercase tracking-widest hover:underline">
            <Languages size={14} /> {lang === 'en' ? '中文' : 'ENGLISH'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <Section id="vision" className="min-h-screen flex flex-col items-center justify-center text-center pt-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#005bab 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#005bab]/5 rounded-full blur-[120px] -z-10"></div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <span className="h-px w-16 bg-[#005bab]"></span>
          <span className="text-[#005bab] font-black text-[10px] uppercase tracking-[0.5em]">{t.heroSub}</span>
          <span className="h-px w-16 bg-[#005bab]"></span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-slate-900 mb-8 leading-[1.1] uppercase tracking-tighter"
        >
          {t.heroTitle1} <span className="text-[#005bab] italic">{t.heroTitle2}</span><br/>{t.heroTitle3}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-slate-500 text-lg md:text-2xl max-w-4xl mb-16 leading-relaxed"
        >
          {t.heroDesc}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-2xl text-left">
            <h3 className="text-[#005bab] font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
              <Globe size={16} /> {t.heroCard1}
            </h3>
            <p className="text-4xl font-black text-slate-900 mb-2">{t.heroCard1Val}</p>
          </div>
          <div className="bg-[#005bab] p-10 rounded-[3rem] text-white shadow-2xl text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-white/70 font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
              <MousePointerClick size={16} /> {t.heroCard2}
            </h3>
            <p className="text-4xl font-black mb-2">{t.heroCard2Val}</p>
          </div>
          <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl text-left">
            <h3 className="text-[#005bab] font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
              <Users size={16} /> {t.heroCard3}
            </h3>
            <p className="text-4xl font-black italic mb-2 tracking-tighter">{t.heroCard3Val}</p>
          </div>
        </div>
      </Section>

      {/* Strategy Section */}
      <Section id="strategy" className="bg-[#fcfdfe]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-[#005bab]/10 text-[#005bab] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">Execution Engine</div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-8 uppercase leading-[0.9]">{t.strategyTitle}</h2>
            <div className="space-y-12 mt-12">
              <div className="group">
                <div className="flex gap-6 items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#005bab] group-hover:bg-[#005bab] group-hover:text-white transition-all">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">{t.strategy1Title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl font-medium mb-6">{t.strategy1Desc}</p>
                <div className="flex flex-wrap gap-2">
                   {["Google.co.uk", "Google.ae", "Google.africa", "Google.com"].map(ex => (
                     <span key={ex} className="bg-blue-50 text-[#005bab] px-3 py-1 rounded-lg text-[10px] font-black border border-blue-100 uppercase tracking-widest">{ex}</span>
                   ))}
                </div>
              </div>
              <div className="group">
                <div className="flex gap-6 items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#005bab] group-hover:bg-[#005bab] group-hover:text-white transition-all">
                    <Layers size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">{t.strategy2Title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl font-medium">{t.strategy2Desc}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-900 rounded-[3rem] p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-10 text-white/40 font-black text-[10px] uppercase tracking-widest">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <span>Analysis</span>
              </div>
              <div className="space-y-8">
                 <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-white/50 font-black uppercase tracking-widest">
                       <span>USA / CA</span>
                       <span>Current: 5% → Target: 85%</span>
                    </div>
                    <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5 }} className="h-full bg-[#005bab]"></motion.div>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-white/50 font-black uppercase tracking-widest">
                       <span>Germany / EU</span>
                       <span>Current: 2% → Target: 70%</span>
                    </div>
                    <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '70%' }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-blue-400"></motion.div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SEO + ADS SHOWCASE Section */}
      <Section id="showcase" className="bg-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-serif font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">{t.showcaseTitle}</h2>
          <p className="text-slate-500 text-xl font-medium max-w-3xl mx-auto">{t.showcaseDesc}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ADS Visual Component */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <MousePointerClick size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">{t.adsLabel}</h3>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Immediate Lead Gen</p>
              </div>
            </div>
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <div className="flex items-center gap-2">
                  <span className="bg-white px-2 py-0.5 border border-slate-300 rounded text-[10px] font-black text-slate-600 uppercase">Ad</span>
                  <span className="text-blue-700 font-bold text-sm underline cursor-pointer">Industrial Ceramic LED Solutions - Kangrong Official</span>
               </div>
               <p className="text-slate-500 text-xs leading-relaxed">Top technical LED manufacturer. 19x Thermal Radiation advantage. Get a bulk quote today for global export.</p>
               <div className="flex gap-4 text-[10px] text-slate-400 font-bold">
                 <span>Rating: ★★★★★</span>
                 <span>Official Technical Specs</span>
               </div>
            </div>
            <p className="mt-8 text-slate-500 font-medium leading-relaxed">{t.adsDesc}</p>
          </motion.div>

          {/* SEO Visual Component */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900 rounded-[3rem] p-10 shadow-2xl border border-white/10 text-white"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#005bab]/20 flex items-center justify-center text-[#005bab]">
                <Search size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black">{t.seoLabel}</h3>
                <p className="text-white/30 text-xs font-black uppercase tracking-widest">Authority Compounding</p>
              </div>
            </div>
            <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
               <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold text-sm underline cursor-pointer">Thermal Radiation Performance in Ceramic LED - Engineering Review</span>
               </div>
               <p className="text-white/40 text-xs leading-relaxed">Technical analysis of 19x thermal advantage. Detailed PDF data sheets for procurement officers in LED lighting...</p>
               <div className="flex gap-4 text-[10px] text-white/20 font-bold">
                 <span>Position: #1 Organic</span>
                 <span>Global Authority</span>
               </div>
            </div>
            <p className="mt-8 text-white/40 font-medium leading-relaxed">{t.seoDesc}</p>
          </motion.div>
        </div>

        {/* ANALYTICS HUD */}
        <div className="mt-16 bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-slate-100 overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <BarChart3 size={200} />
           </div>
           <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight flex items-center justify-center gap-4">
                  <Gauge className="text-[#005bab]" /> {t.analyticsTitle}
                </h3>
                <p className="text-[#005bab] font-black text-[10px] uppercase tracking-[0.3em]">{t.analyticsSub}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-8">
                    <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                          <TrendingUp size={64} className="text-[#005bab]" />
                       </div>
                       <p className="text-[#005bab] font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                         <Globe size={14} /> {t.metric1Title}
                       </p>
                       <div className="flex items-center gap-4 mb-6">
                          <span className="text-5xl font-black text-slate-900 tracking-tighter">+240%</span>
                          <div className="h-2 flex-1 bg-blue-100 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} whileInView={{ width: '94%' }} transition={{ duration: 1.5 }} className="h-full bg-[#005bab]"></motion.div>
                          </div>
                       </div>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.metric1Desc}</p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                          <PieChart size={64} className="text-green-600" />
                       </div>
                       <p className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                         <Target size={14} /> {t.metric2Title}
                       </p>
                       <div className="flex items-end gap-1.5 h-16 mb-6">
                          {[25, 45, 30, 65, 55, 85, 100].map((h, i) => (
                             <motion.div 
                                key={i} 
                                initial={{ height: 0 }} 
                                whileInView={{ height: `${h}%` }} 
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="flex-1 bg-green-200 rounded-t-lg group-hover:bg-green-400 transition-colors"
                             ></motion.div>
                          ))}
                       </div>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.metric2Desc}</p>
                    </div>
                 </div>

                 <div className="relative group">
                    <div className="bg-slate-950 rounded-[3rem] p-4 shadow-2xl border border-white/10 relative z-20 overflow-hidden">
                       <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-[4/3] relative">
                          {/* MOCK ANALYTICS UI */}
                          <div className="absolute inset-0 p-6 flex flex-col gap-4">
                             <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                <div className="flex gap-2">
                                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                                <span className="text-white/20 text-[8px] font-black uppercase tracking-widest">Global Export Console v4.0</span>
                             </div>
                             <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                                <Activity className="text-[#005bab] mb-4 animate-pulse" size={48} />
                                <h4 className="text-white font-black text-sm mb-2 tracking-tight">{t.previewLabel}</h4>
                                <p className="text-white/20 text-[10px] uppercase tracking-widest leading-relaxed">Streaming Real-time RFQ Data<br/>from Google.ae & Google.co.uk</p>
                                <div className="mt-8 grid grid-cols-3 gap-2 w-full">
                                   {[1,2,3].map(x => <div key={x} className="h-1 bg-white/5 rounded-full"></div>)}
                                </div>
                             </div>
                          </div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#005bab11_0%,_transparent_70%)]"></div>
                       </div>
                    </div>
                    
                    {/* Floating elements to add "analytics" feel */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }} 
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-6 -right-6 z-30 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden lg:block"
                    >
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#005bab]"><MousePointer2 size={16} /></div>
                          <div>
                             <p className="text-[10px] font-black text-slate-900 uppercase leading-none">Export Click</p>
                             <p className="text-[8px] text-slate-400 font-bold uppercase mt-1">Munich, Germany</p>
                          </div>
                       </div>
                    </motion.div>
                    
                    <div className="absolute -bottom-8 -left-8 w-40 h-64 bg-slate-950 rounded-[2rem] p-3 shadow-2xl border border-white/20 hidden md:block z-10">
                       <div className="h-full w-full bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-4">
                          <Smartphone className="text-white/10 mb-4" size={32} />
                          <div className="space-y-2 w-full">
                             <div className="h-1 w-full bg-white/5 rounded"></div>
                             <div className="h-1 w-3/4 bg-white/5 rounded"></div>
                             <div className="h-1 w-1/2 bg-[#005bab] rounded"></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* ROADMAP Section */}
      <Section id="roadmap" className="bg-[#f0f4f8] relative overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-serif font-black text-slate-900 mb-6 uppercase leading-none tracking-tighter">{t.roadmapTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {t.roadmapSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-50 hover:border-[#005bab] transition-all group"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black text-[#005bab] uppercase tracking-[0.3em]">{t.monthNames[idx]}</span>
                <Activity className="text-[#005bab]" size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight">{step.title}</h3>
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="text-slate-500 text-sm font-bold flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#005bab] mt-1.5 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PRICING Section */}
      <Section id="pricing" className="bg-white scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-9xl font-serif font-black text-slate-900 mb-6 uppercase leading-none tracking-tighter">{t.pricingTitle}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium uppercase font-black tracking-widest">{t.pricingSub}</p>
        </div>

        <div className="overflow-hidden border-4 border-slate-900 rounded-[4rem] bg-white shadow-2xl relative">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-12 text-left font-black text-sm uppercase tracking-[0.5em] sticky left-0 bg-slate-900 z-10 border-r border-white/5 min-w-[300px]">{t.matrixHeader}</th>
                  {t.pkgs.map((name, i) => (
                    <th key={name} className={`p-12 font-serif text-4xl italic ${i === 2 ? 'bg-[#005bab] text-white' : ''}`}>
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-100">
                {t.features.map((row, rIdx) => {
                  const isHighlightedBlue = row.highlight === "blue";
                  const isHighlightedOrange = row.highlight === "orange";
                  const isAdsMeta = row.type === "ads-meta";
                  
                  let rowBg = "bg-white";
                  let labelColor = "text-slate-950";
                  let labelSize = "text-[16px]";

                  if (isHighlightedBlue) { rowBg = "bg-blue-50/50"; labelColor = "text-[#005bab]"; }
                  if (isHighlightedOrange) { rowBg = "bg-[#ff6b00]"; labelColor = "text-white"; labelSize = "text-[22px]"; }
                  if (isAdsMeta) { rowBg = "bg-slate-50/80"; labelColor = "text-slate-500 italic"; }

                  return (
                    <tr key={rIdx} className={`group transition-all duration-300 ${rowBg} ${isHighlightedOrange ? 'border-y-4 border-white' : ''}`}>
                      <td className={`p-10 text-left font-black uppercase tracking-widest sticky left-0 transition-colors z-10 border-r-2 border-slate-100/10
                        ${rowBg} ${labelColor} ${labelSize} ${isHighlightedOrange ? 'shadow-2xl' : ''}`}>
                        <div className="flex items-center gap-3">
                          {isHighlightedOrange && <TrendingUp size={24} className="text-white animate-pulse" />}
                          {row.label}
                        </div>
                      </td>
                      {row.values.map((v, i) => (
                        <td key={i} className={`p-10 border-r-2 last:border-0 transition-all border-slate-100/10
                          ${i === 2 && !row.highlight ? 'bg-blue-50/30' : ''}
                          ${isHighlightedOrange ? 'bg-[#ff6b00]' : ''}`}>
                          {renderVal(v, isHighlightedOrange)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* WHY US Section */}
      <Section id="whyus" className="bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-12 my-12 relative overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-serif font-black mb-6 uppercase leading-tight tracking-tight">{t.whyTitle}</h2>
          <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">{t.whyDesc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.whyItems.map((item, i) => (
            <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-[#005bab]/50 transition-all group">
              <div className="w-16 h-16 bg-[#005bab]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 relative">
          <div className="bg-slate-950 text-white py-6 px-10 text-center text-[10px] font-black uppercase tracking-[0.5em]">
            {t.footerTag}
          </div>
          
          <div className="p-12 md:p-20 flex flex-col lg:flex-row justify-between items-start gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl">KR</div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-[0.8]">{t.footerBrand}</h3>
                  <p className="text-[#005bab] text-[10px] font-black uppercase tracking-[0.3em] mt-2">{t.footerSub}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6 text-slate-600 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#005bab]/10 group-hover:text-[#005bab] transition-all">
                    <Mail size={22} />
                  </div>
                  <p className="font-black text-xl tracking-tighter italic">kitty@onlinepromotionhouse.com</p>
                </div>
                <div className="flex items-center gap-6 text-slate-600 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#005bab]/10 group-hover:text-[#005bab] transition-all">
                    <Phone size={22} />
                  </div>
                  <p className="font-black text-xl tracking-tighter">+91 6262914149</p>
                </div>
                <div className="flex items-center gap-6 text-slate-600 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-green-50 transition-all">
                    <MessageCircle size={22} className="text-green-500" />
                  </div>
                  <p className="font-black text-xl tracking-tighter">+91 6262914149</p>
                </div>
              </div>
            </div>

            <div className="lg:text-right min-w-[340px] pt-12 lg:pt-0">
              <div className="relative inline-block lg:text-right">
                <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-8xl font-serif italic text-slate-700/80 mb-2 leading-none">Kitty Bagga</motion.h4>
                <div className="h-0.5 w-full bg-[#005bab]/30 mb-4"></div>
                <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-xs">{t.consultant}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
