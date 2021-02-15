import React from 'react';
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

function Directory({section}) {
    return <div className="directory">
        {section.map(({id, ...otherSectionProps})=> <MenuItem key={id} {...otherSectionProps} />)}
    </div> 
} 
const mapStateToProps = createStructuredSelector({
    section: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);