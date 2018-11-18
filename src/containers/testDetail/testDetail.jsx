import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Card } from "antd";
import { NAME } from "./constant";
import { fetchDeviceInfo } from "./action";

const columns = [
  {
    title: "Class Name",
    dataIndex: "className",
    key: "className"
  },
  {
    title: "Method Name",
    dataIndex: "methodName",
    key: "methodName"
  },
  {
    title: "Test Result",
    dataIndex: "testResult",
    key: "testResult"
  },
  {
    title: "Start Time",
    key: "startTime",
    dataIndex: "startTime"
  },
  {
    title: "End Time",
    key: "endTime",
    dataIndex: "endTime"
  }
];

class TestDetail extends Component {
  async componentDidMount() {
    const { fetchDeviceInfo, match } = this.props;
    await fetchDeviceInfo(match.params.id);
  }

  render() {
    return (
      <div
        style={{ background: "#ECECEC", padding: "20px", minHeight: "800px" }}
      >
        <Card title="Card title" bordered={false}>
          <Table
            columns={columns}
            dataSource={this.props.deviceInfo}
            bordered
          />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deviceInfo: state[NAME].deviceInfo
});

const mapDispatchToProps = dispatch => ({
  fetchDeviceInfo: udid => dispatch(fetchDeviceInfo(udid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestDetail);