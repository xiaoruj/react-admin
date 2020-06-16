import React from "react";
import { Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import { IntlProvider } from "react-intl";
import { zh, en } from "./locales";
import { connect } from "react-redux";
import history from "@utils/history";

import Layout from "./layouts";
// 引入重置样式（antd已经重置了一部分了）
import "./assets/css/reset.css";

function App({ language }) {
  const locale = language === "en" ? enUS : zhCN;
  const messages = language === "en" ? en : zh;
  return (
    <Router history={history}>
      <ConfigProvider locale={locale}>
        <IntlProvider locale={language} messages={messages}>
          <Layout />
        </IntlProvider>
      </ConfigProvider>
    </Router>
  );
}

export default connect((state) => ({ language: state.language }))(App);
