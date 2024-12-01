import { forwardRef } from 'react';
import { Icon, Span } from '@chakra-ui/react';


const ReactIcon = ({ icon: IconType, ...props }, ref) => (
  <Icon {...props}>
    <Span ref={ref} height={"unset"} lineHeight={"unset"}>
        <IconType />
    </Span>
  </Icon>
);

const ForwardedReactIcon = forwardRef(ReactIcon);

export { ForwardedReactIcon as ReactIcon };