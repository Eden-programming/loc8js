import React from 'react';
import {CloseCircleOutlined} from '@ant-design/icons';
import { Col, Row, Table, Button, Icon} from 'antd';


const COLUMNS = [
  // distance: 1
  // hubId: "hub1"
  // major: 1
  // minor: 2
  // objectId: "uuid"
  // rssi: -69
  // rxpower: -69
  {
    title: 'Distance',
    key: 'distance',
    dataIndex: 'distance'
  },
  {
    title: 'Major',
    key: 'major',
    dataIndex: 'major'
  },
  {
    title: 'Minor',
    key: 'minor',
    dataIndex: 'minor'
  },
  {
    title: 'Device',
    key: 'objectId',
    dataIndex: 'objectId'
  },
  {
    title: 'RSSI',
    key: 'rssi',
    dataIndex: 'rssi'
  },
  {
    title: 'RX power',
    key: 'rxpower',
    dataIndex: 'rxpower'
  }
]

const DetectionsList = (props) => {
  const {hubId, data, onUnsubscribe} = props; 
  
  const handleUnsubscribe = (e) => {
    e?.preventDefault()
    onUnsubscribe()
  }

  return (
    <Col md="12">
      <Row gutter={[4, 4]}>
        <Col xs="24">
          {hubId} <Button size="small" type="danger" onClick={handleUnsubscribe}><CloseCircleOutlined /></Button>
        </Col>
      </Row>
      <Row gutter={[4, 4]}>
        <Col xs="24">
          <Table columns={COLUMNS} dataSource={data}/>
        </Col>
      </Row> 
    </Col>
  )
}

export default DetectionsList