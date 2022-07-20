import React, { LegacyRef, useEffect, useRef, useState, useMemo, ChangeEvent, Fragment } from 'react';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import { EditorState, DraftModel } from 'draft-js';
import createInlineToolbarPlugin, { Separator } from '@draft-js-plugins/inline-toolbar';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import { handleKeyBindings, onTab, styleMap } from './utils';
import createColorBlockPlugin from './colorBlockPlugin';
import createFocusPlugin from '@draft-js-plugins/focus';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
} from '@draft-js-plugins/buttons';
import { ChapterA } from 'types/api';
import 'node_modules/@draft-js-plugins/text-alignment/lib/plugin.css'
import 'node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css';
import './styles.scss';
import buttonStyles from './buttonStyles.module.css'
import toolbarStyles from './toolbarStyles.module.css'

type BookEditorT = {
  chapter: ChapterA;
};

const alignmentPlugin = createAlignmentPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin(
  { theme: {
  buttonStyles: buttonStyles,
  toolbarStyles: toolbarStyles
} }
);
const focusPlugin = createFocusPlugin();
const textAlignmentPlugin = createTextAlignmentPlugin();
const decorator = composeDecorators(
  alignmentPlugin.decorator,
  focusPlugin.decorator
);
const colorBlockPlugin = createColorBlockPlugin({ decorator });


const BookEditor = ({ chapter }: BookEditorT) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const editorRef = useRef<LegacyRef<Editor> | undefined>();
  const [title, setTitle] = useState<string>(chapter.title);

  const [plugins, InlineToolbar] = useMemo(() => {
    return [[inlineToolbarPlugin, focusPlugin, alignmentPlugin, colorBlockPlugin, textAlignmentPlugin], inlineToolbarPlugin.InlineToolbar];
  }, []);

  useEffect(() => {
    focusEditor();
  }, []);

  const focusEditor = () => {
    if (editorRef.current && editorRef.current.focus) {
      editorRef.current.focus();
    }
  };

  const onTabHandle = (e) => onTab(e, editorState, setEditorState);

  const onHandleKeyBindings = (c: DraftModel.Constants.DraftEditorCommand) =>
    handleKeyBindings(c, editorState, setEditorState);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  return (
    <div className="book-editor">
      <div className="title-container">
        <input type="text" className="title" placeholder="Chapter 1" value={title} onChange={handleTitleChange} />
      </div>
      <div onClick={focusEditor} className="editor-container">
        <Editor
          ref={editorRef}
          plugins={plugins}
          editorState={editorState}
          onChange={setEditorState}
          onTab={onTabHandle}
          handleKeyCommand={onHandleKeyBindings}
          spellCheck
          customStyleMap={styleMap}
        />
        <InlineToolbar >
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <Fragment>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <textAlignmentPlugin.TextAlignment {...externalProps} />
                <hr />
                <HeadlineOneButton {...externalProps} />
                <HeadlineTwoButton {...externalProps} />
                <HeadlineThreeButton {...externalProps} />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
              </Fragment>
            )
          }
        </InlineToolbar>
      </div>
    </div>
  );
};

export default BookEditor;
