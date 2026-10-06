# Case-chart data provenance

Charts are original local SVG/HTML renderings. Source charts, screenshots, and complete third-party datasets are not included. Historical observations, normalised calculations, and synthetic learning-lab paths are labelled separately. These notes document provenance, not legal clearance or exchange certification.

## GameStop daily closes

- Displayed interval: 24 trading-session closes, 4 January–5 February 2021.
- Accessed: 6 October 2026.
- Provider identified in source: Yahoo Finance, retrieved using `yfinance`.
- Archived source: `shubh123a3/Stock-Market-Anomaly-Detection`, commit `f9b010933630fc7b42efe6af87caa5c6750764bb`, notebook `Anomalies Detection.ipynb`, stored Plotly trace named `Close`.
- Permanent source: https://github.com/shubh123a3/Stock-Market-Anomaly-Detection/blob/f9b010933630fc7b42efe6af87caa5c6750764bb/Anomalies%20Detection.ipynb
- The notebook's input code specifies ticker GME and uses `yf.download`. Only the 24 numerical close observations needed for the case illustration were transcribed; no notebook code, prose, model outputs, or chart image was copied.
- Source values are split-adjusted. Values were rounded to four decimal places. The alternative 2021 price basis is reconstructed as source value × 4, rounded to cents. The UI explicitly describes this calculation.
- Cross-check: the 29 January adjusted close of 81.25 matches the January 2021 month-end observation in the separate `VladBrilliant/Stock-Forecast-TSLA-GME` archive (`data/GME_monthly_history.xls`, CSV-formatted). Both archives ultimately use Yahoo data; this is a consistency check, not independent exchange verification.
- Selected checks: 4 January = 4.3125 adjusted / 17.25 reconstructed; 27 January = 86.8775 / 347.51; 28 January = 48.4000 / 193.60; 29 January = 81.2500 / 325.00.
- Price dates are session labels, not timestamps. The x-axis uses calendar-date spacing. No missing sessions or intraday data are interpolated into the dataset; line segments simply join the closing observations.
- The chart is not live, not a total-return series, and does not show intraday highs, trading volumes, or actual user fills. The public source note discloses that this is a secondary archive rather than an independently verified exchange feed. Direct Yahoo and SEC retrieval was blocked by the environment proxy.

## LTCM

- Source: Federal Reserve History, “Near Failure of Long-Term Capital Management”.
- https://www.federalreservehistory.org/essays/ltcm-near-failure
- Reported August 1998 loss: 44%.
- Chart calculation: start index 100; end index 100 × (1 − 0.44) = 56.
- Recovery arithmetic in the selectable explanation: (100 / 56 − 1) × 100 ≈ 78.6%. This is a calculation, not a reported subsequent return or forecast.
- Two endpoints only; no invented price path or margin-call timeline.

## Buffett wager

- Source: Berkshire Hathaway 2017 shareholder letter, printed page 11.
- https://www.berkshirehathaway.com/letters/2017ltr.pdf
- Period: 2008–2017. Reported cumulative gains: A 21.7%, B 42.3%, C 87.7%, D 2.8%, E 27.0%, S&P 500 index fund 125.8%.
- Fund D was liquidated in 2017; the qualification accompanies the chart and data table.
- These are cumulative final results, not annualised returns or continuous price histories. The identities of the five funds are not inferred.
- These figures were already documented in the owner's reference learning library. Source links are retained; direct retrieval of the external reports was blocked during this task.

## Other cases and the learning lab

The Swiss franc, Knight Capital, Flash Crash, and SPIVA cases have extended narratives and source links, but no invented historical stock-price lines. The learning lab's two price paths remain explicitly synthetic. Adding a new chart requires a documented dataset, units, adjustment basis, date coverage, limitations, and translated labels.
