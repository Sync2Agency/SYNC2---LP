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

  // Quick Mock Info fill for seamless preview/testing
  const handleAutoFill = () => {
    setFormData({
      company: '株式会社SYNCシステム',
      name: '佐藤 健太',
      email: 'kenta.sato@sync2.agency'
    });
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
      { prg: 90, text: 'メール配信システムへの送信要求完了...' },
      { prg: 100, text: 'パケットの整合性を検証、ダウンロード完了！' }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 550 + Math.random() * 250));
      setDownloadProgress(step.prg);
      setProgressText(step.text);
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
                
                {/* 1-Tap Auto-fill feature for quick mobile evaluation */}
                <div className="flex justify-center">
                  <button 
                    type="button"
                    onClick={handleAutoFill}
                    className="inline-flex items-center gap-1.5 bg-zinc-50 hover:bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full border border-zinc-200 text-[10px] sm:text-xs font-bold tracking-tight transition-all active:scale-95 cursor-pointer shadow-sm hover:border-zinc-300"
                  >
                    <Sparkles className="w-3 h-3 text-[#cbd35f] fill-[#cbd35f]/10" />
                    <span>デモお試し入力 (自動充填)</span>
                  </button>
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
                  ※ご入力頂いたメールアドレスに即時ダウンロードURL付のメールをお送りいたします。
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
                
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-zinc-950 tracking-tight">送信完了いたしました</h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed max-w-xs mx-auto">
                    ホワイトペーパーのダウンロード用リンクを 
                    <strong className="text-zinc-800 break-all font-semibold block mt-1">{formData.email}</strong>
                    宛てに送信いたしました。数分後に受信箱をご確認ください。
                  </p>
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

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-22 right-4 md:bottom-24 md:right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-md border border-zinc-100 shadow-xl rounded-full flex items-center justify-center text-[#373d43] hover:text-[#8edce0] hover:border-[#8edce0]/50 transition-all hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
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
    <p>当社は、ユーザーが本サービスを利用する際やお問い合わせをする際に、氏名、会社名、メールアドレス、電話番号などの個人情報をお尋ねすることがあります。また、ユーザーのアクセス履歴、IPアドレス、Cookie情報などを収集する場合があります。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第3条（個人情報を収集・利用する目的）</h2>
    <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>本サービスの提供・運営のため</li>
      <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
      <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
      <li>メンテナンス、重要のお知らせなど必要に応じたご連絡のため</li>
      <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
      <li>上記の利用目的に付随する目的</li>
    </ul>

    <h2 className="text-xl font-bold mt-8 mb-4">第4条（利用目的の変更）</h2>
    <p>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第5条（個人情報の第三者提供）</h2>
    <p>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
      <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
      <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
    </ul>

    <h2 className="text-xl font-bold mt-8 mb-4">第6条（アクセス解析ツール・Cookieの利用について）</h2>
    <p>当サイトでは、サービスの向上や利用状況の分析のためにGoogleアナリティクスなどのアクセス解析ツールを利用しています。これらのツールはトラフィックデータの収集のためにCookie（クッキー）を使用しています。このデータは匿名で収集されており、個人を特定するものではありません。ブラウザの設定によりCookieを無効にすることで収集を拒否することが可能です。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第7条（個人情報の開示・訂正・利用停止等）</h2>
    <p>当社は、本人から個人情報の開示、訂正、追加、削除、利用停止等を求められたときは、本人確認を行った上で、遅滞なくこれに対応します。ただし、法令に基づき対応の義務を負わない場合は、この限りではありません。</p>

    <h2 className="text-xl font-bold mt-8 mb-4">第8条（お問い合わせ窓口）</h2>
    <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
    <p className="mt-2">
      会社名：SYNC2<br />
      担当部署：プライバシーポリシー管理担当<br />
      Eメールアドレス：contact@sync2.agency
    </p>

    <h2 className="text-xl font-bold mt-8 mb-4">第9条（プライバシーポリシーの変更）</h2>
    <p>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</p>

    <p className="mt-12 text-zinc-400 text-sm">【制定日・改定日】<br />制定日：2026年4月15日</p>
  </LegalLayout>
);

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

    <h2 className="text-xl font-bold mt-8 mb-4">第9条（準拠法・裁判管轄）</h2>
    <ol className="list-decimal pl-6 space-y-2">
      <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
      <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
    </ol>

    <p className="mt-12 text-zinc-400 text-sm">【制定日・改定日】<br />制定日：2026年4月15日</p>
  </LegalLayout>
);

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  image: string;
  content: {
    emoji: string;
    sectionTitle: string;
    paragraphs: string[];
  }[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "b2b-short-videos-2026",
    title: "B2B企業が今すぐショート動画（TikTok・リール）に参入すべき理由：市場シェア争奪戦",
    category: "SNSマーケティング",
    date: "2026.06.05",
    author: "SYNC2 編集部",
    readTime: "5分",
    summary: "娯楽ツールとして見過ごされがちなショート動画ですが、B2B市場における意思決定者の接触時間は急増中。競合より一歩先に顧客を獲得するための、先行優位性の活かし方を徹底解説。",
    image: "https://picsum.photos/seed/b2b-short/800/500",
    content: [
      {
        emoji: "🚀",
        sectionTitle: "B2Bにおける動画消費行動のパラダイムシフト",
        paragraphs: [
          "2026年現在、多くのB2B企業における『ターゲット決裁者』。彼ら・彼女らも、業務情報の収集やトレンド理解の手段として日々SNS（YouTubeショート、Instagramリール、TikTok）を活用するようになっています。",
          "従来の『文字ばかりのホワイトペーパー』や『重苦しい営業資料』だけでは、相手の発注アテンションを引くのは容易ではありません。15秒〜60秒のショート動画は、直感的で効率よく情報を得られる最適な手段として機能しています。"
        ]
      },
      {
        emoji: "🔥",
        sectionTitle: "15秒で決裁者のアテンションを奪う「冒頭2秒」の公式",
        paragraphs: [
          "ショート動画の成否は開始2秒で決まります。特にB2Bでは、最初の2秒で『これ、自社の課題だ』と直感させることが不可欠です。",
          "最初に『なぜ〜なのか？』という意外な問いを投げかける、あるいは『CPAを半分にした3つのステップ』といった数字を用いたベネフィットを画面と声で伝えるなど、インパクトの強いフックが必要です。"
        ]
      },
      {
        emoji: "⚙️",
        sectionTitle: "属人性を排除した「会社資産型」としての発信設計",
        paragraphs: [
          "『属人化して担当が辞めたら動画アカウントが廃れてしまう』というのは、B2B企業によくある不安です。",
          "SYNC2では、特定の個人のタレントパワーに依存せず、会社のナレッジ（知見、成功の裏側、ビフォーアフター）をアニメーションや分かりやすいテロップ、高品質な音声ガイドを組み合わせてフォーマット化。会社の永続的な集客資産として構築します。"
        ]
      }
    ]
  },
  {
    id: "line-ai-workflow",
    title: "LINE公式アカウントを自動集客マシーンに変える最新AIワークフロー",
    category: "アプリ・AI・システム開発",
    date: "2026.05.28",
    author: "AIシステム・コア開発室",
    readTime: "8分",
    summary: "問い合わせ対応だけのLINEはもう古い。ユーザー行動に基づいたAI自動分岐と、リアルタイムなプッシュプランを組み合わせることで、成約率を最大330%高める仕組みを大公開。",
    image: "https://picsum.photos/seed/line-ai/800/500",
    content: [
      {
        emoji: "🤖",
        sectionTitle: "なぜ日本のB2B商談はLINEで加速するのか？",
        paragraphs: [
          "日本のビジネスパーソンのほぼ全員が日常的に使用しているLINE。しかしB2B領域では、未だに使いこなせている企業はわずか数%です。",
          "お役立ち資料（ホワイトペーパー）のダウンロードから即時LINEの友達登録に誘導し、そこで個別チャットを開始することで、メールに比べて到達率・開封率ともに圧倒的な数値差を叩き出すことができます。"
        ]
      },
      {
        emoji: "⚡",
        sectionTitle: "Geminiを活用した「パーソナライズ型自動チャットボット」の組み込み",
        paragraphs: [
          "SYNC2では、最先端のGemini APIを採用したB2B商談特化型の自動チャットボットを構築しています。",
          "あらかじめ設定したシナリオ分岐に加え、急な質問（例：『他社との違いは何ですか？』や『初期費用はいくらですか？』）に対しても、貴社のナレッジベースから安全かつ精度の高い解答を瞬時に生成。熱量が高いまま、スムーズに商談・デモ予約へと結びつけます。"
        ]
      },
      {
        emoji: "🎯",
        sectionTitle: "カスタマーサクセス不要論：深夜でも高精度の一次応答",
        paragraphs: [
          "B2Bの意思決定者は、深夜や早朝の静かな時間に情報収集を行う傾向があります。問い合わせフォームを送っても返事が来るのは翌営業日の午後。これでは競合に負けてしまいます。",
          "AI統合型LINEであれば、深夜0時でも1分以内に具体的な解決へのアクションを回答可能。そのままオンラインカレンダー（Google Calendar等）と完全に同期して、自動で翌週の商談予約枠を確保させることができます。"
        ]
      }
    ]
  },
  {
    id: "reduce-cpa-marketing",
    title: "CPA（顧客獲得単価）を1/4に抑えるB2Bオンライン広告のバイイング設計",
    category: "SNSマーケティング",
    date: "2026.05.15",
    author: "マーケティングアドバイザー",
    readTime: "6分",
    summary: "媒体の自動最適化だけに頼っていませんか？本当に狙うべき『ターゲット経営層』を逃さないための除外ターゲティングテクニックと、高反響の動画クリエイティブ設計の裏側。",
    image: "https://picsum.photos/seed/reduce-cpa/800/500",
    content: [
      {
        emoji: "📉",
        sectionTitle: "自動ターゲティングがB2Bで失敗する深い理由",
        paragraphs: [
          "主要なプラットフォーム（Meta広告やGoogle等）の自動最適化は強力ですが、コンバージョン（CV）単価を下げるために『関係のない一般消費者や就活生等』をたくさん呼び込んでしまい、結果的にインサイドセールスの時間を無駄にしてしまうことが多々あります。",
          "B2Bオンライン広告では、CV数を追うのではなく『アポ獲得率、および受注したか』を最適化目標にする必要があります。そのための最初のハードルがターゲット除外と精密なセグメント設計です。"
        ]
      },
      {
        emoji: "🌟",
        sectionTitle: "「経営者・役員ターゲット」を正確に割り出すためのクリエイティブ設計",
        paragraphs: [
          "B2B広告のクリエイティブは、万人受けする必要はありません。むしろ、一般の人が見たらすぐに読み飛ばすような『具体的な業界の悩み』や『業務プロセスの単語』を表出させることが大切です。",
          "あえてメッセージの抽象度を高くするのではなく、具体的に『製造業の工場長向け』『システム会社のCTO向け』という明瞭なコピーを採用することで、質の高い層だけがクリックし、無駄打ちを完全に防ぐことができます。"
        ]
      },
      {
        emoji: "💡",
        sectionTitle: "予算1日1万円から始める、スモールステップ検証フロー",
        paragraphs: [
          "『SNS広告は大金が必要なのでは？』と思われがちですが、B2Bは非常にニッチな領域のため、むしろ日額数千円〜1万円でのテストで十分なデータが得られます。",
          "1週間で3つのクリエイティブを回し、クリック率（CTR）とリード獲得率（CVR）のバランスが取れた1本の本命を見つける。そして本命クリエイティブを軸に、SNS（Instagram / Note等）に有機的に展開する、というサイクルがSYNC2プロセスの基本です。"
        ]
      }
    ]
  }
];

const BlogPage = () => {
  const seo = useSeoMeta(
    'blog',
    'SYNC2 INSIGHTS | ブログ & 最新トレンドナレッジ',
    'SYNC2がお届けする、SNSマーケティングや最新AIシステム開発に関する価値ある戦略的ノウハウ集。'
  );

  const { id } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    const existing = localStorage.getItem('sync2_blog_posts');
    if (!existing) {
      localStorage.setItem('sync2_blog_posts', JSON.stringify(BLOG_POSTS));
      setPosts(BLOG_POSTS);
    } else {
      try {
        setPosts(JSON.parse(existing));
      } catch (e) {
        setPosts(BLOG_POSTS);
      }
    }
  }, []);
  
  // Feedback state for Poll
  const [voted, setVoted] = useState<Record<string, 'yes' | 'no'>>({});
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  // Scroll target reference or percentage indicator for the active reading post
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    if (!id) {
      setReadProgress(0);
      return;
    }
    
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(100, Math.round((window.scrollY / docHeight) * 100));
        setReadProgress(pct);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const categories = ["すべて", "SNSマーケティング", "アプリ・AI・システム開発"];

  const handleShare = (postId: string) => {
    const url = `${window.location.origin}/blog/${postId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedPostId(postId);
        setTimeout(() => setCopiedPostId(null), 2500);
      }).catch(() => {});
    }
  };

  const currentPost = id ? posts.find(p => p.id === id) : null;

  if (id && !currentPost) {
    return (
      <div className="pt-32 pb-24 bg-white min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a]">記事が見つかりませんでした。</h2>
        <button 
          onClick={() => navigate('/blog')}
          className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold text-xs cursor-pointer"
        >
          ブログトップへ戻る
        </button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen select-none">
      <Helmet>
        <title>{currentPost ? `${currentPost.title} - SYNC2 INSIGHTS` : seo.title}</title>
        <meta name="description" content={currentPost ? currentPost.summary : seo.desc} />
      </Helmet>

      {/* Modern thin micro scroll visual progress bar for reading */}
      {id && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-100 z-[60]">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#8edce0] to-teal-400"
            style={{ width: `${readProgress}%` }}
          />
        </div>
      )}

      {currentPost ? (
        // DETAIL VIEW
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          {/* Back button with rich clickable target size */}
          <div className="mb-6">
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#8edce0] transition-colors text-sm font-bold h-12 px-2 hover:translate-x-[-2px] cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>記事一覧に戻る</span>
            </button>
          </div>

          <article className="space-y-6 sm:space-y-8">
            {/* Meta headers */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#8edce0]/10 text-[#8edce0] rounded-full text-xs font-black tracking-wider font-mono">
                {currentPost.category}
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] leading-tight tracking-tight">
                {currentPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono pt-2 border-b border-zinc-100 pb-5">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span>読了 {currentPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-zinc-400" />
                  <span>著者: {currentPost.author}</span>
                </div>
              </div>
            </div>

            {/* Main Visual Image Banner */}
            <div className="rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-zinc-50 border border-zinc-100 relative group">
              <img 
                src={currentPost.image} 
                alt={currentPost.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>

            {/* Read Summary Card */}
            <div className="bg-zinc-50 border-l-4 border-[#8edce0] p-5 sm:p-6 rounded-r-2xl leading-relaxed text-zinc-650 text-sm md:text-base">
              <p className="font-bold text-[#1a1a1a] mb-2 text-xs uppercase tracking-widest text-[#8edce0] font-mono">SUMMARY / 要約</p>
              {currentPost.summary}
            </div>

            {/* Render blog body content */}
            <div className="space-y-10 text-zinc-700 leading-relaxed text-sm sm:text-base md:text-lg">
              {currentPost.content.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1a1a1a] flex items-center gap-2.5 pt-4 text-zinc-950">
                    <span className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-sm md:text-base">{sec.emoji}</span>
                    <span>{sec.sectionTitle}</span>
                  </h3>
                  
                  <div className="space-y-4 text-zinc-650 text-xs sm:text-sm md:text-base pl-1 md:pl-2">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Share Trigger Widget */}
            <div className="border-t border-zinc-150 pt-8 mt-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-zinc-50 border border-zinc-100 rounded-2xl">
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-[#1a1a1a]">こちらの記事を周りに共有しませんか？</h5>
                  <p className="text-[10px] sm:text-xs text-zinc-400">社内チームや運用担当者との共有にご活用ください。</p>
                </div>
                <button 
                  onClick={() => handleShare(currentPost.id)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-white border border-zinc-150 rounded-xl text-xs font-black tracking-wider text-[#1a1a1a] hover:bg-zinc-950 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {copiedPostId === currentPost.id ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 font-bold">コピー完了！</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#8edce0]" />
                      <span>URLリンクをコピー</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Feedback Poll Widget */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-zinc-50 to-white border border-zinc-150 rounded-2xl text-center space-y-4">
              <h4 className="font-extrabold text-sm sm:text-base text-zinc-900">
                この記事は参考になりましたか？💡
              </h4>
              
              {!voted[currentPost.id] ? (
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                  <button 
                    onClick={() => setVoted({...voted, [currentPost.id]: 'yes'})}
                    className="h-12 px-6 bg-white border border-zinc-150 rounded-xl text-xs sm:text-sm font-bold text-zinc-705 hover:bg-emerald-50 hover:text-emerald-650 hover:border-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>👍 はい、とても参考になった</span>
                  </button>
                  <button 
                    onClick={() => setVoted({...voted, [currentPost.id]: 'no'})}
                    className="h-12 px-6 bg-white border border-zinc-150 rounded-xl text-xs sm:text-sm font-bold text-zinc-705 hover:bg-red-50 hover:text-red-650 hover:border-red-150 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>📖 他の情報も知りたい</span>
                  </button>
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-3.5 bg-[#8edce0]/10 text-zinc-850 text-xs sm:text-sm font-bold rounded-xl max-w-sm mx-auto shadow-sm"
                >
                  🎉 フィードバックありがとうございます！<br />
                  <span className="font-normal text-[10px] text-zinc-500 mt-1 block">皆様の声をもとに、さらに価値ある情報をお届けしてまいります。</span>
                </motion.div>
              )}
            </div>
          </article>
        </div>
      ) : (
        // LIST VIEW (Beautiful modern dashboard with horizontal swipable category tags on mobile)
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-8 sm:mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#8edce0] uppercase block font-mono">SYNC2 INSIGHTS</span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
              ブログ & トレンド解説
            </h1>
            <p className="text-zinc-550 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              日本のB2B企業がSNSや最新のデジタル自動化ワークフローを味方につけ、中長期的に集客・売上を生み出し続けるノウハウを結集。
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Search and Category block */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-zinc-100 pb-5">
              {/* Category selector - horizontally swipable on mobile! */}
              <div className="w-full md:w-auto overflow-x-auto scrollbar-none flex gap-2 pb-2 md:pb-0 scroll-smooth select-none px-2 -mx-2">
                <div className="inline-flex gap-2">
                  {categories.map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`h-10 px-4 rounded-full text-xs font-bold font-mono tracking-wide transition-all uppercase flex-shrink-0 cursor-pointer ${
                        selectedCategory === cat 
                          ? 'bg-[#1a1a1a] text-[#8edce0] shadow-md shadow-zinc-150' 
                          : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-500 border border-zinc-150'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minimal Search bar */}
              <div className="relative w-full md:w-72 lg:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="記事を検索..."
                  className="w-full h-11 pl-10 pr-4 bg-zinc-50 border border-zinc-150 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#8edce0]/30 focus:border-[#8edce0] transition-all text-zinc-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Main blog grid */}
            {(() => {
              const filtered = posts.filter(post => {
                const matchesCat = selectedCategory === "すべて" || post.category === selectedCategory;
                const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                     post.summary.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCat && matchesSearch;
              });

              if (filtered.length === 0) {
                return (
                  <div className="text-center py-16 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <p className="text-zinc-400 text-xs sm:text-sm">条件に一致する記事が見つかりませんでした。</p>
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filtered.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group bg-white border border-zinc-150 rounded-[1.8rem] overflow-hidden hover:border-[#8edce0]/45 hover:shadow-2xl hover:shadow-[#8edce0]/5 transition-all duration-350 cursor-pointer flex flex-col justify-between"
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      <div className="space-y-4">
                        {/* Image holding div */}
                        <div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                          />
                          {/* Floating Category indicator tag */}
                          <div className="absolute top-4 left-4">
                            <span className="px-2.5 py-0.5 bg-[#1a1a1a]/90 backdrop-blur-md text-[#8edce0] rounded-md text-[9px] font-black tracking-wide uppercase font-mono">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Text card metadata */}
                        <div className="px-5 space-y-2">
                          <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-zinc-450" />
                              {post.readTime}
                            </span>
                          </div>
                          
                          <h3 className="font-bold text-zinc-900 text-sm sm:text-base leading-snug group-hover:text-[#8edce0] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-zinc-450 text-[11px] sm:text-xs leading-relaxed line-clamp-3">
                            {post.summary}
                          </p>
                        </div>
                      </div>

                      {/* Footer visual indicators */}
                      <div className="px-5 pb-5 pt-4 mt-4 border-t border-[#f4f4f5] flex items-center justify-between">
                        <span className="text-[9px] font-bold text-zinc-500 group-hover:text-zinc-700 font-mono">
                          BY {post.author.toUpperCase()}
                        </span>
                        
                        <div className="inline-flex items-center gap-1 text-[11px] font-black text-[#8edce0]">
                          <span>読む</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

// Hook to sync SEO configuration across pages
const useSeoMeta = (pageKey: string, defaultTitle: string, defaultDesc: string) => {
  const [meta, setMeta] = useState({ title: defaultTitle, desc: defaultDesc });
  useEffect(() => {
    const handleSeoUpdate = () => {
      try {
        const saved = localStorage.getItem('sync2_seo_config');
        if (saved) {
          const config = JSON.parse(saved);
          if (config[pageKey]) {
            setMeta({
              title: config[pageKey].title || defaultTitle,
              desc: config[pageKey].desc || defaultDesc
            });
          }
        }
      } catch (e) {
        console.error(e);
      }
    };
    
    handleSeoUpdate();
    window.addEventListener('storage', handleSeoUpdate);
    return () => window.removeEventListener('storage', handleSeoUpdate);
  }, [pageKey, defaultTitle, defaultDesc]);
  return meta;
};

// Hidden Access Portal exclusively for SYNC2 internal operations
interface DocItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

interface BillingDoc {
  id: string;
  docType: 'estimate' | 'invoice';
  docNumber: string;
  recipient: string;
  sender: string;
  issueDate: string;
  dueDate: string;
  items: DocItem[];
  taxRate: number;
  memo?: string;
}

interface LedgerTransaction {
  id: string;
  date: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
}

const SEED_CASH_FLOW: LedgerTransaction[] = [
  { id: "tx-1", date: "2026-06-05", type: "income", category: "売上", amount: 750000, description: "SNSマーケティング 4月度配信代行" },
  { id: "tx-2", date: "2026-06-04", type: "expense", category: "外注費", amount: 150000, description: "クリエイター報酬（ショート動画4本分）" },
  { id: "tx-3", date: "2026-06-03", type: "expense", category: "クラウド経費", amount: 12000, description: "Gemini API利用料 & Hostings" },
  { id: "tx-4", date: "2026-06-01", type: "income", category: "売上", amount: 1200000, description: "LINE公式アカウント自動応答AIシステム開発 着手先" },
  { id: "tx-5", date: "2026-05-28", type: "expense", category: "広告宣伝費", amount: 200000, description: "Meta広告成果テスト出稿" },
  { id: "tx-6", date: "2026-05-25", type: "income", category: "売上", amount: 500000, description: "デジタル変革アドバイザリー" }
];

const SEED_BILLING_DOCS: BillingDoc[] = [
  {
    id: "doc-1",
    docType: "estimate",
    docNumber: "EST-2026-003",
    recipient: "港湾クリエイティブ株式会社 殿",
    sender: "SYNC2合同会社",
    issueDate: "2026/06/08",
    dueDate: "2026/07/08",
    items: [
      { id: "itm-1", name: "B2B向けSNS運用ディレクション・ショート動画12本制作", price: 450000, qty: 1 },
      { id: "itm-2", name: "LINE公式アカウント自動応答連携 AIモデル学習設定", price: 300000, qty: 1 }
    ],
    taxRate: 0.10,
    memo: "有効期限：発行日より1ヶ月間 / 最速の成果をお約束いたします。"
  },
  {
    id: "doc-2",
    docType: "invoice",
    docNumber: "INV-2026-019",
    recipient: "株式会社アオバエンタープライズ 御中",
    sender: "SYNC2合同会社",
    issueDate: "2026/06/01",
    dueDate: "2026/06/30",
    items: [
      { id: "itm-3", name: "SNS広告バイイング成果報酬（5月度運用実績）", price: 200000, qty: 1 },
      { id: "itm-4", name: "LINE公式アカウントAIチャットサポート導入構築", price: 500000, qty: 1 }
    ],
    taxRate: 0.10,
    memo: "お振込先：SYNC銀行 渋谷支店 普通 1234567 SYNC2合同会社\n※お振込手数料は貴社負担にてお願いいたします。"
  }
];

const SEED_LEADS = [
  { id: "1", company: "大和エステート株式会社", name: "高橋 聡也", email: "takahashi.s@daiwa-estate.co.jp", date: "2026/06/07", time: "18:24:11" },
  { id: "2", company: "Next Dimension Design", name: "鈴木 麻美", email: "mami_suzuki@next-d.design", date: "2026/06/06", time: "14:15:02" },
  { id: "3", company: "ミナトヘルスケアホールディングス", name: "岡本 良孝", email: "yokamoto@minato-hc.jp", date: "2026/06/05", time: "11:58:34" }
];

const BlackboxAccessPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passError, setPassError] = useState("");
  
  // Tab control
  const [activeTab, setActiveTab ] = useState<'blog' | 'seo' | 'leads' | 'docs' | 'cashflow'>('blog');
  
  // Data States
  const [leads, setLeads] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [seoConfig, setSeoConfig] = useState<Record<string, { title: string; desc: string; keywords: string }>>({});
  const [docs, setDocs] = useState<BillingDoc[]>([]);
  const [transactions, setTransactions] = useState<LedgerTransaction[]>([]);
  
  // Lead states
  const [leadSearch, setLeadSearch] = useState("");

  // Blog Editor Temp states
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    id: "",
    title: "",
    category: "SNSマーケティング",
    date: "",
    author: "SYNC2 編集部",
    readTime: "5分",
    summary: "",
    image: "",
    content: [
      { emoji: "🚀", sectionTitle: "導入・背景", paragraphs: ["内容を記述してください。"] },
      { emoji: "🔥", sectionTitle: "本質と実践メカニズム", paragraphs: ["内容を記述してください。"] },
      { emoji: "⚙️", sectionTitle: "これからの展開と導入ステップ", paragraphs: ["内容を記述してください。"] }
    ]
  });

  // SEO Editor Local state
  const [selectedSeoPage, setSelectedSeoPage] = useState<string>("home");

  // Invoice Creator Temp states
  const [showDocForm, setShowDocForm] = useState(false);
  const [viewingDoc, setViewingDoc] = useState<BillingDoc | null>(null);
  const [docForm, setDocForm] = useState<Partial<BillingDoc>>({
    docType: "estimate",
    docNumber: "",
    recipient: "",
    sender: "SYNC2合同会社",
    issueDate: "",
    dueDate: "",
    items: [],
    taxRate: 0.10,
    memo: ""
  });
  const [tempItemName, setTempItemName] = useState("");
  const [tempItemPrice, setTempItemPrice] = useState<number>(100000);
  const [tempItemQty, setTempItemQty] = useState<number>(1);

  // Cash Flow Temp States
  const [showTxForm, setShowTxForm] = useState(false);
  const [txForm, setTxForm] = useState<Partial<LedgerTransaction>>({
    date: "",
    type: "income",
    category: "売上",
    amount: 100000,
    description: ""
  });

  // Load and seed initial states
  useEffect(() => {
    // 1. Leads
    const savedLeads = localStorage.getItem('sync2_leads');
    if (!savedLeads) {
      localStorage.setItem('sync2_leads', JSON.stringify(SEED_LEADS));
      setLeads(SEED_LEADS);
    } else {
      setLeads(JSON.parse(savedLeads));
    }

    // 2. Blog Posts
    const savedBlogs = localStorage.getItem('sync2_blog_posts');
    if (!savedBlogs) {
      localStorage.setItem('sync2_blog_posts', JSON.stringify(BLOG_POSTS));
      setBlogPosts(BLOG_POSTS);
    } else {
      setBlogPosts(JSON.parse(savedBlogs));
    }

    // 3. SEO Config
    const savedSeo = localStorage.getItem('sync2_seo_config');
    const defaultSeo = {
      home: {
        title: "SYNC2 | クリエイティブ・マーケティング・AIシステム開発",
        desc: "SYNC2はブランド設計、SNSマーケティング、そして最高峰のアプリ・システム開発・AI実装を一気通貫で提供するクリエイティブテクノロジーエージェンシーです。貴社のビジネスを自動化し、資産化します。",
        keywords: "SYNC2, SNSマーケティング, AIアプリ開発, システム開発, LINE自動応答"
      },
      sns: {
        title: "SNSマーケティング | クリート動画広告と運用のプロフェッショナル - SYNC2",
        desc: "B2B企業向けショート動画(TikTok, Reels)の獲得型バイイング設計。予算1日1万円から始める、確実なリードへの最適化戦略をご提案します。",
        keywords: "Short video ads, B2B SNS marketing, TikTok, Instagram Reels, 動画バズ"
      },
      dev: {
        title: "アプリ・AI・システム開発 | 最先端AI(Gemini)とLINE連携 - SYNC2",
        desc: "LINE公式アカウントを全自動の商談獲得マシーンへと最適化する統合型AI/チャットボットシステム。強固なセキュリティと高速処理で業務プロセスを完全自動化。",
        keywords: "Generative AI system, Gemini API integration, LINE chat bot, LLM workflow"
      },
      blog: {
        title: "SYNC2 INSIGHTS | ブログ & 最新トレンドナレッジ",
        desc: "SYNC2がお届けする、SNSマーケティングや最新AIシステム開発に関する価値ある戦略的ノウハウ集。",
        keywords: "SYNC2 insights, テックブログ, マーケトレンド, 導入実績"
      }
    };
    if (!savedSeo) {
      localStorage.setItem('sync2_seo_config', JSON.stringify(defaultSeo));
      setSeoConfig(defaultSeo);
    } else {
      setSeoConfig(JSON.parse(savedSeo));
    }

    // 4. Billing Docs
    const savedDocs = localStorage.getItem('sync2_docs');
    if (!savedDocs) {
      localStorage.setItem('sync2_docs', JSON.stringify(SEED_BILLING_DOCS));
      setDocs(SEED_BILLING_DOCS);
    } else {
      setDocs(JSON.parse(savedDocs));
    }

    // 5. Cash Flow Transactions
    const savedTxs = localStorage.getItem('sync2_transactions');
    if (!savedTxs) {
      localStorage.setItem('sync2_transactions', JSON.stringify(SEED_CASH_FLOW));
      setTransactions(SEED_CASH_FLOW);
    } else {
      setTransactions(JSON.parse(savedTxs));
    }
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "sync2026") {
      setIsAuthenticated(true);
      setPassError("");
    } else {
      setPassError("認証コードが正しくありません。");
    }
  };

  const handleBypass = () => {
    setIsAuthenticated(true);
  };

  // --- Leads Triggers ---
  const handleDeleteLead = (id: string) => {
    if (window.confirm("このリード情報を削除してよろしいですか？")) {
      const filtered = leads.filter(l => l.id !== id);
      setLeads(filtered);
      localStorage.setItem('sync2_leads', JSON.stringify(filtered));
    }
  };

  const handleClearAllLeads = () => {
    if (window.confirm("すべてのリード情報(資料請求者リスト)を一括消去します。よろしいですか？")) {
      setLeads([]);
      localStorage.setItem('sync2_leads', JSON.stringify([]));
    }
  };

  const exportLeadsCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID,企業名,ご担当者名,メールアドレス,申請日,申請時間\r\n";
    leads.forEach(l => {
      csvContent += `"${l.id}","${l.company}","${l.name}","${l.email}","${l.date}","${l.time}"\r\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `sync2_leads_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- Blog Triggers ---
  const handleAddNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.id || !newPost.title) {
      alert("スラッグ(ID)とタイトルは必須です。");
      return;
    }

    const postObj: BlogPost = {
      id: newPost.id,
      title: newPost.title,
      category: newPost.category || "SNSマーケティング",
      date: newPost.date || new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
      author: newPost.author || "SYNC2 編集部",
      readTime: newPost.readTime || "5分",
      summary: newPost.summary || "",
      image: newPost.image || `https://picsum.photos/seed/${newPost.id}/800/500`,
      content: newPost.content as any
    };

    let updatedBlogs = [];
    if (editingPost) {
      // Edit mode
      updatedBlogs = blogPosts.map(b => b.id === editingPost.id ? postObj : b);
    } else {
      // Creation mode
      if (blogPosts.some(b => b.id === postObj.id)) {
        alert("そのID/スラッグはすでに存在します。");
        return;
      }
      updatedBlogs = [postObj, ...blogPosts];
    }

    setBlogPosts(updatedBlogs);
    localStorage.setItem('sync2_blog_posts', JSON.stringify(updatedBlogs));
    window.dispatchEvent(new Event('storage')); // trigger updates in navigation lists
    setShowBlogForm(false);
    setEditingPost(null);
    // Reset state
    setNewPost({
      id: "",
      title: "",
      category: "SNSマーケティング",
      date: "",
      author: "SYNC2 編集部",
      readTime: "5分",
      summary: "",
      image: "",
      content: [
        { emoji: "🚀", sectionTitle: "導入・背景", paragraphs: ["内容を記述してください。"] },
        { emoji: "🔥", sectionTitle: "本質と実践メカニズム", paragraphs: ["内容を記述してください。"] },
        { emoji: "⚙️", sectionTitle: "これからの展開と導入ステップ", paragraphs: ["内容を記述してください。"] }
      ]
    });
  };

  const handleEditBlogClick = (post: BlogPost) => {
    setEditingPost(post);
    setNewPost(post);
    setShowBlogForm(true);
  };

  const handleDeleteBlog = (id: string) => {
    if (window.confirm("この記事を削除してよろしいですか？")) {
      const filtered = blogPosts.filter(b => b.id !== id);
      setBlogPosts(filtered);
      localStorage.setItem('sync2_blog_posts', JSON.stringify(filtered));
      window.dispatchEvent(new Event('storage'));
    }
  };

  // --- SEO Triggers ---
  const handleUpdateSeo = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('sync2_seo_config', JSON.stringify(seoConfig));
    window.dispatchEvent(new Event('storage'));
    alert(`「${selectedSeoPage.toUpperCase()}」のSEO設定を保存しました。`);
  };

  const updateSelectedSeoField = (field: 'title' | 'desc' | 'keywords', val: string) => {
    setSeoConfig({
      ...seoConfig,
      [selectedSeoPage]: {
        ...seoConfig[selectedSeoPage],
        [field]: val
      }
    });
  };

  // --- Bill / Invoice Triggers ---
  const handleAddItemToDoc = () => {
    if (!tempItemName) return;
    const items = docForm.items ? [...docForm.items] : [];
    items.push({
      id: Date.now().toString(),
      name: tempItemName,
      price: tempItemPrice,
      qty: tempItemQty
    });
    setDocForm({ ...docForm, items });
    setTempItemName("");
    setTempItemPrice(100000);
    setTempItemQty(1);
  };

  const handleRemoveItemFromDoc = (itemId: string) => {
    const items = docForm.items ? docForm.items.filter(i => i.id !== itemId) : [];
    setDocForm({ ...docForm, items });
  };

  const handleSaveDoc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docForm.recipient || !docForm.docNumber) {
      alert("宛先と書面番号は必須です。");
      return;
    }

    const docObj: BillingDoc = {
      id: docForm.id || Date.now().toString(),
      docType: docForm.docType || "estimate",
      docNumber: docForm.docNumber,
      recipient: docForm.recipient,
      sender: docForm.sender || "SYNC2合同会社",
      issueDate: docForm.issueDate || new Date().toLocaleDateString('ja-JP'),
      dueDate: docForm.dueDate || new Date().toLocaleDateString('ja-JP'),
      items: docForm.items || [],
      taxRate: docForm.taxRate || 0.10,
      memo: docForm.memo
    };

    let updatedDocs = [];
    if (docForm.id) {
      updatedDocs = docs.map(d => d.id === docForm.id ? docObj : d);
    } else {
      updatedDocs = [docObj, ...docs];
    }

    setDocs(updatedDocs);
    localStorage.setItem('sync2_docs', JSON.stringify(updatedDocs));
    setShowDocForm(false);
    // Reset doc form
    setDocForm({
      docType: "estimate",
      docNumber: "",
      recipient: "",
      sender: "SYNC2合同会社",
      issueDate: "",
      dueDate: "",
      items: [],
      taxRate: 0.10,
      memo: ""
    });
  };

  const handleEditDocClick = (doc: BillingDoc) => {
    setDocForm(doc);
    setShowDocForm(true);
  };

  const handleDeleteDoc = (id: string) => {
    if (window.confirm("この書面データを削除してよろしいですか？")) {
      const filtered = docs.filter(d => d.id !== id);
      setDocs(filtered);
      localStorage.setItem('sync2_docs', JSON.stringify(filtered));
    }
  };

  // --- Cash Flow Triggers ---
  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!txForm.date || !txForm.description || !txForm.amount) {
      alert("日付、摘要、金額は必須です。");
      return;
    }

    const txObj: LedgerTransaction = {
      id: Date.now().toString(),
      date: txForm.date,
      type: txForm.type || "income",
      category: txForm.category || "売上",
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

  const handleDeleteTx = (id: string) => {
    if (window.confirm("この収支の明細レコードを削除してよろしいですか？")) {
      const filtered = transactions.filter(t => t.id !== id);
      setTransactions(filtered);
      localStorage.setItem('sync2_transactions', JSON.stringify(filtered));
    }
  };

  // Metrics for Cash Flow
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, current) => acc + current.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, current) => acc + current.amount, 0);
  const netProfit = totalIncome - totalExpense;

  // Render Authorization Shield
  if (!isAuthenticated) {
    return (
      <div className="pt-28 pb-24 bg-zinc-950 min-h-screen text-white flex flex-col justify-center items-center px-4">
        <Helmet>
          <title>SYNC2 BLACKBOX | RESTRICTED PORTAL</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          {/* Subtle neon tech grid design */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8edce0]/10 blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/5 blur-[50px] pointer-events-none" />

          <div className="text-center space-y-2">
            <span className="text-[9px] font-black tracking-[0.4em] text-[#8edce0] uppercase font-mono">INTERNAL WORKSPACE</span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-widest flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
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
                placeholder="••••••••" 
                className="w-full h-12 bg-zinc-950 border border-zinc-850 rounded-xl outline-none focus:ring-2 focus:ring-[#8edce0]/42 focus:border-[#8edce0] px-4 text-center text-sm font-mono tracking-widest text-[#8edce0]"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
              {passError && (
                <p className="text-xs text-red-400 text-center font-bold">{passError}</p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full h-12 bg-[#8edce0] hover:bg-teal-400 text-zinc-950 rounded-xl font-black text-[11px] tracking-widest uppercase transition-all duration-250 cursor-pointer shadow-lg"
            >
              ノードを承認・接続する
            </button>
          </form>

          <div className="border-t border-zinc-800/80 pt-4 text-center">
            <button 
              onClick={handleBypass}
              className="text-[10px] text-zinc-400 hover:text-white transition-colors underline cursor-pointer"
            >
              [デモ確認ゲートウェイ] ワンクリック自動認証
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Inner Connected Dashboard
  return (
    <div className="pt-28 pb-20 bg-zinc-950 min-h-screen text-zinc-100 select-none font-sans">
      <Helmet>
        <title>SYNC2 BLACKBOX | SECURE CONTROL NODE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Ribbon bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-800/80 pb-6 mb-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-black tracking-widest font-mono rounded border border-emerald-500/20 uppercase">AUTHORIZED CONNECTION LIVE</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-widest text-zinc-100 uppercase">
              SYNC2 BLACKBOX CORE
            </h1>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-mono tracking-wide">
              チーム占有コントロールプレーン: 経営・SNS・開発プロセスの完全同期
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-1.5 h-10 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-850 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>ログアウト</span>
            </button>
          </div>
        </div>

        {/* Dashboard layout with Sidebars or Header links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Inner Navigation Rail */}
          <div className="lg:col-span-3 space-y-2">
            {[
              { id: 'blog', name: '📰 ブログコンテンツ編集', count: blogPosts.length + "件" },
              { id: 'seo', name: '🚀 SEOメタ最適化', count: "4ページ" },
              { id: 'leads', name: '📊 資料ダウンロード・リード', count: leads.length + "件" },
              { id: 'docs', name: '🧾 見積書う・請求書生成', count: docs.length + "通" },
              { id: 'cashflow', name: '📈 入出金・簡易財務管理', count: `利益 ¥${netProfit.toLocaleString()}` }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setShowBlogForm(false);
                  setShowDocForm(false);
                  setShowTxForm(false);
                }}
                className={`w-full h-14 rounded-2xl flex items-center justify-between px-4 text-xs font-bold tracking-wide transition-all border text-left cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-[#8edce0]/10 border-[#8edce0]/42 text-[#8edce0] shadow-md' 
                    : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/60'
                }`}
              >
                <span>{tab.name}</span>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-zinc-950 text-zinc-500 rounded-md border border-zinc-800/60">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Module Content Container */}
          <div className="lg:col-span-9 bg-zinc-900 border border-zinc-805 rounded-3xl p-5 sm:p-6 md:p-8 space-y-6 shadow-xl min-h-[500px]">
            
            {/* 1. BLOG MANAGEMENT MODULE */}
            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/60 pb-5">
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                      <span>ブログ記事マスター編集</span>
                    </h2>
                    <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">
                      SYNC2 INSIGHTSに表示される記事をリアルタイムに作成・編集・削除できます。
                    </p>
                  </div>
                  
                  {!showBlogForm && (
                    <button 
                      onClick={() => {
                        setEditingPost(null);
                        setNewPost({
                          id: "",
                          title: "",
                          category: "SNSマーケティング",
                          date: new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
                          author: "SYNC2 編集部",
                          readTime: "5分",
                          summary: "",
                          image: "https://picsum.photos/seed/any/800/500",
                          content: [
                            { emoji: "🚀", sectionTitle: "導入・背景", paragraphs: [] },
                            { emoji: "🔥", sectionTitle: "本質と実践メカニズム", paragraphs: [] },
                            { emoji: "⚙️", sectionTitle: "これからの展開と導入ステップ", paragraphs: [] }
                          ]
                        });
                        setShowBlogForm(true);
                      }}
                      className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 h-11 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>新規記事作成</span>
                    </button>
                  )}
                </div>

                {showBlogForm ? (
                  // Create/Edit Blog Form
                  <form onSubmit={handleAddNewPost} className="space-y-5 bg-zinc-950 p-5 rounded-2xl border border-zinc-850">
                    <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                      {editingPost ? "✍️ 既存記事のアップデート" : "📝 新規トピック執筆"}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">URLスラッグ (ID) *半角英字・重複不可</label>
                        <input 
                          required
                          disabled={!!editingPost}
                          type="text"
                          placeholder="ai-system-transformation-2026"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300 disabled:opacity-40 font-mono"
                          value={newPost.id}
                          onChange={(e) => setNewPost({ ...newPost, id: e.target.value })}
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">カテゴリ</label>
                        <select 
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300"
                          value={newPost.category}
                          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                        >
                          <option value="SNSマーケティング">SNSマーケティング</option>
                          <option value="アプリ・AI・システム開発">アプリ・AI・システム開発</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">記事タイトル</label>
                      <input 
                        required
                        type="text"
                        placeholder="15秒で決裁者を虜にする超短尺クリエイティブ撮影の教科書"
                        className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-100 font-bold"
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
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300 font-mono"
                          value={newPost.date}
                          onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">想定読了時間</label>
                        <input 
                          type="text"
                          placeholder="6分"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300"
                          value={newPost.readTime}
                          onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">著者署名</label>
                        <input 
                          type="text"
                          placeholder="SYNC2 編集部"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300"
                          value={newPost.author}
                          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">アイキャッチ画像URL (Picsum等プレースホルダ可)</label>
                      <input 
                        type="text"
                        placeholder="https://picsum.photos/seed/b2b-short/800/500"
                        className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300 font-mono"
                        value={newPost.image}
                        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">要約/サマリー(カード紹介文)</label>
                      <textarea 
                        rows={3}
                        placeholder="リード文及びサマリー。カードビューで詳細ページに入る前に読まれる短い要約テキストです。"
                        className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 text-xs text-zinc-300 leading-relaxed resize-none"
                        value={newPost.summary}
                        onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })}
                      />
                    </div>

                    {/* Section blocks editor */}
                    <div className="space-y-3.5 border-t border-zinc-800/60 pt-4">
                      <h4 className="text-[10px] font-black text-teal-400 uppercase tracking-widest">📖 本文セクション構成（3章構成）</h4>
                      
                      {newPost.content?.map((sec: any, sIdx: number) => (
                        <div key={sIdx} className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl space-y-3">
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              placeholder="🚀" 
                              className="w-10 h-10 text-center bg-zinc-950 border border-zinc-800 rounded-lg text-sm"
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
                              className="flex-1 h-10 px-3 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-bold text-white outline-none focus:border-teal-400"
                              value={sec.sectionTitle}
                              onChange={(e) => {
                                const content = [...(newPost.content || [])];
                                content[sIdx] = { ...sec, sectionTitle: e.target.value };
                                setNewPost({ ...newPost, content });
                              }}
                            />
                          </div>
                          
                          <textarea 
                            rows={3}
                            placeholder="段落文章を入力してください。改行（エンター）で新たなブロックを追加できます。"
                            className="w-full p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-[11px] text-zinc-350 outline-none focus:border-teal-400 leading-relaxed resize-none font-mono"
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

                    <div className="flex justify-end gap-3 pt-3 border-t border-zinc-800/40">
                      <button 
                        type="button" 
                        onClick={() => {
                          setShowBlogForm(false);
                          setEditingPost(null);
                        }}
                        className="h-10 px-4 rounded-xl bg-zinc-900 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer"
                      >
                        キャンセル
                      </button>
                      <button 
                        type="submit" 
                        className="h-10 px-6 rounded-xl bg-[#8edce0] hover:bg-teal-400 text-zinc-900 text-xs font-black tracking-widest inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>{editingPost ? "記事を更新保存" : "新しい記事を公開"}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  // Blog posts grid-table list
                  <div className="space-y-3">
                    {blogPosts.length === 0 ? (
                      <div className="text-center py-10 bg-zinc-950 rounded-2xl border border-zinc-850">
                        <p className="text-zinc-500 text-xs">登録されているブログ記事はありません。</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        {blogPosts.map(post => (
                          <div 
                            key={post.id}
                            className="p-4 bg-zinc-950/60 border border-zinc-850 rounded-2xl hover:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                          >
                            <div className="flex gap-3.5 items-center">
                              <div className="w-16 h-12 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-800">
                                <img src={post.image} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="px-2 py-0.5 bg-[#8edce0]/10 text-[#8edce0] border border-[#8edce0]/15 rounded text-[8px] font-black tracking-wider uppercase font-mono">
                                    {post.category}
                                  </span>
                                  <span className="text-[10px] text-zinc-500 font-mono">{post.date}</span>
                                </div>
                                <h4 className="text-xs sm:text-sm font-extrabold text-zinc-200 line-clamp-1">{post.title}</h4>
                                <p className="text-[10px] text-zinc-500 font-mono">slug: /blog/{post.id}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end border-t sm:border-t-0 border-zinc-905 pt-2 sm:pt-0">
                              <button 
                                onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                                className="h-9 px-3 bg-zinc-900 hover:bg-zinc-850 hover:text-white rounded-lg text-[10px] sm:text-xs font-bold text-zinc-400 cursor-pointer"
                              >
                                表示
                              </button>
                              <button 
                                onClick={() => handleEditBlogClick(post)}
                                className="h-9 px-3 bg-zinc-900 border border-zinc-800 hover:border-teal-400 hover:text-teal-400 rounded-lg text-[10px] sm:text-xs font-bold text-zinc-400 inline-flex items-center gap-1 cursor-pointer"
                              >
                                <Edit className="w-3 h-3" />
                                <span>編集</span>
                              </button>
                              <button 
                                onClick={() => handleDeleteBlog(post.id)}
                                className="h-9 w-9 bg-zinc-900 hover:bg-red-500/10 hover:border-red-500/30 text-zinc-500 hover:text-red-400 border border-zinc-800 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
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

            {/* 2. SEO META OPTIMIZATION MODULE */}
            {activeTab === 'seo' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-2">
                    <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                    <span>SEOメタダッシュボード</span>
                  </h2>
                  <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">
                    各パブリックページのブラウザタイトル、メタディスクリプション、検索キーワードを直接制御します。
                  </p>
                </div>

                {/* Sub tabs for Page Selection */}
                <div className="flex overflow-x-auto scrollbar-none gap-2 border-b border-zinc-800/80 pb-3">
                  {[
                    { id: 'home', name: '🏠 トップページ (/) ' },
                    { id: 'sns', name: '📈 SNSマーケティング (/sns)' },
                    { id: 'dev', name: '⚙️ アプリ・AIシステム開発 (/development)' },
                    { id: 'blog', name: '📰 統合テックブログ (/blog)' }
                  ].map(page => (
                    <button
                      key={page.id}
                      type="button"
                      onClick={() => setSelectedSeoPage(page.id)}
                      className={`h-9 px-3.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        selectedSeoPage === page.id 
                          ? 'bg-zinc-100 text-zinc-950 font-black' 
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {page.name}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Editor inputs forms */}
                  <form onSubmit={handleUpdateSeo} className="space-y-4 bg-zinc-950 p-5 rounded-2xl border border-zinc-850">
                    <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-[#8edce0]" />
                      <span>{selectedSeoPage.toUpperCase()} メタ設定編集</span>
                    </h3>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono flex justify-between">
                        <span>ブラウザタグタイトル (Title)</span>
                        <span className="text-[#8edce0] font-bold">{seoConfig[selectedSeoPage]?.title?.length || 0}文字</span>
                      </label>
                      <input 
                        type="text"
                        className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-100 font-semibold"
                        value={seoConfig[selectedSeoPage]?.title || ""}
                        onChange={(e) => updateSelectedSeoField('title', e.target.value)}
                      />
                      <p className="text-[9px] text-zinc-500 leading-normal">
                        推奨：30〜55文字。GoogleのPC検索結果では50文字前後、スマートフォンでは35文字前後が表示限界になります。
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono flex justify-between">
                        <span>サイト紹介文 (Meta Description)</span>
                        <span className="text-[#8edce0] font-bold">{seoConfig[selectedSeoPage]?.desc?.length || 0}文字</span>
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 text-xs text-zinc-200 leading-relaxed resize-none"
                        value={seoConfig[selectedSeoPage]?.desc || ""}
                        onChange={(e) => updateSelectedSeoField('desc', e.target.value)}
                      />
                      <p className="text-[9px] text-zinc-500 leading-normal">
                        推奨：80〜120文字。ターゲットに解決可能価値（B2Bリード向上等）を訴求してクリック率（CTR）を高めましょう。
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">カスタムキーワード (Keywords) *カンマ区切り</label>
                      <input 
                        type="text"
                        className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300 font-mono"
                        value={seoConfig[selectedSeoPage]?.keywords || ""}
                        onChange={(e) => updateSelectedSeoField('keywords', e.target.value)}
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full h-11 bg-[#8edce0] hover:bg-teal-400 text-zinc-900 text-xs font-black tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow"
                      >
                        <Save className="w-4 h-4" />
                        <span>SEO構成を設定更新</span>
                      </button>
                    </div>
                  </form>

                  {/* High Fidelity Google SERP Visual Simulator */}
                  <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-850 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest font-mono">🔍 Google 検索結果（PC版）リアルタイム表示プレビュー</h4>
                      <p className="text-[9px] text-zinc-500 leading-normal">
                        Google検索エンジンが対象キーワード等でクロール・インデックスした場合の物理レイアウトをシミュレートしています。
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-xl shadow-inner border border-zinc-150 space-y-1 text-left">
                      <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] font-mono leading-none">
                        <span className="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center text-[7px] font-bold text-zinc-700">S2</span>
                        <span>https://sync2.agency</span>
                        <span className="text-[8px]">› {selectedSeoPage === 'home' ? 'index' : selectedSeoPage}</span>
                      </div>
                      <h5 className="text-[#1a0dab] hover:underline text-base font-normal leading-normal line-clamp-1 font-sans cursor-pointer">
                        {seoConfig[selectedSeoPage]?.title || "SYNC2 AGENCY"}
                      </h5>
                      <p className="text-[#4d5156] text-[11px] leading-relaxed line-clamp-2 font-sans pt-0.5">
                        {seoConfig[selectedSeoPage]?.desc || "SYNC2はB2B特化の次世代テクノロジーエージェンシーです。"}
                      </p>
                    </div>

                    <div className="p-4.5 bg-zinc-900 border border-zinc-850 rounded-xl space-y-2 text-zinc-400 text-[10px] leading-relaxed">
                      <span className="font-bold text-orange-400 font-mono text-[9px] uppercase tracking-wider block">🛡️ クローラ制御ディレクティブ</span>
                      <p className="font-mono text-zinc-450 leading-relaxed">
                        &lt;meta name="robots" content="noindex, nofollow" /&gt;<br />
                        ※本ブラックボックスアクセスルート以外は、標準のサイトマップと強固なインデックス連携が構築され、SEO効果は最大化されます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. LEADS (資料ダウンロード請求者) LIST MODULE */}
            {activeTab === 'leads' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/60 pb-5">
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                      <span>資料・ホワイトペーパー請求者リード台帳</span>
                    </h2>
                    <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">
                      LPの「無料ダウンロード」から申請したリード（氏名、社名、メールアドレス）です。
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <button 
                      onClick={exportLeadsCSV}
                      disabled={leads.length === 0}
                      className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 h-11 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Download className="w-4 h-4" />
                      <span>CSVで一括出力</span>
                    </button>
                    <button 
                      onClick={handleClearAllLeads}
                      disabled={leads.length === 0}
                      className="bg-transparent hover:bg-red-500/10 hover:border-red-500/30 text-zinc-400 hover:text-red-400 border border-zinc-800 px-3 h-11 rounded-xl text-xs font-bold transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      一括クリア
                    </button>
                  </div>
                </div>

                {/* Filters block */}
                <div className="relative max-w-sm">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="text" 
                    placeholder="氏名、企業名、メールアドレスで検索..."
                    className="w-full h-11 pl-10 pr-4 bg-zinc-950 border border-zinc-805 rounded-xl text-xs outline-none focus:ring-1 focus:ring-teal-400 text-zinc-350"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                  />
                </div>

                {/* Table list */}
                {(() => {
                  const filteredLeads = leads.filter(l => 
                    l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
                    l.company.toLowerCase().includes(leadSearch.toLowerCase()) ||
                    l.email.toLowerCase().includes(leadSearch.toLowerCase())
                  );

                  if (filteredLeads.length === 0) {
                    return (
                      <div className="text-center py-12 bg-zinc-950 rounded-2xl border border-zinc-855">
                        <p className="text-zinc-500 text-xs">条件に一致するリード情報が見つかりませんでした。</p>
                      </div>
                    );
                  }

                  return (
                    <div className="overflow-hidden border border-zinc-805 rounded-2xl bg-zinc-950">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead className="bg-zinc-900 border-b border-zinc-800 font-mono text-zinc-450 uppercase tracking-widest text-[9px] h-10 select-none">
                            <tr>
                              <th className="px-4 py-3 font-semibold">申請日時</th>
                              <th className="px-4 py-3 font-semibold">企業名</th>
                              <th className="px-4 py-3 font-semibold">ご担当者氏名</th>
                              <th className="px-4 py-3 font-semibold">メールアドレス</th>
                              <th className="px-4 py-3 text-right font-semibold">操作</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-850/60 font-sans text-zinc-300">
                            {filteredLeads.map((lead) => (
                              <tr 
                                key={lead.id}
                                className="hover:bg-zinc-900/40 transition-colors"
                              >
                                <td className="px-4 py-3.5 font-mono text-[10px] text-zinc-400">
                                  <span>{lead.date}</span>
                                  <span className="text-zinc-600 block mt-0.5 text-[9px]">{lead.time}</span>
                                </td>
                                <td className="px-4 py-3.5 font-bold text-zinc-200">
                                  {lead.company}
                                </td>
                                <td className="px-4 py-3.5 font-bold">
                                  {lead.name}
                                </td>
                                <td className="px-4 py-3.5 font-mono text-[11px] text-teal-300">
                                  <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                                </td>
                                <td className="px-4 py-3.5 text-right">
                                  <button 
                                    onClick={() => handleDeleteLead(lead.id)}
                                    className="h-8 w-8 bg-zinc-900 hover:bg-red-500/10 hover:border-red-500/30 text-zinc-500 hover:text-red-400 border border-zinc-800 rounded-lg inline-flex items-center justify-center cursor-pointer transition-colors"
                                    title="削除"
                                  >
                                    <Trash2 className="w-3" />
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
            )}

            {/* 4. BILLING DOCS MODULE */}
            {activeTab === 'docs' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/60 pb-5">
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                      <span>見積書 ＆ 請求書オペレーションエンジン</span>
                    </h2>
                    <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">
                      顧客宛ての見積書(Estimate)・請求書(Invoice)を瞬時に作成・複製、印刷に最適なA4ドキュメントに変換します。
                    </p>
                  </div>

                  {!showDocForm && (
                    <button 
                      onClick={() => {
                        const nextId = Date.now().toString();
                        const year = new Date().getFullYear();
                        const nextNum = `${docs.length + 1}`.padStart(3, '0');
                        setDocForm({
                          id: nextId,
                          docType: "estimate",
                          docNumber: `EST-${year}-${nextNum}`,
                          recipient: "",
                          sender: "SYNC2合同会社",
                          issueDate: new Date().toLocaleDateString('ja-JP').replace(/\//g, '/'),
                          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('ja-JP').replace(/\//g, '/'),
                          items: [],
                          taxRate: 0.10,
                          memo: "振込口座：SYNC銀行 渋谷支店 普通 1234567\n※恐れ入りますが振込手数料は御社負担にてお願い申し上げます。"
                        });
                        setShowDocForm(true);
                      }}
                      className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 h-11 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>見積書/請求書 新規作成</span>
                    </button>
                  )}
                </div>

                {showDocForm ? (
                  // Create/Edit Invoice Doc Form
                  <form onSubmit={handleSaveDoc} className="space-y-4 bg-zinc-950 p-5 rounded-2xl border border-zinc-850 text-xs text-zinc-300">
                    <h3 className="text-xs font-black text-teal-400 uppercase tracking-widest block border-b border-zinc-800/60 pb-2">
                      ✍️ 構成データ入力
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">帳票種別</label>
                        <select 
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-200"
                          value={docForm.docType}
                          onChange={(e) => {
                            const newType = e.target.value as any;
                            const prefix = newType === "estimate" ? "EST" : "INV";
                            const year = new Date().getFullYear();
                            const nextNum = `${docs.length + 1}`.padStart(3, '0');
                            setDocForm({ ...docForm, docType: newType, docNumber: `${prefix}-${year}-${nextNum}` });
                          }}
                        >
                          <option value="estimate">見積書 (Estimate)</option>
                          <option value="invoice">請求書 (Invoice)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">帳票番号</label>
                        <input 
                          required
                          type="text"
                          placeholder="EST-2026-001"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-200 font-mono"
                          value={docForm.docNumber}
                          onChange={(e) => setDocForm({ ...docForm, docNumber: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">宛先（クライアント名）</label>
                        <input 
                          required
                          type="text"
                          placeholder="株式会社Aoba 御中 (殿)"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-100 font-bold"
                          value={docForm.recipient}
                          onChange={(e) => setDocForm({ ...docForm, recipient: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">発行日</label>
                        <input 
                          type="text"
                          placeholder="2026/06/08"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300 font-mono"
                          value={docForm.issueDate}
                          onChange={(e) => setDocForm({ ...docForm, issueDate: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">
                          {docForm.docType === "estimate" ? "見積有効期限" : "お振込期日"}
                        </label>
                        <input 
                          type="text"
                          placeholder="2026/06/30"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300 font-mono"
                          value={docForm.dueDate}
                          onChange={(e) => setDocForm({ ...docForm, dueDate: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">消費税率</label>
                        <select 
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-300 font-mono"
                          value={docForm.taxRate}
                          onChange={(e) => setDocForm({ ...docForm, taxRate: Number(e.target.value) })}
                        >
                          <option value="0.10">10%（標準税率）</option>
                          <option value="0.08">8%（軽減/特例）</option>
                          <option value="0.00">0%（免税/非課税）</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">備考欄 / 振込口座案内</label>
                      <textarea 
                        rows={2}
                        className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 text-xs text-zinc-300 leading-relaxed resize-none"
                        value={docForm.memo}
                        onChange={(e) => setDocForm({ ...docForm, memo: e.target.value })}
                      />
                    </div>

                    {/* Interactive Item Builder */}
                    <div className="space-y-3 border-t border-zinc-800/40 pt-4">
                      <h4 className="text-[10px] font-black text-[#8edce0] uppercase tracking-widest">📝 明細項目追加編集</h4>
                      
                      {/* Added items list */}
                      <div className="space-y-1.5">
                        {!docForm.items || docForm.items.length === 0 ? (
                          <p className="text-zinc-500 text-[10px] italic py-2">明細が空です。以下の入力エリアから製品やサービスを追加してください。</p>
                        ) : (
                          <div className="space-y-1 bg-zinc-900 p-2.5 rounded-lg">
                            {docForm.items.map((item, idx) => (
                              <div key={item.id} className="flex items-center justify-between gap-3 text-[11px] hover:bg-zinc-950 p-1 rounded transition-colors font-mono">
                                <span className="text-zinc-400 pl-1">#{idx + 1}</span>
                                <span className="flex-1 font-bold text-zinc-200 text-left line-clamp-1">{item.name}</span>
                                <span className="w-24 text-right">¥{item.price.toLocaleString()}</span>
                                <span className="w-12 text-center">× {item.qty}</span>
                                <span className="w-24 text-right font-bold text-teal-400">¥{(item.price * item.qty).toLocaleString()}</span>
                                <button 
                                  type="button"
                                  onClick={() => handleRemoveItemFromDoc(item.id)}
                                  className="text-red-400 hover:text-red-300 px-1 font-bold h-6 flex items-center cursor-pointer"
                                >
                                  [削除]
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Line Item Inputs */}
                      <div className="flex flex-col sm:flex-row gap-2.5 items-end bg-zinc-900/60 p-3 rounded-xl border border-zinc-850/85">
                        <div className="flex-1 space-y-1 w-full">
                          <label className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest font-mono">項目名（仕様・要件等）</label>
                          <input 
                            type="text"
                            placeholder="SNS Short Video Production (12 clips)"
                            className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-2.5 text-xs text-zinc-200"
                            value={tempItemName}
                            onChange={(e) => setTempItemName(e.target.value)}
                          />
                        </div>
                        
                        <div className="w-full sm:w-36 space-y-1">
                          <label className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest font-mono">単価 (¥)</label>
                          <input 
                            type="number"
                            className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-2.5 text-xs text-zinc-200 font-mono text-right"
                            value={tempItemPrice}
                            onChange={(e) => setTempItemPrice(Number(e.target.value))}
                          />
                        </div>

                        <div className="w-full sm:w-16 space-y-1">
                          <label className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest font-mono">数量</label>
                          <input 
                            type="number"
                            className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-2.5 text-xs text-zinc-200 font-mono text-center"
                            value={tempItemQty}
                            onChange={(e) => setTempItemQty(Number(e.target.value))}
                          />
                        </div>

                        <button 
                          type="button"
                          onClick={handleAddItemToDoc}
                          className="w-full sm:w-auto h-9 px-4 rounded bg-[#8edce0]/20 text-[#8edce0] border border-[#8edce0]/30 text-[10px] font-black tracking-widest uppercase hover:bg-[#8edce0]/30 cursor-pointer"
                        >
                          明細に追加
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-3 border-t border-zinc-800/40">
                      <button 
                        type="button" 
                        onClick={() => setShowDocForm(false)}
                        className="h-10 px-4 rounded-xl bg-zinc-900 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer"
                      >
                        キャンセル
                      </button>
                      <button 
                        type="submit" 
                        className="h-10 px-6 rounded-xl bg-[#8edce0] hover:bg-teal-400 text-zinc-900 text-xs font-black tracking-widest inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <Save className="w-4 h-4" />
                        <span>構成書面を保存</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  // Document manager items grid list
                  <div className="space-y-3">
                    {docs.length === 0 ? (
                      <div className="text-center py-10 bg-zinc-950 rounded-2xl border border-zinc-850">
                        <p className="text-zinc-500 text-xs">作成された見積書・請求書はありません。</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        {docs.map(doc => {
                          const subtotal = doc.items.reduce((acc, current) => acc + (current.price * current.qty), 0);
                          const tax = Math.round(subtotal * doc.taxRate);
                          const total = subtotal + tax;

                          return (
                            <div 
                              key={doc.id}
                              className="p-4 bg-zinc-950/60 border border-zinc-850 rounded-2xl hover:border-zinc-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 transition-all"
                            >
                              <div className="flex gap-4 items-center flex-1">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border font-mono text-[10px] font-bold ${
                                  doc.docType === 'estimate' 
                                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                }`}>
                                  {doc.docType === 'estimate' ? '見積' : '請求'}
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[10px] text-zinc-500 font-mono font-bold tracking-wider">{doc.docNumber}</span>
                                    <span className="text-zinc-650">•</span>
                                    <span className="text-[10px] text-zinc-400">{doc.issueDate} 発行</span>
                                  </div>
                                  <h4 className="text-xs sm:text-sm font-extrabold text-zinc-100">{doc.recipient}</h4>
                                  <p className="text-[10px] text-zinc-500 block leading-none pt-0.5">宛先品目: {doc.items.length}行</p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 border-zinc-850 pt-3 md:pt-0">
                                <div className="text-left md:text-right">
                                  <span className="text-[8px] text-zinc-500 block uppercase tracking-widest font-mono">GRAND TOTAL</span>
                                  <span className="text-xs sm:text-sm font-black font-mono text-white">¥{total.toLocaleString()}</span>
                                </div>
                                
                                <div className="flex items-center gap-1.5">
                                  <button 
                                    onClick={() => setViewingDoc(doc)}
                                    className="h-9 px-3 bg-zinc-900 hover:bg-zinc-850 hover:text-white border border-zinc-800 rounded-lg text-xs font-bold text-zinc-300 inline-flex items-center gap-1 cursor-pointer"
                                  >
                                    <Printer className="w-3.5 h-3.5" />
                                    <span>印刷プレビュー</span>
                                  </button>
                                  <button 
                                    onClick={() => handleEditDocClick(doc)}
                                    className="h-9 w-9 bg-zinc-900 border border-zinc-820 hover:border-teal-400 hover:text-teal-400 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                                    title="編集"
                                  >
                                    <Edit className="w-3.5 h-3.5" />
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteDoc(doc.id)}
                                    className="h-9 w-9 bg-zinc-900 hover:bg-red-500/10 hover:border-red-500/30 text-zinc-500 hover:text-red-400 border border-zinc-820 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                                    title="削除"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
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

            {/* 5. CASH FLOW MODULE */}
            {activeTab === 'cashflow' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/60 pb-5">
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#8edce0] rounded-full" />
                      <span>キャッシュフロー・入出金台帳</span>
                    </h2>
                    <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">
                      収入(売上等)と支出(広告費、システム経費、委託費)を入力管理し、純キャッシュ利益を可視化します。
                    </p>
                  </div>

                  {!showTxForm && (
                    <button 
                      onClick={() => {
                        setTxForm({
                          date: new Date().toISOString().split('T')[0],
                          type: "income",
                          category: "売上",
                          amount: 300000,
                          description: ""
                        });
                        setShowTxForm(true);
                      }}
                      className="bg-[#8edce0] hover:bg-teal-400 text-zinc-950 px-4 h-11 rounded-xl text-xs font-black tracking-wider uppercase inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>収支取引レコード登録</span>
                    </button>
                  )}
                </div>

                {/* Top dynamic financial snapshot widget cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-850 text-left space-y-1">
                    <span className="text-[8px] font-bold text-zinc-550 uppercase tracking-widest block font-mono">総売上 / REVENUE</span>
                    <div className="text-sm font-mono text-emerald-450 font-bold block pt-1">
                      + ¥{totalIncome.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-850 text-left space-y-1">
                    <span className="text-[8px] font-bold text-zinc-550 uppercase tracking-widest block font-mono">総支出 / OPERATING COSTS</span>
                    <div className="text-sm font-mono text-red-400 font-bold block pt-1">
                      - ¥{totalExpense.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-zinc-950 p-4 rounded-2xl border border-teal-500/20 text-left space-y-1 shadow-md shadow-teal-500/3">
                    <span className="text-[8px] font-bold text-[#8edce0] uppercase tracking-widest block font-mono">純利益 / NET PROFIT</span>
                    <div className="text-sm font-mono text-[#8edce0] font-black block pt-1">
                      ¥{netProfit.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Custom Responsive SVG Stack percentage chart */}
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-850 space-y-3.5">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-zinc-400">📊 金流割合 (収支バランス割合)</span>
                    <span className="font-mono text-zinc-500">
                      支出比率: {totalIncome > 0 ? Math.round((totalExpense / totalIncome) * 100) : 0}%
                    </span>
                  </div>
                  
                  {/* Horizontally stack ratio bar */}
                  <div className="w-full h-4 bg-zinc-900 rounded-full overflow-hidden flex">
                    {totalIncome > 0 ? (
                      <>
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-555 to-emerald-400 transition-all duration-500"
                          style={{ width: `${Math.max(5, Math.min(95, Math.round((netProfit / totalIncome) * 100)))}%` }}
                          title={`純利益: ${Math.round((netProfit / totalIncome) * 100)}%`}
                        />
                        <div 
                          className="h-full bg-orange-500/70 transition-all duration-500"
                          style={{ width: `${Math.max(5, Math.min(95, Math.round((totalExpense / totalIncome) * 100)))}%` }}
                          title={`営業費用: ${Math.round((totalExpense / totalIncome) * 100)}%`}
                        />
                      </>
                    ) : (
                      <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-[9px] text-zinc-500 font-bold font-mono">NO FINANCIAL DATA</div>
                    )}
                  </div>

                  <div className="flex gap-4 text-[9px] font-mono text-zinc-400 justify-center">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-emerald-400" />
                      <span>利益 (¥{netProfit.toLocaleString()})</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-orange-400" />
                      <span>費用 (¥{totalExpense.toLocaleString()})</span>
                    </span>
                  </div>
                </div>

                {showTxForm && (
                  // Add Transaction Form
                  <form onSubmit={handleAddTransaction} className="space-y-4 bg-zinc-950 p-5 rounded-2xl border border-zinc-850 text-xs text-zinc-300">
                    <h3 className="text-xs font-black text-teal-400 uppercase tracking-widest pl-1 border-b border-zinc-800/60 pb-2">
                      💰 取引簿レコード登録
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">発生日</label>
                        <input 
                          required
                          type="date"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-200"
                          value={txForm.date}
                          onChange={(e) => setTxForm({ ...txForm, date: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">収支区分</label>
                        <select 
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-250"
                          value={txForm.type}
                          onChange={(e) => {
                            const type = e.target.value as any;
                            const category = type === 'income' ? '売上' : '外注費';
                            setTxForm({ ...txForm, type, category });
                          }}
                        >
                          <option value="income">収入 (+) </option>
                          <option value="expense">支出 (-) </option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">科目カテゴリ</label>
                        <select 
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-250"
                          value={txForm.category}
                          onChange={(e) => setTxForm({ ...txForm, category: e.target.value })}
                        >
                          {txForm.type === 'income' ? (
                            <>
                              <option value="売上">売上</option>
                              <option value="受取利息">受取利息</option>
                              <option value="その他">その他</option>
                            </>
                          ) : (
                            <>
                              <option value="外注費">外注費</option>
                              <option value="広告宣伝費">広告宣伝費</option>
                              <option value="クラウド経費">クラウド経費 / APIサーバー費</option>
                              <option value="人件費">人件費</option>
                              <option value="その他経費">その他経費</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">日本円取引金額 (¥)</label>
                        <input 
                          required
                          type="number"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-100 font-bold font-mono"
                          value={txForm.amount}
                          onChange={(e) => setTxForm({ ...txForm, amount: Number(e.target.value) })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">摘要（相手取引、内訳等）</label>
                        <input 
                          required
                          type="text"
                          placeholder="4月度運用代行 retainer (株式会社アオバ)"
                          className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg outline-none focus:ring-1 focus:ring-teal-400 px-3 text-xs text-zinc-200"
                          value={txForm.description}
                          onChange={(e) => setTxForm({ ...txForm, description: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-3 border-t border-zinc-800/40">
                      <button 
                        type="button" 
                        onClick={() => setShowTxForm(false)}
                        className="h-10 px-4 rounded-xl bg-zinc-900 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer"
                      >
                        キャンセル
                      </button>
                      <button 
                        type="submit" 
                        className="h-10 px-6 rounded-xl bg-[#8edce0] hover:bg-teal-400 text-zinc-900 text-xs font-black tracking-widest inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <Save className="w-4 h-4" />
                        <span>取引を保存</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* Ledger entries list */}
                <div className="overflow-hidden border border-zinc-805 rounded-2xl bg-zinc-950">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-zinc-900 border-b border-zinc-800 font-mono text-zinc-450 uppercase tracking-widest text-[9px] h-10 select-none">
                        <tr>
                          <th className="px-4 py-3 font-semibold">発生日</th>
                          <th className="px-4 py-3 font-semibold">区分</th>
                          <th className="px-4 py-3 font-semibold">科目</th>
                          <th className="px-4 py-3 flex-1 font-semibold">取引詳細・摘要</th>
                          <th className="px-4 py-3 text-right font-semibold">金額</th>
                          <th className="px-4 py-3 text-right font-semibold">操作</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-850/60 font-sans text-zinc-300">
                        {transactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-zinc-900/40 transition-colors">
                            <td className="px-4 py-3.5 font-mono text-[10px] text-zinc-400">
                              {tx.date}
                            </td>
                            <td className="px-4 py-3.5">
                              <span className={`px-2 py-0.5 rounded text-[9px] font-black ${
                                tx.type === 'income' 
                                  ? 'bg-emerald-500/10 text-emerald-450 border border-emerald-500/15' 
                                  : 'bg-orange-500/10 text-orange-400 border border-orange-500/15'
                              }`}>
                                {tx.type === 'income' ? '入金' : '出金'}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 font-bold">
                              {tx.category}
                            </td>
                            <td className="px-4 py-3.5 text-zinc-400 text-xs font-semibold">
                              {tx.description}
                            </td>
                            <td className={`px-4 py-3.5 text-right font-mono font-bold text-xs ${
                              tx.type === 'income' ? 'text-emerald-400' : 'text-orange-400'
                            }`}>
                              {tx.type === 'income' ? '+' : '-'} ¥{tx.amount.toLocaleString()}
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <button 
                                onClick={() => handleDeleteTx(tx.id)}
                                className="h-8 w-8 bg-zinc-900 hover:bg-red-500/10 hover:border-red-500/30 text-zinc-500 hover:text-red-400 border border-zinc-800 rounded-lg inline-flex items-center justify-center cursor-pointer transition-colors"
                              >
                                <Trash2 className="w-3" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* 6. MODAL: J-STYLE ESTIMATE/INVOICE PRINT PREVIEW */}
      <AnimatePresence>
        {viewingDoc && (() => {
          const subtotal = viewingDoc.items.reduce((acc, current) => acc + (current.price * current.qty), 0);
          const tax = Math.round(subtotal * viewingDoc.taxRate);
          const total = subtotal + tax;

          return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99] flex items-center justify-center p-4 overflow-y-auto select-text">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white text-zinc-900 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden aspect-[1/1.414]"
              >
                {/* Modal actions bar - Hidden on actual print window! */}
                <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-4 flex items-center justify-between print:hidden">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-zinc-700">A4 書面印刷プレビュー (Japanese Business Form Layout)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => window.print()}
                      className="bg-zinc-950 hover:bg-zinc-800 text-white h-10 px-4 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>印刷する (PDF出力)</span>
                    </button>
                    <button 
                      onClick={() => setViewingDoc(null)}
                      className="h-10 px-3 hover:bg-zinc-200 rounded-lg text-xs font-bold text-zinc-520 transition-colors cursor-pointer"
                    >
                      閉じる
                    </button>
                  </div>
                </div>

                {/* Printable core sheet frame */}
                <div className="p-8 sm:p-12 md:p-16 space-y-8 print:p-0 bg-white min-h-screen text-zinc-900 select-text font-serif">
                  
                  {/* Document Title Header */}
                  <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-black tracking-[0.4em] border-b-2 border-double border-zinc-900 pb-3 font-serif uppercase">
                      {viewingDoc.docType === 'estimate' ? '御見積書' : '御請求書'}
                    </h1>
                  </div>

                  {/* Top Header Grid layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4 font-sans text-xs">
                    {/* Left: Recipient & Grand outline */}
                    <div className="space-y-4">
                      <div className="border-b border-zinc-800 pb-1.5">
                        <p className="text-sm font-black underline underline-offset-4 decoration-zinc-400">
                          {viewingDoc.recipient}
                        </p>
                      </div>
                      
                      <p className="text-zinc-600 block leading-relaxed pt-1 font-sans text-[11px]">
                        下記の通り、慎んで報告{viewingDoc.docType === 'estimate' ? '見積' : '請求'}申し上げます。
                      </p>

                      <div className="bg-zinc-50 border border-zinc-250 p-4 rounded-xl flex items-center justify-between">
                        <span className="text-[10px] uppercase font-black text-zinc-500 tracking-wider">合計価格（税込）:</span>
                        <span className="text-lg sm:text-xl font-black text-zinc-900 font-mono">¥{total.toLocaleString()}-</span>
                      </div>
                    </div>

                    {/* Right: Sender Info + Digital Hanko Placement */}
                    <div className="flex justify-between gap-4 border-l border-zinc-150 pl-6 relative">
                      <div className="space-y-1.5 leading-relaxed text-[11px] text-zinc-700">
                        <p className="text-xs font-bold text-zinc-900 font-sans tracking-widest">{viewingDoc.sender}</p>
                        <p className="font-mono text-zinc-500">〒150-0043 東京都渋谷区道玄坂1丁目</p>
                        <p className="font-mono text-zinc-500">EMAIL: support@sync2.agency</p>
                        <p className="font-mono text-[9px] pt-1.5 text-zinc-400">帳票番号: {viewingDoc.docNumber}</p>
                        <p className="font-mono text-[9px] text-zinc-400">発行日付: {viewingDoc.issueDate}</p>
                        <p className="font-mono text-[9px] text-zinc-400">
                          {viewingDoc.docType === 'estimate' ? '見積有効' : 'お支払期'}: {viewingDoc.dueDate}
                        </p>
                      </div>

                      {/* Traditional Hanko/Stamp Vermillion Mock */}
                      <div className="w-14 h-14 border-2 border-red-500 text-red-500 rounded-md relative flex items-center justify-center font-bold text-[9px] tracking-widest leading-normal rotate-6 bg-red-500/2 opacity-90 select-none">
                        <span className="text-[14px]">印</span>
                        <div className="absolute inset-1.5 border border-dashed border-red-500/30 rounded" />
                        <span className="absolute text-[6px] font-sans -bottom-1 -right-3 text-red-400/50 block font-mono rotate-[-6deg]">SYNC2</span>
                      </div>
                    </div>
                  </div>

                  {/* Invoice Bill Items Details Table standard Japanese style */}
                  <div className="pt-6 font-sans text-[11px]">
                    <div className="border border-zinc-950 overflow-hidden">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-zinc-50 border-b border-zinc-950 text-zinc-800 text-[10px] font-bold">
                          <tr className="divide-x divide-zinc-950">
                            <th className="px-3 py-2 text-center w-10">#</th>
                            <th className="px-3 py-2">品名・仕様内容</th>
                            <th className="px-3 py-2 text-right w-24">単価 (JPY)</th>
                            <th className="px-3 py-2 text-center w-16">数量</th>
                            <th className="px-3 py-2 text-right w-28">金額 (JPY)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-950/60 font-medium">
                          {viewingDoc.items.map((item, idx) => (
                            <tr key={item.id} className="divide-x divide-zinc-950 border-b border-zinc-250 hover:bg-zinc-50/10">
                              <td className="px-3 py-2.5 text-center font-mono text-zinc-450">{idx + 1}</td>
                              <td className="px-3 py-2.5 font-bold text-zinc-850">{item.name}</td>
                              <td className="px-3 py-2.5 text-right font-mono">¥{item.price.toLocaleString()}</td>
                              <td className="px-3 py-2.5 text-center font-mono">{item.qty}</td>
                              <td className="px-3 py-2.5 text-right font-mono font-bold">¥{(item.price * item.qty).toLocaleString()}</td>
                            </tr>
                          ))}
                          
                          {/* Blank filler rows to make it look empty and official */}
                          {Array.from({ length: Math.max(0, 4 - viewingDoc.items.length) }).map((_, bIdx) => (
                            <tr key={bIdx} className="divide-x divide-zinc-950/60 border-b border-zinc-150 h-8">
                              <td className="px-3 py-1"></td>
                              <td className="px-3 py-1"></td>
                              <td className="px-3 py-1"></td>
                              <td className="px-3 py-1"></td>
                              <td className="px-3 py-1"></td>
                            </tr>
                          ))}

                          {/* Calculations summary */}
                          <tr className="divide-x divide-zinc-950 border-t border-zinc-950 font-bold">
                            <td colSpan={3} className="bg-zinc-50 font-semibold px-3 py-2 text-right">小計</td>
                            <td colSpan={2} className="px-3 py-2 text-right font-mono">¥{subtotal.toLocaleString()}</td>
                          </tr>
                          <tr className="divide-x divide-zinc-950 border-t border-zinc-200 font-bold">
                            <td colSpan={3} className="bg-zinc-50 font-semibold px-3 py-2 text-right">消費税 ({(viewingDoc.taxRate * 100)}%)</td>
                            <td colSpan={2} className="px-3 py-2 text-right font-mono">¥{tax.toLocaleString()}</td>
                          </tr>
                          <tr className="divide-x divide-zinc-950 border-t border-zinc-950 bg-zinc-50 font-black">
                            <td colSpan={3} className="font-extrabold px-3 py-2.5 text-right uppercase tracking-wider">合計金額（税込価格）</td>
                            <td colSpan={2} className="px-3 py-2.5 text-right font-mono text-xs text-zinc-950">¥{total.toLocaleString()}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Memo footer / instructions */}
                  {viewingDoc.memo && (
                    <div className="p-4 bg-zinc-50 font-sans text-[10px] leading-relaxed border border-zinc-200 rounded-lg">
                      <p className="font-bold text-zinc-650 tracking-wider text-[9px] uppercase pb-1 block font-mono">■ 備考/振込情報欄</p>
                      <pre className="whitespace-pre-wrap font-sans text-zinc-600 font-semibold">{viewingDoc.memo}</pre>
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
