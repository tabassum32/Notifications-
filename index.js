const Notification = props => {
  //  Write your code here.
  {imgUrl, img, msgCard,msgContent} = props.source;
  return (
  <div className = {msgCard}>
      <img src={imgUrl} className = {img} />
      <p>{msgContent}</p>
  </div>
  );
};

const sourcePrimary = {
    imgUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    img = "img-primary",
    msgCard = "img-card",
    msgContent = "Information Message"
};

const sourceSuccess = {
    imgUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
    img = "img-primary",
    msgCard = "img-card",
    msgContent = "Success Message"
};

const sourceWarning = {
    imgUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    img = "img-primary",
    msgCard = "img-card",
    msgContent = "Warning Message"
};

const sourceDanger = {
    imgUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    img = "img-primary",
    msgCard = "img-card",
    msgContent = "Danger Message"
};

const element = (
  //  Write your code here.   
  <div>
      <h1>Notofications</h1>
      <Notification source = {sourcePrimary}/>
      <Notification source = {sourceSuccess}/>
      <Notification source = {sourceWarning}/>
      <Notification source = {sourceDanger}/>

  </div>
)

ReactDOM.render(element, document.getElementById('root'))
