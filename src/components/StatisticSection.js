import * as React from "react"

import StatNumber from "./StatNumber"

export default function StatisticSection() {
  const [registeredContents, setRegisteredContents] = React.useState(0)
  const [walletsCount, setWalletsCount] = React.useState(0)
  const [integratedSites, setIntegratedSites] = React.useState(0)
  const [creatorsCount, setCreatorsCount] = React.useState(0)
  const [likeDistribution, setLikeDistribution] = React.useState(0)
  React.useEffect(() => {
    async function fetchData() {
      try {
        const {
          totalISCNCount: registeredContentsRaw = 0,
          totalLikee: creatorsCountRaw = 0,
          LIKEs: likeDistributionRaw = 0,
          totalAddresses: walletsCountRaw = 0,
          totalSites: integratedSitesRaw = 0,
        } = await fetch("https://like.co/api/like/like/stat").then((r) => r.json())
        setRegisteredContents(registeredContentsRaw)
        setCreatorsCount(creatorsCountRaw)
        setLikeDistribution(likeDistributionRaw)
        setWalletsCount(walletsCountRaw)
        setIntegratedSites(integratedSitesRaw);
      } catch (error) {
        console.error("Failed to fetch stat number")
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <section className="relative mt-[88px] px-[48px] flex justify-center">
      <div>
        <ul className="my-14 sm:w-full max-w-[1024px] min-w-[224px] gap-x-[96px] gap-y-[48px] flex flex-col sm:flex-row flex-wrap sm:justify-center">
          <li>
            <StatNumber
              value={walletsCount || 24000}
              label="Addresses"
            />
          </li>
          <li>
            <StatNumber
              value={integratedSites || 7000}
              label="Sites"
            />
          </li>
          <li>
            <StatNumber
              value={registeredContents || 683384}
              label="Registered contents"
            />
          </li>
          <li>
            <StatNumber
              value={creatorsCount || 19000}
              label="Creators"
            />
          </li>
          <li>
            <StatNumber
              value={likeDistribution || 48570000}
              label="Distributed $LIKE"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
