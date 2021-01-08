import React, { Fragment } from 'react';
import { Button, Modal } from "react-bootstrap";

import classes from './about.module.css';

const About = (props: any) => {
    return (
        <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton  className={classes.HeaderFooterStyle}>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.BodyStyle}>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className={classes.HeaderFooterStyle}>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </Fragment>
    );
  }

  export default About;
  