var c=Object.defineProperty;var r=(o,e)=>c(o,"name",{value:e,configurable:!0});import{j as l}from"./jsx-runtime-366d61c0.js";import{c as n}from"./index-a10873ea.js";import"./index-e59ec46a.js";import"./iframe-a9052c7e.js";import"./index-eb3299b9.js";import"./index-c6a27bf6.js";const d={parameters:{storySource:{source:`import { SvgIcon } from '@/components'\r
import { ComponentStory, ComponentMeta } from '@storybook/react'\r
\r
export default {\r
  title: '漏洞管理平台/SvgIcon',\r
  component: SvgIcon,\r
  argTypes: {\r
    prefix: { control: 'text', defaultValue: 'icon' },\r
    name: { control: 'text' },\r
    color: { control: 'color' },\r
    stroke: { control: 'color' },\r
    size: { control: 'number' }\r
  }\r
} as ComponentMeta<typeof SvgIcon>\r
\r
const Template: ComponentStory<typeof SvgIcon> = args => <SvgIcon {...args} />\r
\r
export const Icon = Template.bind({})\r
Icon.storyName = '图标'\r
Icon.args = {\r
  name: 'react',\r
  color: '#00D8FF'\r
}\r
`,locationsMap:{icon:{startLoc:{col:49,line:16},endLoc:{col:78,line:16},startBody:{col:49,line:16},endBody:{col:78,line:16}}}}},title:"漏洞管理平台/SvgIcon",component:n,argTypes:{prefix:{control:"text",defaultValue:"icon"},name:{control:"text"},color:{control:"color"},stroke:{control:"color"},size:{control:"number"}}},a=r(o=>l.jsx(n,{...o}),"Template"),t=a.bind({});t.storyName="图标";t.args={name:"react",color:"#00D8FF"};const f=["Icon"];export{t as Icon,f as __namedExportsOrder,d as default};
//# sourceMappingURL=SvgIcon.stories-fec6575c.js.map
