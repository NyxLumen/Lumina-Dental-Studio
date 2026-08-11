import React from 'react';
import { CATEGORIES, SKILLS, THEMES } from '../data/themes';
import { Palette, Layers, Eye, ChevronDown, Sparkles, Zap } from 'lucide-react';

export default function StudioToolbar({ activeThemeId, onThemeChange }) {
  const activeTheme = THEMES[activeThemeId];
  const activeCat = CATEGORIES.find(c => c.id === activeTheme?.categoryId);
  const activeSkill = SKILLS.find(s => s.id === activeTheme?.skillId);

  return (
    <div className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 shadow-2xl shadow-black/40">
      <div className="max-w-[1600px] mx-auto px-4 py-2.5">

        {/* Top Bar: Studio Title & Active Design Info */}
        <div className="flex items-center justify-between gap-4">

          {/* Left: Studio Brand */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Palette className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-white tracking-tight">Lumina Design Studio</h1>
              <p className="text-[10px] text-slate-400 font-mono">10 Designs • 5 Categories • 2 Skills</p>
            </div>
          </div>

          {/* Center: Category Selector */}
          <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const isActiveCat = activeTheme?.categoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    const newKey = `${cat.id}-${activeTheme?.skillId || 'impeccable'}`;
                    if (THEMES[newKey]) onThemeChange(newKey);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                    isActiveCat
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent'
                  }`}
                  title={cat.desc}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Right: Skill Toggle */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {SKILLS.map((skill) => {
              const isActiveSkill = activeTheme?.skillId === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => {
                    const newKey = `${activeTheme?.categoryId || 'cat1'}-${skill.id}`;
                    if (THEMES[newKey]) onThemeChange(newKey);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1.5 ${
                    isActiveSkill
                      ? skill.id === 'impeccable'
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800 border border-transparent'
                  }`}
                >
                  {skill.id === 'impeccable' ? <Sparkles className="w-3 h-3" /> : <Zap className="w-3 h-3" />}
                  <span className="hidden sm:inline">{skill.name}</span>
                  <span className="sm:hidden">{skill.id === 'impeccable' ? 'IMP' : 'TSK'}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Active Theme Description */}
        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-slate-800/60 pt-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>ACTIVE:</span>
            </span>
            <span className="text-slate-300 font-semibold">{activeTheme?.title}</span>
            <span className="hidden md:inline text-slate-600">—</span>
            <span className="hidden md:inline text-slate-400">{activeTheme?.subtitle}</span>
          </div>
          <span className={`px-2 py-0.5 rounded ${activeTheme?.isDark ? 'bg-slate-800 text-slate-400' : 'bg-white/10 text-slate-300'}`}>
            {activeTheme?.isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>

      </div>
    </div>
  );
}
