import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectoryItems } from '../../redux/directory/directory.selector';

import './directory-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenu = ({ Sections }) => {
    return (
        <div className='directory-menu'>
            {Sections.map(({ id, ...otherOptions }) => (
                <MenuItem key={id} {...otherOptions} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    Sections: selectDirectoryItems
});


export default connect(mapStateToProps)(DirectoryMenu);