import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions =[
        {id:1, name:'free', price:0, benefits: [
            'lifetime free',
             'unlimidte', 
             'localize', 
             'crazy',
             'fantastic deals'
        ]},
        {id:2, name:'free', price:9000, benefits: [
            'lifetime free',
             'unlimidte', 
             'localize', 
             'crazy',
             'fantastic deals'
        ]},
        {id:3, name:'free', price:5000, benefits: [
            'lifetime free',
             'unlimidte', 
             'localize', 
             'crazy',
             'fantastic deals'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, distinctio pariatur commodi debitis soluta ipsam.</p>
          <div className='grid md:grid-cols-3 gap-3 mt-8'>
          {
                pricingOptions.map(option => <PricingOption
                key ={option.id}
                option ={option}
                
                ></PricingOption> )
            }
          </div>
        </div>
    );
};

export default Pricing;