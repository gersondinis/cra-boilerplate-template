import React, {Fragment} from 'react';
import {Box, Card, CardContent, Typography} from '@material-ui/core';
import {t} from 'ttag';

const Help = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {t`Hi there!`} This is a boilerplate based on CRA.
                        </Typography>
                        <Typography variant="body2">
                            -`store` for cross-browser local storage;<br />
                            -`overmindjs` for state management;<br />
                            -`hookrouter` for routing;<br />
                            -`ttag` for internalization;<br />
                            -`material-ui` for theme/components library;<br />
                            -`axios` for REST;<br />
                            -`storybook` for components building.
                        </Typography>
                    </CardContent>
                </Fragment>
            </Card>
        </Box>
    );
};

export default Help;