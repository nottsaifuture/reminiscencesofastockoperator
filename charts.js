// Locally rendered charts. Historical case data and synthetic lab models are labelled separately; no live data feed.
function mountPriceChart(host) {
 const z=(en,hk)=>lang==='zh-HK'?hk:en;
 const paths=[[100,102,101,104,106,105,108,107,109,110],[100,102,98,75,55,65,85,95,105,110]];
 let chosen=0, point=9;
 host.innerHTML=`<p class="eyebrow">${z('ILLUSTRATIVE PRICE CHART','假設價格圖')}</p><h2>${z('Same finish. A very different journey.','終點相同，過程可以很不同。')}</h2><p>${z('Both invented price paths start at 100 and end at 110. Compare what happens in between; a closing return does not describe the whole risk.','兩條虛構價格路徑都由100開始、在110結束。比較中途的變化：最終回報不能描述全部風險。')}</p><div class="chart-tabs" role="group" aria-label="${z('Choose a hypothetical price path','選擇假設價格路徑')}"><button type="button" data-path="0">${z('Path A · smaller fluctuations','路徑A・較小波動')}</button><button type="button" data-path="1">${z('Path B · deeper decline','路徑B・較深跌幅')}</button></div><div id="price-chart"></div><label class="chart-slider" for="chart-point">${z('Explore an observation','選擇觀察點')} <output id="chart-position"></output></label><input id="chart-point" type="range" min="0" max="9" value="9" step="1"><p id="chart-reading" class="chart-reading" role="status"></p><p class="footnote">${z('Synthetic educational data, not actual stock prices, investment performance, or a forecast. Index starts at 100; these are not dollar values. No dividends, trading costs, taxes, inflation, or financing constraints are modelled. Maximum drawdown is the largest peak-to-later-trough decline up to the selected observation.','此為虛構教學數據，並非真實股價、投資績效或預測。指數由100開始，不是美元金額。模型不計股息、交易成本、稅項、通脹或融資限制。最大回撤是截至所選觀察點，由先前高位至其後低位的最大跌幅。')}</p><details class="chart-data"><summary>${z('View the data table','查看數據表')}</summary><table><caption>${z('The two hypothetical price paths','兩條假設價格路徑')}</caption><thead><tr><th scope="col">${z('Observation','觀察點')}</th><th scope="col">${z('Path A','路徑A')}</th><th scope="col">${z('Path B','路徑B')}</th></tr></thead><tbody>${paths[0].map((v,i)=>`<tr><th scope="row">${i+1}</th><td>${v}</td><td>${paths[1][i]}</td></tr>`).join('')}</tbody></table></details>`;
 function draw(){
  const values=paths[chosen],x=i=>60+i*640/9,y=v=>255-(v-50)*200/75;
  const coords=values.map((v,i)=>`${x(i)},${y(v)}`).join(' ');
  const price=values[point];let peak=values[0],dd=0;
  for(const v of values.slice(0,point+1)){peak=Math.max(peak,v);dd=Math.max(dd,(peak-v)/peak*100);}
  const label=z(`Hypothetical path ${chosen?'B':'A'}; selected observation ${point+1} has price index ${price}.`,`假設路徑${chosen?'B':'A'}；所選第${point+1}個觀察點的價格指數為${price}。`);
  host.querySelector('#price-chart').innerHTML=`<svg viewBox="0 0 760 315" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title>${[50,75,100,125].map(v=>`<line x1="60" x2="700" y1="${y(v)}" y2="${y(v)}" stroke="#d7dfd0"/><text x="48" y="${y(v)+4}" text-anchor="end">${v}</text>`).join('')}<text x="60" y="20">${z('Price index','價格指數')}</text><polyline points="${coords}" fill="none" stroke="${chosen?'#ad6d43':'#326857'}" stroke-width="3"/><line x1="${x(point)}" x2="${x(point)}" y1="45" y2="255" stroke="#7f9487" stroke-dasharray="4 4"/><circle cx="${x(point)}" cy="${y(price)}" r="6" fill="#284b43" stroke="#fffdf8" stroke-width="2"/>${values.map((_,i)=>`<text x="${x(i)}" y="280" text-anchor="middle">${i+1}</text>`).join('')}<text x="380" y="305" text-anchor="middle">${z('Observation (not a trading date)','觀察點（不是交易日期）')}</text></svg>`;
  host.querySelectorAll('[data-path]').forEach(b=>{b.setAttribute('aria-pressed',Number(b.dataset.path)===chosen);});
  host.querySelector('#chart-position').textContent=`${point+1} / 10`;
  const change=(price-100).toFixed(1),signed=price>=100?'+'+change:change;
  host.querySelector('#chart-reading').textContent=z(`Index ${price} · Change from start: ${signed}% · Maximum drawdown so far: ${dd.toFixed(1)}%.`,`指數${price}・較起點變動：${signed}%・截至此點最大回撤：${dd.toFixed(1)}%。`);
 }
 host.querySelectorAll('[data-path]').forEach(b=>b.onclick=()=>{chosen=Number(b.dataset.path);draw();});
 host.querySelector('#chart-point').oninput=e=>{point=Number(e.target.value);draw();};draw();
}

const GME_HISTORY = {
  "rows": [
    {
      "date": "2021-01-04",
      "adjusted": 4.3125,
      "original": 17.25
    },
    {
      "date": "2021-01-05",
      "adjusted": 4.3425,
      "original": 17.37
    },
    {
      "date": "2021-01-06",
      "adjusted": 4.59,
      "original": 18.36
    },
    {
      "date": "2021-01-07",
      "adjusted": 4.52,
      "original": 18.08
    },
    {
      "date": "2021-01-08",
      "adjusted": 4.4225,
      "original": 17.69
    },
    {
      "date": "2021-01-11",
      "adjusted": 4.985,
      "original": 19.94
    },
    {
      "date": "2021-01-12",
      "adjusted": 4.9875,
      "original": 19.95
    },
    {
      "date": "2021-01-13",
      "adjusted": 7.85,
      "original": 31.4
    },
    {
      "date": "2021-01-14",
      "adjusted": 9.9775,
      "original": 39.91
    },
    {
      "date": "2021-01-15",
      "adjusted": 8.875,
      "original": 35.5
    },
    {
      "date": "2021-01-19",
      "adjusted": 9.84,
      "original": 39.36
    },
    {
      "date": "2021-01-20",
      "adjusted": 9.78,
      "original": 39.12
    },
    {
      "date": "2021-01-21",
      "adjusted": 10.7575,
      "original": 43.03
    },
    {
      "date": "2021-01-22",
      "adjusted": 16.2525,
      "original": 65.01
    },
    {
      "date": "2021-01-25",
      "adjusted": 19.1975,
      "original": 76.79
    },
    {
      "date": "2021-01-26",
      "adjusted": 36.995,
      "original": 147.98
    },
    {
      "date": "2021-01-27",
      "adjusted": 86.8775,
      "original": 347.51
    },
    {
      "date": "2021-01-28",
      "adjusted": 48.4,
      "original": 193.6
    },
    {
      "date": "2021-01-29",
      "adjusted": 81.25,
      "original": 325.0
    },
    {
      "date": "2021-02-01",
      "adjusted": 56.25,
      "original": 225.0
    },
    {
      "date": "2021-02-02",
      "adjusted": 22.5,
      "original": 90.0
    },
    {
      "date": "2021-02-03",
      "adjusted": 23.1025,
      "original": 92.41
    },
    {
      "date": "2021-02-04",
      "adjusted": 13.375,
      "original": 53.5
    },
    {
      "date": "2021-02-05",
      "adjusted": 15.9425,
      "original": 63.77
    }
  ],
  "source": "https://github.com/shubh123a3/Stock-Market-Anomaly-Detection/blob/f9b010933630fc7b42efe6af87caa5c6750764bb/Anomalies%20Detection.ipynb",
  "retrieved": "2026-10-06",
  "provider": "Yahoo Finance via yfinance; archived notebook Close series",
  "transform": "Source values are split-adjusted. Original 2021 basis = adjusted \u00d7 4, rounded to cents. Not an independently verified exchange feed."
};

function mountHistoricalCaseChart(host, c) {
 if(c.id==='gme')return mountGameStopChart(host);
 const z=(en,hk)=>lang==='zh-HK'?hk:en;
 let rows,title,caption,max,unit;
 if(c.id==='ltcm'){
  rows=[{name:z('Before August','8月前'),value:100,note:z('Starting fund value is normalised to 100. This is an index, not dollars.','期初基金價值設為100，是指數，不是美元。')},{name:z('After August','8月後'),value:56,note:z('A reported 44% August 1998 loss leaves 56. A subsequent 78.6% gain would be needed to regain 100, assuming no other changes. That gain is arithmetic, not a forecast.','已報告的1998年8月虧損44%，令100剩下56。若沒有其他變化，需要其後升78.6%才回到100；這是算術，不是預測。')}];
  title=z('LTCM: what a 44% loss leaves behind','LTCM：虧損44%後剩下多少？');max=100;unit=z('Capital index','資本指數');
  caption=z('Normalised from the reported August 1998 fund-value loss: 100 × (1 − 0.44) = 56. Two endpoints only—not a stock-price series, intramonth path, or margin-call schedule.','按已報告的1998年8月基金價值跌幅標準化：100 ×（1 − 0.44）＝56。只有兩個端點，不是股價線、月內走勢或追繳保證金時間表。');
 }else if(c.id==='buffett'){
  rows=[['A',21.7],['B',42.3],['C',87.7],['D*',2.8],['E',27]].map(([name,value])=>({name:z('Fund '+name,'基金'+name),value,note:z(`Fund-of-funds ${name}: ${value.toFixed(1)}% reported cumulative gain. The letter does not publicly name the funds. ${name==='D*'?'Fund D was liquidated in 2017.':''}`,`基金中的基金${name}：已報告累積升幅${value.toFixed(1)}%。股東信沒有公開基金名稱。${name==='D*'?'基金D於2017年清算。':''}`)}));
  rows.push({name:z('Index fund','指數基金'),value:125.8,note:z('125.8% is the gain over the full wager, not an annual return. Starting at 100 would give 225.8 before personal taxes.','125.8%是整段賭約的累積升幅，不是每年回報。若起點100，未計個人稅項會成為225.8。')});
  title=z('Buffett’s wager: compare the full period','巴菲特賭局：比較完整期間');max=150;unit=z('Cumulative gain (%)','累積收益（%）');
  caption=z('Berkshire Hathaway 2017 shareholder letter, printed p. 11; wager period 2008–2017. *Fund D was liquidated in 2017. These are reported final cumulative results, not annual returns or a reconstruction of each investment’s path. This comparison does not predict future rankings.','巴郡2017年股東信，印刷第11頁；賭約期間2008至2017年。*基金D於2017年清算。這是已報告的最終累積結果，不是年回報，也不是各投資的完整路徑，不預測未來排名。');
 }else {host.remove();return;}
 host.innerHTML=`<p class="eyebrow">${z('CASE DATA · REPORTED FIGURES','案例數據・已報告數字')}</p><h3>${title}</h3><p>${z('Select a bar to unpack the number.','選擇一條柱，了解數字的意思。')}</p><div class="reported-bars" role="group" aria-label="${esc(title)}">${rows.map((r,i)=>`<button type="button" data-case-bar="${i}" aria-pressed="false"><span>${esc(r.name)}</span><span class="reported-track"><span style="width:${r.value/max*100}%"></span></span><strong>${c.id==='buffett'?r.value.toFixed(1)+'%':r.value}</strong></button>`).join('')}</div><p class="footnote">${unit} · 0–${max}</p><p class="reported-note" role="status">${z('The denominator and period matter as much as the headline number.','分母與期間，和表面的數字同樣重要。')}</p><p class="footnote">${caption}</p><a class="source-link" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${z('Read the source','閱讀來源')} ${icon}</a><details class="chart-data"><summary>${z('View the data table','查看數據表')}</summary><table><caption>${title}</caption><thead><tr><th scope="col">${z('Observation','觀察項目')}</th><th scope="col">${unit}</th></tr></thead><tbody>${rows.map(r=>`<tr><th scope="row">${esc(r.name)}</th><td>${r.value}</td></tr>`).join('')}</tbody></table></details>`;
 host.querySelectorAll('[data-case-bar]').forEach(b=>b.onclick=()=>{host.querySelectorAll('[data-case-bar]').forEach(x=>x.setAttribute('aria-pressed',x===b));host.querySelector('.reported-note').textContent=rows[Number(b.dataset.caseBar)].note;});
}
function mountGameStopChart(host) {
 const z=(en,hk)=>lang==='zh-HK'?hk:en, rows=GME_HISTORY.rows;
 let basis='original',point=rows.length-1;
 host.innerHTML=`<p class="eyebrow">${z('GME · HISTORICAL DAILY CLOSES','GME・歷史每日收市價')}</p><h3>${z('The surge and the first reversal','急升與第一輪回落')}</h3><p>${z('4 January–5 February 2021. Explore each trading session and distinguish a closing price from an intraday extreme.','2021年1月4日至2月5日。逐個交易日探索，分清收市價與盤中極端價格。')}</p><div class="chart-tabs" role="group" aria-label="${z('Price basis','價格口徑')}"><button data-price-basis="original">${z('2021 price basis','2021年價格口徑')}</button><button data-price-basis="adjusted">${z('Split-adjusted basis','拆股調整口徑')}</button></div><div class="gme-svg"></div><label class="chart-slider" for="gme-date">${z('Choose a trading session','選擇交易日')} <output class="gme-date-label"></output></label><input id="gme-date" type="range" min="0" max="${rows.length-1}" value="${point}" step="1"><div class="chart-milestones">${[['2021-01-04','Start','起點'],['2021-01-27','27 Jan close','1月27日收市'],['2021-01-28','28 Jan close','1月28日收市'],['2021-02-02','2 Feb close','2月2日收市']].map(([date,en,hk])=>`<button data-milestone="${date}">${z(en,hk)}</button>`).join('')}</div><p class="gme-reading" role="status"></p><p class="gme-milestone-note"></p><p class="footnote">${z('Historical daily closes, not live quotes or a forecast. Source: an archived Yahoo Finance / yfinance Close series in a public research notebook. The source stores split-adjusted values; the 2021 basis is calculated by multiplying by four and rounding to cents. Both bases show the same proportional move. They are not a total-return series. No intraday highs, volumes, or individual fills are inferred.','歷史每日收市價，並非即時報價或預測。來源為公開研究筆記內存檔的Yahoo Finance／yfinance收市價序列。來源儲存拆股調整數值；2021年口徑以乘四並四捨五入至美仙計算。兩者呈現相同的比例變動，並非總回報序列，也不推算盤中最高價、成交量或個人實際成交。')}</p><p class="footnote">${z('Accessed 6 October 2026. This is a dated secondary archive, not an independently verified exchange feed. Dates are trading-session labels; gaps include non-trading days.','資料查閱日期：2026年10月6日。這是具日期的二手存檔，不是經獨立核實的交易所數據源。日期代表交易日；空檔包括非交易日。')} <a href="${esc(GME_HISTORY.source)}" target="_blank" rel="noopener noreferrer">${z('Inspect the archived source','檢視存檔來源')} ${icon}</a></p><details class="chart-data"><summary>${z('View all 24 closing prices','查看全部24個收市價')}</summary><table><caption>${z('GME closing prices · USD per share','GME收市價・每股美元')}</caption><thead><tr><th scope="col">${z('Date','日期')}</th><th scope="col">${z('2021 basis','2021年口徑')}</th><th scope="col">${z('Split-adjusted','拆股調整')}</th></tr></thead><tbody>${rows.map(r=>`<tr><th scope="row">${r.date}</th><td>${r.original.toFixed(2)}</td><td>${r.adjusted.toFixed(4)}</td></tr>`).join('')}</tbody></table></details>`;
 const time=d=>Date.parse(d+'T00:00:00Z'),start=time(rows[0].date),end=time(rows.at(-1).date);
 function draw(){
  const max=basis==='original'?400:100,value=rows[point][basis],x=date=>62+(time(date)-start)/(end-start)*620,y=v=>262-v/max*220;
  const label=z(`GameStop historical daily closing prices in US dollars, ${basis==='original'?'2021':'split-adjusted'} basis. ${rows[point].date}: ${value.toFixed(basis==='original'?2:4)}.`,`GameStop歷史每日收市價，美元${basis==='original'?'2021年':'拆股調整'}口徑。${rows[point].date}：${value.toFixed(basis==='original'?2:4)}。`);
  host.querySelector('.gme-svg').innerHTML=`<svg viewBox="0 0 750 315" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title>${[0,1,2,3,4].map(i=>`<line x1="62" x2="682" y1="${y(max*i/4)}" y2="${y(max*i/4)}" stroke="#d8dfd1"/><text x="50" y="${y(max*i/4)+4}" text-anchor="end">${max*i/4}</text>`).join('')}<text x="62" y="20">${z('USD per share · close','每股美元・收市')}</text><polyline points="${rows.map(r=>`${x(r.date)},${y(r[basis])}`).join(' ')}" fill="none" stroke="#326857" stroke-width="2.5"/><line x1="${x(rows[point].date)}" x2="${x(rows[point].date)}" y1="35" y2="262" stroke="#ad774a" stroke-dasharray="4 4"/><circle cx="${x(rows[point].date)}" cy="${y(value)}" r="6" fill="#ad774a" stroke="#fff" stroke-width="2"/>${['2021-01-04','2021-01-15','2021-01-27','2021-02-05'].map(date=>`<text x="${x(date)}" y="287" text-anchor="middle">${date.slice(5)}</text>`).join('')}<text x="375" y="310" text-anchor="middle">${z('2021 · trading-session dates','2021年・交易日期')}</text></svg>`;
  host.querySelectorAll('[data-price-basis]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.priceBasis===basis));
  host.querySelectorAll('[data-milestone]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.milestone===rows[point].date));
  host.querySelector('.gme-date-label').textContent=rows[point].date;
  const change=(value/rows[0][basis]-1)*100;
  host.querySelector('.gme-reading').textContent=z(`${rows[point].date} · Close $${value.toFixed(basis==='original'?2:4)} · ${change>=0?'+':''}${change.toFixed(1)}% from the first displayed close.`,`${rows[point].date}・收市$${value.toFixed(basis==='original'?2:4)}・較圖中首個收市價${change>=0?'+':''}${change.toFixed(1)}%。`);
  host.querySelector('.gme-milestone-note').textContent=rows[point].date==='2021-01-27'?z('The highest daily close in this displayed interval. It is not the highest intraday transaction.','這是圖示期間最高的每日收市價，不是盤中最高成交。'):rows[point].date==='2021-01-28'?z('A sharp close-to-close decline followed the prior session’s surge. A closing-price chart still conceals the intraday range.','前一交易日急升後，收市至收市出現大跌。收市價圖仍然隱藏盤中波幅。'):z('The line records prices, not the identity or motives of buyers. Read the case analysis before attributing the whole move to one mechanism.','線條記錄價格，不是買家的身分或動機。把整段走勢歸因於單一機制前，請先閱讀案例分析。');
 }
 host.querySelectorAll('[data-price-basis]').forEach(b=>b.onclick=()=>{basis=b.dataset.priceBasis;draw();});
 host.querySelector('#gme-date').oninput=e=>{point=Number(e.target.value);draw();};
 host.querySelectorAll('[data-milestone]').forEach(b=>b.onclick=()=>{point=rows.findIndex(r=>r.date===b.dataset.milestone);host.querySelector('#gme-date').value=point;draw();});draw();
}
