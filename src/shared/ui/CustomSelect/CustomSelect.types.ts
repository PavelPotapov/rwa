// Интерфейс для пропсов
type Option = {
  value: string;
  label: string;
};

export interface ICustomSelectProps {
  options: Option[];
  selected: string;
  onSelect: (value: string) => void;
}
