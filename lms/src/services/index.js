import axiosInstance from "@/api/axiosInstance";

export async function registerService(FormData) {
    const {data} = await axiosInstance.post('/auth/register',  {...
        FormData,
        role : 'user'
    })

    return data.data;
}