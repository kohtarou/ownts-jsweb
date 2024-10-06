// index.js
export function addYearElement(yearsContainer, year) {
  const yearDiv = document.createElement('div');
  yearDiv.className = 'year';
  yearDiv.innerHTML = `
      <h2>${year}</h2>
      <div class="months">
          <!-- 月のコンテナ -->
      </div>
      <select class="month-select">
          ${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${i + 1}月</option>`).join('')}
      </select>
      <button class="addMonthButton">月を追加</button>
  `;
  yearsContainer.appendChild(yearDiv);

  // 月を追加するボタンにイベントリスナーを追加
  yearDiv.querySelector('.addMonthButton').addEventListener('click', () => {
    addMonth(yearDiv.querySelector('.month-select'), year);
  });
}

export function addMonth(monthSelect, year) {
  const monthContainer = monthSelect.nextElementSibling;
  const newMonth = monthSelect.value;
  const existingMonths = Array.from(monthContainer.children);
  const monthDiv = document.createElement('div');
  monthDiv.className = 'month';
  monthDiv.innerHTML = `
      <h3>${newMonth}月</h3>
      <div class="days">
          <!-- 日のコンテナ -->
      </div>
  `;
  monthContainer.appendChild(monthDiv);

  // 月を昇順にソート
  const sortedMonths = [...existingMonths, monthDiv].sort((a, b) => {
      return parseInt(a.querySelector('h3').textContent) - parseInt(b.querySelector('h3').textContent);
  });
  monthContainer.innerHTML = '';
  sortedMonths.forEach(month => monthContainer.appendChild(month));

  // 日を自動で追加
  addDays(monthDiv.querySelector('.days'), year, newMonth);
}

export function addDays(dayContainer, year, month) {
  const daysInMonth = new Date(year, month, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement('div');
      dayDiv.className = 'day';
      dayDiv.innerHTML = `
          <p>${day}日: <input type="number" placeholder="ダイヤ数" /></p>
      `;
      dayContainer.appendChild(dayDiv);
  }
}