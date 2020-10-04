import React from 'react'
import './directory-menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import sections from '../../dataFiles/directory.data';

class DirectoryMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            Sections: sections
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.Sections.map(({id, ...otherOptions}) => (
                    <MenuItem key={id} {...otherOptions} />
                ))}
            </div>
        )
    }
}

export default DirectoryMenu;