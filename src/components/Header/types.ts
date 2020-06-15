export interface HeaderProps {
  selectedSection: string;
  onSelectSection(sectionName: string): void;
}

export interface SelectedSectionProps {
  selected: boolean;
}
