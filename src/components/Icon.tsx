import { createElement } from 'react';
import * as icons from 'lucide-react';

interface IconProps {
    name: keyof typeof icons;
    size?: number;
    color?: string;
    [key: string]: any;
}

const Icon = ({ name, size = 24, color = 'currentColor', ...props }: IconProps) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
        console.warn(`Icon ${name} does not exist in lucide-react`);
        return null;
    }

    return createElement(LucideIcon, { size, color, ...props });
};

export default Icon;
