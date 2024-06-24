// ModalComponent.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const Login = ({ visible, onCancel, onLogin }) => {
  const handleCancel = () => {
    onCancel(); // 모달 닫기
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    onLogin(values); // 부모 컴포넌트로부터 전달받은 로그인 처리 함수 호출
    handleCancel(); // 모달 닫기
  };

  return (
    <Modal
      title="로그인"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      centered // 모달을 화면의 중앙에 배치합니다
      maskClosable={false} // 배경을 클릭해도 모달이 닫히지 않도록 설정
      destroyOnClose // 모달이 닫힐 때 컨텐츠를 파괴합니다
      getContainer={false} // body 밖에 모달을 렌더링하여 스크롤 문제를 해결합니다
      bodyStyle={{ overflow: 'auto' }} // 모달 내부 스크롤바가 필요할 때 자동으로 나타나도록 설정합니다
    >
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
        >
          <Input placeholder="아이디" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
        >
          <Input.Password placeholder="비밀번호" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
