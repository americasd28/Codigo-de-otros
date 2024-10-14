const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); /*Se agrego "#" */
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

const displayUser=async(username)=> /*Se optimizo el cambio a arrow y se agrega "async"*/
{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const usuario=await response.json(); /*Se agrego para formato json*/
  console.log(usuario.data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

const handleError=(err)=> //Se mejora cambiando a funcion arrow
{
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; /*Se agrego  "$" a la variable y ";" al final de la líea de código*/
}

displayUser('stolinski').catch(handleError($n));