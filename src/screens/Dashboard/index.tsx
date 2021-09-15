import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Avatar,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2021',
    },

    {
      id: '2',
      type: 'negative',
      title: 'Desenvolvimento de site',
      amount: 'R$ 89,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '13/04/2021',
    },

    {
      id: '3',
      type: 'negative',
      title: 'Alugue',
      amount: 'R$ 500,00',
      category: { name: 'Casa', icon: 'shopping-bag' },
      date: '13/04/2021',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Avatar
              source={{
                uri: 'https://avatars.githubusercontent.com/u/18172346?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Roger</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 12.500,00"
          lastTransaction="Ultima saída dia 10 de março"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 4.500,00"
          lastTransaction="De 01 à 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
