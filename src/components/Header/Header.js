import React,{useState} from "react";

import {Grid, Toolbar, Typography, Box,
    Tabs,
    Tab,
    makeStyles
} from "@material-ui/core";

const tabs = ['home', 'blogs', 'contact', 'sign in', 'sign up']

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        fontSize: 40,
        color: '#fafafa',
        textTransform: "uppercase",
        '& h3': {
            fontFamily: 'Roboto Mono, monospace',
        }
    },
    menu: {
        color: '#fafafa'
    }
}))

export default function Header() {
    const c = useStyles()
    const [activeTab, setActiveTab] = useState(0)

    const handleTab = (e, tab) => {
        setActiveTab(tab)

    }

    return (
        <Toolbar className={c.root}>
            <Box p={2} width={'100%'}>
                <Grid container>
                    <Grid item md={5}>
                        <Typography className={c.logo} variant={"h3"}>Fredda</Typography>
                    </Grid>
                    <Grid item md={7}>
                        <Tabs
                            value={activeTab}
                            centered
                            onChange={handleTab}
                            indicatorColor={"secondary"}
                            textColor={"secondary"}
                        >
                            {
                                tabs.map(tab =>
                                    <Tab className={c.menu} key={tab} label={tab} />
                                )
                            }
                        </Tabs>
                    </Grid>
                </Grid>
            </Box>
        </Toolbar>
    )
}