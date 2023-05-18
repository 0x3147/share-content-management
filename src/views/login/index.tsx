import React, { memo } from 'react'
import { Form, ButtonToolbar, Button, Schema } from 'rsuite'
import type { FC, ReactNode } from 'react'

import LoginBackGroundSvg from '@/assets/img/login-bg.svg'
import LoginFormSvg from '@/assets/img/login-form.svg'

interface IProps {
  children?: ReactNode
}

const model = Schema.Model({
  name: Schema.Types.StringType()
    .pattern(/^[a-zA-Z0-9_-]{4,16}$/, '请输入正确的用户名')
    .isRequired('账号为必填项！'),
  password: Schema.Types.StringType().isRequired('密码为必填项！')
})

const Login: FC<IProps> = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${LoginBackGroundSvg})` }}
    >
      <Form
        className="w-96 h-80 p-3 border-2 flex flex-col justify-center bg-current rounded-md bg-cover"
        style={{ backgroundImage: `url(${LoginFormSvg})` }}
        model={model}
        fluid
      >
        <Form.Group controlId="name">
          <Form.ControlLabel>用户名</Form.ControlLabel>
          <Form.Control placeholder="请在此输入您的账号" name="name" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.ControlLabel>密码</Form.ControlLabel>
          <Form.Control
            placeholder="请在此输入您的密码"
            name="password"
            type="password"
            autoComplete="off"
          />
          <Form.HelpText>若无admin账号密码，您可选择游客登录哦~</Form.HelpText>
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" color="violet" type="submit" block>
              登录
            </Button>
            <Button appearance="primary" color="cyan" block>
              游客登录
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  )
}

export default memo(Login)
