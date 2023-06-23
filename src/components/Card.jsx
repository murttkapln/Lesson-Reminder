import {data} from "../data/data"
const Card = () => {
  return (
    <div className="row">
        {data.map((item)=> {
            const {id, image, name, hour } = item
            return (
                <div className="lesson_lesson col col-md-6 col-lg-4" key={id}>
            <div>
              <img src={image} alt="BOOTSTRAP" />
            </div>
            <div className="lesson_text">
                <p className="lesson_parag">
                <span className="lesson_span">Lesson Name :</span>
                {name}
                </p>
                <p className="lesson_parag">
                <span className="lesson_span">Lesson Hour :</span>
                {hour}
                </p>
            </div>
        </div>
            )
        })}
        
    </div>
  )
  
}

export default Card