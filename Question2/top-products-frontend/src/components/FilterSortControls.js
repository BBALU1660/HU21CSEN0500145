import React from 'react';
import { Button, TextField, Grid } from '@mui/material';

function FilterSortControls({ filters, setFilters }) {
    const handleInputChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Grid container spacing={3} style={{ padding: '20px' }}>
            <Grid item xs={12} sm={4}>
                <TextField
                    label="Top N"
                    type="number"
                    name="top"
                    value={filters.top}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    label="Min Price"
                    type="number"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    label="Max Price"
                    type="number"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ marginTop: '10px' }}
                >
                    Apply Filters
                </Button>
            </Grid>
        </Grid>
    );
}

export default FilterSortControls;
