import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading,
  Quote,
  List,
  ListOrdered,
  Undo,
  Redo,
} from 'lucide-react';

interface ToolbarButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  title?: string;
}

function ToolbarButton({ icon, onClick, active, title }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="w-8 h-8 flex items-center justify-center rounded transition-all duration-150"
      style={{
        background: active ? 'var(--accent-muted)' : 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.background = 'var(--bg-secondary)';
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }}
    >
      <span style={{ color: active ? 'var(--accent)' : 'var(--text-secondary)' }}>
        {icon}
      </span>
    </button>
  );
}

interface ToolbarProps {
  wordCount: number;
}

export function Toolbar({ wordCount }: ToolbarProps) {
  const exec = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  return (
    <div
      className="h-[52px] flex items-center px-6 shrink-0"
      style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="flex items-center gap-1">
        <ToolbarButton
          icon={<Bold size={16} />}
          onClick={() => exec('bold')}
          title="Bold"
        />
        <ToolbarButton
          icon={<Italic size={16} />}
          onClick={() => exec('italic')}
          title="Italic"
        />
        <ToolbarButton
          icon={<Underline size={16} />}
          onClick={() => exec('underline')}
          title="Underline"
        />
        <ToolbarButton
          icon={<Strikethrough size={16} />}
          onClick={() => exec('strikeThrough')}
          title="Strikethrough"
        />
      </div>

      <div
        className="mx-2"
        style={{ width: '1px', height: '20px', background: 'var(--border-color)' }}
      />

      <div className="flex items-center gap-1">
        <ToolbarButton
          icon={<Heading size={16} />}
          onClick={() => {
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0) return;
            const range = selection.getRangeAt(0);
            const parent = range.commonAncestorContainer.parentElement;
            if (parent?.tagName === 'H2') {
              exec('formatBlock', 'P');
            } else {
              exec('formatBlock', 'H2');
            }
          }}
          title="Heading"
        />
        <ToolbarButton
          icon={<Quote size={16} />}
          onClick={() => exec('formatBlock', 'BLOCKQUOTE')}
          title="Quote"
        />
      </div>

      <div
        className="mx-2"
        style={{ width: '1px', height: '20px', background: 'var(--border-color)' }}
      />

      <div className="flex items-center gap-1">
        <ToolbarButton
          icon={<List size={16} />}
          onClick={() => exec('insertUnorderedList')}
          title="Bullet List"
        />
        <ToolbarButton
          icon={<ListOrdered size={16} />}
          onClick={() => exec('insertOrderedList')}
          title="Numbered List"
        />
      </div>

      <div
        className="mx-2"
        style={{ width: '1px', height: '20px', background: 'var(--border-color)' }}
      />

      <div className="flex items-center gap-1">
        <ToolbarButton
          icon={<Undo size={16} />}
          onClick={() => exec('undo')}
          title="Undo"
        />
        <ToolbarButton
          icon={<Redo size={16} />}
          onClick={() => exec('redo')}
          title="Redo"
        />
      </div>

      <div className="ml-auto" />

      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '12px',
          color: 'var(--text-muted)',
        }}
      >
        {wordCount} word{wordCount !== 1 ? 's' : ''}
      </span>
    </div>
  );
}
