interface IProps {
  errorMsg: string;
}

const InputErrorMsg = ({ errorMsg }: IProps) => {
  return <>{errorMsg.length ? <span className="text-red-600 text-sm">{errorMsg}</span> : null} </>;
};

export default InputErrorMsg;
