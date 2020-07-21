import React from 'react';
import { Page } from './Page';
import { Form } from './Form';
import { Field } from './Field';

export const AskPage = () => {
  return (
    <Page title="Ask a Question">
      <Form submitCaption="Submit Your Question">
        <Field name="title" label="Title" />
        <Field name="content" label="Content" type="TextArea" />
      </Form>
    </Page>
  );
};

export default AskPage;
