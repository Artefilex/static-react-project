import * as yup from "yup";

const validations = yup.object().shape({
    username: yup.string().required("gecerli bir text giirin"),
    password: yup.string().min(5, "parola en az 5 karakter"),

})


export default validations