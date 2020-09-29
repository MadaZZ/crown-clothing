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



// const DirectoryMenu = (props) => {
//     return(
//         <div className='directory-menu'>
//             {<MenuItem title={'Shoes'} />}
//         </div>
//     )
// }

export default DirectoryMenu;