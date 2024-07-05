import styles from "./Container.module.scss";
import classNames from "classnames";
import React, { FunctionComponent } from "react";


interface ContainerProps {
  className?: string;
  children?: any,
}

const Container =  ( props:ContainerProps ) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const propsContainer = {
    className: classNames(styles.root, className),
    ...rest
  }


  return <div {...propsContainer}>{children}</div>
}

export default Container;
