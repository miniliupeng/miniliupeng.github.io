var c=Object.defineProperty;var r=(o,l)=>c(o,"name",{value:l,configurable:!0});import{j as n}from"./jsx-runtime-366d61c0.js";import{B as t,A as i}from"./index-a10873ea.js";import"./index-e59ec46a.js";import"./iframe-a9052c7e.js";import"./index-eb3299b9.js";import"./index-c6a27bf6.js";const y={parameters:{storySource:{source:`import { Avatar } from '@/components'\r
import { Badge } from './index'\r
import { ComponentStory, ComponentMeta } from '@storybook/react'\r
\r
export default {\r
  title: '漏洞管理平台/Badge',\r
  component: Badge,\r
  argTypes: {\r
    count: {\r
      control: 'number'\r
    },\r
    overflowCount: {\r
      control: 'number'\r
    },\r
    showZero: {\r
      control: 'boolean'\r
    },\r
    size: {\r
      options: ['default', 'small'],\r
      control: 'radio'\r
    },\r
    color: { control: 'color' },\r
    status: {\r
      control: 'select',\r
      options: ['success', 'processing', 'default', 'error', 'warning']\r
    },\r
    text: {\r
      control: 'text'\r
    }\r
  }\r
} as ComponentMeta<typeof Badge>\r
\r
const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />\r
\r
export const WithText = Template.bind({})\r
WithText.storyName = '带有文字的徽章'\r
WithText.args = {\r
  color: 'red',\r
  text: 'Button'\r
}\r
\r
export const Count = Template.bind({})\r
Count.storyName = '数量徽章'\r
Count.args = {\r
  count: 1000,\r
  overflowCount: 999,\r
  showZero: false,\r
  children: <Avatar shape="square" size="large" />\r
}\r
`,locationsMap:{"with-text":{startLoc:{col:47,line:33},endLoc:{col:74,line:33},startBody:{col:47,line:33},endBody:{col:74,line:33}},count:{startLoc:{col:47,line:33},endLoc:{col:74,line:33},startBody:{col:47,line:33},endBody:{col:74,line:33}}}}},title:"漏洞管理平台/Badge",component:t,argTypes:{count:{control:"number"},overflowCount:{control:"number"},showZero:{control:"boolean"},size:{options:["default","small"],control:"radio"},color:{control:"color"},status:{control:"select",options:["success","processing","default","error","warning"]},text:{control:"text"}}},e=r(o=>n.jsx(t,{...o}),"Template"),s=e.bind({});s.storyName="带有文字的徽章";s.args={color:"red",text:"Button"};const a=e.bind({});a.storyName="数量徽章";a.args={count:1e3,overflowCount:999,showZero:!1,children:n.jsx(i,{shape:"square",size:"large"})};const B=["WithText","Count"];export{a as Count,s as WithText,B as __namedExportsOrder,y as default};
//# sourceMappingURL=Badge.stories-7ab470e3.js.map
