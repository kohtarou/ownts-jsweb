// index.js
export function addYearElement(yearsContainer, year) {
  const yearDiv = document.createElement('div');
  yearDiv.className = 'year';
  yearDiv.innerHTML = `
      <h2>${year}</h2>
      <div class="months">
          <!-- 月のコンテナ -->
      </div>
      <button onclick="addMonth(this, ${year})">月を追加</button>
  `;
  yearsContainer.appendChild(yearDiv);
}

export function addMonth(button, year) {
  const monthContainer = button.previousElementSibling;
  const newMonth = prompt("追加する月を入力してください (1-12):");
  if (newMonth && newMonth >= 1 && newMonth <= 12) {
      const monthDiv = document.createElement('div');
      monthDiv.className = 'month';
      monthDiv.innerHTML = `
          <h3>${newMonth}月</h3>
          <div class="days">
              <!-- 日のコンテナ -->
          </div>
          <button onclick="addDay(this, ${year}, ${newMonth})">日を追加</button>
      `;
      monthContainer.appendChild(monthDiv);
  }
}

export function addDay(button, year, month) {
  const dayContainer = button.previousElementSibling;
  const newDay = prompt("追加する日を入力してください:");
  if (newDay) {
      const dayDiv = document.createElement('div');
      dayDiv.className = 'day';
      dayDiv.innerHTML = `
          <p>${newDay}日: <input type="number" placeholder="ダイヤ数" /></p>
      `;
      dayContainer.appendChild(dayDiv);
  }
}