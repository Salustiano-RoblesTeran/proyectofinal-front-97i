const url = "http://localhost:5000/api/login";

export const authLogin = async (datos) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos), // Aquí quitamos la envoltura de { datos }
    });

    const data = await response.json();

    if (response.ok) {
      // Almacena el token y los datos del usuario por separado
      localStorage.setItem("token", data.token); // `data.token` desde la respuesta del backend
      localStorage.setItem("user", JSON.stringify(data.user)); // `data.user` desde la respuesta del backend
      alert("Usuario logueado con éxito");
      return data;
    } else {
      alert(data.msg || "Error al iniciar sesión");
      return null;
    }
  } catch (error) {
    console.error("Error en el login:", error);
    alert("Error en el login");
  }
};

