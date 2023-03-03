var d=Object.defineProperty;var t=(o,c)=>d(o,"name",{value:c,configurable:!0});import{j as m}from"./jsx-runtime-366d61c0.js";import{b as e}from"./index-a10873ea.js";import"./index-e59ec46a.js";import"./iframe-a9052c7e.js";import"./index-eb3299b9.js";import"./index-c6a27bf6.js";const f={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@/components'

export default {
  title: '漏洞管理平台/Button',
  component: Button,
  argTypes: {
    type: { control: 'select', options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'] },
    ghost: { control: 'boolean' },
    danger: { control: 'boolean' },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    size: {
      options: ['large', 'middle', 'small'],
      control: 'radio'
    },
    children: {
      control: 'text'
    },
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const PrimaryColor = Template.bind({})
PrimaryColor.storyName = '主题色按钮'
PrimaryColor.args = {
  type: 'primary',
  children: '查询'
}

export const Primary = Template.bind({})
Primary.storyName = '主要按钮'
Primary.args = {
  type: 'primary',
  ghost: true,
  children: '审核通过'
}

export const Default = Template.bind({})
Default.storyName = '默认/次要按钮'
Default.args = {
  children: '重置'
}

export const Danger = Template.bind({})
Danger.storyName = '危险按钮'
Danger.args = {
  danger: true,
  children: '拒绝'
}

export const LinkBtn = Template.bind({})
LinkBtn.storyName = '链接按钮'
LinkBtn.args = {
  type: 'link',
  children: '查看'
}
`,locationsMap:{"primary-color":{startLoc:{col:48,line:27},endLoc:{col:76,line:27},startBody:{col:48,line:27},endBody:{col:76,line:27}},primary:{startLoc:{col:48,line:27},endLoc:{col:76,line:27},startBody:{col:48,line:27},endBody:{col:76,line:27}},default:{startLoc:{col:48,line:27},endLoc:{col:76,line:27},startBody:{col:48,line:27},endBody:{col:76,line:27}},danger:{startLoc:{col:48,line:27},endLoc:{col:76,line:27},startBody:{col:48,line:27},endBody:{col:76,line:27}},"link-btn":{startLoc:{col:48,line:27},endLoc:{col:76,line:27},startBody:{col:48,line:27},endBody:{col:76,line:27}}}}},title:"漏洞管理平台/Button",component:e,argTypes:{type:{control:"select",options:["primary","ghost","dashed","link","text","default"]},ghost:{control:"boolean"},danger:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},size:{options:["large","middle","small"],control:"radio"},children:{control:"text"}}},n=t(o=>m.jsx(e,{...o}),"Template"),r=n.bind({});r.storyName="主题色按钮";r.args={type:"primary",children:"查询"};const l=n.bind({});l.storyName="主要按钮";l.args={type:"primary",ghost:!0,children:"审核通过"};const a=n.bind({});a.storyName="默认/次要按钮";a.args={children:"重置"};const i=n.bind({});i.storyName="危险按钮";i.args={danger:!0,children:"拒绝"};const s=n.bind({});s.storyName="链接按钮";s.args={type:"link",children:"查看"};const x=["PrimaryColor","Primary","Default","Danger","LinkBtn"];export{i as Danger,a as Default,s as LinkBtn,l as Primary,r as PrimaryColor,x as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories-c4348734.js.map
