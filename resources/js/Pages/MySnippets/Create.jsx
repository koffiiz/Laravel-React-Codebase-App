import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import SnippetEditor from '@/Components/SnippetEditor';
import { Head, usePage } from '@inertiajs/inertia-react';
import LanguageDropDown from '@/Components/LanguageDropdown'
import Input from '@/Components/Input';
import Textarea from '@/Components/Textarea'
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import { Inertia } from '@inertiajs/inertia';

const MySnippetCreate = (props) => {

  const { language_list } = usePage().props;

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [languageCode, setLanguageCode] = useState("js");
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const resetFormInputs = () => {
    setLanguage('');
    setCode('');
    setTitle('');
    setDescription('');
    document.getElementById('snippet-editor').querySelector("code").innerHTML ='';
  }

  console.log({languageCode, language});
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      code_snippet: code,
      language: language,
      language_code: languageCode,
      description: description
    }

    Inertia.post('/my-snippets/store', formData)
    resetFormInputs();
  } 

  const formInputs = (
    <div className='form-inputs__container'> 
        <div className='add-snippet__inputs'>
            <Label 
              forInput='title'
              value={'Title'}
            />
            <Input
              type='text'
              name='title'
              required={true}
              className='text-sm'
              handleChange={(e) => setTitle(e.target.value)}
              value={title}
            />

          </div>

          <div className='add-snippet__inputs'>
          <Label 
              forInput='description'
              value={'Description'}
            />
            <Textarea
                rows={5}
                name='description'
                required={true}
                className='text-sm'
                handleChange={(e) => setDescription(e.target.value)}
                value={description}
            />
          </div>

          <div className='add-snippet__inputs'> 
            <Button type='submit'>
              Save Snip
            </Button>
          </div>

    </div>
  );

  const snippetEditor = (
    <div className='add-snippet__container'>
      <div className='add-snippet__header'>
        <h3> Add Snip </h3>
        <LanguageDropDown 
          language_list={language_list}
          onChange={(e) => {
            setLanguage(e.target.value)
            var code = e.target.options[e.target.selectedIndex].dataset.code;
            setLanguageCode(code);
          }}
          name={'language-change'}
        />
      </div>

      <SnippetEditor
        language={language}
        placeHolder="Type your code here..."
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />

    </div>
  )

  const pageLayout = (
    <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Snipp</h2>}
    >
      <Head title="My Snippets Create" />

      <div id="MySnippetsCreate">
        <form onSubmit={handleSubmit}>
          {snippetEditor}
          {formInputs}

        </form>
      </div>
    </Authenticated>
  )

  return pageLayout;
}

export default MySnippetCreate;

