import ReactHookFormExample from 'components/ReactHookFormExample/ReactHookFormExample';
import {Grid} from '@mui/material';
import {ReactQueryExample} from 'components/ReactQueryExample/ReactQueryExample';
import ValtioExample from 'components/ValtioExample/ValtioExample';


const ExamplesPage = () => {
  return (
    <Grid spacing={3} container>
      <Grid xs={12} md={6} xl={4} item>
        <ReactHookFormExample/>
      </Grid>
      <Grid xs={12} md={6} xl={4} item>
        <ReactQueryExample/>
      </Grid>
      <Grid xs={12} md={6} xl={4} item>
        <ValtioExample/>
      </Grid>
    </Grid>
  );
};

export default ExamplesPage;
