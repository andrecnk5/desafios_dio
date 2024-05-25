menu = """
Selecione a opção desejada conforme o número correspondente:

[1] Depósito
[2] Saque
[3] Saldo
[4] Extrato
[0] Sair

=> """

saldo = 0
limite_saque = 500
limite_saque_diario = 1500
limite_operacao_saque = 3
extrato_conta = []

while True:
    opcao = input(menu)

    if opcao == "1":
        valor_deposito = float(input("Digite o valor a ser depositado: R$ "))
        if valor_deposito > 0:
            saldo += valor_deposito
            extrato_conta.append(f"Depósito: R$ {valor_deposito:.2f}")
        else:
            print("Valor inválido para depósito.")

    elif opcao == "2":
        if limite_operacao_saque > 0 and limite_saque_diario > 0:
            valor_saque = float(input("Digite o valor a ser sacado: R$ "))
            if valor_saque <= saldo and valor_saque <= limite_saque:
                saldo -= valor_saque
                extrato_conta.append(f"Saque: R$ {valor_saque:.2f}")
                limite_operacao_saque -= 1
                limite_saque_diario -= valor_saque
            else:
                print("Valor inválido para saque.")
        else:
            print("Limite diário de saque atingido.")

    elif opcao == "3":
        print(f"Seu saldo é: R$ {saldo:.2f}")

    elif opcao == "4":
        print("\nExtrato:")
        if len(extrato_conta) == 0:
            print("Não foram realizadas movimentações.")
        else:
            for movimento in extrato_conta:
                print(movimento)
        print(f"Saldo atual: R$ {saldo:.2f}\n")

    elif opcao == "0":
        break

    else:
        print("Operação inválida, por favor selecione a operação desejada corretamente.")
