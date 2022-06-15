import React,{ FunctionComponent } from "react";


interface ILoadingProps {
    loading: boolean,
    children:any
}
const Loading : FunctionComponent<ILoadingProps> = (props) => {
    const { loading} = props;
    if(loading)
    {
        return <>Yükleniyor...</>;
    }
    return <>{props.children}</>;
};

export default Loading;