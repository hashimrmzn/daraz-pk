import React from "react";
import { Grid, Card } from "@mui/material";

function DynamicGrid({
    data = [],
    spacing = 0,
    xs = 12,
    sm = 6,
    md = 2,
    border = false,
    cardStyles = {},
    renderItem,
}) {
    return (
        <Grid
            container
            spacing={spacing}
            mt={2}
            sx={
                border
                    ? {
                        '--Grid-borderWidth': '1px',                      
                        borderColor: 'divider',
                        '& > div': {
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                        },
                    }
                    : {}
            }
        >
            {data.map((item) => (
                <Grid item key={item.id} xs={xs} sm={sm} md={md}>
                    <Card
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            boxShadow: 0,
                            "&:hover": {
                                boxShadow: 6,
                                transform: "translateY(-4px)",
                            },
                            ...cardStyles,
                        }}
                    >
                        {renderItem(item)}
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default DynamicGrid;
