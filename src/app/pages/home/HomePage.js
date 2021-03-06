import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hyperlink from '@material-ui/core/Link';
import hubmaplogo from '../../hubmap-person.svg';
import Button from '@material-ui/core/Button';

import HubmapPage from '../template/TemplatePage';

export default function HomePage(props) {
  const { headerLinks } = props;
  const theme = useTheme();

  return (
    <HubmapPage headerLinks={headerLinks}>
        <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
          <Typography variant="h1" gutterBottom>
            The HuBMAP Portal Style Guide
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A lightweigt style guide based on the Material Design Language.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The user interface for the HuBMAP Portal will be based on the <a href="https://material.io">Material</a> design system
            and implemented using the <a href="https://material-ui.com">Material UI</a> library of <a href="http://reactjs.org">React</a> components.
          </Typography>
          <Typography variant="body1">
            This style guide was developed to showcase key elements of the HuBMAP Portal theme designed for Material UI.
            Generally, developers should refer to Material and Material UI documentation for information about look and feel as well as functionality.
            This style guide will evolve along with the development of the HuBMAP Portal user interfaces.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} lg={12} style={{ padding: theme.spacing(2) }}>
              <Card>
                <CardActionArea>
                  <CardMedia image={hubmaplogo} component="img" height="100px" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      HuBMAP Consortium
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Members of the HuBMAP consortium are developing the tools to create an open, global atlas of the human body at the cellular level.
                      These tools and maps will be openly available, to accelerate understanding of the relationships between cell and
                      tissue organization and function and human health.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Hyperlink color="inherit" href="https://hubmapconsortium.org">
                      Learn More
                    </Hyperlink>
                  </Button>
                </CardActions>
              </Card>
          </Grid>

        <Grid container>
        <Grid item xs={12} sm={6} lg={6}  style={{ padding: theme.spacing(2) }}>
            <Typography variant="h2" gutterBottom>
              Development
            </Typography>
            <Typography variant="body1" gutterBottom>
              This style guide is implemented as a React app with Material UI and can be found on <a href="https://github.com/hubmapconsortium/portal-style-guide">GitHub</a> in the HuBMAP organization.
              Additions and revisions should be submitted as pull requests against that repository.
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}  style={{ padding: theme.spacing(2) }}>
            <Typography variant="h2" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" gutterBottom>
              The style guide is currently being maintained by the HuBMAP HIVE Tools Component at Harvard Medical School.<br/>
            </Typography>
            <Typography variant="body2" gutterBottom>
              PI: Nils Gehlenborg (<Hyperlink>nils@hms.harvard.edu</Hyperlink>).
            </Typography>
          </Grid>
        </Grid>
    </HubmapPage>
  );
}
