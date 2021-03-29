import { Link } from '@reach/router';

const PetForm = props => {

    const { inputs, handleInputChange, handleSubmit, title, submitValue, errors } = props;

    return (
        <form onSubmit={handleSubmit} className="col-6 mxauto">
            <h2>{title}</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.name}
                />
                <span className="text-danger">
                    {errors.name ? errors.name.message : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    name="type"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.type}
                />
                <span className="text-danger">
                    {errors.type ? errors.type.message : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.description}
                />
                <span className="text-danger">
                    {errors.description ? errors.description.message : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="skill1">Skill 1:</label>
                <input
                    type="text"
                    name="skill1"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.skill1}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skill2">Skill 2:</label>
                <input
                    type="text"
                    name="skill2"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.skill2}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skill3">Skill 3:</label>
                <input
                    type="text"
                    name="skill3"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.skill3}
                />
            </div>

            <input type="submit" value={submitValue} className="btn btn-primary" />
            <Link className="btn btn-info btn-outline-dark" to="/">Cancel</Link>
        </form>
    )
}
export default PetForm;
