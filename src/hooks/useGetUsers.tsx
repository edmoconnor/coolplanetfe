export function useGetUsers() {
  console.log('gvhg')
  return (
    fetch('http://localhost:3000/users')
    .then(data => data.json())
    
  )
}

export function useGetUser(id) {
  return fetch('http://localhost:3000/users/' + id)
    .then(data => data.json())
}


 
