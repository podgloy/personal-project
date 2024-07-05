import React from 'react';

export default function FirstPage() {
    return (
        <main>
          <section className='m-5'>
              <div className='pt-14 flex flex-row justify-between'>
                  <h1 className='text-white text-m font-bold'> Logo </h1>
                  <img src="/4dot.svg"/>
              </div>

              <div className='pt-9'>
                <h1 className='text-white opacity-50 text-4xl font-bold'> If your life </h1>
                <h1 className='text-white opacity-50 text-4xl font-bold'> were a movie, </h1>
              </div>

              <div className='pt-5 float-right'>
                <h1 className='float-right text-white text-2xl font-bold'> what </h1>
                <h1 className='text-lime-400 text-7xl font-bold italic'> GENRE </h1>
                <h1 className='text-white text-2xl font-bold'> would it belong to? </h1>
              </div>
            </section>

            <img src="/groupP.1.png"/>

        </main>

    )
   
}