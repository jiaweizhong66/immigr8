import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    countryOfBirth: Yup.string().required('Country of birth is required')
});

export default formSchema