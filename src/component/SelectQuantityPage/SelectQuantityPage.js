import {
  SelectWrapper,
  Text,
  TextSelect,
  TextOption,
} from './SelectQuantityPage.styled';

export default function SelectQuantityPage({ pageSize }) {
  return (
    <SelectWrapper>
      <Text>Select the amount of news</Text>
      <TextSelect name="quantityPage" onChange={e => pageSize(e.target.value)}>
        <TextOption value="8"> 8 </TextOption>
        <TextOption selected value="16">
          16
        </TextOption>
        <TextOption value="24"> 24 </TextOption>
      </TextSelect>
    </SelectWrapper>
  );
}
