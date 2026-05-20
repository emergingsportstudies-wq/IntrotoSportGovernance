import { Download, Loader2, CheckCircle } from 'lucide-react';
import type { Module } from '@/types';

interface SidebarProps {
  modules: Module[];
  activeModuleId: string | null;
  onSelectModule: (id: string) => void;
  onExportPDF: () => void;
  exportState: 'idle' | 'loading' | 'done';
}

export function Sidebar({
  modules,
  activeModuleId,
  onSelectModule,
  onExportPDF,
  exportState,
}: SidebarProps) {
  return (
    <aside
      className="w-[280px] h-full flex flex-col shrink-0"
      style={{ background: 'var(--bg-sidebar)' }}
    >
      {/* Logo */}
      <div className="px-5 pt-5 pb-6">
        <span
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '18px',
            color: 'var(--text-light)',
          }}
        >
          Intro to Sport Governance: Field Notes
        </span>
      </div>

      {/* Divider */}
      <div
        className="mx-4 mb-4"
        style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }}
      />

      {/* Module Label */}
      <div className="px-5 pb-2">
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          MODULES
        </span>
      </div>

      {/* Module List */}
      <div className="flex-1 overflow-auto px-2 flex flex-col gap-[2px]">
        {modules.map((mod) => {
          const isActive = mod.id === activeModuleId;
          return (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mod.id)}
              className="flex flex-col items-start gap-[6px] rounded-md text-left transition-all duration-150 px-3 py-[10px]"
              style={{
                background: isActive
                  ? 'rgba(255,255,255,0.1)'
                  : 'transparent',
                borderLeft: isActive
                  ? '3px solid var(--accent)'
                  : '3px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.background = 'transparent';
              }}
            >
              <span
                className="flex items-center justify-center rounded"
                style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                {mod.number}
              </span>
              <span
                className="truncate w-full"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'var(--text-light)',
                }}
              >
                {mod.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div
        className="px-4 pt-4 pb-5 mt-auto"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <button
          onClick={onExportPDF}
          disabled={exportState === 'loading'}
          className="w-full flex items-center justify-center gap-2 rounded-md transition-all duration-200"
          style={{
            background: exportState === 'done' ? 'var(--success)' : 'var(--accent)',
            padding: '10px 0',
          }}
          onMouseEnter={(e) => {
            if (exportState === 'idle')
              e.currentTarget.style.background = 'var(--accent-hover)';
          }}
          onMouseLeave={(e) => {
            if (exportState === 'idle')
              e.currentTarget.style.background = 'var(--accent)';
            else if (exportState === 'done')
              e.currentTarget.style.background = 'var(--success)';
          }}
        >
          {exportState === 'loading' ? (
            <Loader2 size={14} className="animate-spin" style={{ color: 'var(--text-light)' }} />
          ) : exportState === 'done' ? (
            <CheckCircle size={14} style={{ color: 'var(--text-light)' }} />
          ) : (
            <Download size={14} style={{ color: 'var(--text-light)' }} />
          )}
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-light)',
            }}
          >
            {exportState === 'loading'
              ? 'Exporting...'
              : exportState === 'done'
                ? 'Exported!'
                : 'Export PDF'}
          </span>
        </button>

        <p
          className="text-center mt-2"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '11px',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          Auto-saved locally
        </p>
      </div>
    </aside>
  );
}
