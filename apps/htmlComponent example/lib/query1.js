function generateFinancialTable() {
  const TARGET_YEARS = [2025,2024,2023,2022,2021,2020,2019,2018,2017,2016];

  const META_ROWS = [
    { key:"fy",   label:"Financial Year", get:(y,s)=>y },
    { key:"sid",  label:"Statement ID",   get:(y,s)=>s?.statementId??"" },
    { key:"cur",  label:"Currency",       get:(y,s)=>s?.originalCurrency??"" },
  ];

  const DATA = {
    statements: {
      array: [
        { statementId: "A20251231", fiscalYear: 2025, originalCurrency: "USD" },
        { statementId: "B20241231", fiscalYear: 2024, originalCurrency: "USD" }
      ]
    }
  };

  function fmt(val){
    if(val===null||val===undefined||val==="") return "—";
    const n=Number(val);
    return Number.isFinite(n) ? n.toLocaleString("en-US") : String(val);
  }

  function indexByYear(statements){
    const map=new Map();
    (statements||[]).forEach(s=>map.set(Number(s.fiscalYear), s));
    return map;
  }

  const stmts = DATA.statements.array;
  const byYear = indexByYear(stmts);

  let css = `
    <style>
      table.financial {
        border-collapse: collapse;
        width: 100%;
        font-family: Segoe UI, Tahoma, Arial, sans-serif;
        font-size: 13px;
        margin: 10px 0;
      }
      table.financial th, table.financial td {
        border: 1px solid #ccc;
        padding: 6px 8px;
        text-align: left;
      }
      table.financial thead th {
        background: #4a4a4a;
        color: white;
        font-weight: 600;
        text-align: center;
      }
      table.financial tbody tr:nth-child(even) {
        background: #f9f9f9;
      }
      table.financial tbody tr:hover {
        background: #eef6ff;
      }
      table.financial td.num {
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
    </style>
  `;

  let html = `<table class="financial">`;

  html += `<thead><tr><th>Field</th>`;
  TARGET_YEARS.forEach(y=>{
    html += `<th>FE-${y}</th>`;
  });
  html += `</tr></thead><tbody>`;

  META_ROWS.forEach(row=>{
    html += `<tr><td>${row.label}</td>`;
    TARGET_YEARS.forEach(y=>{
      const s = byYear.get(y);
      const val = row.get(y,s);
      html += `<td class="num">${fmt(val)}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table>`;

  return css + html;
}

return generateFinancialTable();