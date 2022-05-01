import React, { FC, ReactElement } from "react";

import styles from "./Error.module.scss";

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }): ReactElement => {
  return <p className={styles.text}>{message}</p>;
};

export default Error;
