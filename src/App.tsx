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
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { DIGITAL_TIPS } from './constants';

const Partners = () => {
  const partners = [
    "株式会社テックスター",
    "グローバルエッジ有限会社",
    "ネクストレベル株式会社",
    "フロンティアソリューション",
    "ブルーホライゾン",
    "ゼン・マーケティング"
  ];

  return (
    <section className="py-12 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-zinc-400 text-xs font-bold tracking-widest uppercase mb-8">Trusted by industry leaders</p>
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap pr-16"
          >
            {[...partners, ...partners].map((partner, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-zinc-300 hover:text-[#8edce0] transition-colors cursor-default opacity-80 hover:opacity-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#8edce0] rounded-full" />
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "田中 健太",
      title: "代表取締役",
      company: "株式会社テックスター",
      quote: "SYNC2のおかげで、SNS経由の問い合わせが3倍に増えました。単なる代行ではなく、戦略から一緒に伴走してくれるのが心強いです。",
      image: "https://picsum.photos/seed/person1/100/100"
    },
    {
      name: "佐藤 結衣",
      title: "マーケティング部長",
      company: "グローバルエッジ有限会社",
      quote: "B2B特化ということで、ニッチな業界の専門知識も理解して運用してくださり、質の高いリード獲得に繋がっています。",
      image: "https://picsum.photos/seed/person2/100/100"
    },
    {
      name: "鈴木 雅也",
      title: "営業マネージャー",
      company: "ネクストレベル株式会社",
      quote: "ブランドイメージが劇的に改善されました。特にInstagramのクリエイティブの質の高さには驚きました。",
      image: "https://picsum.photos/seed/person3/100/100"
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#8edce0] font-bold tracking-widest uppercase text-xs mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 whitespace-pre-wrap">
            導入企業様の<span className="text-[#8edce0] underline decoration-zinc-100 underline-offset-8">お声</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white border border-zinc-100 shadow-xl p-6 md:p-16">
            <Quote className="text-[#8edce0]/20 w-12 h-12 md:w-16 md:h-16 absolute top-6 left-6 md:top-12 md:left-12 -z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-lg md:text-2xl text-[#1a1a1a] font-medium leading-relaxed mb-8 md:mb-10 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full grayscale hover:grayscale-0 transition-all border-2 border-zinc-100 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] text-base md:text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-xs md:text-sm text-zinc-500">
                      {testimonials[activeIndex].title} | {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-end gap-3 mt-8">
              <button 
                onClick={prev}
                className="p-3 bg-zinc-50 hover:bg-zinc-100 text-zinc-400 hover:text-[#373d43] rounded-full transition-all border border-zinc-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="p-3 bg-[#373d43] hover:bg-[#2a2f33] text-[#8edce0] rounded-full transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all rounded-full ${
                  i === activeIndex ? 'w-8 bg-[#8edce0]' : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                }`}
              />
            ))}
          </div>
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
      <Navbar />
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
                  「このネットワークであなたのブランドを加速させましょう。今すぐLINEでSync2に相談してください。」<br />
                  現状の課題分析から最適な運用プランの提案まで、専門チームがサポートします。
                </p>
                <a 
                  href={LINE_LINK}
                  className="inline-flex items-center gap-4 bg-[#8edce0] hover:bg-[#7bc8cc] text-[#1a1a1a] px-8 md:px-12 py-5 rounded-full text-lg md:text-xl font-bold transition-all shadow-xl shadow-[#8edce0]/20 active:scale-95"
                >
                  <div className="flex flex-col items-start md:border-r border-[#1a1a1a]/10 md:pr-6">
                    <span className="text-[10px] uppercase tracking-widest opacity-70">Impulsione sua marca</span>
                    <span className="text-sm md:text-base whitespace-nowrap">今すぐSYNC2に相談する</span>
                  </div>
                  <MessageCircle className="w-6 h-6 animate-pulse" />
                </a>
                <p className="mt-4 text-zinc-500 text-sm font-medium italic">
                  "Impulsione sua marca nesta rede. Fale com a Sync2 pelo LINE agora."
                </p>
                <p className="mt-6 text-zinc-500 text-sm">※24時間受付中。順次専門スタッフが返信いたします。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const LeadMagnet = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState<string | null>(null);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setLoadingStep('送信準備中...');

    try {
      setLoadingStep('リクエストを送信しています...');

      // Send Email via Backend (Server will attach the static PDF from the public folder)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: '不明なエラー' }));
        console.error('Server-side email error:', errorData);
        const specificError = errorData.details || errorData.error || '不明なサーバーエラー';
        setErrorMessage(`送信エラー: ${specificError}`);
        throw new Error(specificError);
      } else {
        console.log('Email sent successfully');
        setIsSuccess(true);
      }
    } catch (error: any) {
      console.error('Email Submission Error:', error);
      const errorMessageString = error?.message || String(error);
      setErrorMessage(`送信中にエラーが発生しました。理由: ${errorMessageString}`);
    } finally {
      setIsSubmitting(false);
      setLoadingStep(null);
    }
  };

  return (
    <section id="download" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#8edce0] font-bold tracking-widest uppercase text-sm mb-4 block">Exclusive Resource</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              SNSを「資産」に変える<br />
              戦略資料を無料で受け取る
            </h2>
            <p className="text-zinc-600 text-lg mb-8">
              2026年度の最新トレンドと、B2B企業が勝つための具体的な運用プラン・料金体系をまとめた特別資料をプレゼントします。
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "SNSを「売上」に直結させる3つの秘策",
                "2026年度版：最新の運用プランと料金体系",
                "競合他社に差をつけるブランディング手法",
                "実際の成功事例と改善ロードマップ"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-600">
                  <CheckCircle2 className="text-[#8edce0] w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-200 via-[#8edce0] to-zinc-200" />
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleDownload} 
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2">お名前</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                      <input 
                        required
                        type="text" 
                        placeholder="山田 太郎"
                        className="w-full bg-white border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-[#1a1a1a] focus:border-[#8edce0] focus:ring-1 focus:ring-[#8edce0] transition-all outline-none placeholder:text-zinc-300"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2">会社名</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                      <input 
                        required
                        type="text" 
                        placeholder="株式会社SYNC2"
                        className="w-full bg-white border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-[#1a1a1a] focus:border-[#8edce0] focus:ring-1 focus:ring-[#8edce0] transition-all outline-none placeholder:text-zinc-300"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-2">メールアドレス</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                      <input 
                        required
                        type="email" 
                        placeholder="example@company.com"
                        className="w-full bg-white border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-[#1a1a1a] focus:border-[#8edce0] focus:ring-1 focus:ring-[#8edce0] transition-all outline-none placeholder:text-zinc-300"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-[#373d43] hover:bg-[#2a2f33] text-[#8edce0] py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-zinc-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex flex-col items-center">
                        <span className="text-sm">処理中...</span>
                        {loadingStep && <span className="text-[10px] font-normal opacity-70">{loadingStep}</span>}
                      </div>
                    ) : "資料をメールで受け取る"}
                    <Mail className="w-5 h-5" />
                  </button>
                  {errorMessage && (
                    <p className="text-red-500 text-xs text-center mt-2 font-medium bg-red-50 p-2 rounded-lg border border-red-100">
                      {errorMessage}
                    </p>
                  )}
                  <p className="text-center text-xs text-zinc-400">
                    ご入力いただいたメールアドレスに資料をお送りします。
                  </p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#8edce0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-[#8edce0] w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">送信が完了しました！</h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed">
                    戦略資料「B2B SNS戦略ガイド 2026」を<br />
                    ご入力いただいたメールアドレスにお送りしました。<br />
                    内容をご確認いただき、ぜひご活用ください。
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-[#8edce0] font-bold hover:underline"
                  >
                    ← フォームに戻る
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
            className="bg-[#373d43] hover:bg-[#2a2f33] text-[#8edce0] px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-zinc-200"
          >
            LINE公式アカウント
            <MessageCircle className="w-4 h-4" />
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
                className="bg-[#373d43] text-[#8edce0] py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3"
              >
                LINE公式アカウント
                <MessageCircle className="w-5 h-5" />
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
  const [index, setIndex] = useState(0);
  const terms = [
    "「企業の資産」",
    "「強力な営業ツール」",
    "「優秀な営業マン」",
    "「自動集客システム」",
    "「確実な収益源」",
    "「ブランドの信頼」",
    "「価値ある顧客接点」",
    "「24時間働く広報」",
    "「長期的な競争優位」",
    "「デジタル時代の武器」"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % terms.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [terms.length]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-zinc-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#8edce0]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-200/30 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white border border-zinc-200 text-[#373d43] rounded-full shadow-sm">
            B2B専門・戦略設計型SNSマーケティング
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] mb-8 max-w-4xl mx-auto leading-[1.2]">
            ただ投稿するだけのSNSは、<br />
            もう終わりにしませんか？ <br />
            SNSを
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-[#8edce0] underline decoration-zinc-200 underline-offset-8"
              >
                {terms[index]}
              </motion.span>
            </AnimatePresence>
            へ。
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            私たちは単なる「投稿代行」ではありません。B2Bの意思決定者と貴社を繋ぐ、戦略設計型のSNS運用パートナーです。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={LINE_LINK} 
              className="w-full sm:w-auto bg-[#373d43] hover:bg-[#2a2f33] text-[#8edce0] px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-zinc-200 group"
            >
              無料診断・相談を申し込む
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <p className="text-sm text-zinc-400 font-medium">
              LINEで24時間受付中
            </p>
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
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">運用開始までの<span className="text-[#8edce0] underline decoration-zinc-100 underline-offset-8">ステップ</span></h2>
        <p className="text-zinc-600">最短2週間で、貴社のSNSを「資産」へと変革させます。</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 -translate-y-1/2" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
          {[
            { step: "01", title: "ヒアリング", desc: "目標を深く理解。" },
            { step: "02", title: "現状分析", desc: "データ・競合調査。" },
            { step: "03", title: "戦略設計", desc: "KPIと導線設計。" },
            { step: "04", title: "運用開始", desc: "高品質な投稿開始。" },
            { step: "05", title: "改善サイクル", desc: "PDCAを回します。" }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex md:flex-col items-center gap-4 md:gap-0 bg-white md:bg-transparent p-4 md:p-0 rounded-2xl border border-zinc-100 md:border-none shadow-sm md:shadow-none text-left md:text-center group">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-zinc-50 md:bg-white border-2 border-zinc-100 text-[#8edce0] rounded-full flex items-center justify-center md:mx-auto font-bold group-hover:border-[#8edce0] transition-colors relative">
                {item.step}
              </div>
              <div>
                <h4 className="text-[#373d43] font-bold text-sm md:text-base md:mb-2 md:mt-6">{item.title}</h4>
                <p className="text-xs text-zinc-400 md:text-zinc-500 md:px-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => {
  const LINE_LINK = "https://lin.ee/UwOZ7ho";
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 bg-[#8edce0]/5 -z-10" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-8 tracking-tight leading-tight">
          SNSを「コスト」ではなく<br />「資産」へ。
        </h2>
        <p className="text-lg sm:text-xl text-zinc-600 mb-12">
          アルゴリズムの変化や競合の参入が激化する中、今、戦略的な運用を始める企業が、1年後の市場の主導権を握ります。
        </p>
        <a 
          href={LINE_LINK} 
          className="inline-flex items-center gap-4 bg-[#373d43] hover:bg-[#2a2f33] text-[#8edce0] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all shadow-2xl shadow-zinc-200 group"
        >
          LINEで無料相談・診断を申し込む
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </a>
        <div className="mt-12 flex items-center justify-center gap-8 opacity-30">
          <span className="text-[#1a1a1a] font-bold text-sm tracking-widest uppercase">B2B Experts</span>
          <span className="text-[#1a1a1a] font-bold text-sm tracking-widest uppercase">Global Reach</span>
          <span className="text-[#1a1a1a] font-bold text-sm tracking-widest uppercase">Data Driven</span>
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
          <a href="#" className="text-zinc-400 hover:text-[#1a1a1a] text-[10px] font-medium transition-colors">利用規約</a>
          <a href="#" className="text-zinc-400 hover:text-[#1a1a1a] text-[10px] font-medium transition-colors">プライバシー</a>
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
            className="absolute bottom-20 right-0 w-[320px] bg-white border border-zinc-100 rounded-3xl shadow-2xl p-6 overflow-hidden"
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

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Problems />
      <Solution />
      <Features />
      <Process />
      <Testimonials />
      <LeadMagnet />
      <CTA />
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-[#8edce0]/30 selection:text-[#373d43]">
      <Helmet>
        <title>SYNC2 | SNS運用を「コスト」から「収益を生み出す資産」へ</title>
        <meta name="description" content="B2B特化の戦略的SNS運用で、貴社のブランド価値を最大化します。Instagram、X、TikTok、YouTubeなど各プラットフォームの強みを活かした戦略設計から運用代行までサポート。" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SYNC2" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sns/:slug" element={<SNSPage />} />
        </Routes>
      </main>
      <Footer />
      
      <DigitalTipsWidget />
    </div>
  );
}
