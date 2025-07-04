'use server';

export const testServer = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL_SERVER}/chats`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
  return data;
}