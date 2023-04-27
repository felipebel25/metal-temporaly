import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {

    // If there is no product matching the slug
    const router = useRouter();
    useEffect(() => {
        router.push('/');
    }, [])

    return (
        <></>
    )
}

export default NotFoundPage

