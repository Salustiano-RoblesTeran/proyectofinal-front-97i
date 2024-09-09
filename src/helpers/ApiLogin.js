const url = "http://localhost:3000/api/login";

export const authLogin = async (datos) => {
    try {

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error en la respuesta del servidor:', errorData);
            throw new Error(errorData.message || 'Error en la autenticación');
        }

        return await response.json();
    } catch (error) {
        console.log("Error en la conexión con el servidor:", error);
        return { msg: error.message || 'No se conectó con el backend' };
    }
};
