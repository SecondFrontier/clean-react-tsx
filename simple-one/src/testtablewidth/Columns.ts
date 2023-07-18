export interface IColumn {
    id:
    | 'sev'
    | 'cnt'
    | 'dev'
    | 'net'
    | 'com';
    label: string;
    width?: string;
    align?: 'left';
    format?: (value: number) => string;
}

export const columns: readonly IColumn[] = [
    { id: 'sev', label: 'Severity', width: '20%' },
    { id: 'cnt', label: 'Count', width: '20%' },
    { id: 'dev', label: 'Develop', width: '20%' },
    { id: 'net', label: 'Network', width: '20%' },
    { id: 'com', label: 'Communication', width: '20%' },
];
