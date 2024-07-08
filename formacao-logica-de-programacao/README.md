# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000= Imortal
- Se XP for maior ou igual a 10.001 = Radiante

## Critérios para obtenção de XP

| Vidas/Batalhas | Vidas Restantes | Batalhas Disputadas | Batalhas Vencidas | Batalhas Perdidas |
| :------------: | :-------------: | :-----------------: | :---------------: | :---------------: |
|       10       |    2.600 XP     |       2000 XP       |     4.000 XP      |     2.000 XP      |
|       9        |    2.000 XP     |      1.800 XP       |     3.600 XP      |     1.800 XP      |
|       8        |    1.700 XP     |      1.600 XP       |     3.200 XP      |     1.600 XP      |
|       7        |    1.500 XP     |      1.400 XP       |     2.800 XP      |     1.400 XP      |
|       6        |    1.300 XP     |      1.200 XP       |     2.400 XP      |     1.200 XP      |
|       5        |    1.000 XP     |      1.000 XP       |     2.000 XP      |     1.000 XP      |
|       4        |     800 XP      |       800 XP        |     1.600 XP      |      800 XP       |
|       3        |     600 XP      |       600 XP        |     1.200 XP      |      600 XP       |
|       2        |     400 XP      |       400 XP        |      800 XP       |      400 XP       |
|       1        |     200 XP      |       200 XP        |      400 XP       |      200 XP       |

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
