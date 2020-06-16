import React from "react";
import { Row, Col, Progress } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { AreaChart, ColumnChart } from "bizcharts";
import Card from "@comps/Card";
import "./index.less";
const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 10 },
  { year: "1993", value: 15 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 10 },
  { year: "1997", value: 4 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];
const barData = [
  {
    type: "家具家电",
    sales: 38,
  },
  {
    type: "粮油副食",
    sales: 52,
  },
  {
    type: "生鲜水果",
    sales: 61,
  },
  {
    type: "美容洗护",
    sales: 145,
  },
  {
    type: "母婴用品",
    sales: 48,
  },
  {
    type: "进口食品",
    sales: 38,
  },
  {
    type: "食品饮料",
    sales: 38,
  },
  {
    type: "家庭清洁",
    sales: 38,
  },
  {
    type: "移动电脑",
    sales: 28,
  },
  {
    type: "品牌手机",
    sales: 58,
  },
];

const layout = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 6,
};

export default function Visits() {
  return (
    <Row gutter={16}>
      <Col {...layout}>
        <Card
          title="总销售额"
          number="￥123456"
          content={
            <>
              <span>
                周同比 12% &nbsp;
                <CaretUpOutlined style={{ color: "red" }} />
              </span>
              &nbsp; &nbsp;
              <span>
                日同比 10% &nbsp;
                <CaretDownOutlined style={{ color: "green" }} />
              </span>
            </>
          }
          footer="日销售额 ￥123456"
        />
      </Col>
      <Col {...layout}>
        <Card
          title="title..."
          number="123456"
          content={
            <div className="charts-container">
              <AreaChart
                data={data}
                meta={{
                  value: {
                    alias: "值",
                  },
                }}
                forceFit
                xField="year"
                yField="value"
                smooth
                color="pink"
                xAxis={{ visible: false }}
                yAxis={{ visible: false }}
              />
            </div>
          }
          footer="footer..."
        />
      </Col>
      <Col {...layout}>
        <Card
          title="title..."
          number="123456"
          content={
            <ColumnChart
              data={barData}
              // title={{
              // 	visible: true,
              // 	text: "基础柱状图",
              // }}
              forceFit
              padding="0"
              xField="type"
              yField="sales"
              meta={{
                type: {
                  alias: "类别",
                },
                sales: {
                  alias: "销售额(万)",
                },
              }}
              xAxis={{ visible: false }}
              yAxis={{ visible: false }}
            />
          }
          footer="footer..."
        />
      </Col>
      <Col {...layout}>
        <Card
          title="title..."
          number="123456"
          content={
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#1DA57A",
              }}
              percent={56.8}
              status="active"
            />
          }
          footer="footer..."
        />
      </Col>
    </Row>
  );
}
