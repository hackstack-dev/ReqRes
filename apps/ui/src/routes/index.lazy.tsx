import { createLazyFileRoute } from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";

const getHello = async () => {
    return fetch('http://localhost:3000/api/hello').then((res) => res.json())
}
export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const query = useQuery({ queryKey: ['hello'], queryFn: getHello })
    return (
        <div className="p-2">
            <h3 className="text-5xl">{query.data?.message}</h3>
        </div>
    )
}