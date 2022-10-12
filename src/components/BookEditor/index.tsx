/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { LegacyRef, useEffect, useRef, useState, useMemo, ChangeEvent, Fragment } from 'react';
import Editor from '@draft-js-plugins/editor';
import { EditorState, DraftModel, AtomicBlockUtils, DefaultDraftBlockRenderMap } from 'draft-js';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import { handleKeyBindings, onTab, styleMap } from './utils';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import createCounterPlugin from '@draft-js-plugins/counter';
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
  CodeBlockButton,
  CodeButton,
  SubButton,
  SupButton,
} from '@draft-js-plugins/buttons';
import { ChapterA } from 'types/api';
import 'node_modules/@draft-js-plugins/text-alignment/lib/plugin.css';
import 'node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css';
import './styles.scss';
import buttonStyles from './buttonStyles.module.css';
import toolbarStyles from './toolbarStyles.module.css';
import Comment from 'components/Comment';
import Immutable from 'immutable';
import { useDebounce } from 'hooks/helpers/useDebounce';

type BookEditorT = {
  chapter: ChapterA;
  updateTitle: (title: string) => Promise<any>
};

const alignmentPlugin = createAlignmentPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin({
  theme: {
    buttonStyles: buttonStyles,
    toolbarStyles: toolbarStyles,
  },
});
const textAlignmentPlugin = createTextAlignmentPlugin();
const counterPlugin = createCounterPlugin();
const { WordCounter } = counterPlugin;

const BookEditor = ({ chapter, updateTitle }: BookEditorT) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const editorRef = useRef<LegacyRef<Editor> | undefined>();
  const [title, setTitle] = useState<string>(chapter.title);

  const debouncedTitle = useDebounce(title);

  useEffect(() => {
    if (debouncedTitle !== chapter.title) {
      updateTitle(debouncedTitle);
    }
  }, [debouncedTitle]);

  const [plugins, InlineToolbar] = useMemo(() => {
    return [
      [inlineToolbarPlugin, alignmentPlugin, textAlignmentPlugin, counterPlugin],
      inlineToolbarPlugin.InlineToolbar,
    ];
  }, []);

  useEffect(() => {
    focusEditor();
  }, []);

  const focusEditor = () => {
    // @ts-ignore
    if (editorRef.current && editorRef.current.focus) {
      // @ts-ignore
      editorRef.current.focus();
    }
  };

  const onTabHandle = (e: unknown) => onTab(e, editorState, setEditorState);

  const onHandleKeyBindings = (c: DraftModel.Constants.DraftEditorCommand) =>
    handleKeyBindings(c, editorState, setEditorState);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const insertBlock = () => {
    const contentState = editorState.getCurrentContent();

    const contentStateWithEntity = contentState.createEntity('COMMENT', 'IMMUTABLE');

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, 'Hello'));
  };

  const blockRenderMap = Immutable.Map({
    COMMENT: {
      // element is used during paste or html conversion to auto match your component;
      // it is also retained as part of this.props.children and not stripped out
      element: 'section',
      wrapper: <Comment />,
    },
  });

  // keep support for other draft default block types and add our myCustomBlock type
  const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

  return (
    <div className="book-editor">
      <div className="title-container">
        <input type="text" className="title" placeholder="Title" value={title} onChange={handleTitleChange} />
      </div>
      <div onClick={focusEditor} className="editor-container">
        <div className="float-right word-count">
          <span>
            <strong>Word Count:</strong> <WordCounter /> words
          </span>
        </div>
        <Editor
          // @ts-ignore
          ref={editorRef}
          plugins={plugins}
          editorState={editorState}
          onChange={setEditorState}
          onTab={onTabHandle}
          handleKeyCommand={onHandleKeyBindings}
          spellCheck
          customStyleMap={styleMap}
          blockRenderMap={extendedBlockRenderMap}
        />
        <InlineToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <Fragment>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <CodeButton {...externalProps} />
                <CodeBlockButton {...externalProps} />
                {/* @ts-ignore */}
                <textAlignmentPlugin.TextAlignment {...externalProps} />
                <button {...externalProps} onClick={insertBlock} onMouseDown={(e) => e.preventDefault()}>
                  Comment
                </button>
                <hr />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
                <HeadlineOneButton {...externalProps} />
                <HeadlineTwoButton {...externalProps} />
                <HeadlineThreeButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
                <SubButton {...externalProps} />
                <SupButton {...externalProps} />
              </Fragment>
            )
          }
        </InlineToolbar>
      </div>
    </div>
  );
};

export default BookEditor;
