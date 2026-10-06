// Original, explicitly synthetic paths. No market-data feed or copied chart.
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
