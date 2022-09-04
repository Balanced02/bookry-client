import { EditorState, Modifier, RichUtils, DraftModel } from 'draft-js';

export const onTab = (e, editorState: EditorState, setEditorState: (state: EditorState) => void) => {
  e.preventDefault();
  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  if (blockType === 'unordered-list-item' || blockType === 'ordered-list-item') {
    setEditorState(RichUtils.onTab(e, editorState, 3));
  } else {
    const newContentState = Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), '    ');
    setEditorState(EditorState.push(editorState, newContentState, 'insert-characters'));
  }
};

export const handleKeyBindings = (
  command: DraftModel.Constants.DraftEditorCommand,
  editorState: EditorState,
  setEditorState: (state: EditorState) => void,
) => {
  const newEditorState = RichUtils.handleKeyCommand(editorState, command);

  if (newEditorState) {
    setEditorState(newEditorState);
    return 'handled';
  }

  return 'not-handled';
};

export const styleMap = {
  HIGHLIGHT: {
    backgroundColor: '#F2C94C',
  },
};
