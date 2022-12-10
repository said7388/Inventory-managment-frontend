import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../../../redux/api/category-api";
import SingleCategoryUI from "../../ui/category/single-category-ui";

const SingleCategory = () => {
  let params = useParams();
  const { data } = useGetSingleCategoryQuery(params?.id);

  return <SingleCategoryUI data={data?.data} />;
};

export default SingleCategory;
