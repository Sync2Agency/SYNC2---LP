import React from 'react';
import { CheckCircle2, X, Download, Globe, ShieldCheck, Target, MessageCircle } from 'lucide-react';

const PDFTemplate = () => {
  return (
    <>
      {/* Page 1: Cover */}
      <div id="pdf-page-1" className="w-[210mm] h-[297mm] bg-[#1a1c2e] text-white p-[20mm] font-sans flex flex-col relative overflow-hidden">
        <div className="flex justify-between items-center mb-24 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#1a1c2e] rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-sm">SYNC2</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60">B2B SNS STRATEGY GUIDE 2026 — COMPLETE EDITION</span>
        </div>

        <div className="relative z-10 mt-12">
          <div className="inline-block bg-[#8edce0]/20 text-[#8edce0] px-4 py-1 rounded-full text-[10px] font-bold tracking-widest mb-6">
            EXCLUSIVE B2B PLAYBOOK · JAPAN MARKET EDITION
          </div>
          <p className="text-[#8edce0] text-xs font-bold tracking-[0.3em] mb-4">PRACTICAL PLAYBOOK FOR B2B DECISION MAKERS</p>
          <h1 className="text-6xl font-bold leading-tight mb-4">
            意思決定者が動く<br />
            <span className="text-[#8edce0]">SNS戦略</span>の核心
          </h1>
          <p className="text-xl mb-12 text-zinc-300">
            B2Bビジネスを加速させる実践的10の戦略<br />
            ＋ スマートフォン完全活用術
          </p>

          <div className="w-16 h-1 bg-[#8edce0] mb-12" />

          <p className="text-xs leading-relaxed text-zinc-400 max-w-lg mb-12">
            本資料は、日本市場のB2B企業の経営者・マーケティング責任者を対象に、SNSを単なる情報発信ツールから、権威性の構築・リード獲得・収益化を実現する戦略的資産へと転換するための実践的フレームワークを提供いたします。スマートフォン一台で実践できる撮影テクニックから、Reels・TikTokの最新アルゴリズム攻略法まで、すぐに使える戦略を網羅しています。
          </p>

          <div className="flex flex-wrap gap-3 mb-24">
            {['SNS戦略設計', 'スマートフォン撮影術', 'Reels / TikTok', 'リード獲得', 'ROI最大化'].map(tag => (
              <span key={tag} className="text-[10px] border border-zinc-700 px-3 py-1 rounded-md text-zinc-400">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-8 border-t border-zinc-800 pt-12">
            <div>
              <div className="text-3xl font-bold mb-1 text-[#8edce0]">10</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest text-center md:text-left">実践的戦略</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">B2B</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest text-center md:text-left">専門特化</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">ROI</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest text-center md:text-left">直結型</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">+5年</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest text-center md:text-left">業界実績</div>
            </div>
          </div>
        </div>

        <div className="absolute right-[-100px] top-[20%] w-[500px] h-[600px] bg-zinc-800/20 rounded-[4rem] rotate-[-15deg] border border-zinc-700/30 flex items-center justify-center">
           <div className="w-[90%] h-[90%] bg-zinc-900 rounded-[3rem] overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/agency/800/1200" 
                alt="Background" 
                className="w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
           </div>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] tracking-widest text-zinc-500 relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#8edce0] rotate-45" />
              <span className="font-bold">SYNC2</span>
            </div>
          </div>
          <div>B2B EXPERTS · GLOBAL REACH · DATA DRIVEN · SYNC2.AGENCY</div>
        </div>
      </div>

      {/* Page 2: Introduction */}
      <div id="pdf-page-2" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">INTRODUCTION — はじめに</span>
        </div>

        <div className="flex gap-12">
          <div className="flex-1">
            <div className="mb-8">
               <div className="w-8 h-1 bg-[#8edce0] mb-4" />
               <p className="text-[#8edce0] text-[10px] font-bold tracking-widest mb-2">INTRODUCTION</p>
               <h2 className="text-4xl font-bold leading-tight">
                 日本市場における<br />
                 B2B SNSの<span className="text-[#8edce0]">真の価値</span>
               </h2>
            </div>

            <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
              <p>
                現代の日本市場において、SNSはもはや単なる認知拡大のツールではありません。特にB2B領域では、企業の専門性と信頼性を可視化し、質の高い見込み客を継続的に獲得するための不可欠なビジネスインフラへと進化を遂げています。
              </p>
              <p>
                かつて「BtoB企業にSNSは不要」と言われた時代は終わりました。今日では、経営者・購買担当者・部門責任者の多くが、取引先を選定する前にSNSやデジタルコンテンツを通じて企業の信頼性・専門性・文化を確認しています。SNSは「見られる場所」ではなく、<span className="font-bold text-zinc-900">「選ばれる理由」を作る戦略的な舞台</span>なのです。
              </p>

              <div className="bg-[#8edce0]/10 border-l-4 border-[#8edce0] p-6 rounded-r-xl">
                <p className="text-zinc-800 font-bold leading-relaxed">
                  日本のB2B購買プロセスにおいて、意思決定者の<span className="text-[#8edce0] text-lg">約72%</span>が最終的な発注先を決定する前にSNSやデジタルコンテンツで企業の信頼性を確認しています。SNSへの投資は、営業コストの削減と受注率の向上に直結します。
                </p>
              </div>

              <p>
                本資料では、権威性の構築・リードジェネレーション・コンバージョンに直結する10の実践的戦略を提供いたします。さらに、スマートフォン一台で実現できる高品質な撮影テクニック、Reels・TikTokのアルゴリズムを攻略するショート動画戦略も詳しく解説します。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8edce0] mb-1">72%</div>
                <div className="text-[9px] text-zinc-400">B2B意思決定者が<br />SNSで企業確認</div>
              </div>
              <div className="text-center border-x border-zinc-200">
                <div className="text-2xl font-bold text-[#8edce0] mb-1">6x</div>
                <div className="text-[9px] text-zinc-400">Reelsの<br />リーチ倍率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8edce0] mb-1">8x</div>
                <div className="text-[9px] text-zinc-400">個人発信の<br />エンゲージメント</div>
              </div>
            </div>
          </div>

          <div className="w-[280px] space-y-6">
             <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/business/600/400" className="w-full h-[200px] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-white p-3 text-[9px] text-center text-zinc-400">SNSを活用するビジネスパーソン</div>
             </div>
             <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/office/600/400" className="w-full h-[200px] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-white p-3 text-[9px] text-center text-zinc-400">クリーンな撮影環境の例</div>
             </div>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">02</span>
        </div>
      </div>

      {/* Page 3: Strategy 01 - Thought Leadership */}
      <div id="pdf-page-3" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">戦略 01 / 10 — THOUGHT LEADERSHIP</span>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="bg-[#1a1c2e] text-white w-20 h-20 flex flex-col items-center justify-center rounded-xl shrink-0">
             <span className="text-2xl font-bold leading-none">01</span>
             <span className="text-[10px] opacity-60">/ 10</span>
          </div>
          <div>
             <p className="text-[#8edce0] text-[10px] font-bold tracking-widest mb-1">THOUGHT LEADERSHIP · ソートリーダーシップ</p>
             <h2 className="text-2xl font-bold">意思決定者に刺さる「ソートリーダーシップ」の確立</h2>
          </div>
        </div>

        <div className="flex gap-12">
          <div className="flex-1">
            <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
              <p>
                単なる製品・サービスの紹介投稿は、B2Bの意思決定者には届きません。業界が抱える本質的な課題に対する独自の洞察、未来のビジョン、そして具体的な解決の方向性を継続的に発信することで、貴社は「取引先候補」から「業界の権威」へと格上げされます。
              </p>
              <p>
                経営層や部門責任者は、自社の課題を深く理解し、共に成長できるパートナーを探しています。「何を売っているか」ではなく、「どんな未来を描いているか」を発信してください。投稿の切り口は常に「顧客の課題」を起点にすることが鉄則です。業界レポートの引用、独自調査の公開、専門家との対談コンテンツなども効果的です。
              </p>

              <div className="bg-[#f0f9fa] p-8 rounded-2xl border border-[#8edce0]/20 relative overflow-hidden">
                 <div className="absolute top-4 left-4 flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-zinc-100 shadow-sm">
                    <div className="w-2 h-2 bg-[#8edce0] rounded-full" />
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">REAL DATA — 実績データ</span>
                 </div>
                 <div className="mt-6">
                    <p className="text-zinc-800 font-bold mb-4 text-xs leading-relaxed">
                      「自社製品の機能紹介」を週3回投稿したA社のエンゲージメント率は0.5%でした。一方、「業界の最新トレンドと2026年の予測」という専門的な知見を週1回発信したB社は、<span className="text-[#8edce0]">エンゲージメント率が4.2%（8.4倍）</span>に跳ね上がり、経営層からの直接の問い合わせが<span className="text-[#8edce0]">月間15件増加</span>しました。
                    </p>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8">
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">8.4x</div>
                <div className="text-[8px] text-zinc-400 mt-1">エンゲージメント<br />向上率</div>
              </div>
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">+15件</div>
                <div className="text-[8px] text-zinc-400 mt-1">月間問い合わせ<br />増加数</div>
              </div>
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">週1回</div>
                <div className="text-[8px] text-zinc-400 mt-1">専門コンテンツ<br />最適発信頻度</div>
              </div>
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">90日</div>
                <div className="text-[8px] text-zinc-400 mt-1">権威性構築<br />目安期間</div>
              </div>
            </div>

            <div className="mt-8 bg-[#373d43] p-5 rounded-2xl flex gap-4 items-start">
               <div className="w-6 h-6 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-[#373d43] w-4 h-4" />
               </div>
               <p className="text-white text-xs leading-relaxed font-medium">
                 週1回以上、業界インサイトを含む専門コンテンツを発信する。自社の強みではなく「顧客の課題」を起点に書く。
               </p>
            </div>
          </div>

          <div className="w-[280px]">
             <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <img src="https://picsum.photos/seed/expert/600/450" className="w-full h-[220px] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-white p-4 text-[9px] text-zinc-400 leading-relaxed text-center">
                  業界インサイトを共有する<br />
                  戦略ミーティングの例
                </div>
             </div>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">03</span>
        </div>
      </div>

      {/* Page 4: Strategy 02 - Data-Driven Content */}
      <div id="pdf-page-4" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">戦略 02 / 10 — DATA-DRIVEN CONTENT</span>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="bg-[#1a1c2e] text-white w-20 h-20 flex flex-col items-center justify-center rounded-xl shrink-0">
             <span className="text-2xl font-bold leading-none">02</span>
             <span className="text-[10px] opacity-60">/ 10</span>
          </div>
          <div>
             <p className="text-[#8edce0] text-[10px] font-bold tracking-widest mb-1">DATA-DRIVEN CONTENT · データ活用コンテンツ</p>
             <h2 className="text-2xl font-bold">データと実績に基づくコンテンツで「信頼の証拠」を作る</h2>
          </div>
        </div>

        <div className="flex gap-12">
          <div className="flex-1">
            <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
              <p>
                B2Bの意思決定プロセスは「論理的」です。感情に訴えかけるだけでは不十分であり、客観的なデータ、具体的な成功事例、投資対効果（ROI）の証拠が求められます。SNSを活用して、貴社のソリューションが「実際に成果を出す」ことを証明してください。
              </p>
              <p>
                事例紹介、業界平均との比較、導入前後の数値変化などをビジュアル化して発信することが極めて有効です。機密保持に配慮しつつも、具体的な改善率や削減コストなどを示すことで、見込み客は自社に導入した際のイメージを具体化できます。単なる「顧客の声」ではなく、ビジネスインパクトに焦点を当てたコンテンツ制作を心がけましょう。
              </p>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                    <p className="text-[10px] font-bold text-zinc-400 mb-2 uppercase">BEFORE</p>
                    <p className="text-xs text-zinc-500">「弊社の最新システムは業務効率が非常に高く、多機能で使いやすいです。」</p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-zinc-300">
                       <X className="w-3 h-3" />
                       <span>主観的で響かない</span>
                    </div>
                 </div>
                 <div className="bg-[#f0f9fa] p-6 rounded-2xl border border-[#8edce0]/20">
                    <p className="text-[10px] font-bold text-[#8edce0] mb-2 uppercase">AFTER</p>
                    <p className="text-xs text-zinc-800 font-bold">「製造現場での導入実績：作業時間を月間40時間削減。ROI 350%達成の詳細はこちら」</p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-[#8edce0]">
                       <CheckCircle2 className="w-3 h-3" />
                       <span>データが信頼を構築</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8">
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">2.8x</div>
                <div className="text-[8px] text-zinc-400 mt-1">CTR向上率</div>
              </div>
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">+22件</div>
                <div className="text-[8px] text-zinc-400 mt-1">月間資料請求<br />増加数</div>
              </div>
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">350%</div>
                <div className="text-[8px] text-zinc-400 mt-1">ROI明示投稿<br />反応率</div>
              </div>
              <div className="bg-zinc-50 p-4 rounded-xl text-center border border-zinc-100">
                <div className="text-xl font-bold text-[#8edce0]">月1件</div>
                <div className="text-[8px] text-zinc-400 mt-1">導入事例<br />コンテンツ目標</div>
              </div>
            </div>

            <div className="mt-8 bg-[#373d43] p-5 rounded-2xl flex gap-4 items-start">
               <div className="w-6 h-6 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-[#373d43] w-4 h-4" />
               </div>
               <p className="text-white text-xs leading-relaxed font-medium">
                 導入事例・数値実績を月1件以上コンテンツ化。具体的な改善率、削減コスト、ROIを明示し、客観的証拠を提示する。
               </p>
            </div>
          </div>

          <div className="w-[280px]">
             <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <img src="https://picsum.photos/seed/dashboard/600/450" className="w-full h-[220px] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-white p-4 text-[9px] text-zinc-400 leading-relaxed text-center">
                  SNSアナリティクス<br />
                  ダッシュボードの例
                </div>
             </div>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">04</span>
        </div>
      </div>

      {/* Page 5: Strategy 03 - Smartphone Photography */}
      <div id="pdf-page-5" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">戦略 03 / 10 — SMARTPHONE PHOTOGRAPHY</span>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="bg-[#1a1c2e] text-white w-20 h-20 flex flex-col items-center justify-center rounded-xl shrink-0">
             <span className="text-2xl font-bold leading-none">03</span>
             <span className="text-[10px] opacity-60">/ 10</span>
          </div>
          <div>
             <p className="text-[#8edce0] text-[10px] font-bold tracking-widest mb-1">SMARTPHONE PHOTOGRAPHY · スマートフォン撮影術</p>
             <h2 className="text-2xl font-bold">スマートフォン一台でプロ品質のビジュアルを制作する</h2>
          </div>
        </div>

        <div className="flex gap-12">
          <div className="flex-1">
            <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
              <p>
                高品質なSNS発信に、プロ用の高価な機材は必ずしも必要ありません。現在のスマートフォンのカメラ性能は非常に高く、基本的な撮影技術を身につけるだけで、十分にブランドの信頼性を高めるビジュアルを制作できます。重要なのは「何を使うか」ではなく「どう撮るか」です。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 bg-[#8edce0]/20 rounded-full flex items-center justify-center shrink-0">
                       <div className="w-1.5 h-1.5 bg-[#8edce0] rounded-full" />
                    </div>
                    <div>
                      <span className="font-bold text-zinc-800 text-xs">自然光の活用</span>
                      <p className="text-[10px] text-zinc-500 mt-1">窓際の自然な光は最も美しく映ります。蛍光灯の直下は避けましょう。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 bg-[#8edce0]/20 rounded-full flex items-center justify-center shrink-0">
                       <div className="w-1.5 h-1.5 bg-[#8edce0] rounded-full" />
                    </div>
                    <div>
                      <span className="font-bold text-zinc-800 text-xs">三分割法（グリッド）</span>
                      <p className="text-[10px] text-zinc-500 mt-1">カメラ設定でグリッドを表示し、線の交点に被写体を配置してください。</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 bg-[#8edce0]/20 rounded-full flex items-center justify-center shrink-0">
                       <div className="w-1.5 h-1.5 bg-[#8edce0] rounded-full" />
                    </div>
                    <div>
                      <span className="font-bold text-zinc-800 text-xs">AE/AFロックの活用</span>
                      <p className="text-[10px] text-zinc-500 mt-1">被写体を長押しして明るさとピントを固定。B2Bらしいクリーンな印象に。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 bg-[#8edce0]/20 rounded-full flex items-center justify-center shrink-0">
                       <div className="w-1.5 h-1.5 bg-[#8edce0] rounded-full" />
                    </div>
                    <div>
                      <span className="font-bold text-zinc-800 text-xs">背景の整理</span>
                      <p className="text-[10px] text-zinc-500 mt-1">不要な映り込みを徹底的に排除。余白を活かすことが「品格」に繋がります。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 text-white p-6 rounded-2xl relative overflow-hidden">
                 <p className="text-[#8edce0] text-[10px] font-bold tracking-widest mb-2">PRO TIP</p>
                 <p className="text-xs leading-relaxed opacity-80">
                    「ポートレートモード」を積極的に活用しましょう。背景をぼかすことで被写体の存在感が際立ち、一気に「広告クオリティ」の仕上がりに近づきます。
                 </p>
              </div>
            </div>

            <div className="mt-8 bg-[#373d43] p-5 rounded-2xl flex gap-4 items-start">
               <div className="w-6 h-6 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-[#373d43] w-4 h-4" />
               </div>
               <p className="text-white text-xs leading-relaxed font-medium">
                  撮影前に必ず「光源の位置」「背景の整理」「グリッドの確認」の3点をチェックするルーティンを作る。
               </p>
            </div>
          </div>

          <div className="w-[280px] space-y-6">
             <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <img src="https://picsum.photos/seed/setup/600/400" className="w-full h-[180px] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-white p-3 text-[9px] text-zinc-400 text-center uppercase tracking-widest">
                  リングライトを使った<br />
                  プロ品質の撮影環境
                </div>
             </div>
             <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <img src="https://picsum.photos/seed/mobile/600/400" className="w-full h-[180px] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-white p-3 text-[9px] text-zinc-400 text-center uppercase tracking-widest">
                  スマートフォンで<br />
                  コンテンツを撮影する例
                </div>
             </div>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">05</span>
        </div>
      </div>

      {/* Page 6: Strategy 04 - Reels/TikTok Strategy */}
      <div id="pdf-page-6" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">戦略 04 / 10 — SHORT FORM VIDEO</span>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="bg-[#1a1c2e] text-white w-20 h-20 flex flex-col items-center justify-center rounded-xl shrink-0">
             <span className="text-2xl font-bold leading-none">04</span>
             <span className="text-[10px] opacity-60">/ 10</span>
          </div>
          <div>
             <p className="text-[#8edce0] text-[10px] font-bold tracking-widest mb-1">SHORT FORM VIDEO · ショート動画戦略</p>
             <h2 className="text-2xl font-bold">Reels & TikTok 攻略：ショート動画で潜在層へリーチする</h2>
          </div>
        </div>

        <div className="flex gap-12">
          <div className="flex-1">
            <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
              <p>
                ショート動画は、現在のSNSアルゴリズムにおいて最も爆発的なリーチ力を持ちます。フォロワー以外の潜在顧客に貴社の存在を届けるために、Reels（Instagram）やTikTokの活用は必須です。B2Bにおいても「有益な情報を短時間で」伝える動画は非常に好まれます。
              </p>
              <div className="bg-[#f0f9fa] p-8 rounded-2xl border border-[#8edce0]/20">
                 <h3 className="text-sm font-bold text-zinc-800 mb-4">ショート動画成功の4大要素</h3>
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <span className="text-[#8edce0] font-bold text-xs">01. 最初の3秒（フック）</span>
                       <p className="text-[10px] text-zinc-500 mt-1">視聴をやめるかどうかは3秒で決まります。強烈な問いかけや結論を冒頭に。</p>
                    </div>
                    <div>
                       <span className="text-[#8edce0] font-bold text-xs">02. テロップ（字幕）の活用</span>
                       <p className="text-[10px] text-zinc-500 mt-1">ミュート視聴でも内容が理解できるよう、重要なメッセージにはテロップを。</p>
                    </div>
                    <div>
                       <span className="text-[#8edce0] font-bold text-xs">03. テンポの良いカット割り</span>
                       <p className="text-[10px] text-zinc-500 mt-1">1.5秒〜2秒ごとに画面を切り替え、視覚的な飽きを防ぎます。</p>
                    </div>
                    <div>
                       <span className="text-[#8edce0] font-bold text-xs">04. 明快なベネフィット</span>
                       <p className="text-[10px] text-zinc-500 mt-1">「この動画を見ることで何が解決するか」を一言で提示してください。</p>
                    </div>
                 </div>
              </div>
              <p>
                15秒〜30秒程度の動画で、一つのテーマに絞って解説するのが最も効果的です。「〇〇で失敗しないための3つの秘訣」「実は間違っている〇〇の常識」など、専門知識を細分化して発信しましょう。
              </p>
            </div>

            <div className="mt-8 bg-[#373d43] p-5 rounded-2xl flex gap-4 items-start">
               <div className="w-6 h-6 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-[#373d43] w-4 h-4" />
               </div>
               <p className="text-white text-xs leading-relaxed font-medium">
                 最初の3秒で「ターゲットの悩み」を言語化し、視聴維持率を高める。必ず結論から話す構成にする。
               </p>
            </div>
          </div>

          <div className="w-[280px]">
             <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <img src="https://picsum.photos/seed/video/600/450" className="w-full h-[220px] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-white p-4 text-[9px] text-zinc-400 leading-relaxed text-center">
                  動画編集アプリでの<br />
                  編集風景の例
                </div>
             </div>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">06</span>
        </div>
      </div>

      {/* Page 7: Strategy 05 & 06 - Funnel Strategy */}
      <div id="pdf-page-7" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">戦略 05 & 06 / 10 — CONVERSION FUNNEL</span>
        </div>

        <div className="grid grid-cols-2 gap-12 flex-1">
           <div className="flex flex-col">
              <div className="flex gap-4 mb-6">
                <div className="bg-[#1a1c2e] text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shrink-0">
                   <span className="text-lg font-bold leading-none">05</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">信頼を売上に変える<br />「ソーシャルセリング」</h3>
                </div>
              </div>
              <div className="space-y-4 text-xs text-zinc-600 leading-relaxed">
                 <p>SNSは売る場所ではなく、関係性を構築する場所です。しかし、最終的には売上に繋がらなければビジネスとしての継続性が保てません。</p>
                 <p>DMでの丁寧な質疑応答、ストーリーズを活用したQ&A、プロフィールのリンク先への誘導など、ユーザーの熱量が高まったタイミングで適切な「次のステップ」を提示する導線設計を行いましょう。</p>
                 <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                    <p className="text-[9px] font-bold text-zinc-400 mb-2">IMPORTANT</p>
                    <p className="text-[10px]">「今すぐ買ってほしい」という押し売りではなく、顧客が「今必要だ」と感じる情報を適切なタイミングで届ける心理的アプローチが重要です。</p>
                 </div>
              </div>
           </div>

           <div className="flex flex-col">
              <div className="flex gap-4 mb-6">
                <div className="bg-[#1a1c2e] text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shrink-0">
                   <span className="text-lg font-bold leading-none">06</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">質の高い見込み客を獲得する<br />資料配布戦略</h3>
                </div>
              </div>
              <div className="space-y-4 text-xs text-zinc-600 leading-relaxed">
                 <p>SNS上での認知を、メルマガ登録や公式LINE登録、あるいは具体的なリードへと変換するために「リードマグネット（特典資料）」は極めて有効です。</p>
                 <p>「この資料が欲しい」というアクションは、そのテーマに深い関心がある証拠です。質の高いホワイトペーパーを提供することで、確度の高い見込み客リストを構築できます。</p>
                 <div className="rounded-xl overflow-hidden border border-zinc-200 mt-4 h-32 relative group">
                    <img src="https://picsum.photos/seed/ebook/600/300" className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-70" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-white/90 px-4 py-2 rounded-lg text-[9px] font-bold text-zinc-800 shadow-sm border border-zinc-100">資料配布コンテンツの例</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-12 bg-[#373d43] p-5 rounded-2xl flex gap-4 items-start">
           <div className="w-6 h-6 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0 mt-1">
              <CheckCircle2 className="text-[#373d43] w-4 h-4" />
           </div>
           <p className="text-white text-xs leading-relaxed font-medium">
             投稿の最後に必ず「次のアクション（保存・プロフ閲覧・資料請求）」を明示する。CTA（Call to Action）がない投稿はビジネス機会の損失。
           </p>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">07</span>
        </div>
      </div>

      {/* Page 8: Strategy 07 & 08 - Optimization Strategy */}
      <div id="pdf-page-8" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">戦略 07 & 08 / 10 — OPTIMIZATION & GROWTH</span>
        </div>

        <div className="grid grid-cols-2 gap-12 flex-1">
           <div className="flex flex-col">
              <div className="flex gap-4 mb-6">
                <div className="bg-[#1a1c2e] text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shrink-0">
                   <span className="text-lg font-bold leading-none">07</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">一粒で二度美味しい<br />「コンテンツの再利用」</h3>
                </div>
              </div>
              <div className="space-y-4 text-xs text-zinc-600 leading-relaxed">
                 <p>毎日新しいネタを考える必要はありません。一つの高品質なコンテンツ（例：ブログ記事や専門資料）を、Reels用のスクリプト、Instagramのカルーセル投稿、ツイート群など、複数の形式に変換（リパーパス）して発信してください。</p>
                 <p>これにより、制作時間を削減しながら、異なる嗜好を持つユーザー層に網羅的にリーチすることが可能になります。</p>
              </div>
           </div>

           <div className="flex flex-col">
              <div className="flex gap-4 mb-6">
                <div className="bg-[#1a1c2e] text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shrink-0">
                   <span className="text-lg font-bold leading-none">08</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">SNS広告を掛け合わせた<br />超ピンポイント集客</h3>
                </div>
              </div>
              <div className="space-y-4 text-xs text-zinc-600 leading-relaxed">
                 <p>オーガニックな発信だけでは、成長に時間がかかる場合があります。特定の業種、職位、関心事を持つユーザーにのみ届けるSNS広告を少額から掛け合わせることで、集客のスピードを劇的に加速させることができます。</p>
                 <p>特に成果の良かったオーガニック投稿を広告としてブーストする手法は、最も投資対効果が高い戦略の一つです。</p>
              </div>
           </div>
        </div>

        <div className="mt-12 bg-[#373d43] p-5 rounded-2xl flex gap-4 items-start">
           <div className="w-6 h-6 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0 mt-1">
              <CheckCircle2 className="text-[#373d43] w-4 h-4" />
           </div>
           <p className="text-white text-xs leading-relaxed font-medium">
             インサイトを分析し、保存数やリーチが伸びた投稿は必ず広告でブーストするか、別の形式にリメイクして再投稿する。
           </p>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">08</span>
        </div>
      </div>

      {/* Page 9: Strategy 09 & 10 - Management Strategy */}
      <div id="pdf-page-9" className="w-[210mm] h-[297mm] bg-white text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">戦略 09 & 10 / 10 — TRUST & KPI</span>
        </div>

        <div className="grid grid-cols-2 gap-12 flex-1">
           <div className="flex flex-col">
              <div className="flex gap-4 mb-6">
                <div className="bg-[#1a1c2e] text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shrink-0">
                   <span className="text-lg font-bold leading-none">09</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">顧客の迷いを払拭する<br />「Q&A」の発信</h3>
                </div>
              </div>
              <div className="space-y-4 text-xs text-zinc-600 leading-relaxed">
                 <p>見込み客が抱く「自社でも使えるのか？」「導入コストは見合うのか？」といった不安や疑問を、先回りしてコンテンツ化して解消しましょう。Q&A形式の投稿は、保存率が高く、検討フェーズにいるユーザーに強力に刺さります。</p>
                 <p>実際の商談でよく聞かれる質問は、最高のコンテンツネタの宝庫です。</p>
              </div>
           </div>

           <div className="flex flex-col">
              <div className="flex gap-4 mb-6">
                <div className="bg-[#1a1c2e] text-white w-12 h-12 flex flex-col items-center justify-center rounded-lg shrink-0">
                   <span className="text-lg font-bold leading-none">10</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">虚栄の指標に惑わされない<br />「本質的KPI」の設計</h3>
                </div>
              </div>
              <div className="space-y-4 text-xs text-zinc-600 leading-relaxed">
                 <p>フォロワー数だけを追いかけるのは危険です。B2Bにおける本質的なKPIは「プロフィール閲覧数」「保存数」「資料請求数」「商談化率」です。</p>
                 <p>たとえフォロワーが少なくても、これらの本質的な数値が積み上がっていれば、SNS運用はビジネスとして大成功していると言えます。</p>
              </div>
           </div>
        </div>

        <div className="mt-12 bg-[#373d43] p-5 rounded-2xl flex gap-4 items-start">
           <div className="w-6 h-6 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0 mt-1">
              <CheckCircle2 className="text-[#373d43] w-4 h-4" />
           </div>
           <p className="text-white text-xs leading-relaxed font-medium">
             フォロワー数よりも「プロフィール閲覧数」「保存数」「問い合わせ数」を最重要指標としてトラッキングし、運用改善を行う。
           </p>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] text-zinc-400 pt-8 border-t border-zinc-100">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">09</span>
        </div>
      </div>

      {/* Page 10: Bonus - Visual Checklist */}
      <div id="pdf-page-10" className="w-[210mm] h-[297mm] bg-zinc-50 text-zinc-900 p-[20mm] font-sans flex flex-col relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1c2e] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-[10px]">SYNC2 AGENCY</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60 uppercase">BONUS — VISUAL CHECKLIST</span>
        </div>

        <div className="bg-white p-12 rounded-[2rem] shadow-xl border border-zinc-100 flex-1">
           <div className="text-center mb-12">
              <div className="inline-block bg-[#8edce0]/20 text-[#8edce0] px-4 py-1 rounded-full text-[10px] font-bold tracking-widest mb-4 uppercase">CHECKLIST</div>
              <h2 className="text-3xl font-bold">B2B SNS ビジュアル改善チェックリスト</h2>
              <p className="text-sm text-zinc-400 mt-2">投稿前に確認すべき10の必須項目</p>
           </div>

           <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {[
                "照明は十分か？（自然光、または明るい照明を使用）",
                "レンズは汚れていないか？（撮影直前に必ず拭く）",
                "背景に不要なゴミや映り込みはないか？",
                "被写体はグリッド線の交点に配置されているか？",
                "AE/AFロックでピントを固定しているか？",
                "ポートレートモードで背景をぼかしているか？",
                "服のしわや乱れ、デスクの整理はできているか？",
                "テロップ（字幕）の位置は視聴の邪魔にならないか？",
                "配色はブランドカラーに統一されているか？",
                "最初の3秒で目的が伝わるビジュアルか？"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-b border-zinc-50 pb-4">
                   <div className="w-6 h-6 border-2 border-[#8edce0] rounded-md shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#8edce0] opacity-0" />
                   </div>
                   <span className="text-xs text-zinc-600 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
           </div>

           <div className="mt-12 bg-zinc-900 text-white p-6 rounded-2xl flex gap-4 items-center">
              <div className="w-10 h-10 bg-[#8edce0] rounded-full flex items-center justify-center shrink-0">
                 <Download className="text-zinc-900 w-5 h-5" />
              </div>
              <p className="text-xs leading-relaxed font-medium">
                このチェックリストをスマートフォンのメモ帳に保存し、投稿前に毎回確認してください。継続的な「質の担保」がブランドの信頼を作ります。
              </p>
           </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-[10px] text-zinc-400">
          <span>© 2026 SYNC2 AGENCY · SYNC2.AGENCY</span>
          <span className="font-bold text-[#1a1c2e]">10</span>
        </div>
      </div>

      {/* Page 11: Next Step */}
      <div id="pdf-page-11" className="w-[210mm] h-[297mm] bg-[#1a1c2e] text-white p-[20mm] font-sans flex flex-col relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-[#8edce0]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-zinc-800/30 rounded-full blur-3xl opacity-50" />

        <div className="flex justify-between items-center mb-24 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#1a1c2e] rotate-[-45deg]" />
            </div>
            <span className="font-bold tracking-widest text-sm">SYNC2</span>
          </div>
          <span className="text-[10px] tracking-widest opacity-60">NEXT STEP — 次のステップ</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
           <div className="w-24 h-1 bg-[#8edce0] mb-8" />
           <h2 className="text-5xl font-bold mb-8 leading-tight">
             あなたのビジネスに、<br />
             確かな<span className="text-[#8edce0]">SNS戦略</span>を。
           </h2>
           <p className="text-lg text-zinc-300 max-w-xl mx-auto mb-16 leading-relaxed">
             SNS運用は「やり方」一つで、コストにも、最強の資産にもなります。SYNC2と共に、次世代のB2Bマーケティングを始めませんか？
           </p>

           <div className="bg-white text-zinc-900 p-12 rounded-3xl max-w-lg mb-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8edce0]/10 rounded-full translate-x-16 -translate-y-16" />
              <p className="text-xs font-bold text-zinc-400 mb-4 tracking-[0.2em] uppercase">CONTACT VIA LINE</p>
              <p className="text-xl font-bold mb-8 text-[#1a1c2e]">
                まずはLINEで<br />お気軽にご相談ください
              </p>
              <div className="flex flex-col items-center gap-4">
                 <div className="text-center">
                    <p className="text-[10px] text-zinc-400 mb-1">公式LINE ID</p>
                    <p className="text-2xl font-bold tracking-tighter text-[#1a1c2e]">@SYNC2_AGENCY</p>
                 </div>
                 <div className="w-24 h-24 bg-zinc-50 rounded-2xl border-2 border-zinc-100 flex items-center justify-center">
                    <MessageCircle className="w-12 h-12 text-[#8edce0]" />
                 </div>
              </div>
           </div>

           <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                 <Globe className="w-4 h-4" />
                 <span className="text-[10px] font-bold tracking-widest">GLOBAL STRATEGY</span>
              </div>
              <div className="flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4" />
                 <span className="text-[10px] font-bold tracking-widest">ENTERPRISE TRUST</span>
              </div>
              <div className="flex items-center gap-2">
                 <Target className="w-4 h-4" />
                 <span className="text-[10px] font-bold tracking-widest">ROI FOCUSED</span>
              </div>
           </div>
        </div>

        <div className="mt-auto flex justify-between items-center text-[10px] tracking-widest text-zinc-500 relative z-10 pt-12 border-t border-zinc-800">
          <div>© 2026 SYNC2 · SYNC2.AGENCY · TOKYO | SAO PAULO</div>
          <div className="flex gap-4">
             <span>STRATEGY</span>
             <span>CREATIVE</span>
             <span>GROWTH</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFTemplate;
