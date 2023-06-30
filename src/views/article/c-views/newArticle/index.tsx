import React, { memo, useState } from 'react'
import { MdEditor } from 'md-editor-rt'
import { Input, Whisper, Tooltip, Button, Message, useToaster } from 'rsuite'
import 'md-editor-rt/lib/style.css'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 新增文章页
 * @Author bk0x114
 * @Date 2023-06-26 16:28:43
 */
const NewArticle: FC<IProps> = () => {
  const [content, setContent] = useState('# Hello Editor')
  const [title, setTitle] = useState('')

  const toaster = useToaster()

  /**
   * @desc 提交文章
   * @Author bk0x114
   * @Date 2023-04-19 19:13:29
   */
  const handleSubmitDocument = () => {
    if (!title || !content) {
      toaster.push(
        <Message showIcon type="error">
          标题或内容不能为空哦~请检查标题或内容是否填写
        </Message>
      )
      return
    }
    // TO DO
  }

  return (
    <div className="flex flex-col mt-3 h-auto border-2 p-4 rounded-md gap-y-6">
      <div className="w-full border-b-2">新增文章</div>
      <div className="flex flex-col gap-y-1 h-12">
        文章标题
        <div className="flex gap-x-2">
          <Whisper trigger="focus" speaker={<Tooltip>文章标题必填哦~</Tooltip>}>
            <Input className="w-2/4" size="sm" placeholder="请输入文章标题" />
          </Whisper>
          <Button appearance="primary" size="md" onClick={handleSubmitDocument}>
            提交
          </Button>
        </div>
      </div>
      <MdEditor modelValue={content} onChange={setContent} />
    </div>
  )
}

export default memo(NewArticle)
