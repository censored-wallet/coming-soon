export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <h2>
        Open Source database of web3 wallets that have been sanctioned or
        identified by LEA during investigations around the world and are tied to
        illegal activities such as money laundering, hacker groups, drug
        trafficking, CSAM, scams, fraud, and other illicit activities.
      </h2>
      <h4>Problem Statement</h4>
      <p>
        More than 392 million wallets involving bitcoin, ethereum, USDT, and
        other active cryptocurrencies have been detected on the blockchain. Due
        to the anonymity of wallets, it becomes challenging to investigate,
        collect evidence, collaborate for compliance, combat crime, and ensure a
        secure web3 world.
      </p>

      <h4>OSRW Initiative</h4>
      <p>
        The Red Wallet effort was established primarily by forensic
        professionals supporting law enforcement agencies with cryptocurrency
        investigations and liaising with exchanges to identify persons involved,
        recover assets, and collaborate to further investigations. Further, it
        turned into an Open Source Initiative to make it simple for web3
        stakeholder compliance and global LEA to investigate beyond borders and
        cooperate without legal cross-border complications and bureaucratic
        procedures.
      </p>
      <h4>Methodology</h4>
      <p>
        OSRW Initiative relies on data provided by various LEA, published by
        government, identified by subject matter experts and private
        investigators active globally. Majority of red wallets data is hosted on
        blockchain and accessible via DApp for open access, transperency and
        auditability. Our partners contributes for collabration and compliance
        which is not limited to "Wallet address", "Cryptocurrency",
        "Chain","Risk Type" "Contributed By", "Wallet Notes", "Wallet Status"
        and "Added On" information which is accessible via smart contract and
        standard APIs.
      </p>
      <h4>Response Sample</h4>
      <p>
        <i></i>
        <ul>
          <li>"uuid": "2b4840e4-206c-11ed-861d-0242ac120002",</li>
          <li>"walletAddress": "17drWwzBC1znSQAZmu5iKsxNuTvFfMFxRM",</li>
          <li>"cryptocurrency": "bitcoin",</li>
          <li>"chain": "BTC",</li>
          <li>"riskType: "Terrorism Funding",</li>
          <li>"contributedBy": "Ministry of Defence",</li>
          <li>
            "walletNotes": "Benjamin Grantz, Associated with Terrorism funding",
          </li>
          <li>"walletStatus": "Confisticated",</li>
          <li>"addedOn": "07/03/2022"</li>
        </ul>
      </p>
      <h4>Traction</h4>
      <p>
        <ul>
          <li>U.S. Department Of The Treasury OFAC sanctioned list</li>
          <li>Israeli Government identified donation address</li>
          <li>Partnerned with Indian LEA</li>
          <li>Milestone of 1,30,860+ Red Wallets</li>
        </ul>
      </p>
      <h4>Partners</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid red' }}>
        <div>
          <img src="partner/anq-finance.png"  alt="anq-finance" style={styles.imageSize}/>
        </div>
        <div>
          <img src="partner/Bitbns.png" alt="anq-finance" style={styles.imageSize} />
        </div>
        <div>
          <img src="partner/coinswitch.png" alt="coinswitch" style={styles.imageSize} />
        </div>
        <div>
          <img src="partner/fibitpro.png" alt="fibitpro" style={styles.imageSize} />
        </div>
        <div>
          <img src="partner/Gitottus.png" alt="Gitottus" style={styles.imageSize} />
        </div>
        <div>
          <img src="partner/unocoin.png" alt="unocoin" style={styles.imageSize} />
        </div>
        <div>
          <img src="partner/WazirX.png" alt="WazirX" style={styles.imageSize} />
        </div>
        <div>
          <img src="partner/zebpay.png" alt="anq-zebpay" style={styles.imageSize} />
        </div>


      </div>

    </>
  );
}

const styles = {
  imageSize:{
    width:'100%', height:'auto', maxWidth:'140px', margin:10
  }
}