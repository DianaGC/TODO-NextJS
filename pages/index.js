import React from 'react';
import Link from 'next/link';
import { getTodoById } from './service/service';
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import Todo from './module/todo/page/todo';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetUsersById } from './module/todo/actions/todoactions'

const IndexPage = (props) => {
    return (
        <Layout className="layout">
            <Header>
            </Header>
            <Content className="content">
                <div className="site-layout-content">
                    <Todo/>
                </div>
            </Content>
            <Footer className="footer">footer</Footer>
        </Layout>
    )
}

IndexPage.getInitialProps = async () => {
    // const dispatch = useDispatch();
    console.log('initialprops')
    let userId = 1;
    //dispatch(fetchGetUsersById(userId))
    // const data = await getTodoById(userId);
    //const data = await getTodoById(userId);
    //return {
    //  data
    //}
}


export default IndexPage;