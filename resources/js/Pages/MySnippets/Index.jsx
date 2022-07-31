import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codepenEmbed } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import NavLink from '@/Components/NavLink';
import CodeBadge from '@/Components/CodeBadge';

const MySnippets = (props) => {
  const { snippet_list } = usePage().props;

  const snipList = (
    <div className='snip-list__container'>
      {
        snippet_list.length > 0 && snippet_list.map((snippet, index) => {
        return (
          <div className='snip-list bg-white shadow'>
            <div className='snip-header__wrapper'>
              <h2 className='font-semibold text-l text-gray-800'> {snippet.title} </h2>
              <CodeBadge
                code={snippet.language_code}
                > { snippet.language_code } 
              </CodeBadge>
            </div>
            <SyntaxHighlighter
            language={snippet.language} 
            style={codepenEmbed}
            showLineNumbers={true}
            >
              {snippet.code_snippet}
            </SyntaxHighlighter>
            </div>
        )
        })
      }
    </div>
  )

  const pageLayout = (
    <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Snips</h2>}
    >
      <Head title="My Snippets"  />

      <div id="MySnippets">
        <div className='mySnippets-content__container'>
          {snipList}
        </div>
      </div>
    </Authenticated>
  )

  return pageLayout;
}

export default MySnippets;

