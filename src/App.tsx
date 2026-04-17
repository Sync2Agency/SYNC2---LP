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
  Quote
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

      <div className="relative h-[650px] w-full flex items-center justify-center">
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
                    x: `${position * 360}px`, // 320px width + 40px gap
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : 0.4,
                    zIndex: 10 - Math.abs(position),
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute w-full max-w-[320px] bg-white rounded-[2rem] border border-zinc-100 shadow-2xl overflow-hidden cursor-pointer touch-none"
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Simulate API call for now since we are in a demo mode unless real email is requested
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error: any) {
      setErrorMessage("送信中にエラーが発生しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="download" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1a1a1a] rounded-[3rem] p-8 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8edce0]/10 blur-[100px] -z-10" />
          
          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/5">
               <FileText className="w-4 h-4 text-[#8edce0]" />
               <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-300">Free Whitepaper</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              B2B企業のための<br />
              <span className="text-[#8edce0]">SNS戦略・完全ガイド</span>
            </h2>
            <p className="text-zinc-400 mb-10 text-base md:text-lg leading-relaxed max-w-xl">
              2026年の最新アルゴリズムを反映。B2Bにおけるリード獲得の秘訣を、11ページにわたる独自の知見とともに無料公開します。
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "SNSを「資産」に変える3つの鉄則",
                "決裁者に刺さるクリエイティブの作り方",
                "CPAを50%削減した実事例の舞台裏"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="p-1 bg-[#8edce0] rounded-full"><CheckCircle2 className="w-3 h-3 text-[#1a1a1a]" /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[450px] bg-white text-[#1a1a1a] p-8 md:p-12 rounded-[2.5rem] shadow-2xl z-10">
            {!isSuccess ? (
              <>
                <h3 className="text-xl font-bold mb-8 text-center">今すぐ無料でダウンロード</h3>
                <form onSubmit={handleDownload} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Company Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="株式会社〇〇"
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-[#8edce0] focus:border-transparent outline-none transition-all text-sm"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="山田 太郎"
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-[#8edce0] focus:border-transparent outline-none transition-all text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="business@example.com"
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-[#8edce0] focus:border-transparent outline-none transition-all text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl hover:bg-[#373d43] disabled:opacity-50"
                  >
                    {isSubmitting ? '処理中...' : '資料をダウンロード'}
                    <Download className="w-5 h-5" />
                  </button>
                  {errorMessage && <p className="text-red-500 text-[10px] font-bold text-center mt-2">{errorMessage}</p>}
                </form>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-[#8edce0]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-[#8edce0]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">送信完了</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  資料をメールでお送りしました。数分経っても届かない場合は、恐れ入りますがお問い合わせください。
                </p>
              </div>
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
  const LINE_LINK = "https://lin.ee/UwOZ7ho";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg border-b border-zinc-100 py-3' : 'bg-transparent py-5'
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
          {[
            { name: "課題", id: "problemas" },
            { name: "解決策", id: "solucao" },
            { name: "特徴", id: "diferenciais" },
            { name: "プロセス", id: "processo" }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="text-sm font-bold text-zinc-600 hover:text-[#8edce0] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href={LINE_LINK} 
            className="bg-[#1a1a1a] hover:bg-[#373d43] text-[#8edce0] px-6 py-2.5 rounded-full text-sm font-black transition-all flex items-center gap-2 shadow-lg shadow-zinc-200 active:scale-95 group"
          >
            <span>無料相談はこちら</span>
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
              {[
                { name: "課題", id: "problemas" },
                { name: "解決策", id: "solucao" },
                { name: "特徴", id: "diferenciais" },
                { name: "プロセス", id: "processo" }
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="text-lg font-bold text-zinc-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
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
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] max-w-[320px] bg-white border border-zinc-100 rounded-3xl shadow-2xl p-6 overflow-hidden md:w-[320px]"
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
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-md border border-zinc-100 shadow-xl rounded-full flex items-center justify-center text-[#373d43] hover:text-[#8edce0] hover:border-[#8edce0]/50 transition-all hover:scale-110 active:scale-95 group"
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
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#8edce0] overflow-hidden bg-zinc-800">
                 <img src="/ceo.jpg" className="w-full h-full object-cover" alt="CEO" />
              </div>
              <div>
                <p className="font-bold">佐藤 ルイス</p>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">LUIZ SATO</p>
              </div>
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
          className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[60] flex items-center gap-2 md:gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white px-4 md:pl-4 md:pr-6 py-2.5 md:py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
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

const Home = () => {
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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-[#8edce0]/30 selection:text-[#373d43]">
      <Helmet>
        <title>SYNC2 | B2B専門SNSマーケティング・戦略運用代行</title>
        <meta name="description" content="B2B特化の戦略的SNS運用で、SNSを「コスト」から「収益を生み出す資産」へ。Instagram、X、TikTok、LinkedInなど、各プラットフォームの強みを活かした戦略設計から運用代行までサポート。" />
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
          <Route path="/sns/:slug" element={<SNSPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      
      <FloatingLINE />
      <ScrollToTopButton />
      <DigitalTipsWidget />
    </div>
  );
}
