import React, { Fragment } from 'react';
import { Button, Modal } from "react-bootstrap";

import classes from './about.module.css';

const About = (props: any) => {
    return (
        <Fragment>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton  className={classes.HeaderFooterStyle}>
          <Modal.Title id="contained-modal-title-vcenter">
            Data-Structs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.BodyStyle}>
          <h4>Algorithms and Data Structures</h4>
          <p>
            Built by Mo &amp; Vlad, Uk &amp; Russia.
            This site is still under construction and instruction !
          </p>
          <p>Version - {props.version}</p>
        </Modal.Body>
        <Modal.Footer className={classes.HeaderFooterStyle}>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </Fragment>
    );
  }

  export default About;
  