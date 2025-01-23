import * as React from 'react';

interface EmailTemplateProps {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  data,
}) => (
  <div>
    <h1>New Message from: {data.firstName} {data.lastName}</h1>
    <h2>From email: {data.email}</h2>
    <h2>Message: {data.message}</h2>
  </div>
);
