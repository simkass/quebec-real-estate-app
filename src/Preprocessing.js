import './Preprocessing.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from "react";
import Papa from "papaparse";

function Preprocessing() {
    const [rawRows, setRows] = React.useState([]);
    React.useEffect(() => {
        Papa.parse("assets/data/raw.csv", {
            download: true,
            header: true,
            complete: data => {
                setRows(data.data);
            }
        });
    }, []);


    return (
        <div className='Preprocessing'>
            <div className='preprocessing'>

                <div className='title'>
                    <h1>Cleaning the Data.</h1>
                </div>

                <div className='text'>
                    <p>In its raw format, the scraped data has 169 894 listings. Here's a sample.</p>
                </div>

                <div className='table'>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Subtype</b></TableCell>
                                <TableCell><b>Style</b></TableCell>
                                <TableCell><b>Living Area</b></TableCell>
                                <TableCell><b>Lot Dimensions</b></TableCell>
                                <TableCell><b>Bedrooms</b></TableCell>
                                <TableCell><b>Bathrooms</b></TableCell>
                                <TableCell><b>Levels</b></TableCell>
                                <TableCell><b>Location</b></TableCell>
                                <TableCell><b>Listing Date</b></TableCell>
                                <TableCell><b>Year of Construction</b></TableCell>
                                <TableCell><b>Municipal Evaluation</b></TableCell>
                                <TableCell><b>Price</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rawRows.map((row) => (
                                <TableRow>
                                    <TableCell align="left">{row.subtype}</TableCell>
                                    <TableCell align="left">{row.style}</TableCell>
                                    <TableCell align="left">{row.living_area}</TableCell>
                                    <TableCell align="left">{row.lot_dimensions}</TableCell>
                                    <TableCell align="left">{row.bedrooms}</TableCell>
                                    <TableCell align="left">{row.bathrooms}</TableCell>
                                    <TableCell align="left">{row.levels}</TableCell>
                                    <TableCell align="left">{row.location}</TableCell>
                                    <TableCell align="left">{row.listing_date}</TableCell>
                                    <TableCell align="left">{row.year_of_construction}</TableCell>
                                    <TableCell align="left">{row.municipal_eval}</TableCell>
                                    <TableCell align="left">{row.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className='text'>
                    <p>As you may know, it's crucial to clean and format this data if we hope to use it for analytical and machine learning purposes.
                        The following sections briefly explain how every column of the raw tabular data was cleaned and rendered consumable.
                    </p>
                </div>

                <div className='text'>
                    <h2>Subtype & Style</h2>
                    <p>Subtype and Style are two very similar features. In fact they share a few possible values that are identical such as 2 Storey and Semi-Detached.
                        The values given by subtype are in my opinion more informative than the style. For example, the style column doesn't have any value for condos whereas the
                        subtype will mark them as Condominiums. For this reason, the style feature is dropped and the subtype is kept. The raw data has 18 unique subtype values,
                        none of them are NaN. However, some of the possible values have less than a thousand occurences. This means they represent less than 1% of the data, making them rather insignificant.
                        For this reason, they are dropped and we are left with the following 8 possible subtype values:
                    </p>

                    <p className='list'>Bungalow, 2 Storey, Condominium, Semi-detached, Townhouse, Bi-generation, Split Level, 1 1/2 Storey.</p>
                    
                    <h2>Living Area & Lot Dimensions</h2>
                </div>

            </div>
        </div>
    )
}

export default Preprocessing;