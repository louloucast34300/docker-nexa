import { testServer } from "./test.server";

export const TestComponent = async () => {
    
    const response = await testServer();
    console.log(response)
  return (
    <div className="bg-red-500 p-4 rounded">
      <h1 className="text-white">Test Component</h1>
        {response.map((item: any) => (
          <div key={item.id} className="text-white">
            <p>{item.name}</p>
            <p>{item.breed}</p>
          </div>
        ))}
    </div>
  );
}