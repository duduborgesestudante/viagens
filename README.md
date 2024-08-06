# Aplicativo de Viagens

Bem-vindo ao nosso aplicativo de viagens! 🌍✈️ Aqui está um resumo das principais funcionalidades e regras de negócio.

## Estrutura Inicial do Aplicativo

O aplicativo é composto pelos seguintes componentes principais:

- **Componentes Principais**
  - **`App.jsx`**: Controla a navegação entre as páginas.
  - **`Header.jsx`**: Cabeçalho do aplicativo.
  - **`Footer.jsx`**: Rodapé do aplicativo.
  - **`Home.jsx`**: Página inicial.
  - **`Destinos.jsx`**: Lista e gerenciamento dos destinos.
  - **`Contato.jsx`**: Página de contato.

- **Componentes de Destino**
  - **`Destino.jsx`**: Exibe detalhes do destino e calcula os custos.
  - **`FormDestino.jsx`**: Formulário para adicionar novos destinos.

## Regras de Negócio Fundamentais

- **Destinos Pré-Cadastrados**: 
  - Paris
  - Nova York
  - Tóquio
  - Rio de Janeiro
  - Londres
  - Roma
  - Sydney
  - Cairo
  - Moscou
  - Pequim

- **Cálculo de Distância e Custos**:
  - **Voos**:
    - **Base**: 1500 reais para distâncias até 2000 km.
    - **Adicional**: 1 real por km extra acima de 2000 km.
    - **Antecedência**: Voos com menos de 2 meses de antecedência custam 1500 reais. Acima de 2 meses, o custo é 700 reais.
  - **Estadia**:
    - **Padrão**: 400 reais/semana.
    - **Luxo**: 700 reais/semana.
    - **Participantes Adicionais**: 25% a mais no custo da estadia por participante extra.

## Lógica de Cálculo

1. **Distância**: Calcula a distância entre o Brasil e o destino escolhido.
2. **Custos de Voo**:
   - Se a distância for superior a 2000 km, o custo inclui 2 voos.
   - Calcula-se um valor adicional de 1 real por km extra acima de 2000 km.
   - O custo do voo varia dependendo da antecedência da reserva (menos ou mais de 2 meses).
3. **Custos de Estadia**:
   - Calcula-se o custo da estadia baseado na duração (em semanas) e no tipo de estalagem (padrão ou luxo).
   - Adiciona-se 25% ao custo da estadia para cada participante extra.

## Interface de Seleção e Exibição do Subtotal

- **Seleção de Viagem**:
  - **Destinos**: Escolha um destino da lista pré-cadastrada.
  - **Data de Ida e Volta**: Selecione as datas da viagem.
  - **Tipo de Estalagem**: Escolha entre padrão ou luxo.
  - **Número de Participantes**: Defina quantas pessoas vão viajar.

- **Exibição do Subtotal**:
  - O subtotal é recalculado automaticamente sempre que você altera o destino, as datas, o tipo de estalagem ou o número de participantes.
  - O subtotal é exibido em tempo real para ajudar a visualizar o custo total da viagem.


## Sugestões de Funcionalidades

 **Sistema de Avaliações e Comentários**:
   - Permita que os usuários avaliem e comentem sobre os destinos, ajudando outros viajantes a escolherem melhor.

**Opções de Transporte Adicionais**:
   - Inclua opções de transporte além de voos, como trens e ônibus, com cálculos de custo e tempo de viagem.


## Melhorias Técnicas
**Otimização do Desempenho**:
   - Melhore o desempenho do aplicativo, especialmente nas seções que carregam muitos dados, como a lista de destinos.

 **Responsividade**:
   - Garanta que o aplicativo funcione bem em todos os tamanhos de tela e dispositivos móveis.

 **Experiência do Usuário**:
   - Refine a interface do usuário para torná-la mais intuitiva e amigável. Considere realizar testes de usabilidade para obter feedback direto dos usuários.

