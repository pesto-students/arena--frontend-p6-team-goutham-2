/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '@components';

const CourtList = () => {
    const people = [

        {
            name: 'Calvin Hawkins',
            email: 'calvin.hawkins@example.com',
            rating: "4.3",
            search: "2",
            image: 'https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80',
        },
        {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            rating: "4.0",
            search: "4",
            image:
                'https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80',
        },
        {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            rating: "5.0",
            search: "5",
            image:
                'https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80',
        },
    ]
    return (
        <div className='w-full'>
            <Navbar />
            <div >
                <ul className="grid gap-4 grid-cols-2 px-10 ...">
                    {people.map((person) => (

                        <li key={person.email} className="py-4 flow-root">
                            <div className="flow-root ...">
                                <img className="rounded-t-lg aspect-video ..." src={person.image} alt="" />
                                <div className="ml-3">
                                    <div className='flex items-center justify-between	...'>
                                        <div>
                                            <p className="text-3xl italic">{person.name}</p>
                                        </div>

                                        <div>
                                            <img className="... rounded-t-lg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlok.com%2Ficons%2Fstar-icon-svg-rating-svg-icon-free-download%2F&psig=AOvVaw2WbL8CsaPqWULc2zo4PriJ&ust=1679116712042000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCzpKub4v0CFQAAAAAdAAAAABAE" alt="" />
                                            <p className="text-sm italic font-bold">{person.rating}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm italic font-bold">{person.email}</p>
                                    <p className="text-sm italic font-bold">+ {person.search} more</p>

                                    <p className="text-sm italic font-bold flex items-center justify-end	...">{person.email}</p>

                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default CourtList;
