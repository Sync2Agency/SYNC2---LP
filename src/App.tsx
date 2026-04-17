/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PDFTemplate from './components/PDFTemplate';

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
    setLoadingStep('PDFを生成しています...');

    // Generate Multi-page PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageIds = [
      'pdf-page-1', 'pdf-page-2', 'pdf-page-3', 'pdf-page-4', 'pdf-page-5', 
      'pdf-page-6', 'pdf-page-7', 'pdf-page-8', 'pdf-page-9', 'pdf-page-10', 'pdf-page-11'
    ];
    
    let currentError: string | null = null;

    try {
      for (let i = 0; i < pageIds.length; i++) {
        setLoadingStep(`PDFページを生成中: ${i + 1}/11`);
        const element = document.getElementById(pageIds[i]);
        if (element) {
          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false
          });
          
          const imgData = canvas.toDataURL('image/png');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        }
      }

      const pdfBase64 = pdf.output('datauristring');
      const fileName = `SYNC2_AGENCY_Strategy_Guide_${formData.name}.pdf`;

      setLoadingStep('メールを送信しています...');

      // Send Email with PDF Attachment via Backend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pdfData: pdfBase64,
          fileName: fileName
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server-side email error:', errorData);
        const specificError = errorData.details || errorData.error || '不明なサーバーエラー';
        currentError = `送信エラー: ${specificError}`;
        setErrorMessage(currentError);
        throw new Error(currentError);
      } else {
        console.log('Email sent successfully with PDF attachment');
        setIsSuccess(true);
      }
    } catch (error: any) {
      console.error('PDF/Email Error:', error);
      const errorMessageString = error?.message || String(error);
      setErrorMessage(`PDF生成または送信中にエラーが発生しました。理由: ${errorMessageString}`);
    } finally {
      setIsSubmitting(false);
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

      <div className="fixed left-[-9999px] top-0">
        <PDFTemplate />
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
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-md transition-transform group-hover:scale-110">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-[#373d43]" />
              <div className="w-1/2 h-full bg-[#8edce0]" />
            </div>
            <div className="relative w-3 h-3 bg-white rotate-45 z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">SYNC2</span>
        </div>

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

        <button className="md:hidden text-[#373d43]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Instagram className="w-6 h-6" />, name: "Instagram", desc: "画像や動画の投稿に特化している。興味関心によって大きく内容が偏るため、ターゲットにリーチできればより効果を期待しやすい。" },
            { icon: <Music2 className="w-6 h-6" />, name: "TikTok", desc: "音楽に合わせた短い動画を撮影・加工し、ハッシュタグなどを付けて共有することができる。おすすめ機能で好みに合ったコンテンツが流れるため1つの投稿が伸びやすい。" },
            { icon: <Twitter className="w-6 h-6" />, name: "X", desc: "拡散性の高さがポイント。Xには「いいね」ボタンや「リポスト（旧リツイート）」、引用機能などがあり、簡単に投稿をシェアできる。またリンク設定もできるためWEBの拡散も可能。" },
            { icon: <AtSign className="w-6 h-6" />, name: "Threads", desc: "Meta社が開発して2023年7月6日にサービスの提供が始まったテキスト共有アプリ。Instagramと連携していてアプリ間での流入がある。" },
            { icon: <Facebook className="w-6 h-6" />, name: "Facebook", desc: "自分の近況などを投稿して友達や知り合いと共有することができ、文章や写真、動画、URLなどを投稿できる。個人のページだけでなく、ビジネスページもあり、企業も情報を発信することが可能。" },
            { icon: <Youtube className="w-6 h-6" />, name: "Youtube", desc: "ユーザーの年代が広い。また、動画の長さを自由に設定でき、コンテンツも音楽やゲーム実況、スポーツ、子ども向け番組などジャンルが豊富。" },
            { icon: <MessageCircle className="w-6 h-6" />, name: "LINE", desc: "チャット型のアプリ。既存顧客の囲い込みで活用可能。動画や画像、WEBリンクなど配信でコンテンツは様々。" }
          ].map((sns, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-6 bg-white border border-zinc-100 rounded-2xl flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-50 rounded-lg text-[#8edce0]">
                  {sns.icon}
                </div>
                <span className="font-bold text-[#373d43]">{sns.name}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{sns.desc}</p>
            </motion.div>
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

      <div className="overflow-x-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: "01", title: "ヒアリング", desc: "ビジネスモデル、課題、目標を深く理解します。" },
            { step: "02", title: "現状分析", desc: "既存アカウントのデータ分析と競合調査を行います。" },
            { step: "03", title: "戦略設計", desc: "KPI設定と集客導線の設計をまとめた戦略書を作成。" },
            { step: "04", title: "運用開始", desc: "高品質なクリエイティブ制作と計画的な投稿を開始。" },
            { step: "05", title: "改善サイクル", desc: "毎月のレポート提出と分析を通じ、PDCAを回します。" }
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center group">
              <div className="w-12 h-12 bg-white border-2 border-zinc-100 text-[#8edce0] rounded-full flex items-center justify-center mx-auto mb-6 font-bold group-hover:border-[#8edce0] transition-colors relative shadow-sm">
                {item.step}
                {/* Mobile vertical line */}
                {i < 4 && <div className="md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-zinc-200 -translate-x-1/2" />}
              </div>
              <h4 className="text-[#373d43] font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-zinc-500 px-4 mb-8 md:mb-0">{item.desc}</p>
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
  <footer className="py-12 border-t border-zinc-100 bg-zinc-50">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-md">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full bg-[#373d43]" />
            <div className="w-1/2 h-full bg-[#8edce0]" />
          </div>
          <div className="relative w-3 h-3 bg-white rotate-45 z-10" />
        </div>
        <span className="text-lg font-bold text-[#1a1a1a]">SYNC2</span>
      </div>
      <p className="text-zinc-500 text-sm">
        © 2026 SYNC2. All rights reserved.
      </p>
      <div className="flex gap-6 text-zinc-400 text-sm">
        <a href="#" className="hover:text-[#373d43] transition-colors">プライバシーポリシー</a>
        <a href="#" className="hover:text-[#373d43] transition-colors">利用規約</a>
      </div>
    </div>
  </footer>
);

import { DIGITAL_TIPS } from './constants';

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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-[#8edce0]/30 selection:text-[#373d43]">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Features />
        <Process />
        <LeadMagnet />
        <CTA />
      </main>
      <Footer />
      
      <DigitalTipsWidget />
    </div>
  );
}
