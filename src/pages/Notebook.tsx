import { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { Sidebar } from '@/components/Sidebar';
import { Toolbar } from '@/components/Toolbar';
import { NoteEditor } from '@/components/NoteEditor';
import { modules } from '@/data/modules';
import { useNotes } from '@/hooks/useNotes';

type ExportState = 'idle' | 'loading' | 'done';

export function Notebook() {
  const navigate = useNavigate();
  const { getNote, updateNote, savedIndicator } = useNotes();
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [exportState, setExportState] = useState<ExportState>('idle');
  const [editorKey, setEditorKey] = useState(0);

  const activeModule = useMemo(
    () => modules.find((m) => m.id === activeModuleId) || null,
    [activeModuleId]
  );

  const note = useMemo(
    () => (activeModuleId ? getNote(activeModuleId) : null),
    [activeModuleId, getNote]
  );

  // Force re-render editor when module changes
  useEffect(() => {
    setEditorKey((k) => k + 1);
  }, [activeModuleId]);

  const handleSelectModule = useCallback((id: string) => {
    setActiveModuleId(id);
  }, []);

  const handleTitleChange = useCallback(
    (title: string) => {
      if (activeModuleId) {
        updateNote(activeModuleId, { title });
      }
    },
    [activeModuleId, updateNote]
  );

  const handleContentChange = useCallback(
    (content: string) => {
      if (activeModuleId) {
        updateNote(activeModuleId, { content });
      }
    },
    [activeModuleId, updateNote]
  );

  // Calculate word count
  const wordCount = useMemo(() => {
    if (!note?.content) return 0;
    const text = note.content.replace(/<[^>]*>/g, ' ').trim();
    return text ? text.split(/\s+/).length : 0;
  }, [note?.content]);

  const handleExportPDF = useCallback(() => {
    if (!activeModule || !note) return;

    setExportState('loading');

    // Create a temporary container for PDF generation
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.fontFamily = "'Inter', system-ui, sans-serif";
    container.style.color = '#1A1A1A';
    container.style.maxWidth = '800px';
    container.style.margin = '0 auto';

    // Title
    const titleEl = document.createElement('h1');
    titleEl.textContent = note.title || 'Untitled Note';
    titleEl.style.fontFamily = "'DM Serif Display', Georgia, serif";
    titleEl.style.fontSize = '28px';
    titleEl.style.marginBottom = '8px';
    titleEl.style.color = '#1A1A1A';
    container.appendChild(titleEl);

    // Module info
    const moduleEl = document.createElement('p');
    moduleEl.textContent = `${activeModule.number} — ${activeModule.title}`;
    moduleEl.style.fontSize = '13px';
    moduleEl.style.color = '#6B6560';
    moduleEl.style.marginBottom = '32px';
    moduleEl.style.paddingBottom = '16px';
    moduleEl.style.borderBottom = '1px solid #D9D4CC';
    container.appendChild(moduleEl);

    // Content
    const contentEl = document.createElement('div');
    contentEl.innerHTML = note.content;
    contentEl.style.lineHeight = '1.7';
    contentEl.style.fontSize = '16px';

    // Style the content elements for PDF
    const h2s = contentEl.querySelectorAll('h2');
    h2s.forEach((h2) => {
      const el = h2 as HTMLElement;
      el.style.fontFamily = "'DM Serif Display', Georgia, serif";
      el.style.fontSize = '22px';
      el.style.marginTop = '24px';
      el.style.marginBottom = '12px';
      el.style.color = '#1A1A1A';
    });

    const blockquotes = contentEl.querySelectorAll('blockquote');
    blockquotes.forEach((bq) => {
      const el = bq as HTMLElement;
      el.style.borderLeft = '3px solid #C8553D';
      el.style.paddingLeft = '16px';
      el.style.fontStyle = 'italic';
      el.style.color = '#6B6560';
      el.style.background = 'rgba(200, 85, 61, 0.04)';
      el.style.padding = '12px 16px';
      el.style.margin = '12px 0';
    });

    const lists = contentEl.querySelectorAll('ul, ol');
    lists.forEach((list) => {
      const el = list as HTMLElement;
      el.style.paddingLeft = '24px';
    });

    container.appendChild(contentEl);

    // Footer
    const footerEl = document.createElement('p');
    footerEl.textContent = 'Exported from Sport Management: Field Notes';
    footerEl.style.fontSize = '11px';
    footerEl.style.color = '#9E9892';
    footerEl.style.marginTop = '48px';
    footerEl.style.textAlign = 'center';
    container.appendChild(footerEl);

    document.body.appendChild(container);

    const fileName = note.title
      ? `${note.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}.pdf`
      : 'Sport_Governance_Notes.pdf';

    const opt = {
      margin: [15, 15, 15, 15] as [number, number, number, number],
      filename: fileName,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
    };

    html2pdf()
      .from(container)
      .set(opt)
      .save()
      .then(() => {
        document.body.removeChild(container);
        setExportState('done');
        setTimeout(() => setExportState('idle'), 2000);
      })
      .catch(() => {
        document.body.removeChild(container);
        setExportState('idle');
      });
  }, [activeModule, note]);

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <Sidebar
        modules={modules}
        activeModuleId={activeModuleId}
        onSelectModule={handleSelectModule}
        onExportPDF={handleExportPDF}
        exportState={exportState}
      />

      <div className="flex-1 flex flex-col min-w-0" style={{ background: 'var(--bg-primary)' }}>
        {/* Top bar with back button */}
        <div
          className="h-[52px] flex items-center px-6 shrink-0"
          style={{
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 mr-4 rounded transition-all duration-200"
            style={{ padding: '6px 8px' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-secondary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <ArrowLeft size={16} style={{ color: 'var(--text-secondary)' }} />
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '13px',
                color: 'var(--text-secondary)',
              }}
            >
              Back
            </span>
          </button>

          <div
            className="mr-4"
            style={{ width: '1px', height: '20px', background: 'var(--border-color)' }}
          />

          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-primary)',
            }}
          >
            {activeModule
              ? `${activeModule.number} — ${activeModule.title}`
              : 'Intro to Sport Governance: Field Notes'}
          </span>

          <div className="ml-auto flex items-center gap-3">
            {savedIndicator && (
              <span
                className="transition-opacity duration-500"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '12px',
                  color: 'var(--success)',
                }}
              >
                Saved
              </span>
            )}
          </div>
        </div>

        <Toolbar wordCount={wordCount} />

        <NoteEditor
          key={editorKey}
          title={note?.title || ''}
          content={note?.content || ''}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          moduleName={activeModule?.title || ''}
          moduleNumber={activeModule?.number || ''}
          hasModule={!!activeModule}
        />
      </div>
    </div>
  );
}
