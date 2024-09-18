

const Watch = ({watch}) => {
    const {name,brand,smart_watch} = watch;
  return (
    <div>
      <h1> Watch name : {name} </h1>
      <h2> Brand : {brand} </h2>
      <h3> Smart Watch : {smart_watch? 'Yes' : 'No'} </h3>
    </div>
  )
}

export default Watch
