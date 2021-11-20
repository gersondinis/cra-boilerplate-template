import React, {Fragment} from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';
import {t} from 'ttag';

const HelpPage = () => {
  return (
    <Box sx={{minWidth: 275}}>
      <Card variant="outlined">
        <Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {t`Hi there!`} This is a boilerplate based on CRA.
            </Typography>
            <Typography variant="body2">
              -`store` for cross-browser local storage;<br/>
              -`valtio` for state management;<br/>
              -`hookrouter` for routing;<br/>
              -`ttag` for internalization;<br/>
              -`material-ui v5` for theme/components library;<br />
              -`notistack` for notification alerts;<br />
              -`axios` for REST;<br/>
              -`react-hook-form` for Forms validation;<br/>
              -`react-query` for Fetching and Caching;<br />
              -`storybook` for components building.
            </Typography>
          </CardContent>
        </Fragment>
      </Card>
    </Box>
  );
};

export default HelpPage;
