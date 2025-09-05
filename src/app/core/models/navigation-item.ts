export interface NavigationItem {
    id: string;
    label: string;
    route: string;
    icon: string; // Bootstrap icon class name
    badge?: number;
    children?: NavigationItem[];
    isExpanded?: boolean;
}