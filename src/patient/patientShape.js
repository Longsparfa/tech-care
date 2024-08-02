import PropTypes from "prop-types";

export const patientShape = PropTypes.shape({
  age: PropTypes.number.isRequired,
  date_of_birth: PropTypes.string.isRequired,
  diagnostic_history: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      heart_rate: PropTypes.objectOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        })
      ),
      respiratory_rate: PropTypes.objectOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        })
      ),
      temperature: PropTypes.objectOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          levels: PropTypes.string.isRequired,
        })
      ),
      year: PropTypes.number.isRequired,
      blood_pressure: PropTypes.objectOf(
        PropTypes.shape({
          diastolic: PropTypes.objectOf(
            PropTypes.shape({
              value: PropTypes.number.isRequired,
              levels: PropTypes.string.isRequired,
            })
          ),
          systolic: PropTypes.objectOf(
            PropTypes.shape({
              value: PropTypes.number.isRequired,
              levels: PropTypes.string.isRequired,
            })
          ),
        })
      ),
    })
  ),
  diagnostic_list: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  emergency_contact: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  insurance_type: PropTypes.string.isRequired,
  lab_results: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  profile_picture: PropTypes.string.isRequired,
});
