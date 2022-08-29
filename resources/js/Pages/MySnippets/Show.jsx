import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import CodeBadge from '@/Components/CodeBadge';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codepenEmbed } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const MySnippetEdit = (props) => {

  const { my_snippet } = usePage().props;

  const pageHeading = (
    <h2 className="font-semibold text-xl text-gray-800 leading-tight my-snippet-heading"> 
      {my_snippet.title} 
      {/* <CodeBadge 
      code={my_snippet.language_code}
      > 
      {my_snippet.language} 
      </CodeBadge>  */}
    </h2>
  )

  const mySnippetCard = (
    <div className='my-snippet-card bg-white shadow'>

        <div className='my-snippet-header__wrapper'>
        <div className='my-snippet-title__wrapper'>
          <h2 className='font-semibold text-l text-gray-800'> {my_snippet.title} </h2>
          <CodeBadge
            code={my_snippet.language_code}
            > { my_snippet.language_code } 
          </CodeBadge>
          </div>
          <div className='my-snippet-copy-clipboard'>
            <CopyToClipboard text={my_snippet.code_snippet}>
              <span>Copy to clipboard</span>
            </CopyToClipboard>
          </div>
        </div>

        <SyntaxHighlighter
          language={my_snippet.language} 
          style={codepenEmbed}
          showLineNumbers={true}
          >
            {my_snippet.code_snippet}
        </SyntaxHighlighter>

        <div className='my-snippet-details'>
          {my_snippet.description}
        </div>
    </div>
  )

  const pageLayout = (
    <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={pageHeading}
        isMySnippet={true}
    >
      <Head title="My Snippets Show" />

      <div id="MySnippetsShow">
        {mySnippetCard}
      </div>
    </Authenticated>
  )

  return pageLayout;
}

export default MySnippetEdit;

