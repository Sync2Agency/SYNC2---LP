import fs from 'fs';
const content = fs.readFileSync('src/App.tsx', 'utf8');
const lines = content.split('\n');
// Line 493 is index 492
lines[492] = '            もう終わりにしませんか？ <br />';
lines.splice(493, 0, 
  '            SNSを<span className="text-[#8edce0] underline decoration-zinc-200 underline-offset-8">「企業の資産」</span>へ。',
  '          </h1>',
  '          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">',
  '            私たちは単なる「投稿代行」ではありません。B2Bの意思決定者と貴社を繋ぐ、戦略設計型のSNS運用パートナーです。',
  '          </p>',
  '          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">',
  '            <a ',
  '              href={LINE_LINK} ',
  '              className="w-full sm:w-auto bg-[#373d43] hover:bg-[#2a2f33] text-[#8edce0] px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-zinc-200 group"',
  '            >',
  '              無料診断・相談を申し込む',
  '              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />',
  '            </a>',
  '            <p className="text-sm text-zinc-400 font-medium">',
  '              LINEで24時間受付中',
  '            </p>',
  '          </div>',
  '        </motion.div>',
  '      </div>',
  '    </section>',
  '  );',
  '};',
  ''
);
fs.writeFileSync('src/App.tsx', lines.join('\n'));
