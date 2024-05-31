export interface secondTableProps {
  id?: number;
  document?: string;
  format?: string;
  status?: string;
  
timestampUploaded?: string;
  
}

export type mainSecondTableProps = secondTableProps[];
