import { defineTool } from '@tool/type';
import { FlowNodeInputTypeEnum, WorkflowIOValueTypeEnum } from '@tool/type/fastgpt';
import { ToolTagEnum } from '@tool/type/tags';

const v1 = {
  inputs: [
    {
      renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
      selectedTypeIndex: 0,
      valueType: WorkflowIOValueTypeEnum.string,
      key: 'sql',
      label: 'SQL',
      description: 'SQL 语句，可以传入 SQL 语句直接执行',
      defaultValue: '',
      list: [
        {
          label: '',
          value: ''
        }
      ],
      required: true,
      toolDescription: 'SQL 语句，可以传入 SQL 语句直接执行'
    }
  ],
  outputs: [
    {
      key: 'result',
      label: '结果',
      description: '执行结果',
      valueType: WorkflowIOValueTypeEnum.string
    }
  ]
};

export default defineTool({
  toolId: 'dbops/dameng',
  isWorkerRun: false,
  tags: [ToolTagEnum.enum.tools],
  name: {
    'zh-CN': '达梦',
    en: 'Dameng'
  },
  description: {
    'zh-CN': '基于 达梦 数据库的智能数据库连接工具，支持多种格式输出',
    en: 'Intelligent database connection tool powered by Dameng with multiple output formats'
  },
  courseUrl: 'https://www.mysql.com/',
  secretInputConfig: [
    {
      key: 'host',
      label: '主机名',
      required: true,
      inputType: 'input'
    },
    {
      key: 'port',
      label: '数据库连接端口号',
      required: true,
      inputType: 'numberInput'
    },
    {
      key: 'database',
      label: '数据库名称',
      required: true,
      inputType: 'input'
    },
    {
      key: 'username',
      label: '数据库账号',
      required: true,
      inputType: 'input'
    },
    {
      key: 'password',
      label: '数据库密码',
      required: true,
      inputType: 'secret'
    },
    {
      key: 'connectionTimeout',
      label: '连接超时时间（ms）',
      required: false,
      inputType: 'numberInput'
    }
  ],
  versionList: [
    {
      value: '0.1.2',
      description: 'Fix params default value',
      ...v1
    },
    {
      value: '0.1.1',
      description: 'Provide the ability to connect to MySQL database',
      ...v1
    }
  ]
});
