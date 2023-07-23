import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Row, InputGroup, TabButton } from './styled'
import card from '../../assets/icon/credit-card.svg'
import barCode from '../../assets/icon/barcode.svg'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(true)
  return (
    <>
      <div className="container">
        <Card title="Dados de cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  placeholder="Digite seu nome competo"
                  type="text"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  placeholder="Digite seu E-mail"
                  type="email"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" placeholder="Digite seu CPF" type="text" />
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deleveryEmail">E-mail</label>
                <input
                  id="deleveryEmail"
                  placeholder="Digite o e-mail para a entrega do Jogo"
                  type="email"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeleveryEmail">Confirme o e-mail</label>
                <input
                  id="confirmDeleveryEmail"
                  placeholder="confirme o e-mail para a entrega do Jogo"
                  type="email"
                />
              </InputGroup>
            </Row>
          </>
        </Card>
        <Card title="Pagamento">
          <>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={barCode} alt="Boleto" />
              Boleto bancário
            </TabButton>
            <TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
            >
              <img src={card} alt="Cartão de Credito" />
              Cartão de crédito
            </TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              ) : (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do titular do cartão
                      </label>
                      <input
                        id="cardOwner"
                        placeholder="Digite o nome do titular"
                        type="text"
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <input
                        id="cpfCardOwner"
                        placeholder="Digite o numero do CPF"
                        type="text"
                      />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Nome do cartão</label>
                      <input
                        id="cardDisplayName"
                        placeholder="Digite o nome do cartão"
                        type="text"
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardName"
                        placeholder="Digite o nome do cartão"
                        type="text"
                      />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <input
                        id="expiresMonth"
                        placeholder="DD/MM"
                        type="text"
                      />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input id="expiresYear" placeholder="AAAA" type="text" />
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input id="cardCode" placeholder="1234" type="text" />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="150px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select name="" id="installments">
                        <option value="1">1 x de R$ 200,00</option>
                        <option value="1">2 x de R$ 200,00</option>
                        <option value="1">3 x de R$ 200,00</option>
                      </select>
                    </InputGroup>
                  </Row>
                </>
              )}
            </div>
          </>
        </Card>
        <Button type="button" title="Clique aqui para finalizar a compra">
          Finalizar comprar
        </Button>
      </div>
    </>
  )
}

export default Checkout
