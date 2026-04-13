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

const LeadMagnet = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate Multi-page PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageIds = ['pdf-page-1', 'pdf-page-2', 'pdf-page-3', 'pdf-page-4'];
    
    try {
      // Send Email via Backend
      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Server-side email error:', errorData);
        } else {
          console.log('Email request sent successfully');
        }
      })
      .catch(err => console.error('Network error sending email:', err));

      for (let i = 0; i < pageIds.length; i++) {
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
      pdf.save(`SYNC2_AGENCY_Proposal_${formData.name}.pdf`);
    } catch (error) {
      console.error('PDF Generation Error:', error);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="download" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#8edce0] font-bold tracking-widest uppercase text-sm mb-4 block">Exclusive Resource</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              SNSを「資産」に変える<br />
              戦略資料を無料で受け取る
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              2026年度の最新トレンドと、B2B企業が勝つための具体的な運用プラン・料金体系をまとめた特別資料をプレゼントします。
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "SNSを「売上」に直結させる3つの秘策",
                "2026年度版：最新の運用プランと料金体系",
                "競合他社に差をつけるブランディング手法",
                "実際の成功事例と改善ロードマップ"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-[#8edce0] w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-950 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#373d43] via-[#8edce0] to-[#373d43]" />
            
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
                    <label className="block text-sm font-medium text-zinc-400 mb-2">お名前</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                      <input 
                        required
                        type="text" 
                        placeholder="山田 太郎"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-[#8edce0] focus:ring-1 focus:ring-[#8edce0] transition-all outline-none"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">会社名</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                      <input 
                        required
                        type="text" 
                        placeholder="株式会社SYNC2"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-[#8edce0] focus:ring-1 focus:ring-[#8edce0] transition-all outline-none"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">メールアドレス</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                      <input 
                        required
                        type="email" 
                        placeholder="example@company.com"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-[#8edce0] focus:ring-1 focus:ring-[#8edce0] transition-all outline-none"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-[#8edce0] hover:bg-[#7bc8cc] text-[#373d43] py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-900/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "送信中..." : "資料をダウンロードする"}
                    <Download className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-zinc-500">
                    ご入力いただいたメールアドレスに資料をお送りします。
                  </p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-[#8edce0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-[#8edce0] w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">ありがとうございます！</h3>
                  <p className="text-zinc-400 mb-8">
                    資料のダウンロードが開始されました。<br />
                    また、ご入力いただいたメールアドレスにもお送りしました。
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-[#8edce0] font-bold hover:underline"
                  >
                    フォームに戻る
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Hidden PDF Content Template - 4 Pages */}
      <div className="fixed left-[-9999px] top-0">
        {/* Page 1 */}
        <div id="pdf-page-1" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col">
          <div className="border-b-2 border-zinc-900 pb-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">SNSマーケティング運用プランのご提案</h1>
            <p className="text-xl text-zinc-600">〜認知拡大から集客まで、一貫した戦略設計〜</p>
          </div>
          <p className="text-sm font-bold mb-16">SYNC2 AGENCY 2026年4月</p>
          
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zinc-900" />
              1. 現状のSNS運用における課題
            </h2>
            <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
              多くの企業様がSNSアカウントを開設しているものの、以下のような課題に直面し、ビジネスの成果に結びついていないケースが散見されます。
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">投稿しているが集客に繋がらない</span>
                  <p className="text-zinc-500 mt-1">フォロワー数やいいね数は増えても、実際の問い合わせや売上に直結する導線が欠如している。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">ブランドに一貫性がない</span>
                  <p className="text-zinc-500 mt-1">発信内容やクリエイティブのトーン＆マナーが統一されておらず、企業価値を正しく伝えきれていない。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">競合との差別化ができていない</span>
                  <p className="text-zinc-500 mt-1">他社と同様の発信に留まり、ユーザーに「なぜ貴社を選ぶべきか」という独自の強みが浸透していない。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">SNSが“作業”になっている</span>
                  <p className="text-zinc-500 mt-1">目的が「投稿すること」自体になっており、戦略的な仮説検証やデータに基づく改善が行われていない。</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zinc-900" />
              2. SYNC2 AGENCYが提供する解決策
            </h2>
            <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
              私たちは単なる「投稿代行」ではなく、貴社のビジネス課題を解決するための戦略設計型SNS運用を提供いたします。
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">戦略設計型SNS運用</span>
                  <p className="text-zinc-500 mt-1">ターゲット層のインサイトを深く分析し、KGI/KPIに基づいたデータドリブンな運用を実施します。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">ブランディング＋集客導線の構築</span>
                  <p className="text-zinc-500 mt-1">認知を獲得するだけでなく、ユーザーの興味を喚起し、最終的な購買や問い合わせへと導く確固たるファネルを構築します。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">日本市場に最適化されたクリエイティブ</span>
                  <p className="text-zinc-500 mt-1">トレンドを捉えつつ、ブランドの信頼感を高める高品質なクリエイティブを制作し、ユーザーの心を動かします。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Page 2 */}
        <div id="pdf-page-2" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col">
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zinc-900" />
              3. SNS運用プラン（2026年4月改定）
            </h2>
            <p className="text-sm text-zinc-600 mb-6">貴社の事業フェーズや目的に合わせて、最適なプランをご選択いただけます。</p>
            
            <table className="w-full border-collapse text-xs mb-12">
              <thead>
                <tr className="bg-zinc-50 border-y border-zinc-200">
                  <th className="p-4 text-left font-bold w-1/4">プラン名</th>
                  <th className="p-4 text-left font-bold w-1/4">月額料金（税別）</th>
                  <th className="p-4 text-left font-bold w-1/2">サービス内容</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="p-4 font-bold">Starter<br /><span className="text-[10px] font-normal text-zinc-500">（導入プラン）</span></td>
                  <td className="p-4">¥90,000</td>
                  <td className="p-4 leading-relaxed">・フィード投稿：4本／月<br />・リール動画：1本／月<br />・キャプション作成<br />・簡易企画</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-4 font-bold">Basic<br /><span className="text-[10px] font-normal text-zinc-500">（成長プラン）</span></td>
                  <td className="p-4">¥180,000</td>
                  <td className="p-4 leading-relaxed">・フィード投稿：10本／月<br />・リール動画：2本／月<br />・ストーリーズ：月4〜8本<br />・コンテンツ企画<br />・CTA設計</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-4 font-bold">Premium<br /><span className="text-[10px] font-normal text-zinc-500">（ブランディング強化プラン）</span></td>
                  <td className="p-4">¥320,000</td>
                  <td className="p-4 leading-relaxed">・フィード投稿：16本／月<br />・リール動画：4本／月<br />・ストーリーズ：定期更新<br />・戦略ミーティング（月1回）<br />・方向性設計</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="p-4 font-bold">Master<br /><span className="text-[10px] font-normal text-zinc-500">（市場確立プラン）</span></td>
                  <td className="p-4">¥480,000〜<br />¥600,000</td>
                  <td className="p-4 leading-relaxed">・フィード投稿：20本／月<br />・リール動画：8本／月<br />・ストーリーズ：高頻度<br />・キャンペーン企画<br />・市場分析・競合分析<br />・コンサルティング</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zinc-900" />
              4. プラン設計のコンセプト
            </h2>
            <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
              SYNC2 AGENCYのプランは、単なる「投稿数の違い」ではありません。貴社の「成長フェーズ」に合わせた戦略的なステップアップを前提として設計されています。
            </p>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">導入 → 成長 → 強化 → 確立 の流れ</span>
                  <p className="text-zinc-500 mt-1">まずは基盤を作り（Starter）、エンゲージメントを高め（Basic）、ブランド価値を確固たるものにし（Premium）、最終的に市場での優位性を確立する（Master）という、段階的な成長ロードマップを描きます。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">ビジネス成果に直結する設計</span>
                  <p className="text-zinc-500 mt-1">すべてのプランにおいて、最終的なコンバージョン（集客・売上）を見据えた導線設計を組み込んでおり、投資対効果（ROI）の最大化を追求します。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Page 3 */}
        <div id="pdf-page-3" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col">
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zinc-900" />
              5. SYNC2 AGENCYの強み
            </h2>
            <p className="text-sm text-zinc-600 mb-6">グローバルな視点とローカルな実行力を掛け合わせ、貴社のビジネスを加速させます。</p>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">日系×海外マーケティング対応</span>
                  <p className="text-zinc-500 mt-1">日本国内のトレンドだけでなく、海外の最新マーケティング手法を取り入れた先進的なアプローチが可能です。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">多言語対応（日本語・ポルトガル語・英語）</span>
                  <p className="text-zinc-500 mt-1">インバウンド需要の取り込みや海外展開を見据えた多言語でのアカウント運用・コンテンツ制作に強みを持っています。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">実績ベースの戦略設計</span>
                  <p className="text-zinc-500 mt-1">多様な業界での成功事例に基づき、再現性の高い戦略を立案・実行します。</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">クリエイティブと戦略の両立</span>
                  <p className="text-zinc-500 mt-1">目を引く美しいデザインと、数値を動かす緻密なマーケティング戦略を高い次元で融合させます。</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zinc-900" />
              6. 運用開始までのステップ
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-4">
                <span className="font-bold text-zinc-400">1.</span>
                <div><span className="font-bold">ヒアリング</span><p className="text-zinc-500">ビジネスモデル、課題、目標を深く理解するためのミーティングを実施します。</p></div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-zinc-400">2.</span>
                <div><span className="font-bold">現状分析</span><p className="text-zinc-500">既存アカウントのデータ分析、競合他社のリサーチ、市場動向の調査を行います。</p></div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-zinc-400">3.</span>
                <div><span className="font-bold">戦略設計</span><p className="text-zinc-500">コンセプトの策定、KPIの設定、コンテンツの方向性、集客導線の設計をまとめた戦略書を作成します。</p></div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-zinc-400">4.</span>
                <div><span className="font-bold">運用開始</span><p className="text-zinc-500">戦略に基づき、高品質なクリエイティブ制作と計画的な投稿を開始します。</p></div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-zinc-400">5.</span>
                <div><span className="font-bold">改善サイクル</span><p className="text-zinc-500">毎月のレポート提出と分析を通じ、PDCAサイクルを回して継続的なパフォーマンス向上を図ります。</p></div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-12 border-t border-zinc-100">
            <h2 className="text-xl font-bold mb-4">7. 最後に</h2>
            <p className="text-lg font-bold text-zinc-800">SNSを“コスト”ではなく“資産”へ。</p>
          </div>
        </div>

        {/* Page 4 */}
        <div id="pdf-page-4" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col justify-center text-center">
          <div className="max-w-lg mx-auto">
            <p className="text-sm leading-relaxed text-zinc-600 mb-12 text-left">
              現代のビジネスにおいて、SNSは単なる広告媒体ではなく、顧客との信頼関係を築き、長期的な利益を生み出す重要な「企業資産」です。アルゴリズムの変化や競合の参入が激化する中、今、戦略的な運用を始める企業が、1年後の市場の主導権を握ります。
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 mb-16 text-left">
              SYNC2 AGENCYは、貴社のビジョンに共鳴し、共に成長を目指す強力なパートナーとして尽力いたします。ぜひ、貴社のビジネスの飛躍に向けた第一歩を、私たちにお任せください。
            </p>
            <div className="pt-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold tracking-tighter">SYNC2 AGENCY</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const LINE_LINK = "https://lin.ee/UwOZ7ho";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#problemas", label: "課題" },
    { href: "#solucao", label: "解決策" },
    { href: "#diferenciais", label: "強み" },
    { href: "#processo", label: "プロセス" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-[#373d43]" />
              <div className="w-1/2 h-full bg-[#8edce0]" />
            </div>
            <div className="relative w-4 h-4 bg-white rotate-45 z-10" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">SYNC2 <span className="text-[#8edce0]">AGENCY</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={LINE_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex bg-[#8edce0] hover:bg-[#7bc8cc] text-[#373d43] px-6 py-2.5 rounded-full text-sm font-bold transition-all items-center gap-2 shadow-lg shadow-cyan-900/20"
          >
            LINEで相談
            <ArrowRight className="w-4 h-4" />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-zinc-900 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href={LINE_LINK} 
                className="bg-[#8edce0] text-[#373d43] px-6 py-4 rounded-xl text-center font-bold text-lg"
              >
                LINEで無料相談
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
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#8edce0]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#373d43]/20 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-zinc-900 border border-zinc-800 text-[#8edce0] rounded-full">
            B2B専門・戦略設計型SNSマーケティング
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.2]">
            ただ投稿するだけのSNSは、<br />
            もう終わりにしませんか？ <br />
            SNSを<span className="text-[#8edce0]">「企業の資産」</span>へ。
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            私たちは単なる「投稿代行」ではありません。B2Bの意思決定者と貴社を繋ぐ、戦略設計型のSNS運用パートナーです。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={LINE_LINK} 
              className="w-full sm:w-auto bg-[#8edce0] hover:bg-[#7bc8cc] text-[#373d43] px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-900/30 group"
            >
              無料診断・相談を申し込む
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <p className="text-sm text-zinc-500 font-medium">
              LINEで24時間受付中
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Problems = () => (
  <section id="problemas" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          SNSの運用で、こんな<span className="text-[#8edce0]">お悩み</span>ありませんか？
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
            className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl text-center group hover:border-[#8edce0]/30 transition-all"
          >
            <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-[#8edce0] group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-[#373d43]/30 border border-zinc-800 rounded-3xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-white mb-4">戦略なきSNSは、ただの「コスト」です。</h4>
            <p className="text-zinc-400">
              多くのB2B企業がSNSに時間と費用を投じながらも、実質的な成果を得られていません。私たちは、ただ投稿するだけの運用から、売上に直結する「資産」としての運用へと変革させます。
            </p>
          </div>
          <div className="shrink-0">
            <div className="bg-[#8edce0] text-[#373d43] px-8 py-4 rounded-2xl font-bold">
              SYNC2が解決します
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solucao" className="py-24 border-y border-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SYNC2の運用サポート</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          単なる投稿代行ではなく、貴社のビジネス課題を解決するための戦略的なインフラを構築します。
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { 
            icon: <PieChart className="w-8 h-8" />, 
            title: "月1回のレポート提出", 
            desc: "想定したターゲットにリーチできているか、アカウントの運営目的と現状に見合ったその時々にマッチした内容の投稿をする必要があります。実際の数値データからPDCAを回してSNSアカウントを通して成果獲得につなげるまでを実現します。" 
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
            className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-[#8edce0]/50 transition-all group"
          >
            <div className="mb-6 text-[#8edce0] group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Supported SNS Section */}
      <div className="pt-24 border-t border-zinc-900">
        <div className="text-center mb-16">
          <span className="text-[#8edce0] font-bold tracking-widest uppercase text-xs mb-4 block">Tool</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">運用可能なSNS</h2>
          <p className="text-zinc-400">SNSは重要な集客・情報発信ツールに！しかも低コストで販促をかけることができます。</p>
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
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-lg text-[#8edce0]">
                  {sns.icon}
                </div>
                <span className="font-bold text-white">{sns.name}</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">{sns.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="diferenciais" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">一般的な広告代理店との<span className="text-[#8edce0]">違い</span></h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="p-6 text-left bg-zinc-900/50 border border-zinc-800 text-zinc-400 font-bold rounded-tl-3xl">項目</th>
              <th className="p-6 text-center bg-[#373d43] border border-zinc-800 text-white font-bold">一般的な代理店</th>
              <th className="p-6 text-center bg-[#8edce0] border border-zinc-800 text-[#373d43] font-bold rounded-tr-3xl">SYNC2 AGENCY</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "広告運用体制", general: "担当者の能力に依存", sync2: "業界特化チーム×リソース集約" },
              { item: "プランニング", general: "画一的なメソッドを利用", sync2: "お客様ごとにプランニング" },
              { item: "成果指標", general: "CPA", sync2: "CPA、ROAS、ROI、LTV" },
              { item: "コンサルティング", general: "対応不可もしくは別途費用", sync2: "手数料内で対応" },
              { item: "サイト制作/改善", general: "外注", sync2: "累計1,000本以上の制作実績" },
              { item: "クリエイティブ制作/改善", general: "外注", sync2: "月間1,000本以上の制作実績" },
              { item: "成果分析・改善提案", general: "月に1度", sync2: "週次/月次での最適化" }
            ].map((row, i) => (
              <tr key={i} className="group">
                <td className="p-6 bg-zinc-900/30 border border-zinc-800 text-white font-bold">{row.item}</td>
                <td className="p-6 bg-zinc-900/10 border border-zinc-800 text-zinc-500 text-center">
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-blue-400">▲</span> {row.general}
                  </span>
                </td>
                <td className="p-6 bg-[#8edce0]/5 border border-[#8edce0]/20 text-white text-center font-bold group-hover:bg-[#8edce0]/10 transition-colors">
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-[#8edce0]">○</span> {row.sync2}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-24 bg-[#373d43] rounded-3xl p-12 md:p-20 relative overflow-hidden border border-zinc-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8edce0]/10 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              なぜ、B2B企業に<br />選ばれるのか？
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <Languages className="text-[#8edce0] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">多言語・グローバル対応</h4>
                  <p className="text-zinc-400">日本語・英語・ポルトガル語に対応。インバウンド需要の取り込みや海外展開も見据えた運用が可能です。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <Globe className="text-[#8edce0] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">グローバルな視点 × ローカルな実行力</h4>
                  <p className="text-zinc-400">海外の最新マーケティング手法と、日本国内のトレンドを掛け合わせた先進的なアプローチを提供します。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5">
              <p className="text-3xl sm:text-4xl font-bold text-[#8edce0] mb-2">100%</p>
              <p className="text-zinc-500 text-sm">B2B特化型戦略</p>
            </div>
            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5">
              <p className="text-3xl sm:text-4xl font-bold text-[#8edce0] mb-2">+5</p>
              <p className="text-zinc-500 text-sm">業界経験年数</p>
            </div>
            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5">
              <p className="text-3xl sm:text-4xl font-bold text-[#8edce0] mb-2">24/7</p>
              <p className="text-zinc-500 text-sm">戦略的モニタリング</p>
            </div>
            <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5">
              <p className="text-3xl sm:text-4xl font-bold text-[#8edce0] mb-2">ROI</p>
              <p className="text-zinc-500 text-sm">投資対効果の最大化</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="processo" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">運用開始までのステップ</h2>
        <p className="text-zinc-400">確実な成果を創出するため、丁寧な準備期間を設けております。</p>
      </div>
      
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: "01", title: "ヒアリング", desc: "ビジネスモデル、課題、目標を深く理解します。" },
            { step: "02", title: "現状分析", desc: "既存アカウントのデータ分析と競合調査を行います。" },
            { step: "03", title: "戦略設計", desc: "KPI設定と集客導線の設計をまとめた戦略書を作成。" },
            { step: "04", title: "運用開始", desc: "高品質なクリエイティブ制作と計画的な投稿を開始。" },
            { step: "05", title: "改善サイクル", desc: "毎月のレポート提出と分析を通じ、PDCAを回します。" }
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center group">
              <div className="w-12 h-12 bg-zinc-900 border-2 border-zinc-800 text-[#8edce0] rounded-full flex items-center justify-center mx-auto mb-6 font-bold group-hover:border-[#8edce0] transition-colors relative">
                {item.step}
                {/* Mobile vertical line */}
                {i < 4 && <div className="md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-zinc-800 -translate-x-1/2" />}
              </div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#8edce0]/5 -z-10" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          SNSを「コスト」ではなく<br />「資産」へ。
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-12">
          アルゴリズムの変化や競合の参入が激化する中、今、戦略的な運用を始める企業が、1年後の市場の主導権を握ります。
        </p>
        <a 
          href={LINE_LINK} 
          className="inline-flex items-center gap-4 bg-[#8edce0] hover:bg-[#7bc8cc] text-[#373d43] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all shadow-2xl shadow-cyan-900/40 group"
        >
          LINEで無料相談・診断を申し込む
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </a>
        <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale">
          <span className="text-white font-bold text-sm tracking-widest uppercase">B2B Experts</span>
          <span className="text-white font-bold text-sm tracking-widest uppercase">Global Reach</span>
          <span className="text-white font-bold text-sm tracking-widest uppercase">Data Driven</span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-md">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full bg-[#373d43]" />
            <div className="w-1/2 h-full bg-[#8edce0]" />
          </div>
          <div className="relative w-3 h-3 bg-white rotate-45 z-10" />
        </div>
        <span className="text-lg font-bold text-white">SYNC2 AGENCY</span>
      </div>
      <p className="text-zinc-600 text-sm">
        © 2026 SYNC2 AGENCY. All rights reserved.
      </p>
      <div className="flex gap-6 text-zinc-500 text-sm">
        <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
        <a href="#" className="hover:text-white transition-colors">利用規約</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-blue-500/30 selection:text-blue-200">
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
      
      {/* Floating LINE Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="https://lin.ee/UwOZ7ho" 
          className="w-14 h-14 bg-[#06c755] rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 animate-bounce"
        >
          <MessageCircle className="text-white w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
