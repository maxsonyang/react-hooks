import React from 'react';
import { Helmet } from 'react-helmet';


function WebsiteHelmet() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
      rel="stylesheet" />
    </Helmet>
  )
}

export default WebsiteHelmet;