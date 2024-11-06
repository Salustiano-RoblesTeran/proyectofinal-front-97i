const url = "https://comision97i-backfinal.vercel.app/api/login"; 

export const authLogin = async ({ email, password }) => {
    try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          // Devolver el token y el usuario al componente
          return {
            token: data.token,
            user: data.user,  // Esto debe incluir el role del usuario
          };
        } else {
          return { msg: data.msg };
        }
      } catch (error) {
        return { msg: "Error en el servidor" };
      }
};

