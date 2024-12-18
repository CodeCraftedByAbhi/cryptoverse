const Faq = () => {
  return (
    <div><div className="accordion" id="accordionExample" style={{backgroundColor:'rgba(6, 17, 47)', color:'#f4f4f4', border:'none'}}>
    <div className="accordion-item" style={{backgroundColor:'rgba(6, 17, 47)', color:'#f4f4f4', border:'none', borderBottom:'1px solid'}}>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:'#010118', color:'#f4f4f4'}}>
        What is crypto?
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample"style={{color:'#f4f4f4'}}>
        <div className="accordion-body" style={{backgroundColor:'#010118', color:'#f4f4f4'}}>
        Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography  for security. It is decentralized and operates independently of a central bank.<br/><br/>Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include Bitcoin, Ethereum, Ripple, Litecoin, etc.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={{backgroundColor:'rgba(6, 17, 47)', color:'#f4f4f4', border:'none', borderBottom:'1px solid'}}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:'#010118', color:'#f4f4f4'}}>
        How to earn crypto?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:'#010118', color:'#f4f4f4'}}>
        There are several ways to earn cryptocurrency, including:<br/><br/>
Mining: Cryptocurrency mining involves using specialized computer hardware to solve complex mathematical equations that validate transactions on a blockchain network. Successful miners are rewarded with newly minted cryptocurrency for their efforts.<br/><br/>
Staking/Lockups: Staking and lockups involve holding or locking up a certain amount of cryptocurrency in a wallet or on a platform to support the operations of the blockchain network. Stakers are rewarded with new cryptocurrency as a form of interest for their support.<br/>v
Trading: Trading cryptocurrency involves buying and selling cryptocurrencies on exchanges or other trading platforms. Those who have a good understanding of market trends and are able to make informed trading decisions can earn profits through trading.<br/><br/>
Airdrops: Airdrops are free distributions of cryptocurrency to users who meet certain criteria or participate in promotional activities.<br/><br/>
Crypto Projects: Some blockchain projects offer rewards or bounties for users who contribute to their development or community. This can include activities like bug bounties, testing, or content creation.<br/><br/>
It&apos;s important to note that each method of earning cryptocurrency carries its own risks and rewards. It is recommended to carefully research cryptocurrencies and understand the process before buying. Learn more about the crypto market at Crypto.com University.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={{backgroundColor:'rgba(6, 17, 47)', color:'#f4f4f4', border:'none', borderBottom:'1px solid'}}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:'#010118', color:'#f4f4f4'}}>
        How to trade crypto?
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:'#010118', color:'#f4f4f4'}}>
        To trade cryptocurrency, follow these general steps:<br/><br/>
Choose a cryptocurrency exchange that supports trading. A popular option is the Crypto.com Exchange.<br/><br/>
Create an account on the chosen platform and perform ID verification, known as KYC (‘Know Your Customer’).<br/><br/>
Deposit funds into the newly created account using a supported payment method. The Crypto.com Exchange supports bank transfers and credit/debit cards.<br/><br/>
Navigate to the trading section of the platform and select the cryptocurrency pair to trade.<br/><br/>
Choose whether to buy or sell the cryptocurrency, and enter the amount to trade.<br/><br/>
Set the preferred price and order type. There are several types of orders, including market orders, limit orders, stop orders, and crypto options, which allow users to buy or sell at a specific price or under certain conditions.<br/><br/>
Submit the trade order and wait for it to be executed. Depending on market conditions, the trade may be filled immediately, or it may take time to be filled.<br/><br/>
Monitor trades and adjust strategies as necessary.<br/><br/>
Here is an introduction to trading on the Crypto.com Exchange.<br/><br/>
It is crucial to note that trading cryptocurrency carries risk, and it is important to trade only what you can afford to lose.
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Faq