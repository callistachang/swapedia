import React from 'react';
import Category from './Category';

const categories = () => {
    const categoryList = [
        { name: 'People', link: '/people', desc: 'The likes of Luke Skywalker'},
        { name: 'Planets', link: '/planets', desc: 'More than 9'},
        { name: 'Films', link: '/films', desc: 'Insert angst'},
        { name: 'Species', link: '/species', desc: 'No speciesism allowed'},
        { name: 'Vehicles', link: '/vehicles', desc: 'Vroom'},
        { name: 'Starships', link: '/starships', desc: 'A cooler vehicle'}
    ]

    const categoryComponents = categoryList.map(category => {
        return (
            <div className="col-sm-6">
                <Category 
                    name={category.name}
                    desc={category.desc}
                    link={category.link} />
            </div>
        )
    });

    return (
        <div className="row">
            {categoryComponents}
        </div>
    )
}
 
export default categories;