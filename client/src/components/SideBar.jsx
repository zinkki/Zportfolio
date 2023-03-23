import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import BookList from './BookList';

export default function SideBar() {

	return (
		<>
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">국내 베스트셀러30</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">해외 베스트셀러30</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="k_meg">국내 잡지15</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="a_meg">해외 잡지</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <BookList openAPI={'bestSeller'} categoryId={'100'}/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <BookList openAPI={'bestSeller'} categoryId={'200'}/>
            </Tab.Pane>
            <Tab.Pane eventKey="k_meg">
              <BookList openAPI={'bestSeller'} categoryId={'107'}/>
            </Tab.Pane>
            <Tab.Pane eventKey="a_meg">
              <BookList openAPI={'bestSeller'} categoryId={'300'}/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
		</>
	)
}