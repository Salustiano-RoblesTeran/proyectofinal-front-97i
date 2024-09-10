const url = "http://localhost:5000/api/register"; 

export const authRegistro = async (datos) => {
    try {
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const data = await resp.json();

        return data;
    } catch (error) {
        // los errores
        console.log("Error en la conexión con el servidor:", error);
        return { msg: "No se conectó con backend" };
    }
}
