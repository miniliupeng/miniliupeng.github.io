var s=Object.defineProperty;var n=(o,l)=>s(o,"name",{value:l,configurable:!0});import{j as c}from"./jsx-runtime-366d61c0.js";import{a as t}from"./index-a10873ea.js";import"./index-e59ec46a.js";import"./iframe-a9052c7e.js";import"./index-eb3299b9.js";import"./index-c6a27bf6.js";const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tag } from '@/components'

export default {
  title: '漏洞管理平台/Tag',
  component: Tag,
  argTypes: {
    closable: { control: 'boolean' },
    color: { control: 'text' },
    children: {
      control: 'text'
    },
  }
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

export const Base = Template.bind({})
Base.storyName = '基本标签'
Base.args = {
  closable: true,
  children: 'Tag 1'
}

export const Color = Template.bind({})
Color.storyName = '多彩标签'
Color.args = {
  color: 'magenta',
  children: 'magenta'
}
`,locationsMap:{base:{startLoc:{col:45,line:16},endLoc:{col:70,line:16},startBody:{col:45,line:16},endBody:{col:70,line:16}},color:{startLoc:{col:45,line:16},endLoc:{col:70,line:16},startBody:{col:45,line:16},endBody:{col:70,line:16}}}}},title:"漏洞管理平台/Tag",component:t,argTypes:{closable:{control:"boolean"},color:{control:"text"},children:{control:"text"}}},e=n(o=>c.jsx(t,{...o}),"Template"),r=e.bind({});r.storyName="基本标签";r.args={closable:!0,children:"Tag 1"};const a=e.bind({});a.storyName="多彩标签";a.args={color:"magenta",children:"magenta"};const x=["Base","Color"];export{r as Base,a as Color,x as __namedExportsOrder,b as default};
//# sourceMappingURL=Tag.stories-e9ad46ea.js.map
