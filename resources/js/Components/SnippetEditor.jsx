import React from 'react';

import CodeEditor from '@uiw/react-textarea-code-editor';

const SnippetEditor = ({language ,placeHolder, onChange, onKeyDown, value }) => {
  const form = (

    <div className='snippet-form__container' id="snippet-editor">
      <CodeEditor
        value={value}
        language={language}
        placeholder={placeHolder}
        onChange={onChange}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
        minHeight='220px'
    />
    </div>
  );

  return form;
}
export default SnippetEditor;
