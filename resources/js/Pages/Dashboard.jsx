import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage, InertiaLink } from '@inertiajs/inertia-react';
import CodeBadge from '@/Components/CodeBadge';

export default function Dashboard(props) {

    const { snippet_list } = usePage().props;

    const snipList = (
        <div className='snip-list__container'>
          {
            snippet_list.length > 0 && snippet_list.map((snippet, index) => {
            return (
              
              <InertiaLink href={route('dashboard.show', { slug: snippet.slug })} >
                <div className='snip-list bg-white shadow'>
                  <div className='snip-header__wrapper'>
                    <h2 className='font-semibold text-l text-gray-800'> {snippet.title} </h2>
                    <CodeBadge
                      code={snippet.language_code}
                      > { snippet.language_code } 
                    </CodeBadge>
                  </div>
    
                  <div className='snip-description__wrapper'> 
                    <p> {snippet.description} </p>
                  </div>

                  <div className='snip-author__wrapper'>
                      <span className='snip-author'> 
                        <label>Author: {snippet.user.name}</label>
                      </span>
                  </div>
                  </div>
                </InertiaLink>
            )
            })
          }
        </div>
      )

      
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            isMySnippet={false}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div id="Dashboard">
                <div className='mySnippets-content__container'>
                    <h2 className='snipList--heading'> Recent Snip</h2>
                    {snipList}
                </div>
            </div>

        </Authenticated>
    );
}
