// index.js
export function addYearElement(yearsContainer, year) {
  // 既に同じ年が存在するか確認
  if (document.querySelector(`.year[data-year="${year}"]`)) {
    alert(`${year}年は既に追加されています。`);
    return;
  }

  const yearDiv = document.createElement('div');
  yearDiv.className = 'year';
  yearDiv.setAttribute('data-year', year);
  yearDiv.innerHTML = `
      <h2>${year}</h2>
      <div class="months">
          <!-- 月のコンテナ -->
      </div>
      <button class="addMonthButton">月を追加</button>
  `;
  yearsContainer.appendChild(yearDiv);

  // 月を追加するボタンにイベントリスナーを追加
  yearDiv.querySelector('.addMonthButton').addEventListener('click', () => {
    const monthSelect = document.createElement('select');
    monthSelect.className = 'month-select';
    monthSelect.innerHTML = Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${i + 1}月</option>`).join('');
    const addButton = document.createElement('button');
    addButton.textContent = '追加';
    addButton.addEventListener('click', () => {
      addMonth(monthSelect, year);
      monthSelect.remove();
      addButton.remove();
    });
    yearDiv.appendChild(monthSelect);
    yearDiv.appendChild(addButton);
  });
}

export function addMonth(monthSelect, year) {
  const monthContainer = monthSelect.previousElementSibling;
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