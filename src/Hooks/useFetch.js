import { useEffect, useState } from 'react';

const useFetch = (url, token) => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url, {
            headers: { Authorization: 'Bearer ' + token }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error("Unable to fetch or Unauthorized Access");
                }

                return res.json()
            })
            .then(data => {
                // console.log(data);
                setIsLoading(false)
                setData(data)
                setError(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err.message)
            })
        return () => abortCont.abort()
    }, [url, token])
    return { data, isLoading, error }
}

export default useFetch;
