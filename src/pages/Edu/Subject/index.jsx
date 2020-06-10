import React, { Component } from "react";
import { Button, Table } from "antd";
import { PlusOutlined, FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { getSubjectList, getSubSubjectList } from "./redux";
import "./index.less";

@connect((state) => ({ subjectList: state.subjectList }), {
  getSubjectList,
  getSubSubjectList,
})
class Subject extends Component {
  state = {
    expandedRowKeys: [],
  };
  componentDidMount() {
    this.props.getSubjectList(1, 10);
  }
  handleExpandedRowsChange = (expandedRowKeys) => {
    console.log("handleExpandedRowsChange", expandedRowKeys);
    const length = expandedRowKeys.length;
    if (length > this.state.expandedRowKeys.length) {
      const lastkey = expandedRowKeys[length - 1];
      this.props.getSubSubjectList(lastkey);
    }
    this.setState({
      expandedRowKeys,
    });
  };
  showAddSubject = () => {
    this.props.history.push("/edu/subject/add");
  };
  render() {
    const { subjectList, getSubjectList } = this.props;
    const { expandedRowKeys } = this.state;
    const columns = [
      {
        title: "分类名称",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "操作",
        dataIndex: "",
        key: "action",
        width: 200,
        render: () => (
          <>
            <Button type="primary">
              <FormOutlined />
            </Button>
            <Button type="danger" className="subject-btn">
              <DeleteOutlined />
            </Button>
          </>
        ),
      },
    ];
    return (
      <div className="subject">
        <Button
          type="primary"
          className="subject-btn"
          onclick={this.showAddSubject}
        >
          <PlusOutlined />
          新建
        </Button>
        <Table
          rowKey="id"
          columns={columns}
          expandable={{
            expandedRowKeys,
            onExpandedRowsChange: this.handleExpandedRowsChange,
          }}
          dataSource={subjectList.items}
          pagination={{
            total: subjectList.total,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"],
            defaultPageSize: 10,
            onChange: getSubjectList,
            onShowSizeChange: getSubjectList,
          }}
        />
      </div>
    );
  }
}
export default Subject;
