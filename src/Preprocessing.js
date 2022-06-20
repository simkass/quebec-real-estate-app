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
                    <p>These two continuous numerical features have been filtered by limiting them to a specific interval of values in order to remove outliers. To determine the interval of acceptable values for a specific feature,
                        we consider two things: the feature's typical interval of values, and our dataset's distribution of values. For example, consider the following histogram for the Living Area feature.</p>
                </div>

                <div className='Image'>
                    <div className='image'>
                        <img src={"assets/graphs/living-area-hist-orig.PNG"}></img>
                        <p className='desc'>Distribution of values for Living Area.</p>
                    </div>
                </div>

                <div className='text'>
                    <p>Looking at this histogram clearly shows that most residential units have a living area between 500 and 3000 square feet. This makes a lot of sense since a typical house will have a living area of around
                        1000 to 2000 square feet. After adjusting our intervals, we get the following histograms for living area and lot dimensions.
                    </p>
                </div>

                <div className='Image'>
                    <div className='image'>
                        <img src={"assets/graphs/living-area-hist.PNG"}></img>
                        <img src={"assets/graphs/lot-dimensions-hist.PNG"}></img>
                        <p className='desc'>Adjusted distribution of values for Living Area and Lot Dimensions.</p>
                    </div>
                </div>

                <div className='text'>
                    <h2>NaN Values</h2>
                    <p>When they are scarce, rows containing NaN values can be dropped. This way, we avoid reducing the quality of our dataset by sacrificing a small portion of it.
                        However, if dropping these rows reduce considerably the size of our dataset, it might be worth sacrificing its quality instead. To do that, we replace NaN values with
                        ones that accurately represent the rest of the data. This reduces the quality of our dataset because part of the data isn't real anymore, it's estimated using
                        the statistical parameters of the group it belongs to. The following table indicates how NaN values were replaced (or dropped) for every feature.
                    </p>
                </div>

                <div className='table small-table'>
                    <Table size='small'>
                        <TableHead>
                            <TableRow><TableCell><b>Feature</b></TableCell><TableCell><b>NaN Replacement</b></TableCell></TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow><TableCell align="left">Subtype</TableCell><TableCell align="left">Dropped</TableCell></TableRow>
                            <TableRow><TableCell align="left">Living Area</TableCell><TableCell align="left">Mean</TableCell></TableRow>
                            <TableRow><TableCell align="left">Lot Dimensions</TableCell><TableCell align="left">Mean</TableCell></TableRow>
                            <TableRow><TableCell align="left">Bedrooms</TableCell><TableCell align="left">Dropped</TableCell></TableRow>
                            <TableRow><TableCell align="left">Bathrooms</TableCell><TableCell align="left">Dropped</TableCell></TableRow>
                            <TableRow><TableCell align="left">Levels</TableCell><TableCell align="left">Dropped</TableCell></TableRow>
                            <TableRow><TableCell align="left">Listing Date</TableCell><TableCell align="left">Dropped</TableCell></TableRow>
                            <TableRow><TableCell align="left">Year of Construction</TableCell><TableCell align="left">Mean</TableCell></TableRow>
                            <TableRow><TableCell align="left">Price</TableCell><TableCell align="left">Dropped</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>

            </div>
        </div>
    )
}

export default Preprocessing;