import { Container } from "@mui/material"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system'; 
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"


export default function LandingPageNoLogin() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.light,
      }));

    return (
        <>
            <div className="hero">
                <Container maxWidth="lg" flex-end>
                    <Typography variant="h1">Kept</Typography>
                    <div className="small-title">Keep your team organized with a knowledge base</div>
                </Container>
            </div>


            <Container maxWidth="lg" style={{
                paddingTop: "120px",
                paddingBottom: '120px',
                textAlign: 'center'
            }}>
                {/* <Typography variant="h2">Pricing</Typography>
                <div className="pricing-options">
                    <Grid container spacing={5} marginTop={5}>
                        <Grid item xs>
                            <Item style={{
                                padding: "40px",
                            }}>
                                <Typography variant="h5">Individual</Typography>
                                <p>$0 seat/month</p>
                                <Link to="/register" style={{
                                    backgroundColor: "#fff",
                                    textAlign: 'center'
                                }}>Choose Option</Link>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item style={{
                                padding: "40px",
                            }}>
                                <Typography variant="h5">Basic</Typography>
                                <p>$0 seat/month</p>
                                <Link to="/register" style={{
                                    backgroundColor: "#fff",
                                    textAlign: 'center'
                                }}>Choose Option</Link>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item style={{
                                padding: "40px",
                            }}>
                                <Typography variant="h5">Standard</Typography>
                                <p>$0 seat/month</p>
                                <Link to="/register" style={{
                                    backgroundColor: "#fff",
                                    textAlign: 'center'
                                }}>Choose Option</Link>
                            </Item>
                        </Grid>
                    </Grid>
                </div> */}
            </Container>

        </>
    )
}