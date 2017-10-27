export default //Renderer-specific settings
{
    id_col: 'USUBJID',
    unit: 'participant',
    event_col: 'DOMAIN',
    eventTypes: null,
    site_col: 'SITE',
    filters: null,
    highlightedEvent: null,
    stdy_col: 'STDY',
    endy_col: 'ENDY',
    seq_col: 'SEQ',
    details: null,
    listingConfig: null,
    id_characteristics: null,
    referenceLines: null,
    details: null,

    //Standard webcharts settings
    x: {
        type: 'linear',
        column: 'wc_value',
        label: 'Study Day'
    },
    y: {
        type: 'ordinal', // set in syncSettings()
        column: null,
        label: null,
        sort: 'earliest',
        behavior: 'flex'
    },
    marks: [
        {
            type: 'line',
            per: null, // set in syncSettings()
            tooltip: null, // set in syncSettings()
            attributes: {
                'stroke-width': 3,
                'stroke-opacity': 1
            }
        },
        {
            type: 'circle',
            per: null, // set in syncSettings()
            tooltip: null, // set in syncSettings()
            radius: '3',
            attributes: {
                'fill-opacity': 1,
                'stroke-opacity': 1
            }
        }
    ],
    color_dom: null, // set in syncSettings()
    legend: {
        location: 'top',
        label: '',
        mark: 'circle',
        order: null
    }, // set in syncSettings()
    gridlines: 'y',
    range_band: 24,
    margin: { top: 50 }, // for second x-axis
    resizable: false
};
