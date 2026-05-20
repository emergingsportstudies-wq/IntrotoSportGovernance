import { useRef, useEffect, useCallback, useState } from 'react';
import { BookOpen } from 'lucide-react';

interface NoteEditorProps {
  title: string;
  content: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  moduleName: string;
  moduleNumber: string;
  hasModule: boolean;
}

export function NoteEditor({
  title,
  content,
  onTitleChange,
  onContentChange,
  moduleName,
  moduleNumber,
  hasModule,
}: NoteEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [displayContent, setDisplayContent] = useState(content);
  const [displayTitle, setDisplayTitle] = useState(title);
  const prevModuleRef = useRef(moduleName);

  // Handle module change with fade transition
  useEffect(() => {
    if (prevModuleRef.current !== moduleName && moduleName) {
      setFadeState('out');
      const timeout = setTimeout(() => {
        setDisplayContent(content);
        setDisplayTitle(title);
        setFadeState('in');
        prevModuleRef.current = moduleName;
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setDisplayContent(content);
      setDisplayTitle(title);
      prevModuleRef.current = moduleName;
    }
  }, [moduleName, content, title]);

  // Update editor innerHTML when content changes from outside
  useEffect(() => {
    if (editorRef.current && displayContent !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = displayContent;
    }
  }, [displayContent]);

  // Update title input when title changes from outside
  useEffect(() => {
    if (titleRef.current && displayTitle !== titleRef.current.value) {
      titleRef.current.value = displayTitle;
    }
  }, [displayTitle]);

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      onContentChange(editorRef.current.innerHTML);
    }
  }, [onContentChange]);

  const handleTitleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onTitleChange(e.target.value);
    },
    [onTitleChange]
  );

  // Strip formatting on paste
  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertText', false, text);
    },
    []
  );

  if (!hasModule) {
    return (
      <div className="flex-1 overflow-auto flex items-center justify-center">
        <div className="text-center">
          <BookOpen
            size={48}
            style={{ color: 'var(--text-muted)', opacity: 0.4, margin: '0 auto 16px' }}
          />
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '16px',
              color: 'var(--text-muted)',
            }}
          >
            Select a module to start writing
          </p>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '14px',
              color: 'var(--text-muted)',
              opacity: 0.6,
              marginTop: '4px',
            }}
          >
            Choose a module from the sidebar
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-[780px] mx-auto py-6 px-6">
        {/* Breadcrumb */}
        <div className="mb-4">
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-primary)',
            }}
          >
            {moduleNumber} — {moduleName}
          </span>
        </div>

        {/* Title Input */}
        <input
          ref={titleRef}
          type="text"
          defaultValue={displayTitle}
          onChange={handleTitleInput}
          placeholder="Note title..."
          className="w-full bg-transparent border-none outline-none pb-2 mb-4"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '28px',
            color: 'var(--text-primary)',
            borderBottom: '1px solid var(--border-light)',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--accent)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--border-light)';
          }}
        />

        {/* Editor */}
        <div
          className="rounded-lg"
          style={{
            background: 'var(--editor-bg)',
            border: '1px solid var(--border-light)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            minHeight: 'calc(100vh - 260px)',
          }}
        >
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            onPaste={handlePaste}
            className="editor-content outline-none"
            style={{
              padding: '40px 48px',
              minHeight: 'calc(100vh - 260px)',
              opacity: fadeState === 'out' ? 0 : 1,
              transition: 'opacity 0.15s ease',
            }}
            data-placeholder="Start writing your notes..."
            suppressContentEditableWarning
          />
        </div>
      </div>
    </div>
  );
}
