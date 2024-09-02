import Button from "./Button"

const list=["All","Gaming","Songs","Soccer","News","Music","Live","Cooking","Cricket","Soccer","News","Music","Live"]

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item,index) => (
         <Button key={index} name={item}/>
      ))}
    </div>
  )
}

export default ButtonList
