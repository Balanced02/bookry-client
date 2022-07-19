import React, { LegacyRef, useEffect, useRef, useState, ReactElement, useMemo } from 'react';
import Editor from '@draft-js-plugins/editor';
import { EditorState, DraftModel } from 'draft-js';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import { handleKeyBindings, onTab } from './utils';
import "node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css"
import './styles.scss';

const BookEditor = () => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const editorRef = useRef<LegacyRef<Editor> | undefined>();

  const [plugins, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin();
    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];
  }, []);

  useEffect(() => {
    focusEditor();
  }, []);

  const focusEditor = () => {
    if (editorRef.current && editorRef.current.focus) {
      editorRef.current.focus();
    }
  };

  const onTabHandle = e => onTab(e, editorState, setEditorState)

  const onHandleKeyBindings = (c: DraftModel.Constants.DraftEditorCommand) => handleKeyBindings(c, editorState, setEditorState)

  return (
    <div className="book-editor">
      <div className="title-container">
        <input type="text" className="title" placeholder="Chapter 1" />
      </div>
      <div onClick={focusEditor} className="editor-container">
        <Editor
          ref={editorRef}
          plugins={plugins}
          editorState={editorState}
          onChange={setEditorState}
          onTab={onTabHandle}
          handleKeyCommand={onHandleKeyBindings}
        />
        <InlineToolbar />
      </div>
    </div>
  );
};

export default BookEditor;
