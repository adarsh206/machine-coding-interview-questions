
const Preview = ({ fileDetail }) => {
    console.log(fileDetail);

  return (
    <div>
        <img src="" alt={fileDetail.name} />
        <span>{fileDetail.name}</span>
        <span>{(fileDetail.size / 1024).toFixed(2)} KB</span>
        <button>x</button>
    </div>
  )
}

export default Preview