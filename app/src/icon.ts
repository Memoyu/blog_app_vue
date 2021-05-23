import { createVNode } from 'vue'
import  * as $Icon from '@ant-design/icons-vue'

export const Icon = (props: { icon: string }) => {
  const icons: any = $Icon;
  const { icon } = props;
  return createVNode(icons[icon]);
};