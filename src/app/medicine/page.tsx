'use client'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
        Medicine
        <Button variant="filled">Button</Button>

        <Drawer opened={opened} onClose={close} title="Authentication" position='right'>
          {/* Drawer content */}
        </Drawer>

        <Button onClick={open}>Open Drawer</Button>
    </div>
  )
}

export default Page;