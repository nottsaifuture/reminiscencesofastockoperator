const CONTENT_EN = {
  "modules": [
    {
      "id": 1,
      "title": "Learning to observe",
      "desc": "Separate a useful observation from a lucky outcome."
    },
    {
      "id": 2,
      "title": "Reading the market",
      "desc": "Timing, changing conditions, and the limits of conviction."
    },
    {
      "id": 3,
      "title": "Managing the position",
      "desc": "Liquidity, losses, and the influence of other people."
    },
    {
      "id": 4,
      "title": "Protecting your judgment",
      "desc": "Recovery, uncertainty, and the temptation of tips."
    },
    {
      "id": 5,
      "title": "Seeing beneath the price",
      "desc": "Signals, squeezes, and the mechanics of a market."
    },
    {
      "id": 6,
      "title": "Thinking like an investor",
      "desc": "Promotion, incentives, governance, and future earnings."
    }
  ],
  "lessons": [
    {
      "id": "1-1",
      "module": 1,
      "chapter": 1,
      "title": "Observe before you speculate",
      "desc": "Begin with a record, not a prediction.",
      "pages": [
        22,
        24
      ],
      "context": "In Chapter I, the young Livingston works at a quotation board and keeps a notebook of price movements. Before his first small Burlington speculation, he compares a suggested trade with his own observations. The episode presents speculation as an attempt to test an idea, although his early success soon encourages larger bets.",
      "analysis": "A written forecast creates a record that memory cannot quietly improve. But noticing a repeated pattern is only a starting point: a small sample, selective recall, or a changing market can make an apparent edge disappear. An investor can adopt the discipline of recording reasons without copying Livingston’s speculative position sizes.",
      "case": "spiva",
      "connection": "SPIVA’s approach to retaining funds that disappear addresses the same question: what observations are missing from the story? A notebook that records only winners makes the same selection error as a fund comparison that excludes failures.",
      "example": "Imagine ten recorded decisions: four gain $150 each and six lose $120 each. The total is $600 − $720 = −$120 before costs. Remembering the four exciting wins would produce a very different impression.",
      "task": "Write one investment claim, the evidence that supports it, and the observation that would disprove it. Date it before you know the result.",
      "ideas": [
        "Record the forecast before the outcome.",
        "Include failed observations.",
        "A pattern is a hypothesis, not a guarantee."
      ],
      "question": "What makes a decision journal useful?",
      "options": [
        "It preserves only your strongest wins.",
        "It records reasons and contrary evidence before the outcome.",
        "It guarantees that a pattern will repeat."
      ],
      "answer": 1,
      "scenario": {
        "question": "You are examining a fund ranking using SPIVA’s lesson. Which population should you request?",
        "options": [
          "Only funds that still exist",
          "The starting group, including closures and mergers",
          "Only the ten best performers"
        ],
        "answer": 1,
        "explanation": "Excluding disappeared funds can make the survivors look better than the original opportunity set."
      }
    },
    {
      "id": "1-2",
      "module": 1,
      "chapter": 2,
      "title": "A quotation is not an execution",
      "desc": "The market you can observe is not always the market you can trade.",
      "pages": [
        50,
        52
      ],
      "context": "Chapter II takes Livingston from bucket shops to a New York exchange broker. He wants to be close to the source of quotations, yet discovers that his old setting and real exchange transactions are different. He also recognises that needing action every day is itself a source of mistakes.",
      "analysis": "A screen price does not promise an available quantity at that price. Delay, spreads, fees, and order size turn a theoretical decision into an actual result. Evaluate an investment process after realistic implementation costs. A limit order controls price but may not execute; a market order prioritises execution but does not fix the price.",
      "case": "flash",
      "connection": "The Flash Crash showed why the depth of executable buying interest matters. A price chart alone cannot explain what an investor could actually sell during a disruption.",
      "example": "A hypothetical purchase of 100 shares is planned at $50 but fills at $50.30. The $30 difference is implementation shortfall before fees. If the idea expected only $20 of gross profit, that friction consumes the expected benefit.",
      "task": "Compare a market order with a limit order for a thinly traded asset. List the risk each order type leaves unresolved.",
      "ideas": [
        "A displayed price is not a guaranteed fill.",
        "Costs can overwhelm a small expected advantage.",
        "Trading less can be a deliberate decision."
      ],
      "question": "What does a limit order guarantee?",
      "options": [
        "That the full order will execute.",
        "A profit after transaction costs.",
        "A price boundary if it executes, not execution itself."
      ],
      "answer": 2,
      "scenario": {
        "question": "During a Flash Crash-style disruption, the screen shows a price. What else do you need?",
        "options": [
          "The quantity actually available at that price",
          "Yesterday’s highest price",
          "A prediction that the market will recover"
        ],
        "answer": 0,
        "explanation": "Executable depth and order conditions determine what can fill. A later recovery does not guarantee today’s execution."
      }
    },
    {
      "id": "1-3",
      "module": 1,
      "chapter": 3,
      "title": "Paper profits are not a complete test",
      "desc": "Money at risk changes both execution and behaviour.",
      "pages": [
        82,
        84
      ],
      "context": "Chapter III contrasts imaginary trading with the pressure of committing actual money. Livingston describes losses as a source of experience and rejects a permanent identity as either a bull or a bear. His confidence is part of the narrative, not independent proof of a reliable strategy.",
      "analysis": "A simulation can test rules and arithmetic without testing all the emotions, delays, or financing constraints of a live position. This does not mean a learner must risk money to learn. It means the claims made for a simulation should be limited to what it actually models. Include adverse conditions and costs before drawing conclusions.",
      "case": "knight",
      "connection": "Knight Capital’s failure illustrates a different but related gap: an intended trading process can behave very differently in production. Operational controls matter in addition to the investment idea.",
      "example": "A simulation assumes ten $100 gains and ten $80 losses: $200 gross profit. Add $12 in round-trip costs to each of the 20 trades and the net result becomes −$40. Emotional effects are still not included.",
      "task": "List three assumptions in a hypothetical backtest that could fail when orders enter a real market.",
      "ideas": [
        "A simulation tests a model, not every real constraint.",
        "Separate skill from confidence.",
        "Review the process even when the outcome is good."
      ],
      "question": "What can a profitable simulation establish?",
      "options": [
        "That its rules were profitable under its assumptions.",
        "That live execution will be identical.",
        "That real losses are impossible."
      ],
      "answer": 0,
      "scenario": {
        "question": "You review a new order system after studying Knight Capital. What is the strongest next check?",
        "options": [
          "Trust the simulation because it made a profit",
          "Increase order size to prove confidence",
          "Test deployment controls, limits, and the stop procedure"
        ],
        "answer": 2,
        "explanation": "Knight’s case shows why testing strategy logic alone is insufficient: production controls and the response to failures matter."
      }
    },
    {
      "id": "1-4",
      "module": 1,
      "chapter": 4,
      "title": "Who controls the rules?",
      "desc": "Counterparty and venue risks belong in your analysis.",
      "pages": [
        112,
        114
      ],
      "context": "In Chapter IV, Livingston returns to the bucket shops to rebuild a stake. Shops that know him refuse his business, and using another person does not solve his access problem. The episode shows how dependent his early method is on the rules and willingness of the other side.",
      "analysis": "An apparent trading advantage is incomplete if the venue can restrict access, change terms, or fail to meet its obligations. Modern regulated brokers differ substantially from historical bucket shops, but investors still need to understand custody, settlement, withdrawal rules, and the legal entity holding their assets. Do not treat this episode as advice to evade restrictions.",
      "case": "snb",
      "connection": "The SNB case is a policy change rather than a broker failure. It illustrates the broader lesson that a rule forming part of your assumed environment can change. These are different mechanisms, with a shared need to identify dependencies.",
      "example": "Two hypothetical accounts show the same $10,000 balance. One holds segregated securities; the other is an unsecured claim on a provider. Equal screen balances do not establish equal legal protection.",
      "task": "Find the legal entity, regulator, custody arrangement, and withdrawal terms for a financial service you are evaluating. Leave unknown answers marked unknown.",
      "ideas": [
        "Know the entity behind the interface.",
        "Access and custody are part of risk.",
        "A rule is an assumption that deserves review."
      ],
      "question": "Which comparison goes beyond a displayed account balance?",
      "options": [
        "The colour of the trading dashboard.",
        "Custody rights and the provider’s obligations.",
        "The number of promotional emails."
      ],
      "answer": 1,
      "scenario": {
        "question": "A plan assumes an official exchange-rate floor will remain. What does the SNB case prompt you to do?",
        "options": [
          "List what fails if the policy changes",
          "Treat the policy as a permanent guarantee",
          "Ignore it because only brokers can change rules"
        ],
        "answer": 0,
        "explanation": "The dependency is a policy commitment, not a contract guaranteeing every investor an exit price."
      }
    },
    {
      "id": "2-1",
      "module": 2,
      "chapter": 5,
      "title": "Do not force a pattern",
      "desc": "A familiar chart can conceal unfamiliar conditions.",
      "pages": [
        140,
        142
      ],
      "context": "Chapter V questions an overly rigid devotion to tape reading. Livingston describes the limits of mechanical chart claims and emphasises how a stock actually behaves. His account invites attention to changed conditions, rather than the assumption that a previous pattern must repeat.",
      "analysis": "An explanatory story can fit the past much more easily than it predicts the future. Specify a rule before testing it, then examine observations outside the period used to design it. The book’s qualitative judgments are not a validated modern trading algorithm. For an investor, the transferable habit is to ask what evidence would overturn an attractive explanation.",
      "case": "gme",
      "connection": "The SEC staff’s GameStop analysis tested a popular short-squeeze explanation against transaction evidence. The lesson is to investigate the mechanism rather than infer it from the shape of a price chart.",
      "example": "If you inspect 100 unrelated signals at a 5% false-positive threshold, about five false positives are expected under an all-null model. A striking result selected after the search needs further testing.",
      "task": "Write a rule that could be applied by someone who has not seen the chart’s future. Then choose a separate period for checking it.",
      "ideas": [
        "A fitted story is not an out-of-sample test.",
        "Ask what mechanism could produce the pattern.",
        "Keep contrary observations in view."
      ],
      "question": "Which is a stronger test of a chart rule?",
      "options": [
        "Checking only its best historical example.",
        "Redrawing it after every failure.",
        "Testing a fixed rule on previously unseen observations."
      ],
      "answer": 2,
      "scenario": {
        "question": "A GameStop chart is labelled “entirely a short squeeze.” What should you examine?",
        "options": [
          "Whether the chart looks dramatic",
          "Transactions and the timing of covering versus other buying",
          "How often the label is repeated"
        ],
        "answer": 1,
        "explanation": "SEC staff distinguished intervals of short covering from the forces sustaining the longer rise."
      }
    },
    {
      "id": "2-2",
      "module": 2,
      "chapter": 6,
      "title": "Treat intuition as a question",
      "desc": "A memorable hunch is not a complete record.",
      "pages": [
        164,
        166
      ],
      "context": "Chapter VI describes sudden impulses around Livingston’s trading, including his Union Pacific episode in 1906. The narration gives intuition considerable weight. A reader must distinguish what the narrator remembers from evidence that those impulses could reliably forecast events.",
      "analysis": "Intuition may compress experience, but it can also express anxiety or selective memory. Convert a feeling into observable claims where possible. Ask how often similar feelings occurred without a useful result. A surprise that makes one trade profitable does not prove the trader could consistently foresee surprises.",
      "case": "snb",
      "connection": "The unexpected removal of the Swiss franc floor is useful here precisely because policy discontinuities challenge confident forecasts. A memorable successful position around such an event is not a reproducible forecasting rule.",
      "example": "A diary contains 12 warnings: three precede declines and nine do not. Retelling only the three successes makes the intuition sound much more precise than the full record.",
      "task": "Describe one intuitive concern using observable facts. Record what would show that the concern was misplaced.",
      "ideas": [
        "Separate an impulse from its evidence.",
        "Count false alarms as well as successes.",
        "Unexpected events require preparation, not certainty."
      ],
      "question": "How should a remembered successful hunch be evaluated?",
      "options": [
        "Against all comparable hunches, including false alarms.",
        "As proof of permanent forecasting skill.",
        "Only by the size of the winning trade."
      ],
      "answer": 0,
      "scenario": {
        "question": "Someone says they foresaw the SNB policy change. What record would help assess that claim?",
        "options": [
          "Their most profitable position only",
          "A confident explanation after the event",
          "Dated forecasts, including the ones that failed"
        ],
        "answer": 2,
        "explanation": "A selected success does not reveal the false-alarm rate or establish repeatable forecasting skill."
      }
    },
    {
      "id": "2-3",
      "module": 2,
      "chapter": 7,
      "title": "Add exposure with a reason",
      "desc": "A better price and a better decision are different things.",
      "pages": [
        197,
        199
      ],
      "context": "Chapter VII describes Livingston’s preference for adding when prices move in his favour rather than automatically buying more after a decline. He also distinguishes understanding the general market from seeking a tip on a particular stock. This is his speculative method, not a rule suitable for every investor.",
      "analysis": "Averaging down lowers a cost basis but increases exposure. Adding to a winner also increases exposure and can amplify a reversal. Neither action is justified solely by the direction of price. A long-term investor should revisit valuation, portfolio concentration, and risk capacity; a trader should revisit the strategy’s entry and exit conditions.",
      "case": "ltcm",
      "connection": "LTCM illustrates why strong conviction about eventual convergence cannot substitute for the ability to survive interim losses. Adding to a position must be assessed as an additional risk decision.",
      "example": "Buy 100 shares at $50 and 100 at $40: the average cost is $45. At a market price of $40, the total unrealised loss is still $1,000. A lower average cost has not erased the loss.",
      "task": "Compare the total exposure before and after a proposed addition. State the new evidence, not just the new average cost.",
      "ideas": [
        "A lower cost basis is not a recovered loss.",
        "Adding to winners also increases risk.",
        "Every addition needs its own justification."
      ],
      "question": "What happens immediately when you average down?",
      "options": [
        "The existing loss disappears.",
        "Exposure rises and average cost falls.",
        "The investment’s intrinsic value rises."
      ],
      "answer": 1,
      "scenario": {
        "question": "A convergence position is losing money, as in LTCM’s case. Before adding, what deserves priority?",
        "options": [
          "A lower average cost alone",
          "Interim losses, funding demands, and total exposure",
          "The amount needed to recover yesterday’s loss"
        ],
        "answer": 1,
        "explanation": "A convergence view does not supply cash. Adding exposure can shorten the time available for the thesis to work."
      }
    },
    {
      "id": "2-4",
      "module": 2,
      "chapter": 8,
      "title": "Patience needs an investment thesis",
      "desc": "Holding on and refusing to reconsider can look alike.",
      "pages": [
        213,
        215
      ],
      "context": "In Chapter VIII, Livingston connects his observations with broader market conditions. He recalls Partridge’s emphasis on remaining positioned in a bull market and recognises the importance of larger movements. The narrative shifts attention from each small fluctuation to the wider thesis.",
      "analysis": "Patience is useful when it follows a reasoned horizon, not when it excuses ignoring new evidence. Define what you expect, how long the idea needs, and what would invalidate it. A long holding period does not rescue a defective investment. Equally, reacting to every small move can prevent a sound long-term plan from being tested.",
      "case": "buffett",
      "connection": "Buffett’s wager compared results over an agreed decade, rather than choosing an end date after seeing a favourable year. The case shows the importance of evaluation horizon while remaining only one historical comparison.",
      "example": "A $10,000 investment compounding at a hypothetical 6% grows to about $17,908 in ten years before fees and taxes. The smooth calculation does not model the uncertain, uneven path of actual returns.",
      "task": "Write a review date and two evidence-based reasons for revisiting an investment before that date.",
      "ideas": [
        "Set the horizon before judging the result.",
        "Patience is compatible with reassessment.",
        "A long horizon does not guarantee recovery."
      ],
      "question": "What distinguishes disciplined patience from stubbornness?",
      "options": [
        "A refusal to read new evidence.",
        "A promise never to sell.",
        "A thesis, review horizon, and invalidation conditions."
      ],
      "answer": 2,
      "scenario": {
        "question": "In Buffett’s wager, the funds-of-funds led in the first year. How should the agreed comparison be judged?",
        "options": [
          "Declare the wager decided after that year",
          "Keep moving the end date to favour the leader",
          "Use the agreed decade and returns after fees"
        ],
        "answer": 2,
        "explanation": "The time horizon was part of the question. Changing it after seeing results changes the comparison."
      }
    },
    {
      "id": "3-1",
      "module": 3,
      "chapter": 9,
      "title": "A rally does not settle the liquidity question",
      "desc": "Price strength and financial resilience are separate observations.",
      "pages": [
        237,
        239
      ],
      "context": "Chapter IX opens with Livingston interrupting a fishing trip after reading about a sharp market rally. He believes monetary conditions still matter more than the rebound. The chapter places trading judgments within the surrounding pressure on money and credit.",
      "analysis": "A rising price is evidence of transactions, not proof that funding is secure. Investors should distinguish the value of an asset from the financing of the position holding it. Selling under pressure can occur before a long-term view is resolved. This is especially relevant to leveraged holdings and vehicles with redemption demands.",
      "case": "ltcm",
      "connection": "LTCM’s 1998 funding emergency makes this distinction concrete: an eventual narrowing of spreads could not answer an immediate demand for capital. The recapitalisation addressed survival, not merely a forecast.",
      "example": "A hypothetical $20,000 account with $100,000 exposure loses $10,000 on a 10% adverse move, before costs. That is a 50% equity loss even if the asset later recovers.",
      "task": "Draw two columns: evidence for the asset’s value, and conditions required to keep holding it. Do not use an answer in one column to fill the other.",
      "ideas": [
        "Funding can determine the holding period.",
        "A rebound does not erase leverage.",
        "Separate asset value from position survival."
      ],
      "question": "What can force a position closed before a thesis plays out?",
      "options": [
        "A financing or margin constraint.",
        "Only a permanent loss of intrinsic value.",
        "A change in the investor’s favourite chart colour."
      ],
      "answer": 0,
      "scenario": {
        "question": "LTCM faces urgent cash demands. Which statement addresses survival?",
        "options": [
          "The position has enough funding for the next demand",
          "The spread must eventually narrow",
          "The managers have strong credentials"
        ],
        "answer": 0,
        "explanation": "A claim about eventual value and a claim about near-term funding need separate evidence."
      }
    },
    {
      "id": "3-2",
      "module": 3,
      "chapter": 10,
      "title": "Make mistakes specific",
      "desc": "A useful review changes a process, not just a mood.",
      "pages": [
        265,
        267
      ],
      "context": "Chapter X observes that a speculator can recognise a mistake and still repeat something closely related. Livingston distinguishes accepting a loss from remaining wrong, and acknowledges that money and vanity are both involved. The passage is a reminder that identifying an error is not the same as changing behaviour.",
      "analysis": "A review should identify the decision, the information available at the time, and the control that would have helped. Avoid explaining everything with hindsight. A good outcome can result from a weak process, while a sound decision can lose money. Record both so that a review does not reward luck and punish uncertainty.",
      "case": "knight",
      "connection": "The SEC’s Knight Capital findings move beyond the final loss to deployment controls and responses to error messages. A specific failed control is more actionable than simply saying that the firm took too much risk.",
      "example": "Two hypothetical decisions each lose $200. One followed a defined risk plan; the other exceeded its limit after an ignored warning. Equal outcomes do not imply equal decision quality.",
      "task": "Review one mistake using four headings: expectation, observed evidence, action taken, and a concrete change for next time.",
      "ideas": [
        "Name the failed decision or control.",
        "Review winners as well as losers.",
        "Separate process quality from outcome."
      ],
      "question": "Which review is most actionable?",
      "options": [
        "I was unlucky, so nothing can change.",
        "I ignored a defined warning; I will add an escalation step.",
        "I must never make another mistake."
      ],
      "answer": 1,
      "scenario": {
        "question": "You investigate Knight’s loss. Which conclusion can improve a process?",
        "options": [
          "The outcome was bad, so every decision was wrong",
          "Identify the ignored warnings and failed controls",
          "Never examine an incident that has already ended"
        ],
        "answer": 1,
        "explanation": "Specific failure points can support a testable control change. A general judgment about luck cannot."
      }
    },
    {
      "id": "3-3",
      "module": 3,
      "chapter": 11,
      "title": "Size changes the exit",
      "desc": "A small position’s experience may not scale.",
      "pages": [
        286,
        288
      ],
      "context": "Chapter XI returns to Livingston’s large grain positions after the 1907 panic. His discussion of wheat and corn places position size and the difficulty of handling large interests at the centre of the story. The existence of a market price does not mean a large position can be closed effortlessly.",
      "analysis": "Liquidity is a relationship between an order and available counterparties. A method that works for a small account may change when its orders become a meaningful share of trading. For fund investors, this matters when a vehicle promises quick withdrawals while owning assets that are difficult to sell.",
      "case": "flash",
      "connection": "The Flash Crash investigation examined order-book depth, not just closing prices. It demonstrates how the ability to transact can deteriorate during the very interval when participants want to exit.",
      "example": "A hypothetical sale needs 1,000 shares: 100 are bid at $50 and 900 at $49. If all execute at those prices, proceeds are $49,100 rather than $50,000. The quoted top bid did not represent the whole order.",
      "task": "For a hypothetical holding, compare its size with typical trading volume and ask how that comparison might change in a stressed market.",
      "ideas": [
        "Liquidity depends on the size of the order.",
        "The top quote covers a limited quantity.",
        "Stress can change normal exit conditions."
      ],
      "question": "Why can a quoted price overstate achievable sale proceeds?",
      "options": [
        "Every share must trade at yesterday’s close.",
        "All market orders execute at one price.",
        "Available buying interest at that price may be too small."
      ],
      "answer": 2,
      "scenario": {
        "question": "The Flash Crash leaves a thin order book. How should a large sale be estimated?",
        "options": [
          "Multiply the last quote by every share",
          "Assume normal depth will return immediately",
          "Examine available depth across price levels"
        ],
        "answer": 2,
        "explanation": "A top-of-book quote covers limited quantity. Selling a larger amount may reach lower bids."
      }
    },
    {
      "id": "3-4",
      "module": 3,
      "chapter": 12,
      "title": "Expertise is not permission to stop thinking",
      "desc": "Separate respect for a person from evidence for a position.",
      "pages": [
        312,
        314
      ],
      "context": "Chapter XII introduces Percy Thomas, a cotton expert Livingston admires. The chapter examines the influence of a persuasive and knowledgeable person on Livingston’s independent judgment. The caution is not that outside knowledge is useless, but that adopting another person’s conviction can obscure responsibility for one’s own decisions.",
      "analysis": "Ask what an expert knows, how that knowledge connects to the claim, and what might make the conclusion wrong. Domain knowledge does not automatically establish the timing, size, or suitability of a trade. Nor does disagreeing with an expert prove independence: the objective is an evidence-based judgment, not automatic contrarianism.",
      "case": "buffett",
      "connection": "The fund wager separates impressive professional credentials from the returns investors kept after fees. Its result is evidence about a particular comparison, not proof that every expert or active manager will fail.",
      "example": "A hypothetical fund earns 8% before a simplified annual charge of 2 percentage points. The investor keeps roughly 6% before tax. Compare that net figure with the alternative, not the manager’s gross return.",
      "task": "Take an investment opinion and identify the claim, supporting evidence, cost to act, and a plausible reason it might be wrong.",
      "ideas": [
        "Respect expertise without outsourcing responsibility.",
        "Check the link between knowledge and conclusion.",
        "Compare outcomes after costs."
      ],
      "question": "What is the most useful response to an expert recommendation?",
      "options": [
        "Examine evidence, incentives, costs, and suitability.",
        "Accept it because the expert is well known.",
        "Reject it solely to prove independence."
      ],
      "answer": 0,
      "scenario": {
        "question": "A prestigious manager cites gross performance. What does Buffett’s wager suggest comparing?",
        "options": [
          "The investor’s return after all relevant fees",
          "The manager’s reputation alone",
          "Only the best year"
        ],
        "answer": 0,
        "explanation": "The wager focused on what investors kept over the evaluation period, not merely credentials or gross gains."
      }
    },
    {
      "id": "4-1",
      "module": 4,
      "chapter": 13,
      "title": "Protect the person making the decision",
      "desc": "Stress changes the quality of judgment.",
      "pages": [
        342,
        344
      ],
      "context": "Chapter XIII opens with Livingston broke, indebted, and unable to reason calmly. Having become accustomed to large positions, he finds smaller trading psychologically difficult. His reflections acknowledge that experience does not make a person immune to pressure, pride, or changing mental conditions.",
      "analysis": "A financial loss can become a decision-making problem when the need to recover it determines the next action. Reducing activity or pausing can protect the process. For an investor, an appropriate plan also respects emergency cash needs and the ability to tolerate uncertainty; a paper return is not the only relevant outcome.",
      "case": "ltcm",
      "connection": "LTCM’s crisis is an institutional financing case, not evidence about Livingston’s psychology. The comparison highlights how shrinking room for manoeuvre can narrow choices, whether the constraint is capital, obligations, or decision capacity.",
      "example": "After a hypothetical 40% loss, $10,000 becomes $6,000. Returning to $10,000 requires a 66.7% gain. Increasing risk merely because the recovery target feels urgent does not improve the opportunity.",
      "task": "Write a pause rule for a situation in which fatigue, urgency, or a need to recover losses starts driving decisions.",
      "ideas": [
        "Stress is part of the decision environment.",
        "Recovery targets do not create opportunities.",
        "A pause can be a planned action."
      ],
      "question": "What does the desire to recover a past loss tell you about a new investment?",
      "options": [
        "That it should be larger.",
        "Nothing by itself about its expected return.",
        "That the market owes you a recovery."
      ],
      "answer": 1,
      "scenario": {
        "question": "After a large loss, your choices are narrowing. What is a useful lesson from LTCM’s funding pressure?",
        "options": [
          "Increase risk until the old balance is restored",
          "Protect remaining flexibility before chasing recovery",
          "Past success ensures another rescue"
        ],
        "answer": 1,
        "explanation": "The comparison concerns constraints, not a diagnosis of anyone’s emotions. Preserving room to act is different from demanding a recovery."
      }
    },
    {
      "id": "4-2",
      "module": 4,
      "chapter": 14,
      "title": "The market does not owe you an opportunity",
      "desc": "Needing a return is not evidence that one is available.",
      "pages": [
        366,
        368
      ],
      "context": "Chapter XIV describes lean years, mounting debt, and Livingston’s attempts to force profits from unpromising conditions. He presents the need to rebuild a stake as a pressure that can pull a trader into activity without a sufficient opportunity.",
      "analysis": "A required return and an available return are different concepts. If a plan requires implausibly high gains, examine spending, contributions, time horizon, or objectives instead of treating the target as a forecast. Waiting also has risks, including inflation and missed returns, so it should follow a considered plan rather than fear.",
      "case": "buffett",
      "connection": "Buffett’s decade-long wager is a useful counterpoint to judging opportunities by an urgent short-term need. Costs and the chosen evaluation period both affected the comparison; no participant could make returns arrive on demand.",
      "example": "Turning $5,000 into $10,000 in one year requires a 100% gain. The arithmetic describes a target, not a reasonable expectation or an available strategy.",
      "task": "Separate a personal financial goal from a market forecast. Identify one adjustment to contributions or horizon that does not rely on higher risk.",
      "ideas": [
        "A required return is not a forecast.",
        "Urgency can manufacture weak trades.",
        "Review the plan when the target is unrealistic."
      ],
      "question": "If a goal requires an unusually high return, what should be reviewed first?",
      "options": [
        "Which asset recently doubled.",
        "How much leverage is available.",
        "The goal, contributions, horizon, and risk capacity."
      ],
      "answer": 2,
      "scenario": {
        "question": "Your savings target requires a quick doubling. How should you use Buffett’s ten-year comparison?",
        "options": [
          "As proof that returns arrive whenever needed",
          "As a promise that every decade will repeat it",
          "As a reminder to separate goals from available returns"
        ],
        "answer": 2,
        "explanation": "A historical comparison cannot manufacture an opportunity to meet a personal deadline."
      }
    },
    {
      "id": "4-3",
      "module": 4,
      "chapter": 15,
      "title": "Prepare for discontinuity",
      "desc": "Not every loss comes from a gradually changing price.",
      "pages": [
        397,
        399
      ],
      "context": "Chapter XV distinguishes ordinary uncertainty from events and counterparties that frustrate the narrator’s expectations of fair dealing. Livingston admits the existence of surprises that cannot be forecast precisely. His account is also a perspective from an earlier legal and market environment.",
      "analysis": "Risk plans should include gaps, unavailable liquidity, and dependencies that can change abruptly. A stop instruction is not a promise of an exact exit price. For a diversified investor, resilience can involve cash reserves, controlled leverage, and avoiding a single point of failure; it cannot mean eliminating all uncertainty.",
      "case": "snb",
      "connection": "On 15 January 2015 the Swiss National Bank discontinued its minimum exchange-rate policy. A policy participants had relied on changed abruptly, illustrating why an assumed stabilising rule belongs on a risk checklist.",
      "example": "A hypothetical stop triggers at $95, but the next available execution is $88 after a gap. On 100 shares, proceeds are $700 below the trigger-price calculation. Exact execution depends on the order and market conditions.",
      "task": "List one price risk, one liquidity risk, and one institutional dependency for a hypothetical investment.",
      "ideas": [
        "Not all changes are gradual.",
        "An exit trigger is not a guaranteed fill.",
        "Resilience means limiting dependence on one assumption."
      ],
      "question": "What can a stop order fail to guarantee?",
      "options": [
        "Execution at the trigger price during a gap.",
        "The existence of a stated trigger.",
        "That an investor has written down a plan."
      ],
      "answer": 0,
      "scenario": {
        "question": "A currency policy ends abruptly, as in the SNB case. What should a pre-event risk plan allow for?",
        "options": [
          "Gaps and execution away from an intended stop price",
          "Guaranteed execution at the stop trigger",
          "No loss because the policy used to be stable"
        ],
        "answer": 0,
        "explanation": "A risk limit expressed as an order is still subject to the available market and the order’s terms."
      }
    },
    {
      "id": "4-4",
      "module": 4,
      "chapter": 16,
      "title": "Ask why the tip is reaching you",
      "desc": "Attention can serve the seller’s objective.",
      "pages": [
        417,
        419
      ],
      "context": "Chapter XVI examines the appetite for tips and the way recipients become distributors. The Borneo Tin discussion connects market promotion with the need to place shares. The narrator’s interest is not just whether a rumour is true, but how the circulation of a story serves those behind it.",
      "analysis": "Investigate incentives, ownership, compensation, and the quality of the underlying evidence. A widely shared idea is not necessarily false, but popularity is not independent confirmation when many people repeat the same source. Distinguish a company’s operating prospects from the marketing of its shares.",
      "case": "gme",
      "connection": "GameStop offers a modern example of powerful attention and competing explanations. The SEC staff report provides transaction-based analysis rather than treating every repeated market narrative as established fact. This is not a claim that all social discussion was manipulative.",
      "example": "Five articles repeating the same anonymous claim provide five publications, not five independent confirmations. Trace the information back to its original evidence.",
      "task": "Choose a public investment claim and map who originated it, who repeats it, and who benefits if readers act on it.",
      "ideas": [
        "Repeated claims may share one source.",
        "Consider the speaker’s incentives.",
        "Popularity does not establish valuation."
      ],
      "question": "What should you check before treating repeated tips as corroboration?",
      "options": [
        "Whether the headlines sound confident.",
        "Whether the sources are genuinely independent.",
        "Whether the price has already risen."
      ],
      "answer": 1,
      "scenario": {
        "question": "Many posts repeat a GameStop explanation. Which check improves your evidence?",
        "options": [
          "Count reposts as independent studies",
          "Trace the claim to transaction evidence and its source",
          "Treat popularity as proof of value"
        ],
        "answer": 1,
        "explanation": "Repeated claims can share one origin. Independent evidence and the mechanism are more informative than repetition."
      }
    },
    {
      "id": "5-1",
      "module": 5,
      "chapter": 17,
      "title": "Explain the signal, not the legend",
      "desc": "A dramatic story can hide an ordinary decision process.",
      "pages": [
        442,
        444
      ],
      "context": "Chapter XVII opens with a friend’s story attributing Livingston’s sale to a black cat and a mysterious hunch. Livingston distinguishes that legend from his own account of observations and warning signs. Even his explanation of intuition remains a personal interpretation rather than a measured forecasting record.",
      "analysis": "When reviewing a decision, reconstruct the information available beforehand. Avoid replacing analysis with a memorable anecdote, whether it celebrates genius or blames bad luck. The question for learning is which observations were useful, what alternatives existed, and whether the same method can be assessed across multiple decisions.",
      "case": "flash",
      "connection": "The Flash Crash investigation used trading records and liquidity evidence to reconstruct a sequence that a price chart alone could not explain. That is a practical contrast to attributing a complex event to a single dramatic story.",
      "example": "A diary records three concerns before a sale. A later retelling mentions only the one that appears prophetic. Compare the original entry with the retelling to see what hindsight has removed.",
      "task": "Reconstruct an investment decision from dated evidence. Mark each fact as known at the time or learned afterward.",
      "ideas": [
        "Separate contemporary evidence from later narrative.",
        "Memorable details are not necessarily causal.",
        "Judge a method across decisions."
      ],
      "question": "Which evidence is most useful for reviewing a past decision?",
      "options": [
        "A more dramatic retrospective story.",
        "Only the eventual outcome.",
        "The dated information available before the action."
      ],
      "answer": 2,
      "scenario": {
        "question": "You are reconstructing the Flash Crash. Which evidence should lead?",
        "options": [
          "A dramatic story written afterward",
          "Only the closing price",
          "Time-stamped trading and liquidity records"
        ],
        "answer": 2,
        "explanation": "Sequenced records help distinguish causes and responses that a retrospective anecdote may collapse together."
      }
    },
    {
      "id": "5-2",
      "module": 5,
      "chapter": 18,
      "title": "Understand a squeeze without assuming one",
      "desc": "Short selling creates obligations as well as opinions.",
      "pages": [
        468,
        470
      ],
      "context": "Chapter XVIII returns to the tactics of covering short positions and describes the market in Tropical Trading. Livingston discusses how concentrated interests can put pressure on traders who must buy back shares. This is a historical account, not a blueprint for manipulating a modern market.",
      "analysis": "A short position can lose more than the original sale proceeds because a stock price has no fixed upper bound. Borrow availability, fees, and margin demands add constraints. But a rapidly rising price is not sufficient evidence that forced covering explains the whole move; identifying the mechanism requires more than a label.",
      "case": "gme",
      "connection": "SEC staff found that short covering contributed in some intervals of GameStop’s rise but did not explain its sustained weeks-long increase by itself. The case is useful because it challenges a one-cause account of a complex event.",
      "example": "Short 100 shares at a hypothetical $20 and cover at $50: the trading loss is $3,000 before fees, although initial proceeds were $2,000. Sale proceeds were not a maximum-loss amount.",
      "task": "Distinguish evidence of short interest, actual covering, and price momentum. What data would help separate them?",
      "ideas": [
        "A short sale has open-ended price risk.",
        "Borrow and funding constraints matter.",
        "A rising price does not prove a single cause."
      ],
      "question": "What is the price-risk limit on an ordinary uncovered short sale?",
      "options": [
        "There is no fixed maximum because the price can keep rising.",
        "The amount originally received.",
        "Exactly 100% of the initial proceeds."
      ],
      "answer": 0,
      "scenario": {
        "question": "GameStop rises sharply while some shorts cover. Which conclusion stays within the evidence?",
        "options": [
          "Covering can contribute without explaining the entire rise",
          "All buying must be forced covering",
          "A squeeze label places a ceiling on short-sale losses"
        ],
        "answer": 0,
        "explanation": "The SEC staff report separated short-covering intervals from the sustained rise. Short-sale losses still have no fixed price ceiling."
      }
    },
    {
      "id": "5-3",
      "module": 5,
      "chapter": 19,
      "title": "Markets have rules—and the rules evolve",
      "desc": "Historical description is not modern permission.",
      "pages": [
        485,
        487
      ],
      "context": "Chapter XIX discusses the meaning of manipulation and the challenge of buying or selling large blocks. Livingston also notes that many earlier practices had become obsolete, impractical, or illegal even in his own era. That warning is central to reading these chapters responsibly.",
      "analysis": "Use the narrative to understand incentives and market impact, not to copy conduct. Legitimate order execution and creating a false appearance of activity are different things. Modern rules and enforcement must be checked in their own right. The investor’s question is whether observed demand is informative and whether the market’s controls are credible.",
      "case": "knight",
      "connection": "The SEC’s Knight Capital action is about controls and erroneous trading, not the same conduct described in the book. It shows how modern market access brings specific obligations that a historical narrative cannot replace.",
      "example": "A hypothetical company trades 10,000 shares on a normal day. An investor hoping to sell 50,000 shares cannot assume five days of normal demand will remain unchanged while that order is executed.",
      "task": "Write a distinction between market impact from a legitimate order and trading intended to create a false impression of demand.",
      "ideas": [
        "Historical practice is not current legal guidance.",
        "Order size can influence price.",
        "Study market integrity as well as returns."
      ],
      "question": "How should the manipulation chapters be used today?",
      "options": [
        "As an instruction manual for copying every tactic.",
        "As historical analysis to read alongside modern rules.",
        "As proof that all price movements are artificial."
      ],
      "answer": 1,
      "scenario": {
        "question": "You study old market tactics alongside Knight’s SEC case. What is the right approach?",
        "options": [
          "Assume historical practice is still permitted",
          "Check current obligations and working controls",
          "Treat an old memoir as a regulatory exemption"
        ],
        "answer": 1,
        "explanation": "Knight involved operational failures, not the same historical conduct. Both illustrate why context and present obligations matter."
      }
    },
    {
      "id": "5-4",
      "module": 5,
      "chapter": 20,
      "title": "A story is not a market-impact model",
      "desc": "Large transactions require analysis beyond folklore.",
      "pages": [
        519,
        521
      ],
      "context": "Chapter XX looks back at famous operators and Livingston’s early lack of experience with manipulation. He distinguishes informed analysis from the guesses and suspicions that circulate around such figures. The narrative invites attention to how a large interest meets actual market demand.",
      "analysis": "An investor should ask who is transacting, what quantity can be absorbed, and what information a trade really conveys. A famous participant’s involvement does not fix the value of the asset. Large reported holdings may be stale, partial, hedged, or tied to objectives unlike yours.",
      "case": "spiva",
      "connection": "SPIVA’s methodology is a useful antidote to focusing only on famous surviving managers. A complete opportunity set tells you something that a collection of impressive individual stories cannot.",
      "example": "If a report highlights three successful funds out of an original group of 20, you still need outcomes for the other 17 before describing the group’s performance.",
      "task": "When studying a celebrated investor, list the missing context: unsuccessful decisions, fees, time horizon, and the alternatives available then.",
      "ideas": [
        "Fame does not establish a replicable edge.",
        "Look for the full comparison group.",
        "Large trades have context a headline may omit."
      ],
      "question": "What is missing from a list of only successful investors?",
      "options": [
        "Their most memorable quotations.",
        "The appearance of their offices.",
        "The starting population, including failures and exits."
      ],
      "answer": 2,
      "scenario": {
        "question": "A profile lists only celebrated surviving funds. What would SPIVA’s approach add?",
        "options": [
          "More quotations from famous managers",
          "The largest recent winner",
          "The full starting population and appropriate benchmarks"
        ],
        "answer": 2,
        "explanation": "A complete denominator prevents the comparison from quietly improving when weak funds disappear."
      }
    },
    {
      "id": "6-1",
      "module": 6,
      "chapter": 21,
      "title": "Activity does not establish value",
      "desc": "A market can become lively without improving the business.",
      "pages": [
        556,
        558
      ],
      "context": "Chapter XXI uses Imperial Steel as a concrete narrative of building trading activity and increasing a stock’s market price. The annotated edition identifies uncertainty about the underlying historical company. The safe reading is to treat the named episode as part of the novel rather than an independently verified corporate case.",
      "analysis": "Separate business performance, share price, and trading volume. Each can affect the others, but none is a complete substitute for the rest. An investor should ask what cash flows, ownership rights, and valuation assumptions support a purchase, rather than using a busy market as proof of quality.",
      "case": "gme",
      "connection": "GameStop’s January 2021 activity illustrates how attention and market demand can become central to price dynamics. The SEC staff analysis is not a valuation of the business, and a reader should not use it as one.",
      "example": "At 10 million shares outstanding, a hypothetical price increase from $10 to $15 raises market capitalisation from $100 million to $150 million. It does not by itself add $50 million to the company’s cash.",
      "task": "For a company, put share price, market capitalisation, revenue, and cash flow in separate rows. Explain what each measures.",
      "ideas": [
        "Price and business cash are different quantities.",
        "Volume is not proof of intrinsic value.",
        "Distinguish fictionalised episodes from verified cases."
      ],
      "question": "What does a rising market capitalisation automatically establish?",
      "options": [
        "A higher market valuation, not an equal increase in company cash.",
        "That operating cash flow increased by the same amount.",
        "That the investment is now less risky."
      ],
      "answer": 0,
      "scenario": {
        "question": "GameStop’s market value rises. What can you conclude without further business evidence?",
        "options": [
          "The market valuation rose; operating cash may not have",
          "The company received the same amount in cash",
          "The share is automatically safer"
        ],
        "answer": 0,
        "explanation": "Secondary-market price changes do not automatically transfer the increase into the company’s bank account."
      }
    },
    {
      "id": "6-2",
      "module": 6,
      "chapter": 22,
      "title": "Read through financial packaging",
      "desc": "New certificates do not automatically create new value.",
      "pages": [
        582,
        584
      ],
      "context": "Chapter XXII describes a consolidation of stove companies and the promotion of the resulting shares. The narrative discusses exchange ratios, financing, and the danger of expecting favourable market conditions to continue. Presentation and distribution are part of the story, alongside the underlying businesses.",
      "analysis": "A split changes units, not the investor’s proportional claim by itself. A merger can change economics, but that depends on price paid, costs, debt, and the actual combined business. Evaluate the substance of a transaction rather than the apparent cheapness of a smaller per-share price.",
      "case": "ltcm",
      "connection": "LTCM is not a merger or stock-split example. Its relevance is the financing question: attractive transaction economics can still be vulnerable to borrowing and liquidity constraints. Do not omit the balance sheet when evaluating a deal.",
      "example": "Before a four-for-one split, 10 shares at $100 are worth $1,000. Immediately after an exactly proportional split, 40 shares at $25 are also worth $1,000, before any independent market movement.",
      "task": "Rewrite a promotional claim about a split or acquisition in terms of ownership percentage, debt, and expected cash flows.",
      "ideas": [
        "A stock split changes units, not value by itself.",
        "Financing affects transaction risk.",
        "Promotion cannot replace economic analysis."
      ],
      "question": "What does a four-for-one stock split do by itself?",
      "options": [
        "Quadruple the investor’s wealth.",
        "Quadruple shares while proportionally reducing the per-share price.",
        "Remove the company’s debts."
      ],
      "answer": 1,
      "scenario": {
        "question": "A corporate deal looks attractive before financing. What does the LTCM comparison remind you to inspect?",
        "options": [
          "Only the new per-share price",
          "Borrowing terms, collateral demands, and liquidity",
          "Only the promotional presentation"
        ],
        "answer": 1,
        "explanation": "This is a funding analogy, not a claim that LTCM was a merger case. Attractive economics still need feasible financing."
      }
    },
    {
      "id": "6-3",
      "module": 6,
      "chapter": 23,
      "title": "Protection is more than a price forecast",
      "desc": "Governance and market integrity belong in the investment process.",
      "pages": [
        612,
        614
      ],
      "context": "Chapter XXIII recognises both unavoidable errors and practices the narrator regards as indefensible. Livingston notes improvements in exchange rules while arguing that abuses remain. The chapter broadens the reader’s attention from personal forecasting ability to the institutions surrounding investors.",
      "analysis": "Regulation cannot eliminate losses, but disclosure, custody, market-access controls, and enforcement affect the risks investors face. Distinguish ordinary investment uncertainty from misrepresentation or broken controls. A credible regulator is not a guarantee of a particular investment’s return.",
      "case": "knight",
      "connection": "The SEC’s Knight Capital findings illustrate a concrete control failure in a regulated market. The case helps distinguish the existence of rules from whether a firm’s procedures satisfy them in practice.",
      "example": "Two funds may hold similar assets while differing in valuation methods, liquidity terms, fees, and oversight. Comparing only past returns ignores these material differences.",
      "task": "Create a due-diligence checklist covering holdings, fees, withdrawal terms, independent oversight, and conflicts of interest.",
      "ideas": [
        "Rules reduce some risks but do not guarantee returns.",
        "Controls need implementation, not just documentation.",
        "Due diligence extends beyond price performance."
      ],
      "question": "What does regulatory oversight guarantee about an investment?",
      "options": [
        "That it cannot lose money.",
        "That its last reported return will repeat.",
        "No guaranteed return; it addresses specified conduct and obligations."
      ],
      "answer": 2,
      "scenario": {
        "question": "A regulated trading firm says its controls are documented. What follows from Knight’s case?",
        "options": [
          "Documentation eliminates all operating risk",
          "Regulation guarantees profits",
          "Ask whether controls are tested and effective in production"
        ],
        "answer": 2,
        "explanation": "Written policies and effective implementation are different. Oversight does not promise investment returns."
      }
    },
    {
      "id": "6-4",
      "module": 6,
      "chapter": 24,
      "title": "Look beyond today’s earnings",
      "desc": "An investment argument needs a future and an incentive check.",
      "pages": [
        638,
        640
      ],
      "context": "Chapter XXIV questions advice built only on present conditions and examines conflicts when brokers seek commissions while insiders want to sell. Livingston argues that prices anticipate future business conditions. His references to a particular forecasting horizon should not be treated as a universal market law.",
      "analysis": "A low multiple of current earnings can be misleading if those earnings are temporarily high or about to fall. Examine a range of future outcomes and the source of the recommendation. The book contributes questions about incentives and expectations; it does not supply a complete modern framework for diversified long-term investing.",
      "case": "buffett",
      "connection": "Buffett’s wager adds a modern check on the investor’s retained return: fees matter alongside forecasts and reputations. It does not establish that a particular index price is attractive today or that its next decade will repeat the last.",
      "example": "A hypothetical stock at $50 with earnings per share of $5 has a P/E of 10. If earnings fall to $2 with the price unchanged, that ratio becomes 25. A low trailing multiple was not a guarantee of cheap future earnings.",
      "task": "Write an investment thesis with a base case, an adverse case, total costs, and a reason the recommendation’s source might be biased.",
      "ideas": [
        "Current earnings may not be sustainable.",
        "Examine incentives behind recommendations.",
        "Compare future scenarios and returns after costs."
      ],
      "question": "Why might a low trailing P/E be misleading?",
      "options": [
        "Past earnings may be unusually high relative to future earnings.",
        "A low number always proves that a stock is cheap.",
        "Fees never matter when the P/E is low."
      ],
      "answer": 0,
      "scenario": {
        "question": "You apply Buffett’s wager to a new investment decision. What is a defensible takeaway?",
        "options": [
          "Compare costs and future scenarios without promising a repeat",
          "The next decade must produce the same winner",
          "Current valuation is irrelevant"
        ],
        "answer": 0,
        "explanation": "The wager supplies a historical comparison, not a forecast for every manager, market, or starting valuation."
      }
    }
  ],
  "cases": [
    {
      "id": "ltcm",
      "title": "LTCM: a funding emergency",
      "date": "September 1998",
      "facts": "Fourteen firms supplied $3.6 billion to prevent LTCM’s collapse. The Federal Reserve facilitated the arrangement without lending its own money.",
      "source": "Federal Reserve History",
      "url": "https://www.federalreservehistory.org/essays/ltcm-near-failure",
      "background": "LTCM sought gains from price differences between related securities. Small spreads were supported by extensive borrowing; at the end of 1997 its debt was about thirty times its capital.",
      "sequence": [
        "In August 1998, Russia devalued its currency and stopped debt payments, pushing investors towards safer, more liquid assets.",
        "Spreads that LTCM expected to narrow widened instead. The fund lost 44% in August and sought fresh capital.",
        "Concern about simultaneous liquidation brought creditors together. Fourteen firms supplied roughly $3.6 billion in September."
      ],
      "outcome": "The recapitalisation allowed an orderly reduction of positions. The Federal Reserve coordinated the arrangement without supplying its own funds; the original owners and investors still suffered substantial losses."
    },
    {
      "id": "snb",
      "title": "The Swiss franc policy break",
      "date": "15 January 2015",
      "facts": "The Swiss National Bank ended its CHF 1.20-per-euro floor, replacing a policy that market participants had relied upon.",
      "source": "Swiss National Bank",
      "url": "https://www.snb.ch/en/publications/communication/press-releases/2015/pre_20150115",
      "background": "The Swiss National Bank had maintained a minimum rate of CHF 1.20 per euro. That policy formed part of the environment in which traders and businesses made currency decisions.",
      "sequence": [
        "On 15 January 2015, the bank announced that it was discontinuing the minimum exchange rate.",
        "It also lowered the interest rate on sight deposits to −0.75%.",
        "In April, its chairman explained that euro weakness had required interventions of rapidly increasing size, making the floor unsustainable."
      ],
      "outcome": "The bank continued monitoring exchange-rate conditions after ending the floor. Removing one policy commitment did not mean abandoning monetary policy or promising a particular subsequent exchange rate.",
      "extraSources": [
        {
          "title": "SNB explanation, April 2015",
          "url": "https://www.snb.ch/en/publications/communication/speeches/2015/ref_20150424_tjn"
        }
      ]
    },
    {
      "id": "knight",
      "title": "Knight Capital: orders without control",
      "date": "1 August 2012",
      "facts": "A faulty deployment generated millions of erroneous orders in 45 minutes. Knight eventually lost more than $460 million.",
      "source": "SEC investigation",
      "url": "https://www.sec.gov/newsroom/press-releases/2013-222",
      "background": "Knight Capital was deploying software for a new exchange programme. A faulty older function remained in its order router, and the deployment activated that function for certain incoming orders.",
      "sequence": [
        "Before trading opened on 1 August 2012, internal error messages offered an opportunity to identify the problem, but were not acted upon.",
        "Within about 45 minutes, the router sent millions of orders while attempting to fulfil 212 customer orders.",
        "The unwanted trades accumulated positions worth billions of dollars."
      ],
      "outcome": "Knight lost more than $460 million. The SEC identified inadequate deployment, exposure and incident-response controls; Knight later agreed to a $12 million penalty without admitting or denying the findings."
    },
    {
      "id": "buffett",
      "title": "Buffett’s ten-year fund wager",
      "date": "2008–2017",
      "facts": "Buffett’s 2017 letter reports that the S&P 500 index fund beat each of five funds-of-funds over the wager.",
      "source": "Berkshire Hathaway, 2017 letter",
      "url": "https://www.berkshirehathaway.com/letters/2017ltr.pdf",
      "background": "Buffett and Protégé Partners compared an S&P 500 index fund with five funds-of-funds over ten years, from 2008 through 2017. The comparison included the returns investors retained after fees.",
      "sequence": [
        "All five funds-of-funds outperformed the index fund in the difficult first year, 2008.",
        "The comparison continued through the agreed decade rather than stopping after that initial result.",
        "Buffett’s final table reported a 125.8% gain for the index fund; none of the five funds-of-funds matched it."
      ],
      "outcome": "One comparison fund was liquidated in 2017, a fact noted in the table. The wager illustrates costs and evaluation periods, not a universal result for every manager or decade."
    },
    {
      "id": "flash",
      "title": "The Flash Crash: price and liquidity",
      "date": "6 May 2010",
      "facts": "E-mini futures and SPY fell about 5% within five minutes, then recovered over the next ten. Investigators examined order-book liquidity.",
      "source": "SEC staff analysis",
      "url": "https://www.sec.gov/newsroom/speeches-statements/spch101310geb-market-participants-may-6-flash-crash",
      "background": "On 6 May 2010, US equity and futures markets experienced a sharp, short-lived disruption. Investigators needed more than closing prices to reconstruct the episode.",
      "sequence": [
        "Around 2:40 p.m., E-mini S&P 500 futures and SPY fell roughly 5% in five minutes, then recovered over the next ten.",
        "During the recovery, some individual stocks and ETFs traded at extremely low prices before rebounding.",
        "Staff examined full order books and found that futures buying depth had fallen dramatically; equity liquidity problems followed."
      ],
      "outcome": "The price recovery did not erase the disruption. The investigation used trading records and liquidity data to distinguish the sequence of events from stories based only on a chart."
    },
    {
      "id": "gme",
      "title": "GameStop: investigate the popular story",
      "date": "January 2021",
      "facts": "SEC staff found short covering contributed during some intervals, but positive sentiment sustained GameStop’s weeks-long rise.",
      "source": "SEC staff report, pp. 25–26",
      "url": "https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf",
      "background": "GameStop’s January 2021 rise drew attention to retail participation, short selling and possible feedback loops. The SEC staff report examined transactions to test several competing explanations.",
      "sequence": [
        "Staff observed some intervals when heavily shorted accounts bought shares while the price rose.",
        "Those purchases were a small part of overall buying, and prices stayed elevated after their direct effect would have faded.",
        "Staff did not find evidence that a gamma squeeze explained GME’s January episode."
      ],
      "outcome": "The report attributed the sustained weeks-long rise to positive sentiment rather than short covering alone. This is a staff interpretation of a specific episode, not a complete account of every participant’s private motives."
    },
    {
      "id": "spiva",
      "title": "SPIVA: include the missing funds",
      "date": "Published scorecard methodology",
      "facts": "SPIVA evaluates the whole starting opportunity set, including funds that disappear, to address survivorship bias.",
      "source": "S&P Dow Jones Indices",
      "url": "https://www.spglobal.com/spdji/en/research-insights/spiva/about-spiva/",
      "background": "Fund-performance comparisons can quietly change when unsuccessful funds close or merge. SPIVA’s published methodology addresses that problem by retaining the starting opportunity set.",
      "sequence": [
        "The comparison identifies the eligible fund universe at the beginning of the evaluation period.",
        "It accounts for funds that disappear rather than comparing only those still present at the end.",
        "It also uses relevant benchmarks and reports results over specified horizons."
      ],
      "outcome": "Including disappeared funds reduces survivorship bias. It does not make every benchmark choice perfect; it makes the population being evaluated more explicit and harder to improve by hindsight."
    }
  ]
};
