import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            section: [
                {
                    id: 1,
                    category: "hats",
                    linkUrl: "hats"
                },
                {
                    id: 2,
                    category: 'shirt',
                    linkUrl: 'shirt'
                },
                {
                    id: 3,
                    category: 'pants',
                    linkUrl: 'pants'
                },
                {
                    id: 4,
                    category: 'shorts',
                    linkUrl: 'pants'
                }
            ]
        };
    }
    render(){
        return <div className="directory">
        {this.state.section.map(({id, ...otherSectionProps})=> <MenuItem key={id} {...otherSectionProps} />)}
    </div>  
    }
}

export default Directory;