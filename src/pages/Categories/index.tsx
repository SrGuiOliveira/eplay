import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGeFightGamesQuery,
  useGetSportGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGeFightGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (actionGames && fightGames && sportGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={sportGames}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="black"
        />
        <ProductsList id="rpg" games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
