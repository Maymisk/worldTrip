import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export function TravelTypeListItem({ children }: IProps) {
    return (
        <Flex
            align="center"
            justify="center"
            color="gray.500"
            fontSize="18px"
            fontWeight={500}
            gap={2}
            _before={{
                content: '""',
                width: '8px',
                height: '8px',
                borderRadius: 'full',
                background: '#ffba08'
            }}
        >
            {children}
        </Flex>
    );
}
