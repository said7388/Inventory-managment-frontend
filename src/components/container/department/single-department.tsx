import { useParams } from "react-router-dom";
import { useGetSingleDepartmentQuery } from "../../../redux/api/department-api";
import SingleDepartmentUI from "../../ui/department/single-department-ui";

const SingleDepartment = () => {
  let params = useParams();
  const { data } = useGetSingleDepartmentQuery(params?.id);

  return <SingleDepartmentUI data={data} />;
};

export default SingleDepartment;
