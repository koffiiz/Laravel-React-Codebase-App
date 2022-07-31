import React , { useEffect, createRef }from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import GLOBE from 'vanta/dist/vanta.globe.min'
import Rocket from '../../images/rocket.svg'

export default function Welcome(props) {
    const ref = createRef()

    useEffect(() => {
        ref.current = GLOBE({
            el: ref.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: "#6D24CE"
          });
    }, []);


    return (
        <>
            <Head title="Welcome" />
            <div style={{ height: "100vh", width: "100%" }} ref={ref}></div>

            <div className="absoulute flex items-top justify-center min-h-screen sm:items-center sm:pt-0 index__container">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-white underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-white underline">
                                Log in
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm text-white underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className='text-white'>
                    <div className='banner-heading__container'>
                        <div className='rocket__container'>
                            <h2 className='index__heading'> iPhTech </h2>
                            <img src={Rocket} style={{
                                    maxWidth: '5rem'
                                }}/>
                        </div>

                        <h1 className='index__heading'>SNIPPETS</h1>
                    </div>
                    
                    <p className='index__subheading'> Share your code snippet and earn points ! </p>
                </div>

            </div>
        </>
    );
}
