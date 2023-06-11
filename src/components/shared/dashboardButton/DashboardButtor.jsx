import PropTypes from 'prop-types';

const DashboardButtor = ({ text, func, id }) => {
    return (
        <div>
             <button className="btn btn-ghost btn-xs text-white bg-red-600 hover:bg-red-700" onClick={() => func(id)}>{text}</button>
        </div>
    );
};
DashboardButtor.propTypes = {
    text: PropTypes.string,
    func : PropTypes.func,
    id : PropTypes.string,
}
export default DashboardButtor;