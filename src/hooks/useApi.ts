import { useEffect, useState } from "react";
import { UseApiProps } from "./@types";

export function useApi({ url, selection = false, newComming = false }: UseApiProps) {
    const [data, setData] = useState([]);
    async function api() {
        try {
            let data;
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${url}`);
            const result = await response.json();
            data = result;
            selection && (data = result.filter((item: { NivelDestaque: string; }) => item.NivelDestaque === "SuperDestaque"));
            newComming && (data = result.filter((item: { NivelDestaque: string; }) => item.NivelDestaque === "Destaque"));
            setData(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        api();
    }, []);

    return { data }
}