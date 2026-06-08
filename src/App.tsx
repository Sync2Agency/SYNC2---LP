/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Globe, 
  Target, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Zap,
  Sparkles,
  Globe2,
  Languages,
  ShieldCheck,
  Menu,
  X,
  Upload,
  Download,
  Mail,
  Building2,
  User,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Music2,
  AtSign,
  MessageSquare,
  Camera,
  FileText,
  Layout,
  Search,
  PieChart,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Quote,
  BookOpen,
  Calendar,
  Clock,
  ArrowLeft,
  Plus,
  Trash2,
  Edit,
  Save,
  Printer,
  Wallet,
  LogOut,
  Filter,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { DIGITAL_TIPS } from './constants';

const Partners = () => (
  <section className="py-16 bg-white border-y border-zinc-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 text-center mb-8">
      <p className="text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase">Trusted by Industry Leaders</p>
    </div>
    <div className="relative flex overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex items-center gap-16 whitespace-nowrap px-8"
      >
        {/* Double the items for seamless loop */}
        {[...Array(2)].map((_, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <div className="flex items-center gap-2 grayscale opacity-40">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8edce0]" />
              <span className="text-xl font-bold tracking-tighter text-[#1a1a1a]">グローバルエッジ有限会社</span>
            </div>
            <div className="flex items-center gap-2 grayscale opacity-40">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8edce0]" />
              <span className="text-xl font-bold tracking-tighter text-[#1a1a1a]">ネクストレベル株式会社</span>
            </div>
            <div className="flex items-center gap-2 grayscale opacity-40">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8edce0]" />
              <span className="text-xl font-bold tracking-tighter text-[#1a1a1a]">フロンティアソリューション</span>
            </div>
            <div className="flex items-center gap-2 grayscale opacity-40">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8edce0]" />
              <span className="text-xl font-bold tracking-tighter text-[#1a1a1a]">テックフュージョン</span>
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </section>
);

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      next(); // Swiped left -> next
    } else if (diff < -50) {
      prev(); // Swiped right -> prev
    }
    setTouchStartX(null);
  };

  const cases = [
    {
      category: "理容室・バーバー",
      name: "Barbershop Strategic Branding",
      challenge: "若年層の集客が弱く、価格競争に巻き込まれている。",
      solution: "ショート動画でカット技術と店内の「こだわり」をクールに発信。高単価層へターゲットを絞ったブランディング。",
      result: "新規客 月45名増 / 売上 160%向上",
      image: "https://picsum.photos/seed/barber/800/800",
      avatar: <Camera className="w-5 h-5" />,
      likes: "1,240",
      comments: "84"
    },
    {
      category: "エステ・美容サロン",
      name: "Esthetic & Beauty Salon",
      challenge: "媒体依存（広告費）が高く、公式LINEへの登録率が低い。",
      solution: "ビフォーアフターの徹底解説動画と、セルフケア情報をパッケージ化して発信。プロの技術を可視化を実現。",
      result: "月間リード 80件突破 / CPA 65%削減",
      image: "https://picsum.photos/seed/beauty/800/800",
      avatar: <AtSign className="w-5 h-5" />,
      likes: "2,850",
      comments: "156"
    },
    {
      category: "不動産業・売買仲介",
      name: "Real Estate Professional",
      challenge: "信頼構築に時間がかかり、成約までのリードタイムが長い。",
      solution: "「失敗しない物件選び」をテーマにYouTubeショートと図解投稿を展開。専門家としての地位を確立。",
      result: "成約数 3.4倍 / 広告宣伝費 52%削減",
      image: "https://picsum.photos/seed/realestate/800/800",
      avatar: <Building2 className="w-5 h-5" />,
      likes: "940",
      comments: "42"
    },
    {
      category: "人材派遣・紹介",
      name: "Human Resources Dispatch",
      challenge: "求職者の質にバラつきがあり、マッチング率が低い。",
      solution: "現場のリアルな雰囲気や社員インタビューを動画で発信。働くイメージを具体化させ、質の高い応募を誘発。",
      result: "月間応募 500名超 / 応募単価 1/4に低減",
      image: "https://picsum.photos/seed/hr/800/800",
      avatar: <Users className="w-5 h-5" />,
      likes: "1,520",
      comments: "91"
    },
    {
      category: "中古車販売・買取",
      name: "Used Car Dealership",
      challenge: "在庫の回転率が悪く、遠方客の信頼獲得に苦戦。",
      solution: "車両の状態を徹底的に見せるレビュー動画。LINEを活用したオンライン商談の流れを構築。",
      result: "成約率 3.8倍 / 月間売上 2,200万円UP",
      image: "https://picsum.photos/seed/cars/800/800",
      avatar: <Search className="w-5 h-5" />,
      likes: "3,100",
      comments: "210"
    },
    {
      category: "飲食店・レストラン",
      name: "Gourmet & Restaurant",
      challenge: "認知度が低く、閑散期の集客を安定ませたい。",
      solution: "シズル感溢れるリール動画と地域限定のキャンペーン。Instagramをデジタルメニューとして活用。",
      result: "予約数 4.2倍 / 週末満席率 100%継続",
      image: "https://picsum.photos/seed/food/800/800",
      avatar: <AtSign className="w-5 h-5" />,
      likes: "4,600",
      comments: "320"
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % cases.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);

  const cardWidth = windowWidth < 640 ? Math.min(290, windowWidth - 40) : 320;
  const cardSpacing = windowWidth < 640 ? cardWidth + 12 : cardWidth + 30;

  return (
    <section id="cases" className="py-24 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[#8edce0] font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">Success Stories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">SNS集客の実績</h2>
            <p className="text-zinc-500 text-base font-medium">B2B・地域ビジネスに特化した戦略的運用の成功事例。</p>
          </div>
          <div className="flex gap-3 justify-center">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all shadow-sm active:scale-95 bg-white/50 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#373d43] transition-all shadow-lg active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div 
        className="relative h-[650px] w-full flex items-center justify-center select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Container */}
        <div className="absolute w-full flex items-center justify-center overflow-visible">
          <AnimatePresence mode="popLayout" initial={false}>
            {cases.map((_case, i) => {
              // Calculate relative position to active index
              let position = i - activeIndex;
              // Handle loop wrapping
              if (position > cases.length / 2) position -= cases.length;
              if (position < -cases.length / 2) position += cases.length;

              const isCenter = position === 0;
              const isVisible = Math.abs(position) <= 2; // Show 2 neighbors on each side

              if (!isVisible) return null;

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    x: `${position * cardSpacing}px`,
                    scale: isCenter ? 1 : 0.82,
                    opacity: isCenter ? 1 : 0.35,
                    zIndex: 10 - Math.abs(position),
                    filter: isCenter ? "blur(0px)" : "blur(3px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 35,
                  }}
                  style={{ width: `${cardWidth}px` }}
                  className="absolute bg-white rounded-[2rem] border border-zinc-100 shadow-2xl overflow-hidden cursor-pointer touch-none"
                  onClick={() => setActiveIndex(i)}
                >
                  {/* Social Media Post Header */}
                  <div className="p-4 flex items-center justify-between border-b border-zinc-50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#8edce0]/10 flex items-center justify-center text-[#8edce0]">
                        {_case.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a1a1a] text-xs leading-none mb-1">{_case.name}</h4>
                        <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">{_case.category}</p>
                      </div>
                    </div>
                    <Menu className="w-4 h-4 text-zinc-300" />
                  </div>

                  {/* Post Image */}
                  <div className="aspect-square relative group">
                    <img 
                      src={_case.image} 
                      alt={_case.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                    
                    {/* Overlay Result Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-white/50">
                      <p className="text-[#1a1a1a] font-black text-[11px] leading-tight text-center">{_case.result}</p>
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Zap className="w-5 h-5 text-[#1a1a1a] fill-[#1a1a1a]" />
                          <span className="text-[10px] font-bold tracking-tighter">{_case.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-zinc-400">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-[10px] font-bold tracking-tighter">{_case.comments}</span>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        {cases.map((_, dotIndex) => (
                          <div 
                            key={dotIndex} 
                            className={`w-1 h-1 rounded-full transition-all duration-300 ${dotIndex === i ? "bg-[#8edce0] scale-125" : "bg-zinc-200"}`} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Post Caption (Challenge & Solution) */}
                    <div className="space-y-3">
                      <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                        <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase block mb-1">Challenge</span>
                        <p className="text-[10px] font-bold text-[#373d43] leading-relaxed">
                          「{_case.challenge}」
                        </p>
                      </div>
                      <div className="p-3 border-l-2 border-[#8edce0] bg-[#8edce0]/5 rounded-r-xl">
                         <span className="text-[9px] font-black tracking-widest text-[#8edce0] uppercase block mb-0.5">Strategy</span>
                         <p className="text-[10px] text-[#1a1a1a] leading-relaxed font-medium">
                           {_case.solution}
                         </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-zinc-50">
                      <a 
                        href="https://lin.ee/UwOZ7ho"
                        className="w-full bg-[#1a1a1a] text-white py-3.5 rounded-xl font-bold text-[10px] flex items-center justify-center gap-2 hover:bg-[#373d43] transition-all transform active:scale-[0.98]"
                      >
                        事例を詳しく見る
                        <ChevronRight className="w-3.5 h-3.5 text-[#8edce0]" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const SNS_DATA = {
  instagram: {
    name: "Instagram",
    icon: <Instagram className="w-12 h-12" />,
    stats: [
      { label: "国内月間アクティブユーザー", value: "3,300万人以上" },
      { label: "メイン層", value: "20代〜40代（女性中心）" },
      { label: "ビジネス利用率", value: "約80%のユーザーが企業をフォロー" }
    ],
    importance: "Instagramは今や、単なる画像共有ツールではなく「視覚的な検索エンジン」としての地位を確立しています。特にB2Cブランドだけでなく、B2Bにおいても「会社の雰囲気」や「プロダクトのこだわり」を伝えるための強力なブランディング・インフラとなっています。視覚的な訴求力は、言葉以上の信頼を瞬時に生み出します。",
    marketData: "日本のInstagramユーザーの約半数が、フィード投稿やストーリーズを見て実際に商品の購入やサービスの検討を行っているというデータがあります。ブランドの「世界観」を構築し、ファンを増やすためには欠かせないプラットフォームです。"
  },
  tiktok: {
    name: "TikTok",
    icon: <Music2 className="w-12 h-12" />,
    stats: [
      { label: "国内月間アクティブユーザー", value: "1,700万人以上" },
      { label: "メイン層", value: "10代〜30代（急速に拡大中）" },
      { label: "エンゲージメント率", value: "他プラットフォームの数倍" }
    ],
    importance: "TikTokの最大の特徴は、フォロワー数に関係なくコンテンツが拡散される「おすすめ機能」のアルゴリズムにあります。これにより、ゼロからでも短期間で圧倒的な認知を獲得することが可能です。動画を通じた「親近感」の醸成は、B2Bにおける採用や、親しみやすいブランドイメージの構築に極めて有効です。",
    marketData: "「TikTok売れ」という言葉があるように、ユーザーの購買意欲を刺激する力が非常に強いのが特徴です。テキストでは伝わりにくい商品の魅力や、社員の熱量を直感的に伝えることができます。"
  },
  x: {
    name: "X (Twitter)",
    icon: <Twitter className="w-12 h-12" />,
    stats: [
      { label: "国内月間アクティブユーザー", value: "4,500万人以上" },
      { label: "メイン層", value: "20代〜40代（ビジネス層多め）" },
      { label: "リアルタイム性", value: "情報の拡散スピード最速" }
    ],
    importance: "Xは「今」起きていることを知るためのリアルタイム・ニュースプラットフォームです。B2Bにおいては、業界のインフルエンサーや意思決定者と直接繋がることができる「ソーシャルネットワーキング」の原点と言えます。企業の専門知識を型破りな「ポスト」として発信することで、業界内での権威性を確立できます。",
    marketData: "拡散性の高さ（リポスト機能）により、質の高いコンテンツは二次拡散、三次拡散と広がり、予期せぬビジネスチャンスを呼び込みます。トレンドに敏感なビジネス層へのアプローチに欠かせません。"
  },
  threads: {
    name: "Threads",
    icon: <AtSign className="w-12 h-12" />,
    stats: [
      { label: "急成長中のテキストSNS", value: "Instagram連携による高い流入" },
      { label: "メイン層", value: "クリエイター・ビジネス層" },
      { label: "ユーザー体験", value: "クリーンなコミュニケーション" }
    ],
    importance: "ThreadsはInstagramのビジュアル要素に、Xのテキスト要素を融合させた新しい選択肢です。Instagramのアカウントをそのまま引き継げるため、初期のファン獲得が容易です。まだ「広告」の色が薄いため、ユーザーとの純粋な対話や、深みのあるストーリーテリングに適しています。",
    marketData: "Meta社が提供する基盤により、Instagramからのシームレスな移行が進んでいます。テキストベースの深い繋がりを求めるユーザーに向けた、新しいブランディングチャネルとして注目されています。"
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="w-12 h-12" />,
    stats: [
      { label: "国内月間アクティブユーザー", value: "2,600万人以上" },
      { label: "メイン層", value: "30代〜50代（高年収層・決裁権者）" },
      { label: "ビジネス活用", value: "実名制による高い信頼性" }
    ],
    importance: "Facebookは、B2Bマーケティングにおいて最も強力なプラットフォームの一つです。実名制をベースとしているため、他のSNSに比べて信頼性が高く、企業ページを通じたプロフェッショナルな情報発信が可能です。決裁権を持つ30代以上の層がメインユーザーであり、質の高いリード獲得に直結します。",
    marketData: "詳細なターゲティングが可能な広告機能と組み合わせることで、特定の役職や業界に絞ったアプローチを非常に高い精度で行うことができます。"
  },
  youtube: {
    name: "YouTube",
    icon: <Youtube className="w-12 h-12" />,
    stats: [
      { label: "国内月間アクティブユーザー", value: "7,000万人以上" },
      { label: "メイン層", value: "全世代（全人口の約7割）" },
      { label: "滞在時間", value: "圧倒的に長い視聴時間" }
    ],
    importance: "YouTubeはもはや動画サイトではなく「世界第2位の検索エンジン」です。複雑なB2Bサービスや製品の仕組みを解説するのに、動画以上のツールはありません。一度制作した動画は長期間にわたって検索結果に残り続け、24時間365日働く「自社メディア」として資産化されます。",
    marketData: "ショート動画（Shorts）の台頭により、新規ユーザーへのリーチも以前より容易になりました。教育的なコンテンツにより、商談前の顧客の理解度を劇的に高めることができます。"
  },
  line: {
    name: "LINE",
    icon: <MessageCircle className="w-12 h-12" />,
    stats: [
      { label: "国内月間アクティブユーザー", value: "9,600万人以上" },
      { label: "到達率", value: "メルマガの数倍の開封率" },
      { label: "インフラ化", value: "生活に密着した連絡手段" }
    ],
    importance: "LINEはSNSという枠を超え、日本のデジタル・インフラとなっています。SNSで獲得した「認知」を、具体的な「アクション」や「顧客維持（CRM）」に繋げるための最強のクローズド・ツールです。プッシュ通知による高い到達率は、見込み顧客との関係性を深めるための必須チャネルです。",
    marketData: "公式アカウントの活用により、お問い合わせ、診断、予約、カスタマーサポートまでを一気通貫で行うことが可能です。既存顧客のファン化に最も貢献します。"
  }
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SNSPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = SNS_DATA[slug as keyof typeof SNS_DATA];
  const LINE_LINK = "https://lin.ee/UwOZ7ho";

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <button onClick={() => navigate('/')} className="text-[#8edce0] font-bold underline">Go Back Home</button>
        </div>
      </div>
    );
  }

  const pageTitle = `${data.name}運用戦略 - SYNC2 | SNS運用を資産へ`;
  const pageDescription = data.importance || `${data.name}の運用メリットと戦略的アプローチについて解説します。`;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <main className="pt-24 md:pt-32">
        <section className="py-8 border-b border-zinc-100 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#8edce0] transition-colors text-sm font-bold group">
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>トップページへ戻る</span>
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-20 border-b border-zinc-100 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-5 bg-white rounded-3xl shadow-xl shadow-zinc-200 text-[#8edce0] mb-8 border border-zinc-100">
                {data.icon}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6">{data.name}運用戦略</h1>
              <p className="text-zinc-500 max-w-2xl text-lg md:text-xl leading-relaxed">
                {data.name}を貴社の強力な営業資産へと変革させる、SYNC2の専門的アプローチをご紹介します。
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#8edce0] font-bold tracking-widest uppercase text-xs mb-4 block">Market Insights</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">数字で見る{data.name}</h2>
                <div className="space-y-6">
                  {data.stats.map((stat, i) => (
                    <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                      <p className="text-zinc-400 text-sm mb-1">{stat.label}</p>
                      <p className="text-2xl font-black text-[#373d43]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-50 p-8 md:p-12 rounded-[40px] border border-zinc-100">
                <p className="text-[#1a1a1a] text-lg leading-relaxed font-medium">
                  {data.marketData}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#8edce0] font-bold tracking-widest uppercase text-xs mb-4 block">Strategy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">なぜ{data.name}が必要なのか？</h2>
              <div className="relative">
                <Quote className="text-[#8edce0]/10 w-24 h-24 absolute -top-12 -left-12 -z-0" />
                <p className="text-xl md:text-2xl text-[#373d43] leading-relaxed relative z-10 font-bold">
                  {data.importance}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8edce0]/10 blur-[100px] -z-0" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {data.name}で圧倒的な成果を<br />
                  <span className="text-[#8edce0]">SYNC2</span>と共に
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                  「SNSの力を最大化し、貴社のブランド価値を加速させましょう。今すぐLINEでSync2に相談してください。」<br />
                  現状の課題分析から最適な運用プランの提案まで、専門チームがサポートします。
                </p>
                <a 
                  href={LINE_LINK}
                  className="inline-flex items-center gap-4 bg-[#8edce0] hover:bg-[#7bc8cc] text-[#1a1a1a] px-8 md:px-12 py-5 rounded-full text-lg md:text-xl font-bold transition-all shadow-xl shadow-[#8edce0]/20 active:scale-95"
                >
                  <div className="flex flex-col items-start md:border-r border-[#1a1a1a]/10 md:pr-6">
                    <span className="text-[10px] uppercase tracking-widest opacity-70 italic font-medium">Growth Strategy</span>
                    <span className="text-sm md:text-base whitespace-nowrap">今すぐSYNC2に相談する</span>
                  </div>
                  <MessageCircle className="w-6 h-6 animate-pulse" />
                </a>
                <p className="mt-4 text-zinc-500 text-sm font-medium italic">
                  "Let's elevate your brand through strategic SNS management. Start your free consultation today."
                </p>
                <p className="mt-6 text-zinc-500 text-sm">※24時間受付中。順次専門スタッフが返信いたします。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const LeadMagnet = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [progressText, setProgressText] = useState('リクエストを準備中...');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const triggerPdfDownload = () => {
    const customPdfData = localStorage.getItem('sync2_pdf_data');
    const customPdfName = localStorage.getItem('sync2_pdf_name') || 'SYNC2_B2B_SNS_Strategy_Guide_2026.pdf';
    
    let blob: Blob;
    if (customPdfData) {
      try {
        const byteCharacters = atob(customPdfData);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        blob = new Blob([byteArray], { type: 'application/pdf' });
      } catch (e) {
        console.error("Error decoding custom pdf, falling back to default.", e);
        // Fallback initialized below
      }
    }
    
    if (!blob!) {
      // Elegant minimal valid PDF document text shell with correct boundaries
      const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [ 3 0 R ] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << >> /MediaBox [ 0 0 595.275 841.889 ] /Contents 4 0 R >>
endobj
4 0 obj
<< /Length 200 >>
stream
BT
/F1 18 Tf
72 750 Td
(SYNC2 - B2B SNS Strategy Guide 2026) Tj
/F1 11 Tf
0 -36 Td
(Thank you for completing our inquiry form.) Tj
0 -18 Td
(This guide includes key insights on B2B Social Media marketing campaigns) Tj
0 -18 Td
(and AI-driven business scaling strategies.) Tj
0 -36 Td
(To explore further, please contact us at: info@sync2.agency) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000213 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
485
%%EOF`;
      blob = new Blob([pdfContent], { type: 'application/pdf' });
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = customPdfData ? customPdfName : 'SYNC2_B2B_SNS_Strategy_Guide_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setDownloadProgress(0);

    const steps = [
      { prg: 20, text: 'セキュアな暗号化接続を開始中...' },
      { prg: 45, text: '2026年最新アルゴリズムレポート生成中...' },
      { prg: 70, text: '高解像度カスタムPDFをパッケージング中...' },
      { prg: 100, text: 'パケットの整合性を検証、ダウンロード完了！' }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 200));
      setDownloadProgress(step.prg);
      setProgressText(step.text);
    }

    // Trigger PDF download automatically
    try {
      triggerPdfDownload();
    } catch (e) {
      console.error("Automatic download blocked or failed", e);
    }

    setIsSuccess(true);
    setIsSubmitting(false);

    // Save lead to localStorage for team access
    try {
      const existingLeads = localStorage.getItem('sync2_leads');
      const leads = existingLeads ? JSON.parse(existingLeads) : [];
      const newLead = {
        id: Date.now().toString(),
        company: formData.company || "未入力",
        name: formData.name || "未入力",
        email: formData.email || "未入力",
        date: new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/-/g, '.'),
        time: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      leads.unshift(newLead);
      localStorage.setItem('sync2_leads', JSON.stringify(leads));
    } catch (err) {
      console.error("Error saving lead:", err);
    }
  };

  return (
    <section id="download" className="py-16 md:py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1a1a1a] rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-10 md:p-16 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative overflow-hidden">
          {/* Glowing Ambient Background Spotlights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8edce0]/10 blur-[120px] -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-zinc-800/20 blur-[100px] -z-0 pointer-events-none" />
          
          {/* Left Text and 3D Interactive Media Module */}
          <div className="flex-1 w-full z-10 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/5">
              <FileText className="w-3.5 h-3.5 text-[#8edce0]" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-zinc-300">Free Whitepaper</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight tracking-tight">
              B2B企業のための<br className="hidden sm:block" />
              <span className="text-[#8edce0] relative inline-block">
                SNS戦略・完全ガイド
                <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-gradient-to-r from-[#8edce0] via-teal-400 to-transparent opacity-40" />
              </span>
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              2026年の最新アルゴリズムを反映。B2Bにおけるリード獲得の秘訣を、11ページにわたる独自の知見とともに無料公開します。
            </p>

            {/* Smart 3D Responsive Book Cover Showcase (Hides/Transforms elegantly) */}
            <div className="my-8 flex justify-center lg:justify-start">
              <motion.div 
                whileTap={{ scale: 0.97 }}
                className="relative cursor-pointer group"
              >
                {/* Book shadow projection */}
                <div className="absolute -bottom-4 left-4 right-4 h-6 bg-black/60 blur-xl rounded-full" />
                
                {/* The 3D CSS Core Book Object */}
                <div className="relative w-48 sm:w-56 h-64 sm:h-72 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-r-2xl border-y border-r border-zinc-805 shadow-[12px_12px_24px_rgba(0,0,0,0.6)] flex flex-col justify-between p-5 overflow-hidden transition-all duration-300 group-hover:shadow-[16px_16px_36px_rgba(0,0,0,0.8)] group-hover:-translate-y-1">
                  {/* Book spine simulation */}
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black via-zinc-900 to-transparent" />
                  {/* Embedded dynamic grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                  
                  {/* Book header */}
                  <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-[#8edce0]/90 uppercase pl-2 relative z-10">
                    <span>Ver 2026.06</span>
                    <span className="bg-[#8edce0]/10 px-2 py-0.5 rounded-full text-[#8edce0] font-bold">11 Pages</span>
                  </div>

                  {/* Title Area */}
                  <div className="my-auto pl-2 space-y-2 relative z-10">
                    <div className="flex items-center gap-1.5 text-[8px] font-black tracking-widest text-zinc-400">
                      <Sparkles className="w-2.5 h-2.5 text-[#8edce0]" />
                      <span>SYNC2 AGENCY SPECIAL REPORT</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-white leading-tight">
                      B2B専用<br />
                      <span className="text-[#8edce0]">SNS集客ロードマップ</span>
                    </h4>
                    <p className="text-[8px] sm:text-[9px] text-zinc-500 font-medium font-mono">B2B MARKETING BLUEPRINT</p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-end pl-2 pt-2 border-t border-zinc-900 relative z-10">
                    <span className="text-xs font-bold tracking-wider text-white">SYNC2</span>
                    <span className="text-[7px] text-[#8edce0] font-mono tracking-tight font-bold bg-[#8edce0]/10 px-1.5 py-0.5 rounded">FREE GUIDE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Smart modern summary points with high responsive density */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "SNSを「資産」に変える3つの鉄則",
                "決裁者に刺さるクリエイティブ設計",
                "CPAを50%削減した実事例の舞台裏",
                "2026年最新アップデート対応"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                  <div className="flex-shrink-0 p-1 bg-[#8edce0]/10 border border-[#8edce0]/20 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8edce0]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Download Form Holder */}
          <div className="w-full lg:w-[420px] xl:w-[460px] bg-white text-[#1a1a1a] p-5 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl z-10 transition-all duration-300">
            {!isSuccess ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-center tracking-tight text-zinc-900 mb-1">今すぐ無料でダウンロード</h3>
                  <p className="text-xs text-zinc-500 text-center">以下の情報を入力して資料をお受け取りください。</p>
                </div>

                <form onSubmit={handleDownload} className="space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-[#1a1a1a]/40" />
                      <span>Company Name</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="株式会社〇〇"
                      className="w-full h-12 px-4 bg-zinc-50 border border-zinc-150 rounded-xl focus:ring-2 focus:ring-[#8edce0]/30 focus:border-[#8edce0] outline-none transition-all text-xs sm:text-sm text-zinc-800"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                      <User className="w-3 h-3 text-[#1a1a1a]/40" />
                      <span>Your Name</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="山田 太郎"
                      className="w-full h-12 px-4 bg-zinc-50 border border-zinc-150 rounded-xl focus:ring-2 focus:ring-[#8edce0]/30 focus:border-[#8edce0] outline-none transition-all text-xs sm:text-sm text-zinc-800"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-[#1a1a1a]/40" />
                      <span>Work Email</span>
                    </label>
                    <input 
                      required
                      type="email" 
                      placeholder="business@example.com"
                      className="w-full h-12 px-4 bg-zinc-50 border border-zinc-150 rounded-xl focus:ring-2 focus:ring-[#8edce0]/30 focus:border-[#8edce0] outline-none transition-all text-xs sm:text-sm text-zinc-800"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-red-500 text-[11px] font-bold text-center">{errorMessage}</p>
                  )}

                  {/* Simulated Modern Interactive Progress Button */}
                  <div className="pt-2">
                    {!isSubmitting ? (
                      <button 
                        type="submit"
                        className="w-full h-14 bg-[#1a1a1a] text-white rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2.5 shadow-xl hover:bg-zinc-800 active:scale-95"
                      >
                        <span>資料をダウンロードする</span>
                        <Download className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="space-y-3 p-4 bg-zinc-50 border border-zinc-150 rounded-xl animate-pulse">
                        <div className="flex justify-between items-center text-xs text-zinc-650 font-bold">
                          <span>{progressText}</span>
                          <span className="font-mono text-zinc-900">{downloadProgress}%</span>
                        </div>
                        {/* Interactive dynamic Progress Bar */}
                        <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-zinc-700 to-zinc-950 rounded-full"
                            style={{ width: `${downloadProgress}%` }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </form>
                <p className="text-[9px] text-zinc-400 text-center leading-relaxed">
                  ※ご登録後、資料のダウンロードが即時開始されます。
                </p>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-[#8edce0]/10 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 text-[#8edce0]" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-zinc-950 tracking-tight">送信完了いたしました</h3>
                  <p className="text-[12px] text-zinc-600 leading-relaxed max-w-sm mx-auto">
                    ご入力いただいた情報が送信されました。<br />
                    資料のダウンロードを再開するには、以下のボタンをクリックしてください。
                  </p>
                  
                  <div className="pt-2">
                    <button
                      onClick={triggerPdfDownload}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 h-12 bg-[#1a1a1a] hover:bg-zinc-800 text-white rounded-xl font-bold text-xs tracking-widest uppercase transition-all shadow-xl active:scale-95 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#8edce0]" />
                      <span>PDF資料をダウンロードする</span>
                    </button>
                    <p className="text-[9px] text-zinc-400 mt-2">
                      ※自動的にダウンロードが始まらない場合は、上のボタンをクリックしてください。
                    </p>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-5 flex flex-col gap-2.5">
                  <span className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase">Other Resources</span>
                  <a 
                    href="https://lin.ee/UwOZ7ho"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white py-3 px-6 rounded-xl font-bold text-xs shadow-lg shadow-emerald-100 hover:bg-[#05b34c] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>公式LINEで最新情報をチェック</span>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const LINE_LINK = "https://lin.ee/UwOZ7ho";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "ホーム", path: "/" },
    { name: "SNSマーケティング", path: "/sns" },
    { name: "アプリ・AI・システム開発", path: "/development" },
    { name: "ブログ", path: "/blog" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg border-b border-zinc-100 py-3' : 'bg-white/80 backdrop-blur-md py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-md transition-transform group-hover:scale-110">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-[#373d43]" />
              <div className="w-1/2 h-full bg-[#8edce0]" />
            </div>
            <div className="relative w-3 h-3 bg-white rotate-45 z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">SYNC2</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                pathname === item.path 
                  ? 'text-[#8edce0] border-b-2 border-[#8edce0] pb-1' 
                  : 'text-zinc-650 hover:text-[#8edce0] hover:translate-y-[-1px]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href={LINE_LINK} 
            className="bg-[#1a1a1a] hover:bg-[#373d43] text-[#8edce0] px-6 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-2 shadow-lg shadow-zinc-200 active:scale-95 group"
          >
            <span>LINEで無料相談</span>
            <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isMobileMenuOpen ? 'bg-zinc-100 text-[#1a1a1a]' : 'text-[#373d43]'
          }`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <React.Fragment key="mobile-menu-presence">
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] md:hidden"
            />
            {/* Menu Content */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-zinc-100 overflow-hidden shadow-xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className={`text-base font-black ${
                      pathname === item.path ? 'text-[#8edce0]' : 'text-zinc-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <a 
                  href={LINE_LINK}
                  className="bg-[#1a1a1a] text-[#8edce0] py-5 rounded-2xl font-black text-center flex items-center justify-center gap-4 shadow-xl active:scale-95"
                >
                  <span>無料相談はこちら (LINE)</span>
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const LINE_LINK = "https://lin.ee/UwOZ7ho";
  const [termIndex, setTermIndex] = useState(0);
  const terms = [
    "優秀な営業マン",
    "稼ぐ資産",
    "売上を創るエンジン",
    "24時間働くトップセールス",
    "利益を生むプラットフォーム",
    "顧客マグネット",
    "集客システム",
    "最高のPR担当",
    "信頼を構築するメディア",
    "勝てるマーケティング拠点"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTermIndex((prev) => (prev + 1) % terms.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-block bg-zinc-50 border border-zinc-100 px-6 py-2 rounded-full mb-10">
            <span className="text-zinc-600 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              B2B専門・戦略設計型SNSマーケティング
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#1a1a1a] mb-8 md:mb-12 leading-[1.3] max-w-5xl">
            ただ投稿するだけのSNSは、<br />
            もう終わりにしませんか？ <br />
            SNSを<span className="relative inline-flex ml-2 mr-2 whitespace-nowrap min-w-[200px] md:min-w-[300px] justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={termIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 text-[#8edce0] px-2 md:px-4"
                >
                  「{terms[termIndex]}」
                </motion.span>
              </AnimatePresence>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-[#8edce0]/10 -z-10" />
            </span>へ。
          </h1>
          
          <p className="text-base md:text-xl text-zinc-500 mb-12 md:mb-16 leading-relaxed max-w-3xl font-medium px-4 md:px-0">
            私たちは単なる「投稿代行」ではありません。B2Bの意思決定者と貴社を繋ぐ、戦略設計型のSNS運用パートナーです。
          </p>
          
          <div className="flex flex-col items-center gap-16 md:gap-10">
            <div className="flex flex-col md:flex-row items-center gap-24 md:gap-8">
              <div className="relative">
                <a 
                  href={LINE_LINK} 
                  className="bg-[#373d43] text-white px-8 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-black transition-all flex items-center justify-center gap-4 shadow-2xl hover:bg-[#1a1a1a] active:scale-95 group"
                >
                  <span className="whitespace-nowrap">無料診断・相談を開始</span>
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-[#8edce0]" />
                </a>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border border-zinc-100 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
                  <span className="text-xs">💡</span>
                  <span className="text-[10px] font-bold text-zinc-400">
                    残りわすか：<span className="text-red-500">今月の無料相談枠 あと3社</span>
                  </span>
                </div>
              </div>

              <div className="h-20 w-px bg-zinc-100 hidden md:block" />

              <div className="text-center md:text-left flex flex-col justify-center">
                <p className="text-sm font-bold text-[#1a1a1a]">24時間以内の返信率 100%</p>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">※営業日基準</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Problems = () => (
  <section id="problemas" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
          SNSの運用で、こんな<span className="text-[#8edce0] underline decoration-zinc-100 underline-offset-8">お悩み</span>ありませんか？
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Search className="w-10 h-10" />,
            title: "自社のSNSがない、立ち上げ方が分からない",
            desc: "何から手をつければいいか、どのプラットフォームが自社に合っているか不明確な状態を解消します。"
          },
          {
            icon: <Zap className="w-10 h-10" />,
            title: "機能を使いこなせず内容が単調で結果が出ない",
            desc: "最新のアルゴリズムや機能を活用し、エンゲージメントを高める戦略的なコンテンツ制作を行います。"
          },
          {
            icon: <MessageSquare className="w-10 h-10" />,
            title: "イベント情報やサービスをSNSで発信したい",
            desc: "単なる告知ではなく、ユーザーの行動を促すストーリー性のある発信で集客を最大化します。"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl text-center group hover:shadow-xl hover:shadow-zinc-200 transition-all"
          >
            <div className="w-20 h-20 bg-white shadow-sm border border-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#8edce0] group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#373d43] mb-4 leading-tight">{item.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-zinc-50 border border-zinc-100 rounded-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-[#1a1a1a] mb-4">戦略なきSNSは、ただの「コスト」です。</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">
              多くのB2B企業がSNSに時間と費用を投じながらも、実質的な成果を得られていません。私たちは、ただ投稿するだけの運用から、売上に直結する「資産」としての運用へと変革させます。
            </p>
          </div>
          <div className="shrink-0">
            <div className="bg-[#373d43] text-[#8edce0] px-8 py-4 rounded-2xl font-bold shadow-lg shadow-zinc-200">
              SYNC2が解決します
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solucao" className="py-24 bg-zinc-50 border-y border-zinc-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">SYNC2の運用サポート</h2>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          単なる投稿代行ではなく、貴社のビジネス課題を解決するための戦略的なインフラを構築します。
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { 
            icon: <PieChart className="w-8 h-8" />, 
            title: "月1回のレポート提出", 
            desc: "想定したターゲットにリーチできているか、アカウントの運用目的と現状に見合ったその時々にマッチした内容の投稿をする必要があります。実際の数値データからPDCAを回してSNSアカウントを通して成果獲得につなげるまでを実現します。" 
          },
          { 
            icon: <Layout className="w-8 h-8" />, 
            title: "SNSの投稿", 
            desc: "SNSの投稿は一貫した継続性を持つことが難しいコンテンツです。弊社スタッフが報告会にて、レポートを根拠にスケジューリングして投稿します。お客様のご意見を常に反映しながら精度の高いSNS投稿を進めることが出来ます。" 
          },
          { 
            icon: <Camera className="w-8 h-8" />, 
            title: "取材・撮影・ライティング", 
            desc: "SNSの投稿を行う上で最も面倒な取材、撮影、記事の作成をすべてお任せ！これまで数多くの雑誌やSNS運用でライティングを行ってきたプロのスタッフが、お客様の商品や掲載したい内容に合わせて記事を書きあげます。" 
          }
        ].map((card, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-zinc-200 transition-all group"
          >
            <div className="mb-6 text-[#8edce0] group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-[#373d43] mb-4">{card.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Supported SNS Section */}
      <div className="pt-24 border-t border-zinc-200">
        <div className="text-center mb-16">
          <span className="text-[#8edce0] font-bold tracking-widest uppercase text-xs mb-4 block">Tool</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">運用可能なSNS</h2>
          <p className="text-zinc-600">SNSは重要な集客・情報発信ツールに！しかも低コストで販促をかけることができます。</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Object.entries(SNS_DATA).map(([slug, sns], i) => (
            <Link 
              to={`/sns/${slug}`}
              key={slug}
              className="group block"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, borderColor: '#8edce0' }}
                className="p-4 md:p-6 bg-white border border-zinc-100 rounded-2xl flex flex-col gap-2 md:gap-4 shadow-sm transition-all h-full"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 bg-zinc-50 rounded-lg text-[#8edce0] group-hover:bg-[#8edce0]/10 transition-colors">
                    {sns.icon}
                  </div>
                  <span className="font-bold text-[#373d43] text-sm md:text-base">{sns.name}</span>
                </div>
                <p className="hidden md:block text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-500 transition-colors">
                  {sns.importance.substring(0, 40)}...
                </p>
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-[#8edce0] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-[10px] font-bold">VIEW STRATEGY</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="diferenciais" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">一般的な広告代理店との<span className="text-[#8edce0] underline decoration-zinc-100 underline-offset-8">違い</span></h2>
      </div>

      {/* Mobile View: Comparison Cards */}
      <div className="md:hidden space-y-3">
        {[
          { label: "運用目的", normal: "フォロワー増", sync: "売上・利益拡大" },
          { label: "ターゲット", normal: "属性のみ", sync: "B2Bインサイト" },
          { label: "制作物", normal: "低品質・汎用", sync: "高品質・独自" },
          { label: "分析・報告", normal: "数値のみ", sync: "改善案・戦略" },
          { label: "サポート", normal: "形式的・遅い", sync: "密連携・早急" }
        ].map((item, i) => (
          <div key={i} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100 flex items-center justify-between gap-3">
            <div className="flex-1">
              <span className="text-[10px] text-[#8edce0] font-bold block mb-1 uppercase tracking-tighter">{item.label}</span>
              <p className="text-zinc-400 text-xs line-through">{item.normal}</p>
            </div>
            <div className="flex-[1.2] bg-white p-3 rounded-lg border border-zinc-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1 h-full bg-[#8edce0]" />
               <p className="text-[#1a1a1a] text-sm font-bold">{item.sync}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="p-6 text-left bg-zinc-50 border border-zinc-100 text-zinc-500 font-bold rounded-tl-3xl">項目</th>
              <th className="p-6 text-center bg-zinc-100 border border-zinc-200 text-zinc-600 font-bold">一般的な代理店</th>
              <th className="p-6 text-center bg-zinc-50 border border-[#8edce0]/30 text-[#373d43] font-bold rounded-tr-3xl relative">
                SYNC2
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8edce0] text-[#373d43] text-[10px] py-1 px-3 rounded-full shadow-lg">RECOMMENDED</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "運用目的", normal: "フォロワー増加・いいね数", sync: "売上・利益・認知の最大化" },
              { label: "ターゲット設計", normal: "年齢・性別のみ", sync: "詳細なペルソナ・B2Bインサイト" },
              { label: "クリエイティブ", normal: "素材の使い回し・低品質", sync: "完全オリジナル・高クオリティ" },
              { label: "分析・報告", normal: "数値の羅列のみ", sync: "改善案を含む戦略的レポート" },
              { label: "サポート体制", normal: "返信が遅い・形式的", sync: "密な連携・スピード感" }
            ].map((row, i) => (
              <tr key={i} className="group transition-colors hover:bg-zinc-50/50">
                <td className="p-6 border border-zinc-100 font-bold text-[#373d43] bg-zinc-50/30 text-sm">{row.label}</td>
                <td className="p-6 border border-zinc-100 text-center text-zinc-400 text-sm">{row.normal}</td>
                <td className="p-6 border border-zinc-200 text-center font-bold text-[#1a1a1a] bg-white shadow-[0_0_40px_rgba(0,0,0,0.03)] z-10 text-sm">{row.sync}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="processo" className="py-24 bg-zinc-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-[#8edce0] font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">Step of Launch</span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight tracking-tight">運用開始までの<span className="text-[#8edce0]">5つのプロセス</span></h2>
        <p className="text-zinc-500 font-medium">最短2週間で、貴社のSNSを強力な営業拠点へと変革させます。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 overflow-hidden">
        {[
          { step: "01", title: "詳細ヒアリング", desc: "貴社の強み、営業上の課題、競合状況を深掘りします。", icon: <Users className="w-5 h-5" /> },
          { step: "02", title: "運用戦略の策定", desc: "KPI設定、ターゲット分析を行い、勝てるロードマップを作成。", icon: <PieChart className="w-5 h-5" /> },
          { step: "03", title: "クリエイティブ制作", desc: "B2Bに特化した高品質なバナー、動画をプロが制作。", icon: <Camera className="w-5 h-5" /> },
          { step: "04", title: "SNS運用開始", desc: "最適な投稿時間、ハッシュタグ戦略で運用をスタート。", icon: <Zap className="w-5 h-5" /> },
          { step: "05", title: "検証と改善報告", desc: "月次レポートに基づき、次月の最大化施策を提案。", icon: <BarChart3 className="w-5 h-5" /> }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm relative group hover:shadow-xl hover:shadow-[#8edce0]/5 transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center text-[#8edce0] mb-6 group-hover:bg-[#1a1a1a] group-hover:text-[#8edce0] transition-all">
                {item.icon}
              </div>
              <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2 block">Step {item.step}</span>
              <h4 className="text-[#373d43] font-bold text-lg mb-4 tracking-tight leading-tight">{item.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed mt-auto">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => {
  const LINE_LINK = "https://lin.ee/UwOZ7ho";
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8edce0]/10 blur-[120px] rounded-full -z-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#1a1a1a] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border border-white/5">
          <span className="text-[#8edce0] font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Next Step</span>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
            次は貴社のSNSを、<br />
            <span className="text-[#8edce0]">最強の営業資産</span>へ。
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            現状の課題分析、競合調査、そして売上に直結する戦略提案まで。<br />
            SYNC2が貴社のパートナーとして並走します。
          </p>
          <div className="flex flex-col items-center gap-6">
            <a 
              href={LINE_LINK}
              className="w-full md:w-auto bg-[#8edce0] hover:bg-[#7bc8cc] text-[#1a1a1a] px-12 py-6 rounded-full text-xl font-bold transition-all shadow-xl shadow-[#8edce0]/30 flex items-center justify-center gap-4 active:scale-95 group"
            >
              無料相談・診断（今すぐLINEで送信）
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-2xl">無料</span>
                <span className="text-zinc-500 text-[10px]">相談費用</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-2xl">24h</span>
                <span className="text-zinc-500 text-[10px]">受付時間</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-2xl">100+</span>
                <span className="text-zinc-500 text-[10px]">支援実績</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="pt-12 pb-8 bg-white border-t border-zinc-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-12">
        <div className="space-y-4">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 flex items-center justify-center overflow-hidden rounded-md transition-transform group-hover:scale-110">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-[#373d43]" />
                <div className="w-1/2 h-full bg-[#8edce0]" />
              </div>
              <div className="relative w-2.5 h-2.5 bg-white rotate-45 z-10" />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#1a1a1a]">SYNC2</span>
          </Link>
          <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs">
            B2B特化の戦略的SNS運用で、貴社のブランド価値を最大化します。
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-[#8edce0] hover:border-[#8edce0] transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
          <div>
            <h4 className="text-[#1a1a1a] font-bold text-[10px] uppercase tracking-widest mb-4">SNS Strategies</h4>
            <ul className="space-y-2">
              {Object.entries(SNS_DATA).slice(0, 5).map(([slug, sns]) => (
                <li key={slug}>
                  <Link to={`/sns/${slug}`} className="text-zinc-500 hover:text-[#8edce0] text-xs transition-colors truncate block">
                    {sns.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#1a1a1a] font-bold text-[10px] uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2">
              {['課題分析', '戦略設計', '制作', '代行', 'レポート'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-[#8edce0] text-xs transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <a 
            href="https://lin.ee/UwOZ7ho"
            className="flex items-center justify-between gap-2 bg-zinc-50 border border-zinc-100 p-4 rounded-xl hover:bg-zinc-100 transition-all group"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 uppercase font-bold mb-1">Free Consultation</span>
              <span className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#8edce0]">LINEで相談する</span>
            </div>
            <div className="w-10 h-10 bg-[#1a1a1a] text-[#8edce0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>

      <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-400 text-[10px] font-medium">
          © 2026 SYNC2. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/blog" className="text-zinc-400 hover:text-[#1a1a1a] text-[10px] font-medium transition-colors">ブログ</Link>
          <Link to="/terms" className="text-zinc-400 hover:text-[#1a1a1a] text-[10px] font-medium transition-colors">利用規約</Link>
          <Link to="/privacy" className="text-zinc-400 hover:text-[#1a1a1a] text-[10px] font-medium transition-colors">プライバシー</Link>
          <Link to="/blackbox-access" className="text-zinc-400 hover:text-[#1a1a1a] text-[10px] font-medium transition-colors">BLACKBOX</Link>
        </div>
      </div>
    </div>
  </footer>
);

const DigitalTipsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(DIGITAL_TIPS[0]);

  const showRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * DIGITAL_TIPS.length);
    setCurrentTip(DIGITAL_TIPS[randomIndex]);
    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-18 right-0 w-[calc(100vw-2rem)] max-w-[320px] bg-white border border-zinc-100 rounded-3xl shadow-2xl p-6 overflow-hidden md:w-[320px]"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-[#8edce0]/10 rounded-full flex items-center justify-center">
                  <Zap className="text-[#8edce0] w-5 h-5" />
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <h3 className="text-[#1a1a1a] font-bold text-lg mb-3">今日の成長ヒント</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-medium">
                「{currentTip}」
              </p>
              
              <button
                onClick={() => {
                  const otherTips = DIGITAL_TIPS.filter(t => t !== currentTip);
                  setCurrentTip(otherTips[Math.floor(Math.random() * otherTips.length)]);
                }}
                className="w-full bg-[#8edce0] hover:bg-[#7bc8cc] text-[#1a1a1a] font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                別のヒントを見る
              </button>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#8edce0]/5 rounded-full blur-3xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={showRandomTip}
        className="w-16 h-16 bg-[#1a1a1a] hover:bg-[#373d43] text-[#8edce0] rounded-full flex flex-col items-center justify-center shadow-2xl transition-all hover:scale-110 group relative"
      >
        <Zap className="w-6 h-6 mb-1 group-hover:animate-pulse" />
        <span className="text-[10px] font-bold tracking-tighter uppercase">Tips</span>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white border border-zinc-100 px-3 py-1.5 rounded-lg text-[10px] font-bold text-[#1a1a1a] shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            ビジネスのヒントを見る
          </div>
        )}
      </button>
    </div>
  );
};


const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#8edce0] transition-colors text-sm font-bold mb-12 group">
        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>トップページへ戻る</span>
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12">{title}</h1>
      <div className="prose prose-zinc max-w-none prose-headings:text-[#1a1a1a] prose-headings:font-bold prose-p:text-zinc-600 prose-p:leading-relaxed prose-li:text-zinc-600">
        {children}
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <LegalLayout title="プライバシーポリシー">
    <p>SYNC2（以下、「当社」といいます。）は、当社の提供するサービス（https://sync2.agency/ におけるサービスを含み、以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第1条（個人情報の定義）</h2>
    <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、および容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別符号）を指します。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第2条（個人情報の収集方法）</h2>
    <p>当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。）などから収集することがあります。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第3条（個人情報を収集・利用する目的）</h2>
    <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
    <ol className="list-decimal pl-6 space-y-2">
      <li>当社サービスの提供・運営のため</li>
      <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
      <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
      <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
      <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
      <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
      <li>上記の利用目的に付随する目的</li>
    </ol>

    <h2 className="text-xl font-bold mt-8 mb-4">第4条（利用目的の変更）</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
      <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
    </ol>

    <h2 className="text-xl font-bold mt-8 mb-4">第5条（個人情報の第三者提供）</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
          <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
          <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
          <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
        </ul>
      </li>
      <li>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
          <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
          <li>個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いているとき</li>
        </ul>
      </li>
    </ol>

    <h2 className="text-xl font-bold mt-8 mb-4">第6条（Cookie（クッキー）等の使用）</h2>
    <p>当社は、サービスの向上や、広告の配信、および行動履歴・属性情報の収集のためにCookie（クッキー）を使用しています。このデータは匿名で収集されており、個人を特定するものではありません。ブラウザの設定によりCookieを無効にすることで収集を拒否することが可能です。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第7条（個人情報の開示・訂正・利用停止等）</h2>
    <p>当社は、本人から個人情報の開示、訂正、追加、削除、利用停止等を求められたときは、本人確認を行った上で、遅滞なくこれに対応します。ただし、法令に基づき対応の義務を負わない場合は、この限りではありません。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第8条（お問い合わせ窓口）</h2>
    <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
    <p className="mt-2 text-zinc-650">
      会社名：SYNC2<br />
      担当部署：プライバシーポリシー管理担当<br />
      Eメールアドレス：contact@sync2.agency
    </p>

    <h2 className="text-xl font-bold mt-8 mb-4">第9条（プライバシーポリシーの変更）</h2>
    <p>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</p>

    <p className="mt-12 text-zinc-400 text-sm">【制定日・改定日】<br />制定日：2026年4月15日</p>
  </LegalLayout>
);

const useSeoMeta = (pageKey: string, defaultTitle: string, defaultDesc: string) => {
  const [seo, setSeo] = useState({ title: defaultTitle, description: defaultDesc, keywords: "" });

  useEffect(() => {
    const loadedSeo = localStorage.getItem('sync2_seo_config');
    if (loadedSeo) {
      try {
        const config = JSON.parse(loadedSeo);
        if (config[pageKey]) {
          setSeo({
            title: config[pageKey].title || defaultTitle,
            description: config[pageKey].desc || defaultDesc,
            keywords: config[pageKey].keywords || ""
          });
        }
      } catch (e) {}
    }
  }, [pageKey, defaultTitle, defaultDesc]);

  return seo;
};

const TermsPage = () => (
  <LegalLayout title="利用規約">
    <p>この利用規約（以下、「本規約」といいます。）は、SYNC2（以下、「当社」といいます。）がウェブサイト（https://sync2.agency/）上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスをご利用になる方（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第1条（適用）</h2>
    <p>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第2条（禁止事項）</h2>
    <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>法令または公序良俗に違反する行為</li>
      <li>犯罪行為に関連する行為</li>
      <li>当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
      <li>当社のサービスの運営を妨害するおそれのある行為</li>
      <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
      <li>不正アクセスをし、またはこれを試みる行為</li>
      <li>他のユーザーに成りすます行為</li>
      <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
      <li>当社、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
      <li>その他、当社が不適切と判断する行為</li>
    </ul>

    <h2 className="text-xl font-bold mt-8 mb-4">第3条（本サービスの提供の停止等）</h2>
    <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
      <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
      <li>コンピュータまたは通信回線等が事故により停止した場合</li>
      <li>その他、当社が本サービスの提供が困難と判断した場合</li>
    </ul>
    <p className="mt-4">当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第4条（著作権等の知的財産権）</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権は、すべて当社または当社にその利用を許諾した権利者に帰属します。</li>
      <li>ユーザーは、無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信、配布、出版、営業使用等をしてはならないものとします。</li>
    </ol>

    <h2 className="text-xl font-bold mt-8 mb-4">第5条（免責事項）</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
      <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</li>
      <li>前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。</li>
    </ol>

    <h2 className="text-xl font-bold mt-8 mb-4">第6条（サービス内容の変更等）</h2>
    <p>当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第7条（利用規約の変更）</h2>
    <p>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第8条（個人情報の取扱い）</h2>
    <p>当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第9条（通知または連絡）</h2>
    <p>ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されています連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第10条（権利義務の譲渡の禁止）</h2>
    <p>ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利若しくは義務を第三者に譲渡し、または担保に供することはできません。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第11条（準拠法・裁判管轄）</h2>
    <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>

    <p className="mt-12 text-zinc-400 text-sm">【制定日・改定日】<br />制定日：2026年4月15日</p>
  </LegalLayout>
);

const BlackboxAccessPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passError, setPassError] = useState("");
  const [activeTab, setActiveTab] = useState<'blog' | 'leads' | 'docs' | 'cashflow' | 'seo'>('blog');
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [leadSearch, setLeadSearch] = useState("");
  const [docs, setDocs] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showDocForm, setShowDocForm] = useState(false);
  const [showTxForm, setShowTxForm] = useState(false);
  
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  // Custom PDF states
  const [pdfInfo, setPdfInfo] = useState<{ name: string; size: string; date: string }>({
    name: localStorage.getItem('sync2_pdf_name') || "",
    size: localStorage.getItem('sync2_pdf_size') || "",
    date: localStorage.getItem('sync2_pdf_date') || ""
  });

  const [newPost, setNewPost] = useState<{
    id: string;
    title: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    summary: string;
    image: string;
    content: { emoji: string; sectionTitle: string; paragraphs: string[] }[];
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
    scheduledDate: string;
    isPublished: boolean;
  }>({
    id: "",
    title: "",
    category: "SNSマーケティング",
    date: "",
    author: "SYNC2 編集部",
    readTime: "5分",
    summary: "",
    image: "https://picsum.photos/seed/sync2-blog/800/500",
    content: [
      { emoji: "🚀", sectionTitle: "導入・背景", paragraphs: [] },
      { emoji: "🔥", sectionTitle: "本質と実践メカニズム", paragraphs: [] },
      { emoji: "⚙️", sectionTitle: "これからの展開と導入ステップ", paragraphs: [] }
    ],
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    scheduledDate: "",
    isPublished: true
  });

  // State for transaction register form
  const [txForm, setTxForm] = useState({
    date: new Date().toISOString().split('T')[0],
    type: 'income',
    category: '売上',
    amount: 100000,
    description: ''
  });

  // Document states
  const [docForm, setDocForm] = useState<{
    id: string;
    docType: 'estimate' | 'invoice';
    docNumber: string;
    recipient: string;
    sender: string;
    issueDate: string;
    dueDate: string;
    taxRate: number;
    memo: string;
    items: { id: string; name: string; price: number; qty: number }[];
  }>({
    id: "",
    docType: "estimate",
    docNumber: "",
    recipient: "",
    sender: "SYNC2 経営管理部",
    issueDate: "",
    dueDate: "",
    taxRate: 0.10,
    memo: "【振込先口座案内】\nGMOあおぞらネット銀行 法人営業部\n普通 1234567\nカ)シンクツー",
    items: []
  });

  const [tempItemName, setTempItemName] = useState("");
  const [tempItemPrice, setTempItemPrice] = useState(0);
  const [tempItemQty, setTempItemQty] = useState(1);
  const [viewingDoc, setViewingDoc] = useState<any | null>(null);

  const [selectedSeoPage, setSelectedSeoPage] = useState<string>('home');
  const [seoConfig, setSeoConfig] = useState<Record<string, { title: string; desc: string; keywords: string }>>({
    home: {
      title: "SYNC2 B2B TECHNOLOGY AGENCY",
      desc: "SYNC2は、経営・SNSマーケティング・システム開発プロセスを完全同期するB2B特化のテクノロジーエージェンシーです。",
      keywords: "B2B, マーケティング, AI開発, システム開発"
    },
    sns: {
      title: "SYNC2 | SNSショート動画マーケティング集客",
      desc: "縦型動画クリエイティブと高密度アカウントプランで、新規リード獲得単価を最小化する戦略的SNSサービス。",
      keywords: "TikTok, Instagram, ショート動画, B2Bマーケティング"
    },
    dev: {
      title: "SYNC2 | アプリ・AIシステム開発 & 設計",
      desc: "最先端Gemini APIや高度API統合を活用。顧客対応から商談予約、業務自動化、基幹システムとのスマート同期まで構築。",
      keywords: "AI開発, システム開発, LINE自動化, 業務DX"
    },
    blog: {
      title: "SYNC2 INSIGHTS | ブログ & 最新トレンドナレッジ",
      desc: "SYNC2がお届けする、SNSマーケティングや最新AIシステム開発に関する価値ある戦略的ノウハウ集。",
      keywords: "ブログ, デジタルマーケティング, ナレッジシェア, 企業DX"
    }
  });

  // Load state values from LocalStorage inside useEffect on mounted node
  useEffect(() => {
    // Load blog posts from local storage
    const loadedPosts = localStorage.getItem('sync2_blog_posts');
    if (loadedPosts) {
      try {
        setBlogPosts(JSON.parse(loadedPosts));
      } catch (e) {
        setBlogPosts(BLOG_POSTS);
      }
    } else {
      setBlogPosts(BLOG_POSTS);
    }

    // Load leads
    const loadedLeads = localStorage.getItem('sync2_leads');
    if (loadedLeads) {
      try {
        setLeads(JSON.parse(loadedLeads));
      } catch (e) {}
    }

    // Load docs (estimates & invoices)
    const loadedDocs = localStorage.getItem('sync2_docs');
    if (loadedDocs) {
      try {
        setDocs(JSON.parse(loadedDocs));
      } catch (e) {}
    }

    // Load financial transactions
    const loadedTxs = localStorage.getItem('sync2_transactions');
    if (loadedTxs) {
      try {
        setTransactions(JSON.parse(loadedTxs));
      } catch (e) {}
    }

    // Load custom SEO Configs
    const loadedSeo = localStorage.getItem('sync2_seo_config');
    if (loadedSeo) {
      try {
        setSeoConfig(JSON.parse(loadedSeo));
      } catch (e) {}
    }
  }, []);

  // Calculate dynamic outputs
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const netProfit = totalIncome - totalExpense;

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "sync2admin") {
      setIsAuthenticated(true);
      setPassError("");
    } else {
      setPassError("無効なパスコードキーです。");
    }
  };

  const handleEditBlogClick = (post: BlogPost) => {
    setEditingPost(post);
    setNewPost({
      id: post.id,
      title: post.title,
      category: post.category,
      date: post.date,
      author: post.author,
      readTime: post.readTime,
      summary: post.summary,
      image: post.image,
      content: post.content || [
        { emoji: "🚀", sectionTitle: "導入・背景", paragraphs: [] },
        { emoji: "🔥", sectionTitle: "本質と実践メカニズム", paragraphs: [] },
        { emoji: "⚙️", sectionTitle: "これからの展開と導入ステップ", paragraphs: [] }
      ],
      seoTitle: post.seoTitle || "",
      seoDescription: post.seoDescription || "",
      seoKeywords: post.seoKeywords || "",
      scheduledDate: post.scheduledDate || "",
      isPublished: post.isPublished !== false
    });
    setShowBlogForm(true);
  };

  const handleAddItemToDoc = () => {
    if (!tempItemName.trim()) return;
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: tempItemName.trim(),
      price: tempItemPrice,
      qty: tempItemQty
    };
    setDocForm(prev => ({
      ...prev,
      items: [...(prev.items || []), newItem]
    }));
    setTempItemName("");
    setTempItemPrice(0);
    setTempItemQty(1);
  };

  const handleRemoveItemFromDoc = (itemId: string) => {
    setDocForm(prev => ({
      ...prev,
      items: (prev.items || []).filter(item => item.id !== itemId)
    }));
  };

  const handleSaveDoc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docForm.recipient || !docForm.docNumber) {
      alert("宛先及び帳票番号は必須入力です。");
      return;
    }
    const docObj = {
      ...docForm,
      id: docForm.id || Math.random().toString(36).substring(2, 9)
    };
    let updatedDocs;
    if (docForm.id) {
      updatedDocs = docs.map(d => d.id === docForm.id ? docObj : d);
    } else {
      updatedDocs = [docObj, ...docs];
    }
    setDocs(updatedDocs);
    localStorage.setItem('sync2_docs', JSON.stringify(updatedDocs));
    setShowDocForm(false);
    // Reset form
    setDocForm({
      id: "",
      docType: "estimate",
      docNumber: "",
      recipient: "",
      sender: "SYNC2 経営管理部",
      issueDate: "",
      dueDate: "",
      taxRate: 0.10,
      memo: "【振込先口座案内】\nGMOあおぞらネット銀行 法人営業部\n普通 1234567\nカ)シンクツー",
      items: []
    });
  };

  const handleEditDocClick = (doc: any) => {
    setDocForm(doc);
    setShowDocForm(true);
  };

  const handleUpdateSeo = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('sync2_seo_config', JSON.stringify(seoConfig));
    alert(`${selectedSeoPage.toUpperCase()} のSEOメタ設定を更新保存しました。`);
  };

  const updateSelectedSeoField = (field: 'title' | 'desc' | 'keywords', value: string) => {
    setSeoConfig(prev => ({
      ...prev,
      [selectedSeoPage]: {
        ...prev[selectedSeoPage],
        [field]: value
      }
    }));
  };

  const handleAddTransaction = (e: React.FormEvent) => {
    handleAddTx(e);
  };

  const handleDeleteDoc = (id: string) => {
    if (window.confirm("この書類を削除してもよろしいですか？")) {
      const updated = docs.filter(d => d.id !== id);
      setDocs(updated);
      localStorage.setItem('sync2_docs', JSON.stringify(updated));
    }
  };

  const handleDeleteTx = (id: string) => {
    if (window.confirm("この取引を削除してもよろしいですか？")) {
      const updated = transactions.filter(t => t.id !== id);
      setTransactions(updated);
      localStorage.setItem('sync2_transactions', JSON.stringify(updated));
    }
  };

  const handleDeleteBlog = (id: string) => {
    if (window.confirm("このブログ記事を完全に削除してよろしいですか？")) {
      const updated = blogPosts.filter(p => p.id !== id);
      setBlogPosts(updated);
      localStorage.setItem('sync2_blog_posts', JSON.stringify(updated));
    }
  };

  const handleAddNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.id) {
       alert("記事ID(Slug)と記事タイトルは必須入力です。");
       return;
    }

    const postObj: BlogPost = {
      id: newPost.id.trim(),
      title: newPost.title,
      category: newPost.category,
      date: newPost.date || new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      author: newPost.author,
      readTime: newPost.readTime,
      summary: newPost.summary,
      image: newPost.image || "https://picsum.photos/seed/sync2-blog/800/500",
      content: newPost.content,
      seoTitle: newPost.seoTitle,
      seoDescription: newPost.seoDescription,
      seoKeywords: newPost.seoKeywords,
      scheduledDate: newPost.scheduledDate,
      isPublished: newPost.isPublished
    };

    let updatedPosts;
    if (editingPost) {
      updatedPosts = blogPosts.map(p => p.id === editingPost.id ? postObj : p);
    } else {
      if (blogPosts.some(p => p.id === postObj.id)) {
        alert("その記事ID(Slug)は既に使用されています。ユニークなIDを指定してください。");
        return;
      }
      updatedPosts = [postObj, ...blogPosts];
    }

    setBlogPosts(updatedPosts);
    localStorage.setItem('sync2_blog_posts', JSON.stringify(updatedPosts));
    setShowBlogForm(false);
    setEditingPost(null);
    setNewPost({
      id: "",
      title: "",
      category: "SNSマーケティング",
      date: "",
      author: "SYNC2 編集部",
      readTime: "5分",
      summary: "",
      image: "https://picsum.photos/seed/sync2-blog/800/500",
      content: [
         { emoji: "🚀", sectionTitle: "導入・背景", paragraphs: [] },
         { emoji: "🔥", sectionTitle: "本質と実践メカニズム", paragraphs: [] },
         { emoji: "⚙️", sectionTitle: "これからの展開と導入ステップ", paragraphs: [] }
      ],
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
      scheduledDate: "",
      isPublished: true
    });
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("PDFファイルのみ選択可能です。");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64Data = result.split(',')[1];
      const sizeStr = (file.size / (1024 * 1024)).toFixed(2) + " MB";
      const dateStr = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/-/g, '.');

      localStorage.setItem('sync2_pdf_data', base64Data);
      localStorage.setItem('sync2_pdf_name', file.name);
      localStorage.setItem('sync2_pdf_size', sizeStr);
      localStorage.setItem('sync2_pdf_date', dateStr);

      setPdfInfo({ name: file.name, size: sizeStr, date: dateStr });
      alert("配布用PDFファイルを正常にアップデートしました。LP側フォームの申請者は即時にこの新しいPDFをダウンロード可能です。");
    };
    reader.readAsDataURL(file);
  };

  const handlePdfDelete = () => {
    if (window.confirm("独自アップロードしたPDFを削除し、システム内蔵のデフォルトPDFに戻しますか？")) {
      localStorage.removeItem('sync2_pdf_data');
      localStorage.removeItem('sync2_pdf_name');
      localStorage.removeItem('sync2_pdf_size');
      localStorage.removeItem('sync2_pdf_date');
      setPdfInfo({ name: "", size: "", date: "" });
    }
  };

  const handleDeleteLead = (id: string) => {
    if (window.confirm("このリード情報を削除してよろしいですか？")) {
      const filtered = leads.filter(l => l.id !== id);
      setLeads(filtered);
      localStorage.setItem('sync2_leads', JSON.stringify(filtered));
    }
  };

  const handleClearAllLeads = () => {
    if (window.confirm("すべてのリード個人情報を物理削除してよろしいですか？（復元できません）")) {
      setLeads([]);
      localStorage.removeItem('sync2_leads');
    }
  };

  const exportLeadsCSV = () => {
    let csv = "申請日時,企業名,ご担当者氏名,メールアドレス\n";
    leads.forEach(l => {
      csv += `"${l.date} ${l.time}","${l.company}","${l.name}","${l.email}"\n`;
    });
    
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SYNC2_Leads_Export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleAddTx = (e: React.FormEvent) => {
    e.preventDefault();
    const txObj = {
      id: Math.random().toString(36).substring(2, 9),
      date: txForm.date || new Date().toISOString().split('T')[0],
      type: txForm.type,
      category: txForm.category || (txForm.type === 'income' ? "売上" : "経費"),
      amount: Number(txForm.amount),
      description: txForm.description
    };
    const updatedTxs = [txObj, ...transactions].sort((a, b) => b.date.localeCompare(a.date));
    setTransactions(updatedTxs);
    localStorage.setItem('sync2_transactions', JSON.stringify(updatedTxs));
    setShowTxForm(false);
    setTxForm({
      date: "",
      type: "income",
      category: "売上",
      amount: 100000,
      description: ""
    });
  };

  // Render Authorization Shield
  if (!isAuthenticated) {
    return (
      <div className="pt-28 pb-24 bg-zinc-50 min-h-screen text-zinc-900 flex flex-col justify-center items-center px-4">
        <Helmet>
          <title>SYNC2 BLACKBOX | RESTRICTED PORTAL</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        <div className="max-w-md w-full bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8edce0]/10 blur-[60px] pointer-events-none" />

          <div className="text-center space-y-2">
            <span className="text-[9px] font-black tracking-[0.4em] text-[#307d80] uppercase font-mono">INTERNAL WORKSPACE</span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-widest flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8edce0] animate-ping" />
              <span>SYNC2 BLACKBOX</span>
            </h2>
            <p className="text-[10px] text-zinc-500 max-w-xs mx-auto leading-relaxed">
              本ページはSYNC2社インサイドチーム専用の管理ノードです。外部の自動クローラおよび一般ユーザーのアクセスは拒否されます。
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 font-mono">SECURE KEYPASS</label>
              <input 
                type="password" 
                placeholder="•••••••" 
                className="w-full h-12 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-[#8edce0]/40 focus:border-[#8edce0] px-4 text-center text-sm font-mono tracking-widest text-zinc-800"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
              {passError && (
                <p className="text-xs text-red-500 text-center font-bold">{passError}</p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full h-12 bg-[#8edce0] hover:bg-teal-450 text-zinc-950 rounded-xl font-black text-[11px] tracking-widest uppercase transition-all cursor-pointer shadow-sm"
            >
              ノードを承認・接続する
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Inner Connected Dashboard
  return (
    <div className="pt-28 pb-20 bg-zinc-50 min-h-screen text-zinc-800 font-sans">
      <Helmet>
        <title>SYNC2 BLACKBOX | SECURE CONTROL NODE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Navigation Tabs Header */}
        <div className="bg-white border border-zinc-200 rounded-[2rem] p-4 mb-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#8edce0]/10 flex items-center justify-center text-[#307d80]">
              <ShieldCheck className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-sm font-black tracking-widest text-zinc-900 font-mono uppercase">Blackbox Control Node</h1>
              <p className="text-[9px] text-zinc-400 font-mono tracking-tight uppercase">Operational Status: Online & Synchronized</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 font-sans font-bold text-xs select-none">
            {[
              { id: 'blog', label: 'ブログ管理', icon: <BookOpen className="w-3.5 h-3.5" /> },
              { id: 'leads', label: 'リード個人情報', icon: <Users className="w-3.5 h-3.5" /> },
              { id: 'docs', label: 'ピッチ・見積・請求書', icon: <FileText className="w-3.5 h-3.5" /> },
              { id: 'cashflow', label: '収支シミュレータ', icon: <Wallet className="w-3.5 h-3.5" /> },
              { id: 'seo', label: 'SEOメタ構成', icon: <Settings className="w-3.5 h-3.5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setShowBlogForm(false);
                  setShowDocForm(false);
                  setShowTxForm(false);
                }}
                className={`px-4 h-10 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1a1a1a] text-[#8edce0] shadow-md'
                    : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
            <button 
              onClick={() => {
                setIsAuthenticated(false);
                setPasscode("");
                localStorage.removeItem('sync2_auth');
              }}
              className="px-4 h-10 rounded-xl bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ml-4"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>ログアウト</span>
            </button>
          </div>
        </div>

        {/* Content Body Modules */}
        <div className="space-y-6">
          
          {/* 1. BLOG MODULE */}
          {activeTab === 'blog' && (
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-zinc-150 pb-4">
                <h3 className="text-sm font-extrabold text-zinc-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                  <span>ブログ記事一覧・記事作成編集</span>
                </h3>
                {!showBlogForm && (
                  <button
                    onClick={() => {
                      setNewPost({
                        id: Math.random().toString(36).substring(2, 9),
                        title: "",
                        category: "SNSマーケティング",
                        date: new Date().toLocaleDateString('ja-JP').replace(/\//g, '.'),
                        author: "SYNC2 編集部",
                        readTime: "5分",
                        summary: "",
                        image: "https://picsum.photos/seed/sync2-blog/800/500",
                        content: [
                          { emoji: "🚀", sectionTitle: "導入・背景", paragraphs: [] },
                          { emoji: "🔥", sectionTitle: "本質と実践メカニズム", paragraphs: [] },
                          { emoji: "⚙️", sectionTitle: "これからの展開と導入ステップ", paragraphs: [] }
                        ],
                        seoTitle: "",
                        seoDescription: "",
                        seoKeywords: "",
                        scheduledDate: "",
                        isPublished: true
                      });
                      setShowBlogForm(true);
                      setEditingPost(null);
                    }}
                    className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-1 cursor-pointer transition-all shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>記事を新規作成</span>
                  </button>
                )}
              </div>

              {showBlogForm ? (
                <form onSubmit={handleAddNewPost} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">記事カテゴリ</label>
                      <select 
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700 font-bold"
                        value={newPost.category}
                        onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      >
                        <option value="SNSマーケティング">SNSマーケティング</option>
                        <option value="B2B営業・リード獲得">B2B営業・リード獲得</option>
                        <option value="SNS運用代行サービス">SNS運用代行サービス</option>
                        <option value="AI・システム開発">AI・システム開発</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">記事ID（Slug・英語・URL用）</label>
                      <input 
                        required
                        type="text"
                        placeholder="sns-marketing-trends"
                        disabled={editingPost !== null}
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-900 font-bold font-mono disabled:opacity-40"
                        value={newPost.id}
                        onChange={(e) => setNewPost({ ...newPost, id: e.target.value.replace(/[^a-zA-Z0-9-]/g, '') })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">記事タイトル</label>
                    <input 
                      required
                      type="text"
                      placeholder="15秒で決裁者を虜にする超短尺クリエイティブ撮影"
                      className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-900 font-bold"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">執筆日</label>
                      <input 
                        type="text"
                        placeholder="2026.06.08"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700 font-mono"
                        value={newPost.date}
                        onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">想定読了時間</label>
                      <input 
                        type="text"
                        placeholder="5分"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700"
                        value={newPost.readTime}
                        onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">著者署名</label>
                      <input 
                        type="text"
                        placeholder="SYNC2 編集部"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700"
                        value={newPost.author}
                        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">アイキャッチ画像URL</label>
                    <input 
                      type="text"
                      placeholder="https://picsum.photos/seed/sync2-blog/800/500"
                      className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-650 font-mono"
                      value={newPost.image}
                      onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">要約/サマリー(カード紹介文)</label>
                    <textarea 
                      rows={2}
                      placeholder="リード文及びサマリー。詳細ページに入る前に読まれる短い紹介文です。"
                      className="w-full p-3 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] text-xs text-zinc-700 leading-relaxed resize-none"
                      value={newPost.summary}
                      onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })}
                    />
                  </div>

                  {/* Sections list */}
                  <div className="space-y-3.5 border-t border-zinc-200 pt-4">
                    <h4 className="text-[10px] font-black text-[#307c80] uppercase tracking-widest font-mono">📖 本文セクション構成（3章構成）</h4>
                    {newPost.content?.map((sec, sIdx) => (
                      <div key={sIdx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-3">
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="🚀" 
                            className="w-10 h-10 text-center bg-white border border-zinc-200 rounded-lg text-sm"
                            value={sec.emoji}
                            onChange={(e) => {
                              const content = [...(newPost.content || [])];
                              content[sIdx] = { ...sec, emoji: e.target.value };
                              setNewPost({ ...newPost, content });
                            }}
                          />
                          <input 
                            type="text" 
                            placeholder={`第${sIdx + 1}章：見出し`} 
                            className="flex-1 h-10 px-3 bg-white border border-zinc-200 rounded-lg text-xs font-bold text-zinc-800 outline-none focus:border-[#8edce0]"
                            value={sec.sectionTitle}
                            onChange={(e) => {
                              const content = [...(newPost.content || [])];
                              content[sIdx] = { ...sec, sectionTitle: e.target.value };
                              setNewPost({ ...newPost, content });
                            }}
                          />
                        </div>
                        <textarea 
                          rows={4}
                          placeholder="段落文章を入力（改行でパラグラフが追加されます）"
                          className="w-full p-2.5 bg-white border border-zinc-200 rounded-lg text-[11px] text-zinc-700 outline-none focus:border-[#8edce0] leading-relaxed resize-none"
                          value={sec.paragraphs.join("\n")}
                          onChange={(e) => {
                            const content = [...(newPost.content || [])];
                            content[sIdx] = { ...sec, paragraphs: e.target.value.split("\n") };
                            setNewPost({ ...newPost, content });
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-zinc-150">
                    <button 
                      type="button" 
                      onClick={() => {
                        setShowBlogForm(false);
                        setEditingPost(null);
                      }}
                      className="h-10 px-4 rounded-xl bg-zinc-100 text-xs font-bold text-zinc-650 hover:bg-zinc-200 hover:text-zinc-900 cursor-pointer transition-colors"
                    >
                      キャンセル
                    </button>
                    <button 
                      type="submit" 
                      className="h-10 px-6 rounded-xl bg-[#8edce0] hover:bg-teal-400 text-zinc-900 text-xs font-black tracking-widest inline-flex items-center gap-1.5 cursor-pointer shadow-sm transition-colors animate-pulse"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{editingPost ? "記事を更新保存" : "新しい記事を公開"}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-3">
                  {blogPosts.length === 0 ? (
                    <div className="text-center py-12 bg-zinc-50 border border-zinc-200 rounded-2xl">
                      <p className="text-zinc-500 text-xs text-zinc-400">登録されているブログ記事はありません。</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      {blogPosts.map(post => (
                        <div 
                          key={post.id}
                          className="p-4 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                        >
                          <div className="flex gap-3 items-center">
                            <div className="w-16 h-12 bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-200">
                              <img src={post.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="px-2 py-0.5 bg-[#8edce0]/10 text-[#307d80] rounded text-[8px] font-black tracking-wider uppercase font-mono">
                                  {post.category}
                                </span>
                                <span className="text-[10px] text-zinc-450 font-mono">{post.date}</span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900">{post.title}</h4>
                              <p className="text-[10px] text-zinc-400 font-mono">slug: /blog/{post.id}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <button 
                              onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                              className="h-9 px-3 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 rounded-lg text-xs font-bold text-zinc-600 cursor-pointer"
                            >
                              表示
                            </button>
                            <button 
                              onClick={() => handleEditBlogClick(post)}
                              className="h-9 px-3 bg-zinc-50 border border-zinc-200 hover:bg-[#8edce0]/10 hover:text-[#2d7679] hover:border-[#8edce0]/40 rounded-lg text-xs font-bold text-zinc-650 inline-flex items-center gap-1 cursor-pointer"
                            >
                              <Edit className="w-3 h-3" />
                              <span>編集</span>
                            </button>
                            <button 
                              onClick={() => handleDeleteBlog(post.id)}
                              className="h-9 w-9 bg-zinc-50 hover:bg-red-50 hover:border-red-200 hover:text-red-500 text-zinc-400 border border-zinc-200 rounded-lg flex items-center justify-center cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 2. LEADS MODULE */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
                <div>
                  <h3 className="text-sm font-extrabold text-zinc-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                    <span>資料・ホワイトペーパー請求者リード台帳</span>
                  </h3>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                    無料プレゼント用ホワイトペーパーをいつでも入れ替え、ダウンロード申請があった顧客リード名簿をCSV取得可能です。
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button 
                    onClick={exportLeadsCSV}
                    disabled={leads.length === 0}
                    className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 h-10 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>CSVダウンロード</span>
                  </button>
                  <button 
                    onClick={handleClearAllLeads}
                    disabled={leads.length === 0}
                    className="bg-transparent hover:bg-red-50 hover:border-red-200 text-zinc-500 hover:text-red-500 border border-zinc-200 px-3 h-10 rounded-xl text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    一括クリア
                  </button>
                </div>
              </div>

              {/* PDF uploader card requested by user */}
              <div className="bg-white border border-zinc-200 p-6 rounded-2xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-[#307c80] uppercase block font-mono">■ 無料ホワイトペーパープレゼント用PDF管理</span>
                  {pdfInfo.name && (
                    <button 
                      onClick={handlePdfDelete}
                      className="text-[10px] text-red-500 hover:text-red-700 font-bold border border-red-200 hover:bg-red-50 px-2 py-1 rounded transition-all cursor-pointer"
                    >
                      独自PDFを削除してデフォルトに戻す
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-dashed border-zinc-250 rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
                    <Upload className="w-7 h-7 text-zinc-400" />
                    <div className="space-y-1">
                      <p className="text-xs font-extrabold text-zinc-800">新しいホワイトペーパー (PDF) を選択する</p>
                      <p className="text-[10px] text-zinc-400">※最大 20MB / 形式: PDFファイルのみ</p>
                    </div>
                    <label className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition-colors shadow-sm inline-block select-none">
                      ファイルを選択
                      <input 
                        type="file" 
                        accept="application/pdf" 
                        onChange={handlePdfUpload} 
                        className="hidden" 
                      />
                    </label>
                  </div>

                  <div className="p-5 bg-teal-50/20 rounded-xl border border-teal-100 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold text-[#307c80] uppercase tracking-wider block font-mono">現在LPで配信中のホワイトペーパー</span>
                      {pdfInfo.name ? (
                        <div className="space-y-1">
                          <p className="text-xs font-black text-zinc-800 line-clamp-1">{pdfInfo.name}</p>
                          <p className="text-[10px] text-zinc-505 font-mono">ファイルサイズ: {pdfInfo.size} / 更新日: {pdfInfo.date}</p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-xs text-zinc-600 font-bold italic">システム標準レポートが配信されています</p>
                          <p className="text-[10px] text-zinc-400 font-mono">SYNC2_B2B_SNS_Strategy_Guide_2026.pdf (内蔵レポート)</p>
                        </div>
                      )}
                    </div>
                    <p className="text-[9px] text-zinc-400 leading-normal pt-2 border-t border-teal-100/50">
                      ※ここからPDFファイルを差し替えると、LPのホワイトペーパー請求フォームを送信した閲覧者に、即時に新しいPDFがダウンロードプレゼントされます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Leads registered list */}
              <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <Search className="w-4 h-4 text-zinc-400" />
                  <input 
                    type="text" 
                    placeholder="氏名、企業名、メールアドレスでリード検索..."
                    className="flex-1 h-11 bg-zinc-50 border border-zinc-200 rounded-xl text-xs outline-none focus:ring-1 focus:ring-[#8edce0] px-3 font-semibold text-zinc-800"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                  />
                </div>

                {(() => {
                  const filteredLeads = leads.filter(l => 
                    l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
                    l.company.toLowerCase().includes(leadSearch.toLowerCase()) ||
                    l.email.toLowerCase().includes(leadSearch.toLowerCase())
                  );

                  if (filteredLeads.length === 0) {
                    return (
                      <div className="text-center py-10 bg-zinc-50 border border-zinc-150 rounded-2xl">
                        <p className="text-zinc-550 text-xs">登録されているリード請求者はいません。</p>
                      </div>
                    );
                  }

                  return (
                    <div className="overflow-hidden border border-zinc-200 rounded-xl shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 text-[9px] uppercase tracking-wider font-mono h-11">
                            <tr>
                              <th className="px-4 py-3 font-bold">申請日時</th>
                              <th className="px-4 py-3 font-bold">企業名</th>
                              <th className="px-4 py-3 font-bold">ご担当者名</th>
                              <th className="px-4 py-3 font-bold">Eメール</th>
                              <th className="px-4 py-3 text-right font-bold">操作</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-100 font-sans text-zinc-750">
                            {filteredLeads.map((lead) => (
                              <tr key={lead.id} className="hover:bg-zinc-50/50 transition-colors">
                                <td className="px-4 py-3.5 font-mono text-[10px] text-zinc-400">
                                  <span>{lead.date}</span>
                                  <span className="block text-[9px] text-zinc-405 mt-0.5">{lead.time}</span>
                                </td>
                                <td className="px-4 py-3.5 font-bold text-zinc-900">{lead.company}</td>
                                <td className="px-4 py-3.5 font-bold text-zinc-800">{lead.name}</td>
                                <td className="px-4 py-3.5 font-mono text-[11px] text-teal-605 font-bold">
                                  <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                                </td>
                                <td className="px-4 py-3.5 text-right">
                                  <button 
                                    onClick={() => handleDeleteLead(lead.id)}
                                    className="h-8 w-8 bg-zinc-50 hover:bg-red-50 hover:border-red-200 text-zinc-400 hover:text-red-550 border border-zinc-200 rounded-lg flex items-center justify-center cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* 3. DOCUMENTS MODULE (Estimates/Invoices generator) */}
          {activeTab === 'docs' && (
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-zinc-150 pb-4">
                <h3 className="text-sm font-extrabold text-zinc-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                  <span>ピッチ・見積書・請求書自動生成マスター</span>
                </h3>
                {!showDocForm && (
                  <button
                    onClick={() => {
                      setDocForm({
                        id: "",
                        docType: "estimate",
                        docNumber: "EST-2026-" + Math.floor(1000 + Math.random() * 9000),
                        recipient: "",
                        sender: "SYNC2 経営管理エージェンシー",
                        issueDate: new Date().toISOString().split('T')[0],
                        dueDate: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split('T')[0],
                        taxRate: 0.10,
                        memo: "【振込先口座案内】\nGMOあおぞらネット銀行 法人営業部\n普通 1234567\nカ)シンクツー",
                        items: []
                      });
                      setShowDocForm(true);
                    }}
                    className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-1 cursor-pointer shadow-sm transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>書類を規作成</span>
                  </button>
                )}
              </div>

              {showDocForm ? (
                <form onSubmit={handleSaveDoc} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">書類種別</label>
                      <select 
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700 font-bold"
                        value={docForm.docType}
                        onChange={(e) => setDocForm({ ...docForm, docType: e.target.value as any })}
                      >
                        <option value="estimate">見積書 (Estimate)</option>
                        <option value="invoice">請求書 (Invoice)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">書類管理番号</label>
                      <input 
                        required
                        type="text"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-800 font-bold font-mono"
                        value={docForm.docNumber}
                        onChange={(e) => setDocForm({ ...docForm, docNumber: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">消費税率設定</label>
                      <select 
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700 font-bold"
                        value={docForm.taxRate}
                        onChange={(e) => setDocForm({ ...docForm, taxRate: Number(e.target.value) })}
                      >
                        <option value="0.10">消費税 10% (標準)</option>
                        <option value="0.08">消費税 8% (軽減)</option>
                        <option value="0">消費税 0% (非課税)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">宛名・企業名</label>
                      <input 
                        required
                        type="text"
                        placeholder="ハヤブサ・テクノロジーズ合同会社 御中"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-800 font-bold"
                        value={docForm.recipient}
                        onChange={(e) => setDocForm({ ...docForm, recipient: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">発行元署名</label>
                      <input 
                        required
                        type="text"
                        placeholder="SYNC2 経営管理部"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-800 font-bold"
                        value={docForm.sender}
                        onChange={(e) => setDocForm({ ...docForm, sender: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">発行日</label>
                      <input 
                        type="date"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700"
                        value={docForm.issueDate}
                        onChange={(e) => setDocForm({ ...docForm, issueDate: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">支払または有効期限</label>
                      <input 
                        type="date"
                        className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-700"
                        value={docForm.dueDate}
                        onChange={(e) => setDocForm({ ...docForm, dueDate: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Add document item line block */}
                  <div className="border border-zinc-200 rounded-xl p-4 space-y-3 bg-zinc-50">
                    <span className="text-[9px] font-black tracking-wider text-zinc-500 block uppercase font-mono">■ 内訳明細行を追加</span>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-6 space-y-1">
                        <input 
                          type="text" 
                          placeholder="B2B SNSショート動画撮影＆クリエイティブ制作パッケージ"
                          className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs font-bold"
                          value={tempItemName}
                          onChange={(e) => setTempItemName(e.target.value)}
                        />
                      </div>
                      <div className="sm:col-span-3 space-y-1">
                        <input 
                          type="number" 
                          placeholder="単価"
                          className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs font-black font-mono text-zinc-800"
                          value={tempItemPrice || ""}
                          onChange={(e) => setTempItemPrice(Number(e.target.value))}
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1">
                        <input 
                          type="number" 
                          placeholder="数量"
                          className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs font-black text-center font-mono"
                          value={tempItemQty || ""}
                          onChange={(e) => setTempItemQty(Number(e.target.value))}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <button 
                          type="button"
                          onClick={handleAddItemToDoc}
                          className="w-full h-10 bg-[#1a1a1a] hover:bg-zinc-800 text-[#8edce0] rounded-lg text-xs font-bold flex items-center justify-center cursor-pointer"
                        >
                          追加
                        </button>
                      </div>
                    </div>

                    {/* Added lines items */}
                    {docForm.items && docForm.items.length > 0 && (
                      <div className="border-t border-zinc-205/60 pt-3 mt-2 space-y-2">
                        {docForm.items.map((line) => (
                          <div key={line.id} className="flex items-center justify-between bg-white px-3 py-2 border border-zinc-150 rounded-lg text-xs text-zinc-700">
                            <div className="flex-1 font-bold line-clamp-1">{line.name}</div>
                            <div className="flex items-center gap-4 text-right">
                              <span className="font-mono text-zinc-900 font-bold">¥{line.price.toLocaleString()} x {line.qty}</span>
                              <button 
                                type="button"
                                onClick={() => handleRemoveItemFromDoc(line.id)}
                                className="text-red-500 hover:text-red-700 text-[10px] font-bold"
                              >
                                削除
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">備考欄 / 振込口座案内</label>
                    <textarea 
                      rows={3}
                      className="w-full p-3 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] text-xs font-mono text-zinc-600 leading-relaxed font-bold"
                      value={docForm.memo}
                      onChange={(e) => setDocForm({ ...docForm, memo: e.target.value })}
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-zinc-150">
                    <button 
                      type="button" 
                      onClick={() => setShowDocForm(false)}
                      className="h-10 px-4 rounded-xl bg-zinc-100 text-xs font-bold text-zinc-650 hover:bg-zinc-200 hover:text-zinc-900 cursor-pointer transition-colors"
                    >
                      キャンセル
                    </button>
                    <button 
                      type="submit" 
                      className="h-10 px-6 rounded-xl bg-[#8edce0] hover:bg-teal-400 text-zinc-900 text-xs font-black tracking-widest inline-flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{docForm.id ? "帳票を更新" : "帳票を新規登録"}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-3">
                  {docs.length === 0 ? (
                    <div className="text-center py-12 bg-zinc-50 border border-zinc-200 rounded-2xl">
                      <p className="text-zinc-500 text-xs text-zinc-400">作成された書類はありません。</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      {docs.map(doc => {
                        const subtotal = doc.items?.reduce((sum: number, line: any) => sum + (line.price * line.qty), 0) || 0;
                        const tax = Math.round(subtotal * doc.taxRate);
                        const total = subtotal + tax;

                        return (
                          <div key={doc.id} className="p-4 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`px-2 py-0.5 rounded text-[8px] font-black tracking-wider uppercase font-mono ${
                                  doc.docType === 'invoice' ? 'bg-amber-100/90 text-amber-700' : 'bg-teal-100/90 text-teal-700'
                                }`}>
                                  {doc.docType === 'invoice' ? '請求書' : '見積書'}
                                </span>
                                <span className="text-[10px] text-zinc-450 font-mono font-bold">{doc.docNumber}</span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900">{doc.recipient}</h4>
                              <p className="text-xs font-bold text-zinc-650 font-mono">
                                合計金額(税込): <span className="text-[#307c80] font-black">¥{total.toLocaleString()}</span>
                              </p>
                            </div>

                            <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end">
                              <button 
                                onClick={() => setViewingDoc(doc)}
                                className="h-9 px-3 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 rounded-lg text-xs font-bold text-zinc-650 inline-flex items-center gap-1 cursor-pointer"
                              >
                                <Printer className="w-3.5 h-3.5" />
                                <span>表示・印刷</span>
                              </button>
                              <button 
                                onClick={() => handleEditDocClick(doc)}
                                className="h-9 px-3 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 rounded-lg text-xs font-bold text-zinc-600 inline-flex items-center justify-center cursor-pointer"
                              >
                                編集
                              </button>
                              <button 
                                onClick={() => handleDeleteDoc(doc.id)}
                                className="h-9 w-9 bg-zinc-50 hover:bg-red-50 hover:border-red-200 hover:text-red-500 text-zinc-400 border border-zinc-200 rounded-lg flex items-center justify-center cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 4. CASHFLOW MODULE (FINANCES SIMULATOR) */}
          {activeTab === 'cashflow' && (
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-150 pb-5">
                <div>
                  <h3 className="text-sm font-extrabold text-zinc-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                    <span>入出金・簡易財務管理キャッシュフロー（シミュレーション）</span>
                  </h3>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                    現在の売上と経費のバランスを記録し、ダイナミックにシミュレーション可能です。
                  </p>
                </div>
                {!showTxForm && (
                  <button
                    onClick={() => {
                      setTxForm({
                        date: new Date().toISOString().split('T')[0],
                        type: 'income',
                        category: '売上',
                        amount: 100000,
                        description: ''
                      });
                      setShowTxForm(true);
                    }}
                    className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-1 cursor-pointer shadow-sm transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>収支レコードを追加</span>
                  </button>
                )}
              </div>

              {/* Cashflow cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-2xl shadow-sm">
                  <span className="text-[9px] font-bold text-emerald-600 block uppercase tracking-wider font-mono">総売上 (Total Income)</span>
                  <p className="text-xl font-black text-emerald-700 font-mono mt-1">¥{totalIncome.toLocaleString()}</p>
                </div>
                <div className="bg-rose-50/50 border border-rose-100 p-5 rounded-2xl shadow-sm">
                  <span className="text-[9px] font-bold text-rose-600 block uppercase tracking-wider font-mono">総経費 (Total Expense)</span>
                  <p className="text-xl font-black text-rose-700 font-mono mt-1">¥{totalExpense.toLocaleString()}</p>
                </div>
                <div className="bg-teal-50/70 border border-teal-100 p-5 rounded-2xl shadow-sm">
                  <span className="text-[9px] font-bold text-[#307c80] block uppercase tracking-wider font-mono">純利益 (Net Profit)</span>
                  <p className="text-xl font-black text-[#227276] font-mono mt-1">¥{netProfit.toLocaleString()}</p>
                </div>
              </div>

              {showTxForm && (
                <form onSubmit={handleAddTransaction} className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                  <span className="text-xs font-bold text-zinc-700 block font-sans">■ 収支取引レコード登録</span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">日付</label>
                      <input 
                        type="date"
                        className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs"
                        value={txForm.date}
                        onChange={(e) => setTxForm({ ...txForm, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">収支区分</label>
                      <select 
                        className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs font-bold"
                        value={txForm.type}
                        onChange={(e) => setTxForm({ ...txForm, type: e.target.value, category: e.target.value === 'income' ? '売上' : '広告費' })}
                      >
                        <option value="income">売上（入金）</option>
                        <option value="expense">経費（出金）</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">勘定科目</label>
                      <input 
                        type="text"
                        placeholder={txForm.type === 'income' ? "売上" : "経費カテゴリ"}
                        className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs font-bold"
                        value={txForm.category}
                        onChange={(e) => setTxForm({ ...txForm, category: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">金額 (円)</label>
                      <input 
                        required
                        type="number"
                        placeholder="120000"
                        className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs font-bold font-mono"
                        value={txForm.amount || ""}
                        onChange={(e) => setTxForm({ ...txForm, amount: Number(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">摘要・説明</label>
                    <input 
                      type="text"
                      placeholder="SNS動画制作パッケージ 請求分入金"
                      className="w-full h-10 bg-white border border-zinc-200 rounded-lg px-3 text-xs"
                      value={txForm.description}
                      onChange={(e) => setTxForm({ ...txForm, description: e.target.value })}
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-3">
                    <button 
                      type="button" 
                      onClick={() => setShowTxForm(false)}
                      className="h-10 px-4 rounded-xl bg-zinc-100 text-xs font-bold text-zinc-600 hover:bg-zinc-200 cursor-pointer"
                    >
                      キャンセル
                    </button>
                    <button 
                      type="submit" 
                      className="h-10 px-6 rounded-xl bg-[#8edce0] hover:bg-teal-400 text-zinc-900 text-xs font-bold cursor-pointer"
                    >
                      保存する
                    </button>
                  </div>
                </form>
              )}

              {/* Transactions list table */}
              <div className="space-y-3">
                {transactions.length === 0 ? (
                  <div className="text-center py-10 bg-zinc-50 border border-zinc-200 rounded-2xl">
                    <p className="text-zinc-400 text-xs text-zinc-500">取引記録は登録されていません。</p>
                  </div>
                ) : (
                  <div className="overflow-hidden border border-zinc-200 rounded-xl shadow-sm">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-zinc-50 border-b border-zinc-200 h-11 text-[9px] uppercase tracking-wider font-mono text-zinc-500">
                        <tr>
                          <th className="px-4 py-3 font-bold">取引日</th>
                          <th className="px-4 py-3 font-bold">区分</th>
                          <th className="px-4 py-3 font-bold">勘定科目</th>
                          <th className="px-4 py-3 font-bold">摘要・説明</th>
                          <th className="px-4 py-3 font-bold text-right">金額</th>
                          <th className="px-4 py-3 text-right font-bold w-16">操作</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 font-sans text-zinc-700">
                        {transactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-zinc-50/50 transition-colors">
                            <td className="px-4 py-3.5 font-mono text-[10px] text-zinc-500">{tx.date}</td>
                            <td className="px-4 py-3.5">
                              <span className={`px-2 py-0.5 rounded text-[8px] font-black tracking-wider uppercase font-mono ${
                                tx.type === 'income' ? 'bg-emerald-100/90 text-emerald-700' : 'bg-rose-100/90 text-rose-700'
                              }`}>
                                {tx.type === 'income' ? '入金' : '出金'}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 font-bold text-zinc-900">{tx.category}</td>
                            <td className="px-4 py-3.5 text-zinc-650">{tx.description || "—"}</td>
                            <td className={`px-4 py-3.5 text-right font-mono font-bold ${
                              tx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'
                            }`}>
                              {tx.type === 'income' ? '+' : '-'}¥{tx.amount.toLocaleString()}
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <button 
                                onClick={() => handleDeleteTx(tx.id)}
                                className="h-8 w-8 bg-zinc-50 hover:bg-red-50 hover:border-red-200 text-zinc-400 hover:text-red-500 border border-zinc-200 rounded-lg flex items-center justify-center cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 5. SEO MODULE */}
          {activeTab === 'seo' && (
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-6">
              <div>
                <h3 className="text-sm font-extrabold text-zinc-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                  <span>SEOメタ情報ダッシュボード最適化</span>
                </h3>
                <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                  LPなどの主要各公開ページで読み込まれるメタタイトル・説明文(Description)・検索用キーワードを一括最適化保存します。
                </p>
              </div>

              {/* Subtabs for selector layout */}
              <div className="flex overflow-x-auto gap-2 border-b border-zinc-200 pb-3 font-sans font-bold text-xs select-none">
                {[
                  { id: 'home', label: '🏠 トップページ' },
                  { id: 'sns', label: '📈 SNSマーケティング' },
                  { id: 'dev', label: '⚙️ アプリ・AIシステム開発' },
                  { id: 'blog', label: '📰 統合ナレッジブログ' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedSeoPage(p.id)}
                    className={`px-4 h-9 rounded-lg text-xs font-bold cursor-pointer transition-all border ${
                      selectedSeoPage === p.id
                        ? 'bg-zinc-900 text-[#8edce0] hover:bg-zinc-805 border-zinc-900'
                        : 'bg-zinc-50 text-zinc-650 hover:bg-zinc-100 hover:text-zinc-900 border-zinc-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleUpdateSeo} className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                <span className="text-xs font-bold text-zinc-700 block uppercase font-mono tracking-wide">■ 編集中の対象: {selectedSeoPage.toUpperCase()}</span>
                
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">ブラウザタイトル (Title)</label>
                  <input 
                    required
                    type="text"
                    className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs text-zinc-950 font-bold"
                    value={seoConfig[selectedSeoPage]?.title || ""}
                    onChange={(e) => updateSelectedSeoField('title', e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">メタ記述説明文 (Description)</label>
                  <textarea 
                    rows={3}
                    className="w-full p-3 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] text-xs leading-normal font-bold text-zinc-700"
                    value={seoConfig[selectedSeoPage]?.desc || ""}
                    onChange={(e) => updateSelectedSeoField('desc', e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">検索キーワード (Keywords - カンマ区切り)</label>
                  <input 
                    type="text"
                    className="w-full h-11 bg-white border border-zinc-200 rounded-lg outline-none focus:ring-1 focus:ring-[#8edce0] px-3 text-xs font-mono text-zinc-800"
                    value={seoConfig[selectedSeoPage]?.keywords || ""}
                    onChange={(e) => updateSelectedSeoField('keywords', e.target.value)}
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button 
                    type="submit"
                    className="bg-[#1a1a1a] hover:bg-zinc-800 text-[#8edce0] px-6 h-10 rounded-xl text-xs font-bold cursor-pointer transition-all shadow-sm"
                  >
                    SEO設定を保存
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>

      {/* 6. MODAL SYSTEM FOR PRINTING/VIEWING INVOICES/ESTIMATES */}
      <AnimatePresence>
        {viewingDoc && (() => {
          const subtotal = viewingDoc.items?.reduce((sum: number, line: any) => sum + (line.price * line.qty), 0) || 0;
          const tax = Math.round(subtotal * viewingDoc.taxRate);
          const total = subtotal + tax;

          return (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-zinc-100"
              >
                {/* Print modal top operations */}
                <div className="flex justify-between items-center border-b border-zinc-200 pb-3 print:hidden">
                  <span className="text-xs font-black text-zinc-500 font-mono">SYNC2 CORE DOCUMENT PRINT PREVIEW</span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => window.print()}
                      className="bg-emerald-550 hover:bg-emerald-600 bg-emerald-50 text-emerald-600 px-4 h-9 rounded-xl text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-all"
                    >
                      <span>PDFインクとして印刷 / 保存</span>
                    </button>
                    <button 
                      onClick={() => setViewingDoc(null)}
                      className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-3 h-9 rounded-xl text-xs font-bold cursor-pointer"
                    >
                      閉じる
                    </button>
                  </div>
                </div>

                {/* Printable standard Japanese Invoice structure */}
                <div className="space-y-6 font-sans text-zinc-900 leading-normal border border-zinc-300 p-8 rounded-2xl bg-white select-text">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-black tracking-widest text-zinc-900 font-mono">
                        {viewingDoc.docType === 'invoice' ? '御 請 求 書' : '御 見 積 書'}
                      </h1>
                      <p className="text-[10px] text-zinc-400 font-mono font-bold mt-1">NO: {viewingDoc.docNumber}</p>
                    </div>
                    <div className="text-right text-[10px] text-zinc-550 space-y-1">
                      <p>発行日付: {viewingDoc.issueDate}</p>
                      <p>{viewingDoc.docType === 'invoice' ? 'お支払い期日' : 'お見積有効期限'}: {viewingDoc.dueDate}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2 border-b border-zinc-250 pb-4">
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono">■ お取引先（御中）</span>
                      <p className="text-sm font-black text-zinc-900 border-l-4 border-[#8edce0] pl-3">{viewingDoc.recipient}</p>
                      <p className="text-xs text-zinc-500">下記の通り、つつしんで{viewingDoc.docType === 'invoice' ? "請求" : "見積"}申し上げます。</p>
                    </div>

                    <div className="space-y-1.5 text-right sm:text-right border-b sm:border-l sm:border-b border-zinc-250 pb-4 sm:pl-4">
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block font-mono">■ 発行責任元</span>
                      <p className="text-sm font-black text-zinc-900">{viewingDoc.sender}</p>
                      <p className="text-[10px] text-zinc-500 font-mono">SYNC2 B2B Agency Ltd.</p>
                      <p className="text-[9px] text-zinc-400">EMAIL: custom-ops@sync2.agency</p>
                    </div>
                  </div>

                  {/* Total presentation block */}
                  <div className="bg-[#8edce0]/10 border border-[#8edce0]/35 p-4 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-700">御合計金額 (税込) :</span>
                    <span className="text-xl font-black text-[#227276] font-mono">¥{total.toLocaleString()} -</span>
                  </div>

                  {/* Lines pricing table */}
                  <div className="border border-zinc-250 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left text-[11px] border-collapse bg-white">
                      <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 h-9 font-bold text-[10px]">
                        <tr>
                          <th className="px-4 py-2">品名 / 内訳項目</th>
                          <th className="px-4 py-2 text-right">単価</th>
                          <th className="px-4 py-2 text-center w-16">数量</th>
                          <th className="px-4 py-2 text-right">金額</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-150 text-zinc-750 font-medium">
                        {viewingDoc.items?.map((line: any, lIdx: number) => (
                          <tr key={lIdx} className="h-9">
                            <td className="px-4 py-2 font-bold text-zinc-900">{line.name}</td>
                            <td className="px-4 py-2 text-right font-mono">¥{line.price.toLocaleString()}</td>
                            <td className="px-4 py-2 text-center font-mono">{line.qty}</td>
                            <td className="px-4 py-2 text-right font-mono font-bold text-zinc-900">¥{(line.price * line.qty).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Totals box */}
                  <div className="flex justify-end pt-1">
                    <div className="w-56 text-xs space-y-1.5 font-mono text-zinc-650 pr-2">
                      <div className="flex justify-between border-b border-zinc-150 pb-1">
                        <span>小計金額</span>
                        <span>¥{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-150 pb-1">
                        <span>消費税金額 ({(viewingDoc.taxRate * 100).toFixed(0)}%)</span>
                        <span>¥{tax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-black text-zinc-900 border-b border-zinc-300 pb-1.5 text-sm">
                        <span>合計請求額</span>
                        <span>¥{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Memo text block */}
                  {viewingDoc.memo && (
                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                      <p className="text-[9px] uppercase pb-1 block font-mono text-zinc-400">■ 備考/振込情報欄</p>
                      <pre className="whitespace-pre-wrap font-sans text-xs text-zinc-650 font-bold leading-relaxed">{viewingDoc.memo}</pre>
                    </div>
                  )}

                  <div className="pt-8 text-center text-zinc-400 font-mono text-[9px] font-normal leading-normal">
                    SYNC2 Core Enterprise Billing Services — Created internally via Blackbox Node.
                  </div>
                </div>

              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
};
const FAQ = () => {
  const faqs = [
    {
      q: "SNSの知識が全くないのですが大丈夫ですか？",
      a: "はい、全く問題ありません。SYNC2では戦略設計からアカウント開設、日々の運用まで全てをフルサポートいたします。専門用語を使わず、実際の数値（リード獲得数など）をベースに分かりやすくご報告します。"
    },
    {
      q: "B2B企業でもSNSで成果は出ますか？",
      a: "結論から申し上げますと、B2BこそSNS活用が重要です。意思決定者も一人の人間としてSNSを利用しています。ターゲットに合わせた適切なプラットフォーム選定とインサイトを突くコンテンツ設計により、質の高いリード獲得が可能です。"
    },
    {
      q: "最短でどれくらいで運用を開始できますか？",
      a: "ヒアリングから戦略設計、クリエイティブ制作を含め、通常1ヶ月程度で運用を開始いたします。お急ぎの場合は調整も可能ですので、まずはご相談ください。"
    },
    {
      q: "契約期間の縛りはありますか？",
      a: "SNS運用は中長期的な蓄積が重要であるため、基本的には6ヶ月からのご契約をお願いしております。ただし、目的や施策内容に応じて柔軟に対応可能です。"
    },
    {
      q: "既存の社員とどのように連携すればよいですか？",
      a: "貴社の強みや最新情報を定期的にヒアリングさせていただくだけで結構です。素材の撮影やライティングは全て弊社で行いますので、現場の工数を最小限に抑えた運用が可能です。"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#8edce0] font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">よくあるご質問</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-zinc-100 rounded-3xl overflow-hidden bg-[#f8fafb] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <h3 className="text-base md:text-lg font-bold text-[#373d43] leading-tight pr-4">
                  Q. {faq.q}
                </h3>
                <span className="shrink-0 ml-1.5 transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-5 h-5 text-zinc-400" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                <div className="h-px bg-zinc-200/50 mb-6" />
                <p>A. {faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyInfo = () => (
  <section id="company" className="py-24 bg-[#1a1a1a] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <div className="mb-12">
            <span className="text-[#8edce0] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">President Message</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">「Think Unlimited」</h2>
            <div className="prose prose-invert prose-sm max-w-none text-zinc-400">
              <p>デジタル化が加速する現代において、SNSはもはや「遊び」のツールではありません。企業の信頼を形作り、新たなビジネスチャンスを創出する「最前線」の営業現場です。</p>
              <p>私たちは、日本のB2B企業が持つ素晴らしい価値を世界へ、そして次世代へ繋ぐために、SNSというキャンバスを使って戦略を具現化します。</p>
            </div>
          </div>
        </div>
        
        <div>
          <span className="text-[#8edce0] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Outline</span>
          <h2 className="text-2xl font-bold mb-10">会社概要</h2>
          <div className="space-y-4">
            {[
              { label: "会社名", value: "SYNC2 AGENCY" },
              { label: "代表者", value: "佐藤 ルイス" },
              { label: "所在地", value: "愛知県名古屋市" },
              { label: "事業内容", value: "B2Bマーケティング支援、SNS運用代行、クリエイティブ制作" }
            ].map((item, i) => (
              <div key={i} className="flex border-b border-white/5 pb-4">
                <span className="w-32 text-xs text-zinc-500 font-bold">{item.label}</span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FloatingLINE = () => {
  const LINE_LINK = "https://lin.ee/UwOZ7ho";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.8 }}
          href={LINE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 md:bottom-10 md:left-10 z-[60] flex items-center gap-2 md:gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white px-4 md:pl-4 md:pr-6 py-2.5 md:py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[10px] font-bold opacity-80 leading-none uppercase">Free Consultation</span>
            <span className="text-xs md:text-sm font-black whitespace-nowrap">LINEで無料相談</span>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

const MiddleCTA = () => (
  <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#8edce0]/10 blur-[100px]" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            今のSNS運用、<br />
            機会損失を生んでいませんか？
          </h2>
          <p className="text-zinc-400 text-lg mb-0 leading-relaxed">
            競合他社がSNSを資産化し、月間数百件のリードを獲得しています。<br />
            まずは貴社のアカウントを無料分析しませんか？
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 shrink-0">
          <a 
            href="https://lin.ee/UwOZ7ho"
            className="w-full md:w-auto bg-[#8edce0] hover:bg-[#7bc8cc] text-[#1a1a1a] px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl shadow-[#8edce0]/20 flex items-center justify-center gap-3 active:scale-95 group"
          >
            LINEで無料診断を受ける
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-zinc-500 font-medium tracking-widest uppercase">
            Limited slots available per month
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SNSLandingPage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Problems />
      <Solution />
      <Features />
      <MiddleCTA />
      <Process />
      <CaseStudies />
      <FAQ />
      <CompanyInfo />
      <LeadMagnet />
      <CTA />
    </>
  );
};

// --- New Universal SYNC2 Agency Home Page ---
const Home = () => {
  const seo = useSeoMeta(
    'home', 
    'SYNC2 | ブランディング・マーケティング・AIシステム開発', 
    'SYNC2はブランド設計、SNSマーケティング、そして最高峰のアプリ・システム開発・AI実装を一気通貫で提供するクリエイティブテクノロジーエージェンシーです。貴社のビジネスを自動化し、資産化します。'
  );

  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant', text: string }>>([
    { role: 'assistant', text: "はじめまして、SYNC2 AIコンサルタントです。マーケティング、ブランディング、またはアプリ・AI・システム開発について何でもお気軽にご質問ください。" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "SYNC2の総合的な強みは何ですか？",
    "新規アプリ開発やシステム構築の実績・流れを教えてください",
    "自社の業務自動化にAIをどう活用できますか？"
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;
    
    const userMsg = textToSend.trim();
    setUserInput("");
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: chatMessages,
          userMessage: userMsg
        })
      });

      if (!response.ok) throw new Error("Server error");
      const data = await response.json();
      
      setChatMessages(prev => [...prev, { role: 'assistant', text: data.text }]);
    } catch (err) {
      console.error(err);
      setChatMessages(prev => [...prev, { role: 'assistant', text: "申し訳ありません。一時的に通信が混雑しております。詳細な戦略相談は公式LINE（https://lin.ee/UwOZ7ho）でも24時間承っております。" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.desc} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-100">
        <div className="absolute inset-0 bg-[grid-linear-line] opacity-30 select-none pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#8edce0]/10 border border-[#8edce0]/30 px-5 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8edce0] animate-pulse" />
                <span className="text-[#1a1a1a] text-xs font-black tracking-widest uppercase">
                  Creative & Technology Agency
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a] leading-[1.25] tracking-tight mb-8">
                ブランドの感情を動かし、<br />
                <span className="text-[#8edce0]">システムで自動化する。</span>
              </h1>
              <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-xl mb-12">
                SYNC2は、企業のビジョンを確固たるブランド価値（ブランディング＆SNS）へと昇華させると同時に、高度なソフトウェア工学（アプリ開発、カスタムシステム、高集約型AI実装）によって、完全自動化された持続可能な価値資産を構築します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/sns"
                  className="bg-[#1a1a1a] text-white px-8 py-5 rounded-full text-base font-black transition-all flex items-center justify-center gap-3 shadow-xl hover:bg-[#373d43] active:scale-95 group"
                >
                  <span>SNSマーケティング事業</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/development"
                  className="bg-transparent text-zinc-800 border-2 border-zinc-200 px-8 py-5 rounded-full text-base font-black transition-all flex items-center justify-center gap-3 hover:border-zinc-800 hover:bg-zinc-50 active:scale-95 text-center"
                >
                  <span>アプリ・AI・システム開発</span>
                </Link>
              </div>
            </motion.div>

            {/* Aesthetic Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8edce0]/15 blur-[100px]" />
              <div className="flex justify-between items-center pb-6 border-b border-zinc-200/60 mb-6">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">SYNC2 CORE MODULES</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-4 hover:border-[#8edce0]/40 transition-colors">
                  <div className="p-3 bg-zinc-50 text-[#8edce0] rounded-xl border border-zinc-100">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 mb-1">ブランディング & ポジショニング</h3>
                    <p className="text-xs text-zinc-500">競合と圧倒的な差をつける精緻な市場差別化と言語化。</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-4 hover:border-[#8edce0]/40 transition-colors">
                  <div className="p-3 bg-zinc-50 text-[#8edce0] rounded-xl border border-zinc-100">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 mb-1">戦略的SNS運用によるリード獲得</h3>
                    <p className="text-xs text-zinc-500">アカウントをただ運用するだけでなく、半自動のリード創出エンジンに。</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex items-center gap-4 hover:border-[#8edce0]/40 transition-colors">
                  <div className="p-3 bg-zinc-50 text-[#8edce0] rounded-xl border border-zinc-100">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 mb-1">アプリ・業務システム & AI実装</h3>
                    <p className="text-xs text-zinc-500">高度なシステム構築と生成AIを用いたインテリジェントな業務自動化。</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Philosophies (Overview Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[10px] font-black tracking-[0.3em] text-[#8edce0] uppercase mb-4">SYNC2 VALUES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-6">
              企業の存在価値を最大化する「2つのシンクロ」
            </h2>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              私たちは、感情を動かす「認知とブランド（ART）」と、効率化を極める「システムとAI（CODE）」を完璧にシンクロさせることで、真の優位性と絶対的な収益性を生み出すエージェンシーです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 hover:shadow-xl hover:shadow-zinc-200 transition-all group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8edce0] shadow-sm mb-6 border border-zinc-100 transition-transform group-hover:scale-110">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Branding & Positioning</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                ただ綺麗なロゴを作るのではなく、企業の核となる強みと哲学を言語化。競合を排除し、「貴社だから選ばれる」ための唯一無二の市場優位ポジションを構築します。
              </p>
              <Link to="/sns" className="text-sm font-black text-[#8edce0] hover:underline flex items-center gap-1.5">
                <span>詳細をみる</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 2 */}
            <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 hover:shadow-xl hover:shadow-zinc-200 transition-all group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8edce0] shadow-sm mb-6 border border-zinc-100 transition-transform group-hover:scale-110">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Digital Marketing & SNS</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                B2Bの意思決定者に響く緻密な戦略設計。自慢のソーシャルメディア運用構築力により、SNSを無駄なコストから、毎日リード客を引き寄せる「半自動資産」へと転換します。
              </p>
              <Link to="/sns" className="text-sm font-black text-[#8edce0] hover:underline flex items-center gap-1.5">
                <span>詳細をみる</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 3 */}
            <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 hover:shadow-xl hover:shadow-zinc-200 transition-all group md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8edce0] shadow-sm mb-6 border border-zinc-100 transition-transform group-hover:scale-110">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Engineering & AI Integration</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                高性能スマホアプリ、独自業務Webシステム開発に加え、LLMを活用したインテリジェントな自社AIモジュール。ルーティンワークを全自動化し、本質的な業務成長へ。
              </p>
              <Link to="/development" className="text-sm font-black text-[#8edce0] hover:underline flex items-center gap-1.5">
                <span>詳細をみる</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Chat Scout Demo */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] text-[#8edce0] uppercase mb-4">EXPERIENCE ARTIFICIAL INTELLIGENCE</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-8">
                SYNC2のAI技術を、<br />ここですぐに体験。
              </h2>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-10">
                私たちの高度なシステム・AI開発チームが設計した、インタラクティブコンサルティングモジュールのプロトタイプです。貴社の課題や開発したい内容を入力して、SYNC2 AIのアシスタント力をぜひその場で体感してください。
              </p>
              
              <div className="space-y-4">
                <p className="text-xs font-bold text-zinc-400">クイック質問（回答を即座に生成）:</p>
                <div className="flex flex-col gap-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSendMessage(q)}
                      className="text-left text-xs bg-white border border-zinc-100 hover:border-[#8edce0]/40 transition-colors p-3.5 rounded-xl font-bold text-zinc-700 shadow-sm block active:scale-98"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Chat Interface */}
            <div className="bg-white border border-zinc-100 rounded-[2.5rem] shadow-2xl p-4 md:p-8 flex flex-col h-[425px] md:h-[520px]">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-100 mb-4">
                <div className="relative w-10 h-10 bg-zinc-50 rounded-full border border-zinc-100 flex items-center justify-center text-[#8edce0]">
                  <MessageSquare className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 leading-none">SYNC2 AI Advisor</h3>
                  <span className="text-[9px] font-bold text-zinc-400 tracking-wider uppercase">Active Live Agent</span>
                </div>
              </div>

              {/* Chat History Frame */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-4 rounded-2xl text-xs leading-relaxed max-w-[85%] ${
                      msg.role === 'user' 
                        ? 'bg-[#1a1a1a] text-white rounded-tr-none' 
                        : 'bg-zinc-50 border border-zinc-100 text-zinc-700 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="pt-4 border-t border-zinc-100 mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="質問を入力してください（例：アプリを作りたい）..."
                  className="flex-1 px-4 py-3 bg-zinc-50 border border-zinc-100 rounded-xl text-xs focus:ring-1 focus:ring-[#8edce0] focus:border-transparent outline-none transition-all"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendMessage(userInput);
                  }}
                />
                <button
                  onClick={() => handleSendMessage(userInput)}
                  className="bg-[#1a1a1a] hover:bg-[#373d43] text-[#8edce0] px-4 py-3 rounded-xl text-xs font-black transition-all active:scale-95 shrink-0"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Representative Message */}
      <section className="py-24 bg-white" id="company-info">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] text-[#8edce0] uppercase mb-4">CORPORATE PROFILE</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-8">
                企業価値を革新する、<br />SYNC2の戦略コア設計。
              </h2>
              
              <div className="space-y-6 text-zinc-500 text-sm md:text-base leading-relaxed mb-10">
                <p>
                  SYNC2は、SNSを活用した戦略的マーケティング手法と、高度なソフトウェア・AI工学技術を一体化したクリエイティブ・パートナーです。
                </p>
                <p>
                  私たちの使命は、日々変化するデジタルの波の中で、お客様の会社ビジネスモデルに最適な「動的資産（成果の出るチャネル、自動化されたシステム、AIモデル）」を構築し、長期的な競合優位性と永続するキャッシュフローを創造することです。
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl">
                <table className="w-full text-xs md:text-sm">
                  <tbody>
                    <tr className="border-b border-zinc-200">
                      <td className="py-3 font-bold text-zinc-900 w-1/3">エージェンシー名</td>
                      <td className="py-3 text-zinc-600">SYNC2 AGENCY</td>
                    </tr>
                    <tr className="border-b border-zinc-200">
                      <td className="py-3 font-bold text-zinc-900">代表責任者</td>
                      <td className="py-3 text-zinc-600">佐藤 ルイス (LUIZ SATO)</td>
                    </tr>
                    <tr className="border-b border-zinc-200">
                      <td className="py-3 font-bold text-zinc-900">本店所在地</td>
                      <td className="py-3 text-zinc-600">愛知県名古屋市</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-zinc-900">事業領域</td>
                      <td className="py-3 text-zinc-600">B2B戦略ブランディング、各種SNS集客マーケティング運用代行、Web・Nativeアプリケーション開発、業務自動化システム・各種AIモジュールの受託開発</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-zinc-150 rounded-2xl p-6 bg-gradient-to-br from-zinc-50 to-white shadow-sm hover:shadow-md transition-all">
                <span className="text-xs font-mono text-[#8edce0] font-bold block mb-1">PILLAR 01</span>
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-sm md:text-base">持続価値の資産化（Sustainability）</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  一過性のアクセス増加ではなく、貴社のSNSやデジタル接点を「優良な顧客獲得チャネル」という動的資産へと変貌させ、中長期的に集客・売上を生み出し続ける強固な仕組みを設計します。
                </p>
              </div>

              <div className="border border-zinc-150 rounded-2xl p-6 bg-gradient-to-br from-zinc-50 to-white shadow-sm hover:shadow-md transition-all">
                <span className="text-xs font-mono text-[#8edce0] font-bold block mb-1">PILLAR 02</span>
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-sm md:text-base">最先端のテクノロジー統合（Integration）</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  運用ノウハウの提供にとどまらず、高度な自動化システムやAIアシスタントを業務プロセスにシームレスに結合。運用オペレーションの効率化を極限まで追求します。
                </p>
              </div>

              <div className="border border-zinc-150 rounded-2xl p-6 bg-gradient-to-br from-zinc-50 to-white shadow-sm hover:shadow-md transition-all">
                <span className="text-xs font-mono text-[#8edce0] font-bold block mb-1">PILLAR 03</span>
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-sm md:text-base">戦略的ブランド設計（Brand Value）</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  単なる情報発信ではなく、ターゲット像の購買行動を科学した一貫性のあるメッセージ。日本が誇るB2B企業の真の価値を世界、そして未来へ正しく伝えます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Lead Magnet */}
      <LeadMagnet />
    </div>
  );
};

// --- New Technology & Custom AI Systems Development Page ---
const TechPage = () => {
  const seo = useSeoMeta(
    'development',
    'アプリ・AI・カスタムシステム開発 - SYNC2 Tech Division',
    'SYNC2の最高技術部門。モバイルアプリ開発、高負荷業務システム、そしてGeminiを用いた最先端の生成AIシステムの実装により、社内業務を完全に自動化し、他社を圧倒するデジタル資産を構築します。'
  );

  type SystemType = 'app' | 'saas' | 'crm' | 'ai';
  type CloudType = 'standard' | 'scaling' | 'ai_pipeline';

  const [wizardSystem, setWizardSystem] = useState<SystemType>('app');
  const [wizardCloud, setWizardCloud] = useState<CloudType>('standard');

  const getSystemLabel = (sys: SystemType) => {
    switch (sys) {
      case 'app': return "Mobile Native App (iOS/Android)";
      case 'saas': return "Enterprise Custom SaaS Dashboard";
      case 'crm': return "Custom relational database custom ERP";
      case 'ai': return "AI Automated Intelligent Agent Pipeline";
    }
  };

  const getCloudLabel = (cloud: CloudType) => {
    switch (cloud) {
      case 'standard': return "Database Cloud Sync (PostgreSQL)";
      case 'scaling': return "Full-scale Serverless Auto-scale REST API";
      case 'ai_pipeline': return "Google Gemini LLM Agent Cognitive Logic Core";
    }
  };

  // Modern blueprint chart mock generator
  const renderFlowDiagram = () => {
    return (
      <div className="p-6 md:p-8 bg-zinc-950 rounded-[2rem] text-[#8edce0] border border-[#8edce0]/20 font-mono text-xs space-y-4 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#8edce0]/5 blur-[70px]" />
        <div className="flex justify-between items-center border-b border-[#8edce0]/10 pb-4 text-[10px] tracking-widest text-zinc-400">
          <span>DYNAMIC APP SYSTEM BLUEPRINT</span>
          <span className="text-[#8edce0] animate-pulse">● LIVE SCHEMA GENERATOR</span>
        </div>

        <div className="space-y-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">[1] User UI:</span>
            <span className="bg-white/10 text-white px-2.5 py-1 rounded border border-[#8edce0]/20 font-bold">
              {wizardSystem === 'app' ? 'React Native Mobile App' : wizardSystem === 'saas' ? 'Vite + React Dashboard' : wizardSystem === 'crm' ? 'Enterprise ERP client' : 'Prompt Interface Console'}
            </span>
          </div>

          <div className="text-zinc-600 px-4">↓ (JSON Web Token Encrypted secure SSL / API gateway Route)</div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500">[2] Server:</span>
            <span className="bg-white/10 text-white px-2.5 py-1 rounded border border-[#8edce0]/20 font-bold">
              Node Express API with validation / Secure TS
            </span>
          </div>

          <div className="text-zinc-600 px-4">↓ (Cloud orchestration processing schema)</div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500">[3] Database:</span>
            <span className="bg-[#8edce0]/10 text-[#8edce0] px-2.5 py-1 rounded border border-[#8edce0]/30 font-bold">
              {wizardCloud === 'standard' ? 'PostgreSQL database backend' : 'Scaling Cloud-SQL database node'}
            </span>
          </div>

          {wizardCloud === 'ai_pipeline' && (
            <>
              <div className="text-zinc-600 px-4">↓ (Semantic Embedding Pipeline / Agentic feedback)</div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">[4] AI logic:</span>
                <span className="bg-purple-950/40 text-purple-300 px-2.5 py-1 rounded border border-purple-500/30 font-bold">
                  Google Gemini Cognitive NLP parser
                </span>
              </div>
            </>
          )}
        </div>

        <div className="border-t border-[#8edce0]/10 pt-4 text-center text-zinc-500 text-[10px] tracking-wide">
          SYNC2 Engineered Framework Node • Architecture fully generated based on selections.
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.desc} />
      </Helmet>

      {/* Tech Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[grid-linear-line] opacity-10 select-none pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8edce0]/10 blur-[150px] select-none pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-block bg-[#8edce0]/10 border border-[#8edce0]/30 px-6 py-2 rounded-full mb-8">
              <span className="text-[#8edce0] text-xs font-mono font-bold tracking-widest uppercase">
                ENGINEERING / SYSTEMS / AI INTEGRATION
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.25] max-w-5xl">
              最高峰のシステムエンジニアリングで、<br />
              <span className="text-[#8edce0]">競争優位を完全自動化する。</span>
            </h1>

            <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl mb-12">
              SYNC2は、最新のプログラミングを駆使したスマホアプリ開発、堅牢なB2B基幹カスタムシステム構築、そしてGoogle Geminiを活用したインテリジェントな自働処理AIモジュールを一括提供します。
            </p>

            <a
              href="https://lin.ee/UwOZ7ho"
              className="bg-[#8edce0] hover:bg-[#7bc8cc] text-[#1a1a1a] px-12 py-5 rounded-full text-lg font-black transition-all shadow-xl shadow-[#8edce0]/20 flex items-center justify-center gap-3 active:scale-95 group"
            >
              <span>LINEでシステム開発の無料相談</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tech Pillars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[10px] font-black tracking-[0.3em] text-[#8edce0] uppercase mb-4">DEV SERVICES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-6">
              我々が誇る3つの開発テクノロジー領域
            </h2>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              最先端のフレームワークおよびクラウドAPIを用いて、動作スピード、データの安全性、長期メンテナンス性すべてに徹底的にこだわった最高品質のシステムを受託開発いたします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* App Development */}
            <div className="space-y-6">
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 shadow-sm rounded-2xl flex items-center justify-center text-[#8edce0]">
                <Layout className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">アプリ開発 (App Development)</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                iOSおよびAndroidの両輪で滑らかに動作する高品質モバイルネイティブアプリやWebアプリを開発します。React Nativeを軸にしたアジャイルな開発体制により、工数を最小に抑えつつネイティブ並みの描画レスポンスと美麗なUI、直感的UXを実現。
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-700 font-bold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  iOS/Android クロスプラットフォーム開発
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  アニメーションを重視した高いデザイン水準
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  オフライン動作やプッシュ通知の完全サポート
                </li>
              </ul>
            </div>

            {/* Custom Systems */}
            <div className="space-y-6">
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 shadow-sm rounded-2xl flex items-center justify-center text-[#8edce0]">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">システム開発 (System Development)</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                単なる管理画面の作成にとどまらず、B2B業務フローそのものを完全自動化する強固な自社データベース/ERPシステムを設計します。Drizzle ORMやPostgreSQLをベースとしたリレーショナル・データスキーマ設計により、データの整合性と高速クエリ、拡張性に優れたAPI環境をご用意。
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-700 font-bold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  超高速リレーショナル PostgreSQL データベース構築
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  社内基幹システム（ERP / CRM）の完全オーダーメイド
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  安全なJWT認証、SSLセキュリティによる鉄壁の実装
                </li>
              </ul>
            </div>

            {/* AI Solutions */}
            <div className="space-y-6">
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 shadow-sm rounded-2xl flex items-center justify-center text-[#8edce0]">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">人工知能 & AI実装 (AI Integration)</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                最新のGoogle Gemini SDKをサーバーサイドに組み込み、PDFなどのドキュメントを読み込んで自動でデータ分析や要約報告書を生成するセマンティックAIワークフローを構築。業務にかかる時間から何千時間もの単純労働を削減し、貴社の「AIブレイン」を誕生させます。
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-700 font-bold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  Google Gemini APIをサーバーサイドに標準実装
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  Cognitive Agents（自動思考AIエージェント）設計
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8edce0]" />
                  自社社内文章を活用したベクトル検索、QAシステムの搭載
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Blueprint Configurator */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] font-black tracking-[0.3em] text-[#8edce0] uppercase mb-4">FLOW VISUALIZER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
              システム設計スキーマを瞬時にシミュレーション
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              開発を希望するアプリジャンルおよびデータ保存・AI連携の構成プランを選択してみてください。SYNC2が誇るシステム結合図のシミュレーターが動的に設計を導きます。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left selector */}
            <div className="lg:col-span-5 bg-white border border-zinc-100 rounded-[2rem] p-6 md:p-8 shadow-xl flex flex-col justify-between min-h-[450px] lg:h-[450px]">
              <div>
                <span className="block text-[9px] font-bold text-zinc-400 tracking-widest uppercase mb-4">System Type Selection</span>
                <div className="space-y-3 mb-6">
                  {(['app', 'saas', 'crm'] as SystemType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setWizardSystem(type)}
                      className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-bold flex justify-between items-center ${
                        wizardSystem === type 
                          ? 'border-[#8edce0] bg-[#8edce0]/10 text-zinc-900' 
                          : 'border-zinc-100 bg-zinc-50 hover:bg-zinc-100 text-zinc-650'
                      }`}
                    >
                      <span>{getSystemLabel(type)}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  ))}
                </div>

                <span className="block text-[9px] font-bold text-zinc-400 tracking-widest uppercase mb-4">Data Database / AI Layer</span>
                <div className="space-y-3">
                  {(['standard', 'ai_pipeline'] as CloudType[]).map((cloud) => (
                    <button
                      key={cloud}
                      onClick={() => setWizardCloud(cloud)}
                      className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-bold flex justify-between items-center ${
                        wizardCloud === cloud 
                          ? 'border-[#8edce0] bg-[#8edce0]/10 text-zinc-900' 
                          : 'border-zinc-100 bg-zinc-50 hover:bg-zinc-100 text-zinc-650'
                      }`}
                    >
                      <span>{getCloudLabel(cloud)}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right generator diagram */}
            <div className="lg:col-span-12 xl:col-span-7">
              {renderFlowDiagram()}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-20 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black tracking-[0.3em] text-[#8edce0] uppercase mb-8">OUR TECHNOLOGY STACK</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            <span className="text-lg md:text-xl font-black font-mono">React / Next.js</span>
            <span className="text-lg md:text-xl font-black font-mono">TypeScript</span>
            <span className="text-lg md:text-xl font-black font-mono">Node.js Express</span>
            <span className="text-lg md:text-xl font-black font-mono">Python / PyTorch</span>
            <span className="text-lg md:text-xl font-black font-mono">PostgreSQL</span>
            <span className="text-lg md:text-xl font-black font-mono">Google Gemini API</span>
            <span className="text-lg md:text-xl font-black font-mono">Docker / GCP</span>
          </div>
        </div>
      </section>

      {/* Deep CTA */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-6">貴社のシステム構想を、現実の資産へ。</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
            まずは「こういう仕組みを自動化したい」「モバイルアプリを作りたい」といった抽象的なアイデアをプロの技術顧問（佐藤ルイスほかコアチーム）へお聞かせください。公式LINEにて無料の技術要件設計相談・仮お見積り作成を行っています。
          </p>
          <a
            href="https://lin.ee/UwOZ7ho"
            className="inline-flex bg-[#1a1a1a] hover:bg-[#373d43] text-[#8edce0] px-12 py-5 rounded-full text-lg font-black transition-all shadow-xl shadow-zinc-200 active:scale-95 items-center gap-3"
          >
            <span>LINEで技術相談を受ける</span>
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};


export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  image: string;
  content: { emoji: string; sectionTitle: string; paragraphs: string[] }[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  scheduledDate?: string;
  isPublished?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "sns-decider-creative",
    title: "15秒で決裁者を虜にする超短尺クリエイティブ撮影手法",
    category: "SNSマーケティング",
    date: "2026.06.01",
    author: "SYNC2 編集部",
    readTime: "5分",
    summary: "B2B企業や製品営業のショート動画において、最初の3秒、そして流れていく15秒間でどのように決裁者の意識をロックオンさせるかについて解説します。",
    image: "https://picsum.photos/seed/decider/800/500",
    content: [
      {
        emoji: "🎯",
        sectionTitle: "3秒でのターゲットフック設計",
        paragraphs: [
          "B2Bショート動画においてもっとも普遍的な過ちは、企業ロゴや自己紹介などの無駄な贅肉からカットを開始してしまうことです。",
          "決裁者がリールやTikTokで見ている時、興味がないと判断するまでの時間はわずか1.5秒前後。最初に投げるべきは『社内DXが進まない本当の経営課題』や『過剰なシステムコスト』など、痛みの実感を伴う具体的な問いかけです。"
        ]
      },
      {
        emoji: "📸",
        sectionTitle: "高密度カット割りとスマホ撮影の最適解",
        paragraphs: [
          "長尺ビデオとは異なり、短尺では1秒間の情報密度（Visual Pacing）が極小化されなければなりません。1カットあたりの長さは最大でも2.5秒。画角を変えたり、クローズアップを効果的に挟むことで視覚のマンネリを防ぎます。",
          "高級なシネマカメラは不要です。むしろ、最新の高性能スマートフォンに適切な外付けマイク、そして被写体を浮かび上がらせる高品質なポータブル照明を用いることで、親近感とシズル感を両立させる映像が作れます。"
        ]
      },
      {
        emoji: "⚙️",
        sectionTitle: "CTA（行動喚起）へのスマートな接続",
        paragraphs: [
          "動画のラスト3秒には、必ずネクストアクションを明示します。SYNC2では、公式LINE経由の個別稟議書の無料雛形ダウンロードを推奨しています。",
          "『この資料が必要な方はコメント欄で[稟議]と打つか、プロフィールのリンク先へ』と明確にガイダンスすることで、エンゲージメントとCVRは劇的に引き上げられます。"
        ]
      }
    ]
  },
  {
    id: "b2b-leads-ai",
    title: "生成AIを活用したB2B問い合わせ自動返信によるリード獲得率の最適化",
    category: "AI・システム開発",
    date: "2026.06.05",
    author: "SYNC2 運用代行室",
    readTime: "6分",
    summary: "ホワイトペーパー請求やお問い合わせの直後に、AIを用いた正確かつパーソナライズされた内容を自動返信することで、商談設定率を飛躍的に向上させる仕組み。",
    image: "https://picsum.photos/seed/b2b-ai/800/500",
    content: [
      {
        emoji: "⚡",
        sectionTitle: "1分以内の『リアルタイム応答』が命取り",
        paragraphs: [
          "B2Bマーケティングにおけるリードの鮮度は、生魚のように繊細です。問い合わせから30分以上放置されると、関心温度は急激に冷え込み、競合他社のリサーチに移行してしまいます。",
          "自動応答システムのミッションは、ただの受付完了通知ではありません。質問内容をインテリジェントに解析し、その企業の業界特性に応じた最適な初期回答を1分以内に届けることです。"
        ]
      },
      {
        emoji: "🤖",
        sectionTitle: "Gemini APIによる自動分類とパーソナライズ文脈生成",
        paragraphs: [
          "SYNC2の開発するAIマーケティングレイヤーでは、入力された問い合わせ内容をGeminiが瞬時に分析します。",
          "『予算不足に悩んでいる』のか『インハウスでのスキル不足』なのかを分類し、その障壁を取り除くための無料ケーススタディのPDFリンクなどを瞬時に個別コンパイルして動的返信メールの中に差し込みます。これにより無機質な返信がパーソナライズされた営業レターへと昇華します。"
        ]
      },
      {
        emoji: "📈",
        sectionTitle: "商談予約カレンダー連携へのスマート誘導",
        paragraphs: [
          "初期回答に続いて、AIが自動的に空き日程を同期しているカレンダー連携ツールへのリンクを掲示します。",
          "商談予約に心理摩擦（フリクション）を感じさせないよう、チャットインターフェース内で予約が完結するシームレス設計を構築。これにより従来比2.4倍以上の商談化率を実現しています。"
        ]
      }
    ]
  },
  {
    id: "brand-asset-marketing",
    title: "SNSアカウントを社内資産化するブランド設計・デザインガイドライン",
    category: "SNS運用代行サービス",
    date: "2026.05.28",
    author: "佐藤ルイス SYNC2代表",
    readTime: "8分",
    summary: "個人の属人性に依存せず、恒久的な企業の知財・リード獲得マシーンとしてSNSアカウントを確立するためのブランド一貫性とデザイン規格の設計方法。",
    image: "https://picsum.photos/seed/asset/800/500",
    content: [
      {
        emoji: "🎨",
        sectionTitle: "一目で伝わる独自のビジュアル・トンマナ定義",
        paragraphs: [
          "多くの企業アカウントが、担当メンバー交代時のデザインブレやバズ目的の低質投稿によって自滅しています。",
          "ブランドの資産化を達成するためには、グリッドルール、厳選したフォントファミリー（例：Interペアリング）、コーポレートカラー、キャラクターの語尾ニュアンスなどを完璧に記述したプレイブック（ガイドライン）が不可欠です。"
        ]
      },
      {
        emoji: "📦",
        sectionTitle: "ノウハウをフォーマットカプセル化する",
        paragraphs: [
          "投稿テンプレートは、毎回の制作コストを削減するだけでなく、アカウントの『視認性ブランド』を補強します。",
          "何百ものデザインパターンを手動で作るのではなく、主要パターンからなる数種類のマスターフレームを用意し、それをローテーションしていく構造化アプローチが長命な運用を約束します。"
        ]
      },
      {
        emoji: "🤝",
        sectionTitle: "顧客ライフサイクルに溶け込むSNSとAIのペアリング",
        paragraphs: [
          "バズは単なる認知獲得（トップ・オブ・ファンネル）に過ぎません。そのバズ流入者をどうやってLINEやメールマガジン、そしてホワイトペーパーなどのミドルファネルに引き込み、AIによる自動フォローアップで関係深耕しLTV化するかが重要です。",
          "SNSを切り離して考えるのではなく、システムと完全同期された『B2Bエンゲージメント・サプライチェーン』を敷くことこそが究極の資産化（ビジネス自動化）です。"
        ]
      }
    ]
  }
];

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggle = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);
  if (!show) return null;
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-11 h-11 bg-[#1a1a1a] text-[#8edce0] hover:bg-zinc-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all z-40 border border-[#8edce0]/20"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

const BlogPage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loaded = localStorage.getItem('sync2_blog_posts');
    if (loaded) {
      try {
        setPosts(JSON.parse(loaded));
      } catch (e) {
        setPosts(BLOG_POSTS);
      }
    } else {
      setPosts(BLOG_POSTS);
    }
  }, []);

  const categories = ["すべて", "SNSマーケティング", "B2B営業・リード獲得", "SNS運用代行サービス", "AI・システム開発"];

  // Render single post mode
  if (id) {
    const post = posts.find(p => p.id === id);
    if (!post) {
      return (
        <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-6 space-y-4 font-sans text-zinc-900 select-none">
          <h2 className="text-2xl font-black text-zinc-900">記事が見つかりません</h2>
          <p className="text-zinc-500 text-xs">指定されたURLは変更されたか、削除された可能性があります。</p>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-[#1a1a1a] text-[#8edce0] px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            ブログ一覧に戻る
          </button>
        </div>
      );
    }

    return (
      <div className="pt-32 pb-24 bg-white text-zinc-800 selection:bg-[#8edce0]/30 min-h-screen">
        <Helmet>
          <title>{post.seoTitle || `${post.title} | SYNC2 INSIGHTS`}</title>
          <meta name="description" content={post.seoDescription || post.summary} />
          {post.seoKeywords && <meta name="keywords" content={post.seoKeywords} />}
        </Helmet>

        <article className="max-w-4xl mx-auto px-6 space-y-8 font-sans">
          {/* Breadcrumbs / Back button */}
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500">
            <button onClick={() => navigate('/blog')} className="hover:text-zinc-950 inline-flex items-center gap-1 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              <span>一覧に戻る</span>
            </button>
            <span>/</span>
            <span className="text-zinc-400 font-medium line-clamp-1">{post.title}</span>
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 bg-[#8edce0]/10 text-[#307d80] rounded text-[10px] font-black tracking-widest uppercase font-mono border border-[#8edce0]/25">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3.5xl lg:text-4xl font-extrabold text-zinc-950 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-zinc-400" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>読了予定: {post.readTime}</span>
              </span>
              <span className="text-zinc-400">|</span>
              <span>執筆者: {post.author}</span>
            </div>
          </div>

          {/* Featured cover image */}
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Description summary card */}
          <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl">
            <h3 className="text-xs font-black text-[#307c80] uppercase tracking-widest font-mono mb-2">📌 インサイトサマリー</h3>
            <p className="text-zinc-700 text-xs sm:text-sm font-semibold leading-relaxed font-sans">{post.summary}</p>
          </div>

          {/* Main chapters */}
          <div className="space-y-10 pt-4 leading-relaxed font-sans text-zinc-800 text-[13px] sm:text-[14px]">
            {post.content?.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900 border-b border-zinc-150 pb-2.5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#8edce0]/10 text-lg flex items-center justify-center">{sec.emoji || "💡"}</span>
                  <span>{sec.sectionTitle}</span>
                </h2>
                <div className="space-y-3">
                  {sec.paragraphs?.map((pStr, pIdx) => (
                    <p key={pIdx} className="font-semibold text-zinc-650 leading-relaxed">
                      {pStr}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Inline Deep CRM CTA at bottom */}
          <div className="mt-16 bg-[#1a1a1a] rounded-[2rem] p-8 text-center text-white relative overflow-hidden shadow-2xl border border-zinc-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8edce0]/10 blur-[60px] pointer-events-none" />
            <span className="text-[9px] font-black tracking-[0.45em] text-[#8edce0] uppercase font-mono block mb-3">SYNC2 EXECUTIVE BRIEFING</span>
            <h3 className="text-lg sm:text-xl font-bold mb-4 font-sans text-zinc-100">貴社のデジタル戦略、プロに診断させてみませんか？</h3>
            <p className="text-zinc-400 text-xs max-w-xl mx-auto mb-6 leading-relaxed">
              SNS運用でのCV単価最小化、AIエージェント構築、LINE自動連携など、SYNC2コアチームが完全無料でオンライン現状診断・お見積設計を行います。
            </p>
            <a 
              href="https://lin.ee/UwOZ7ho"
              className="inline-flex bg-[#8edce0] hover:bg-teal-400 text-zinc-950 font-black text-xs px-8 py-3.5 rounded-full tracking-widest cursor-pointer transition-all items-center gap-2 active:scale-95 shadow-lg select-none"
            >
              <span>LINE公式アカウントで相談する</span>
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-8 text-center border-t border-zinc-150">
            <button 
              type="button"
              onClick={() => navigate('/blog')}
              className="bg-transparent hover:bg-zinc-50 font-bold text-zinc-600 border border-zinc-200 hover:text-zinc-900 px-6 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
            >
              ブログ記事一覧へ戻る
            </button>
          </div>
        </article>
      </div>
    );
  }

  // Render blog listings mode
  const filtered = posts.filter(post => {
    const matchCat = selectedCategory === "すべて" || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-zinc-50 min-h-screen text-zinc-800 selection:bg-[#8edce0]/30 font-sans">
      <Helmet>
        <title>SYNC2 INSIGHTS | ブログ & 戦略的ナレッジハブ</title>
        <meta name="description" content="SYNC2がお届けする、SNSショート動画マーケティング戦略、決裁者リード獲得、業務DX、最新AIシステム開発に関する価値ある統合ナレッジガイドです。" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* Editorial Title banner */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] font-black tracking-[0.35em] text-[#307d80] uppercase font-mono">SYNC2 MARKETING INSIGHTS</span>
          <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            ビジネスを、自動化し、資産化する。
          </h1>
          <p className="text-zinc-500 text-xs sm:text-sm font-semibold max-w-2xl leading-relaxed">
            ブランド認知からリードナーチャリング、見積書等のバックオフィス連携、そしてシステム・インテリジェントAI連携。SYNC2チームが現場で実証している最新ノウハウを惜しみなく提示します。
          </p>
        </div>

        {/* Categories selector & search bar row */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white border border-zinc-200 p-4 rounded-3xl shadow-sm">
          <div className="flex overflow-x-auto gap-1.5 pb-2 md:pb-0 scrollbar-none font-sans font-bold text-xs select-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 h-9 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1a1a1a] text-[#8edce0]'
                    : 'bg-zinc-50 text-zinc-650 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="記事をキーワードで検索..."
              className="w-full h-9 pl-9 pr-4 bg-zinc-50 border border-zinc-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#8edce0] font-bold text-zinc-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Listings grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <p className="text-zinc-500 text-xs font-bold">検索条件に一致するインサイト記事が見つかりませんでした。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map(post => (
              <article 
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:border-zinc-300 hover:shadow-xl transition-all h-full flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="aspect-[16/10] bg-zinc-50 overflow-hidden relative border-b border-zinc-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                    />
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#1a1a1a] text-[#8edce0] text-[9px] font-black rounded tracking-widest uppercase font-mono">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-zinc-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>読了 {post.readTime}</span>
                    </div>
                    <h2 className="text-sm sm:text-base font-extrabold text-zinc-950 group-hover:text-[#307d80] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[11px] text-zinc-500 md:text-zinc-600 line-clamp-3 leading-relaxed font-semibold">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 flex justify-end">
                  <span className="text-[11px] font-black text-zinc-800 group-hover:text-[#307d80] transition-colors inline-flex items-center gap-1">
                    <span>このインサイトを読む</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-[#8edce0]/30 selection:text-[#373d43]">
      <Helmet>
        <title>SYNC2 | クリエイティブ・マーケティング・AIシステム開発</title>
        <meta name="description" content="SYNC2はブランド設計、SNSマーケティング、そして最高峰のアプリ・システム開発・AI実装を一気通貫で提供するクリエイティブテクノロジーエージェンシーです。貴社のビジネスを自動化し、資産化します。" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SYNC2" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Schema.org for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SYNC2 AGENCY",
            "url": "https://sync2.agency/",
            "logo": "https://sync2.agency/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+81-00-0000-0000",
              "contactType": "customer service",
              "areaServed": "JP",
              "availableLanguage": ["Japanese", "English"]
            }
          })}
        </script>
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sns" element={<SNSLandingPage />} />
          <Route path="/sns/:slug" element={<SNSPage />} />
          <Route path="/development" element={<TechPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blackbox-access" element={<BlackboxAccessPage />} />
        </Routes>
      </main>
      <Footer />
      
      <FloatingLINE />
      <ScrollToTopButton />
      <DigitalTipsWidget />
    </div>
  );
}
