const ObjetoUsuarios = (props) => {
  const { usuarios } = props;
  console.log(usuarios);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    setUsuario(usuarios);
  }, [usuarios]);

  const aceptarUsuario = (id) => {
    const usuarioAceptado = usuarios.find((usuario) => usuario.id === id);
    setUsuario(usuarios.filter((usuario) => usuario.id !== id));
    setUsuario([...usuario, usuarioAceptado]);
  };

  const rechazarUsuario = (id) => {
    const usuarioRechazado = usuarios.find((usuario) => usuario.id === id);
    setUsuario(usuarios.filter((usuario) => usuario.id !== id));
    setUsuario([...usuario, usuarioRechazado]);
  };

  const { nombre, apellido, email, dni, telefono } = usuario;

  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Email: {email}</p>
      <p>DNI: {dni}</p>
      <p>Teléfono: {telefono}</p>
      <button onClick={() => aceptarUsuario(id)}>Aceptado</button>
      <button onClick={() => rechazarUsuario(id)}>Rechazado</button>
    </div>
  );
};
export default ObjetoUsuarios;
