import { useState, useEffect, useCallback, useRef } from 'react';
import type { Note } from '@/types';
import { defaultNotes } from '@/data/modules';

const STORAGE_KEY = 'knowlog_notes';

function loadNotesFromStorage(): Record<string, Note> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore parse errors
  }

  // Initialize with default notes
  const initial: Record<string, Note> = {};
  for (const [moduleId, data] of Object.entries(defaultNotes)) {
    initial[moduleId] = {
      moduleId,
      title: data.title,
      content: data.content,
    };
  }
  return initial;
}

function saveNotesToStorage(notes: Record<string, Note>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {
    // ignore storage errors
  }
}

export function useNotes() {
  const [notes, setNotes] = useState<Record<string, Note>>(loadNotesFromStorage);
  const [savedIndicator, setSavedIndicator] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Save to localStorage whenever notes change (with debounce)
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      saveNotesToStorage(notes);
      setSavedIndicator(true);
      setTimeout(() => setSavedIndicator(false), 1500);
    }, 1000);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [notes]);

  const getNote = useCallback(
    (moduleId: string): Note => {
      return (
        notes[moduleId] || {
          moduleId,
          title: '',
          content: '',
        }
      );
    },
    [notes]
  );

  const updateNote = useCallback(
    (moduleId: string, updates: Partial<Note>) => {
      setNotes((prev) => ({
        ...prev,
        [moduleId]: {
          ...prev[moduleId],
          moduleId,
          ...updates,
        },
      }));
    },
    []
  );

  return { notes, getNote, updateNote, savedIndicator };
}
