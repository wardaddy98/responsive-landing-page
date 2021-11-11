import React from 'react';
import './Writers.css';



function Writers() {


    const urls=['https://content.latest-hairstyles.com/wp-content/uploads/hairstyles-for-oval-faces.jpg',
                'https://i.shgcdn.com/c37924fe-be73-431d-ab9a-77956248f3b7/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
                'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/w_sexy_gr.jpg',
                'https://cdn.pocket-lint.com/r/s/1200x/assets/images/142207-phones-feature-what-is-apple-face-id-and-how-does-it-work-image1-5d72kjh6lq.jpg',
                'https://manofmany.com/wp-content/uploads/2021/04/Hair-for-Your-Face-Shape-1067x800.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlko14weOTn67HSXWIU7oT2w_edJUYBXX__wfAvQ_o5N5u0uNT0gEy2G7N0_kGW-gVWWM&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUuZIHqM1bep--MeHCt07yhGawxtfIj-nFGYH3da9m5FigJilLnU5E3IyGXc4ZN1f9tI&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4-qoqKJfpra1-2myiuIM3kgBGjqSwC17FMg_j1AZOX4_5InVq55ocuatMmYmtjkz-4k&usqp=CAU'
            ]


    return (
        
        
        <div className='parent-container'>
            
            <h1>Featured Writers</h1>
            
            <div className='writer-container'>
                    <div className='items'>
                        <img src={urls[0]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='items'>
                        <img src={urls[1]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='items'>
                        <img src={urls[2]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='items'>
                        <img src={urls[3]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='items'>
                        <img src={urls[4]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='items'>
                        <img src={urls[5]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='items'>
                        <img src={urls[6]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>

                    <div className='items'>
                        <img src={urls[7]} alt= 'writers' width='500px' height='500px'/>
                        <p>Lorem Ipsum</p>
                    </div>
                   
                
            </div>
        </div>
    )
}

export default Writers
