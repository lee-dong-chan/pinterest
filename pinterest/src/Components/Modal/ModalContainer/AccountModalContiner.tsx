import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import ModalBox from "../ModalComponent/ModalBox";

interface IProps {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<string, Error>>;
}
const ModalContainer = ({ refetch }: IProps) => {
  return <ModalBox refetch={refetch} />;
};
export default ModalContainer;
