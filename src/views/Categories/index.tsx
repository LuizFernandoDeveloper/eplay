import ProductList from '../../components/ProductList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: simulatiomGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulatiomGames && fightGames && rpgGames) {
    return (
      <>
        <ProductList
          isLoading={isLoadingAction}
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductList
          isLoading={isLoadingSports}
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductList
          isLoading={isLoadingSimulation}
          games={simulatiomGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductList
          isLoading={isLoadingFight}
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductList
          isLoading={isLoadingRPG}
          games={rpgGames}
          title="RPG"
          background="black"
          id="RPG"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
