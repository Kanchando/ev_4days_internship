/**
 * East Ventures 4日間インターンシップ - Pop & Mobile-First SPA
 */

(function () {
  'use strict';

  const DATA = window.INTERN_DATA;
  if (!DATA) {
    console.error('INTERN_DATA is not loaded.');
    return;
  }

  const STORAGE_KEY_CHECKLIST = 'ev_intern_2026_dec_checklist_v2';

  const app = document.getElementById('app');
  const topbarTitle = document.getElementById('topbar-title');
  const tabBtns = document.querySelectorAll('.tab-btn');

  // 横断検索モーダル要素
  const searchModalBackdrop = document.getElementById('search-modal-backdrop');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('global-search-results');
  const openSearchBtn = document.getElementById('open-global-search-btn');
  const closeSearchBtn = document.getElementById('search-modal-close');
  const searchQuickTags = document.getElementById('search-quick-tags');

  let currentTab = 'agenda';
  let dayFilter = 'all';
  let docDayFilter = 'all';

  // ルーティング
  function route() {
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    const validTabs = ['agenda', 'workshops', 'visits', 'people'];
    currentTab = validTabs.includes(hash) ? hash : 'agenda';

    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === currentTab);
    });

    window.scrollTo({ top: 0, behavior: 'instant' });

    switch (currentTab) {
      case 'agenda':
        renderAgenda();
        break;
      case 'workshops':
        renderWorkshops();
        break;
      case 'visits':
        renderVisits();
        break;
      case 'people':
        renderPeople();
        break;
    }
  }

  window.addEventListener('hashchange', route);

  // =========================================================================
  // タブ①：全日程レジュメ
  // =========================================================================
  function renderAgenda() {
    topbarTitle.textContent = '全日程レジュメ';

    const visibleDays = dayFilter === 'all'
      ? DATA.schedule
      : DATA.schedule.filter(d => String(d.day) === String(dayFilter));

    let html = `
      <!-- 概要ヒーローカード（コンパクト版） -->
      <div class="study-hero" style="padding: 16px 18px; margin-bottom: 16px;">
        <div class="study-hero-meta" style="margin-bottom: 6px;">
          <span class="study-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            全4日間｜12/8(火)・10(木)・15(火)・17(木)
          </span>
        </div>
        <h1 style="font-family: var(--serif); font-size: 19px; font-weight: 800; color: var(--ink); margin-bottom: 0; line-height: 1.35;">
          East Ventures 4日間インターンシップ
        </h1>
      </div>

      <!-- 4日間のプログラム（「：」以下を改行＆薄めカラー表示） -->
      <section class="puzzles-section" style="margin-bottom: 20px;">
        <div class="section-head" style="margin-bottom: 8px;">
          <h2 class="section-title" style="font-size: 17px;">4日間のプログラム</h2>
        </div>
        <div class="puzzles-grid" style="gap: 8px;">
          ${DATA.schedule.map(d => {
            const parts = d.title.split('：');
            const mainTitle = parts[0] || d.title;
            const subTitle = parts.slice(1).join('：');
            return `
              <div class="puzzle-visual-card" data-jump-day="${d.day}" style="padding: 12px 14px; align-items: center;">
                <div class="puzzle-icon-wrap day${d.day}" style="width: 42px; height: 42px; border-radius: 12px;">
                  <span style="font-size: 9px; opacity: 0.85;">DAY</span>
                  <span style="font-size: 15px;">${d.day}</span>
                </div>
                <div class="puzzle-content">
                  <div class="puzzle-card-head" style="margin-bottom: 0; align-items: center;">
                    <div class="puzzle-title" style="font-size: 13.5px; font-weight: 800; color: var(--ink);">
                      ${escapeHtml(d.date)}｜${escapeHtml(mainTitle)}
                    </div>
                    <span class="puzzle-badge">${escapeHtml(d.hours)}</span>
                  </div>
                  ${subTitle ? `
                    <div style="font-size: 12px; font-weight: 600; color: var(--muted); margin-top: 3px; line-height: 1.4;">
                      ${escapeHtml(subTitle)}
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- 日程絞り込みピル -->
      <div class="filter-pills-bar">
        <button type="button" class="filter-pill-btn ${dayFilter === 'all' ? 'active' : ''}" data-day-filter="all">全4日間を表示</button>
        ${DATA.schedule.map(d => `
          <button type="button" class="filter-pill-btn ${String(dayFilter) === String(d.day) ? 'active' : ''}" data-day-filter="${d.day}">
            ${escapeHtml(d.day_code)}｜${escapeHtml(d.date.replace(/（.*）/, ''))}
          </button>
        `).join('')}
      </div>

      <!-- 各Dayのタイムテーブルセクションカード -->
      ${visibleDays.map(day => {
        const dParts = day.title.split('：');
        const dMain = dParts[0] || day.title;
        const dSub = dParts.slice(1).join('：');
        return `
          <article class="study-section-card" id="day-card-${day.day}">
            <div class="study-step-header">
              <span class="study-step-tag">${escapeHtml(day.day_code)}｜${escapeHtml(day.date)}</span>
              <span class="study-step-time">⏰ ${escapeHtml(day.hours)}</span>
            </div>

            <h2 style="font-family: var(--serif); font-size: 17px; font-weight: 800; color: var(--ink); margin-bottom: 4px; line-height: 1.4;">
              ${escapeHtml(dMain)}
              ${dSub ? `<span style="display: block; font-size: 13px; font-weight: 600; color: var(--muted); margin-top: 2px;">${escapeHtml(dSub)}</span>` : ''}
            </h2>
            <div style="font-size: 12px; font-weight: 700; color: var(--ev-cyan); margin-bottom: 10px;">
              📍 ${escapeHtml(day.location)}
            </div>

            <!-- タイムライン -->
            <div class="timeline">
              ${day.timeline.map((slot) => {
                const linkedDoc = slot.doc_id ? DATA.workshops.find(w => w.id === slot.doc_id) : null;
                const directUrl = linkedDoc ? (linkedDoc.file_url || linkedDoc.embed_url || '') : '';
                return `
                  <div class="timeline-item ${slot.highlight ? 'featured' : ''}">
                    <div class="timeline-node"></div>
                    <div class="detail-block" style="${slot.doc_id ? 'cursor: pointer;' : 'cursor: default;'}" ${slot.doc_id ? `data-goto-doc="${escapeHtml(slot.doc_id)}"` : ''}>
                      <div class="detail-block-meta">
                        <span class="detail-block-time">${escapeHtml(slot.time)}</span>
                        ${slot.tag ? `<span class="detail-block-tag">${escapeHtml(slot.tag)}</span>` : ''}
                      </div>
                      <div class="detail-block-title">${escapeHtml(slot.title)}</div>
                      ${slot.details && slot.details.length > 0 ? `
                        <ul class="detail-block-summary-list" style="margin-bottom: 0;">
                          ${slot.details.map(det => `<li>${escapeHtml(det)}</li>`).join('')}
                        </ul>
                      ` : ''}
                      ${slot.doc_id ? `
                        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 8px;">
                          <button type="button" data-goto-doc="${escapeHtml(slot.doc_id)}"
                                  style="display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 800; color: var(--ev-blue); background: #FFFFFF; border: 1px solid rgba(0, 149, 217, 0.35); padding: 4px 11px; border-radius: 999px; box-shadow: 0 2px 6px rgba(11, 78, 162, 0.06);">
                            📄 資料を見る →
                          </button>
                          ${directUrl ? `
                            <a href="${escapeHtml(directUrl)}" target="_blank" rel="noopener noreferrer"
                               onclick="event.stopPropagation();"
                               style="display: inline-flex; align-items: center; gap: 4px; font-size: 11.5px; font-weight: 700; color: var(--ev-cyan); background: rgba(0, 149, 217, 0.08); padding: 4px 10px; border-radius: 999px;">
                              別タブで開く ↗
                            </a>
                          ` : ''}
                        </div>
                      ` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </article>
        `;
      }).join('')}
    `;

    app.innerHTML = html;

    // 4日間カードタップでスクロール
    app.querySelectorAll('[data-jump-day]').forEach(card => {
      card.addEventListener('click', () => {
        const dNum = card.getAttribute('data-jump-day');
        if (dayFilter !== 'all' && String(dayFilter) !== String(dNum)) {
          dayFilter = 'all';
          renderAgenda();
        }
        setTimeout(() => {
          const el = document.getElementById(`day-card-${dNum}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('target-pulse-highlight');
            setTimeout(() => el.classList.remove('target-pulse-highlight'), 2200);
          }
        }, 60);
      });
    });

    // 座学コマから「資料」タブの該当資料へジャンプ
    app.querySelectorAll('[data-goto-doc]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const docId = el.getAttribute('data-goto-doc');
        docDayFilter = 'all';
        window.location.hash = '#/workshops';
        setTimeout(() => {
          const target = document.getElementById(docId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            target.classList.add('target-pulse-highlight');
            setTimeout(() => target.classList.remove('target-pulse-highlight'), 2200);
          }
        }, 80);
      });
    });

    // 日程フィルターピル
    app.querySelectorAll('[data-day-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        dayFilter = btn.getAttribute('data-day-filter');
        renderAgenda();
      });
    });
  }

  // =========================================================================
  // タブ②：資料（各日の座学資料ビューア）
  // =========================================================================
  function renderWorkshops() {
    topbarTitle.textContent = '資料';

    const visibleDocs = docDayFilter === 'all'
      ? DATA.workshops
      : DATA.workshops.filter(w => String(w.day) === String(docDayFilter));

    let html = `
      <div class="study-hero" style="padding: 16px 18px; margin-bottom: 16px;">
        <div class="study-hero-meta" style="margin-bottom: 6px;">
          <span class="study-badge">DAY 1〜DAY 4 座学・レクチャー資料</span>
        </div>
        <h1 style="font-family: var(--serif); font-size: 18.5px; font-weight: 800; color: var(--ink); margin-bottom: 0;">
          各日の座学資料ビューア
        </h1>
      </div>

      <!-- 日別資料フィルターピル -->
      <div class="filter-pills-bar">
        <button type="button" class="filter-pill-btn ${docDayFilter === 'all' ? 'active' : ''}" data-doc-day-filter="all">すべて表示（${DATA.workshops.length}）</button>
        ${[1, 2, 3, 4].filter(dNum => DATA.workshops.some(w => w.day === dNum)).map(dNum => {
          const cnt = DATA.workshops.filter(w => w.day === dNum).length;
          return `
            <button type="button" class="filter-pill-btn ${String(docDayFilter) === String(dNum) ? 'active' : ''}" data-doc-day-filter="${dNum}">
              DAY ${dNum}（${cnt}）
            </button>
          `;
        }).join('')}
      </div>

      <!-- 各座学資料カード -->
      ${visibleDocs.map(ws => {
        const openUrl = ws.file_url || ws.embed_url || '';
        return `
          <article class="study-section-card" id="${ws.id}">
            <div class="study-step-header">
              <span class="study-step-tag">${escapeHtml(ws.category)}</span>
              <span class="study-step-time">📅 ${escapeHtml(ws.day_label)}</span>
            </div>
            <h2 style="font-family: var(--serif); font-size: 16.5px; font-weight: 800; color: var(--ink); margin-bottom: 8px; line-height: 1.4;">
              ${escapeHtml(ws.title)}
            </h2>

            ${ws.topics && ws.topics.length > 0 ? `
              <ul class="detail-block-summary-list" style="margin: 0 0 12px;">
                ${ws.topics.map(tp => `<li>${escapeHtml(tp)}</li>`).join('')}
              </ul>
            ` : ''}

            <!-- スライド・資料ビューア枠 -->
            ${ws.embed_url ? `
              <div style="margin: 10px 0; border-radius: 14px; overflow: hidden; border: 1.5px solid var(--line); aspect-ratio: 16 / 9; background: var(--soft);">
                <iframe src="${escapeHtml(ws.embed_url)}" style="width: 100%; height: 100%; border: 0;" allowfullscreen loading="lazy"></iframe>
              </div>
            ` : ws.slides && ws.slides.length > 0 ? `
              <div style="display: flex; flex-direction: column; gap: 10px; margin: 10px 0;">
                ${ws.slides.map((sl, sIdx) => `
                  <div class="zoomable-img-wrap" data-zoom-src="${escapeHtml(sl)}" data-zoom-alt="${escapeHtml(ws.title)} スライド${sIdx + 1}">
                    <img src="${escapeHtml(sl)}" alt="${escapeHtml(ws.title)} スライド${sIdx + 1}" style="width: 100%; height: auto; display: block;">
                    <span class="zoomable-img-badge">🔍 クリックして拡大</span>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div style="margin: 10px 0; border-radius: 14px; border: 1.5px dashed rgba(0, 149, 217, 0.35); background: linear-gradient(135deg, #F5FAFF 0%, #EDF6FE 100%); padding: 20px 14px; text-align: center;">
                <div style="font-size: 13px; font-weight: 800; color: var(--ev-blue); margin-bottom: 4px;">
                  📊 座学スライド・資料ビューア
                </div>
                <div style="font-size: 11.5px; color: var(--muted);">
                  資料ファイル・スライドを追加すると、この枠内でそのまま閲覧＆別タブで開けます
                </div>
              </div>
            `}

            <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; margin-top: 10px;">
              <button type="button" data-back-agenda-day="${ws.day}"
                      style="display: inline-flex; align-items: center; gap: 4px; font-size: 11.5px; font-weight: 700; color: var(--muted); background: var(--soft); padding: 6px 12px; border-radius: 999px;">
                ← DAY ${ws.day} の日程へ戻る
              </button>
              ${openUrl ? `
                <a href="${escapeHtml(openUrl)}" target="_blank" rel="noopener noreferrer"
                   style="display: inline-flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 800; color: #FFFFFF; background: var(--ev-grad); padding: 6px 14px; border-radius: 999px; box-shadow: 0 3px 10px rgba(0, 149, 217, 0.25);">
                  資料を別タブで開く ↗
                </a>
              ` : ''}
            </div>
          </article>
        `;
      }).join('')}
    `;

    app.innerHTML = html;

    // 日別資料フィルターピル
    app.querySelectorAll('[data-doc-day-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        docDayFilter = btn.getAttribute('data-doc-day-filter');
        renderWorkshops();
      });
    });

    // 日程へ戻るボタン
    app.querySelectorAll('[data-back-agenda-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dNum = btn.getAttribute('data-back-agenda-day');
        dayFilter = 'all';
        window.location.hash = '#/agenda';
        setTimeout(() => {
          const el = document.getElementById(`day-card-${dNum}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('target-pulse-highlight');
            setTimeout(() => el.classList.remove('target-pulse-highlight'), 2200);
          }
        }, 80);
      });
    });

    // スライド画像クリックでライトボックス拡大
    app.querySelectorAll('[data-zoom-src]').forEach(wrap => {
      wrap.addEventListener('click', () => {
        openLightbox(wrap.getAttribute('data-zoom-src'), wrap.getAttribute('data-zoom-alt'));
      });
    });
  }

  // =========================================================================
  // タブ③：訪問先・イベント
  // =========================================================================
  function renderVisits() {
    topbarTitle.textContent = '訪問先・イベント';

    let html = `
      <div class="study-hero" style="padding: 16px 18px; margin-bottom: 16px;">
        <div class="study-hero-meta" style="margin-bottom: 6px;">
          <span class="study-badge">DAY 4｜12月17日（木）開催</span>
          <span class="study-badge amber">イベント ＋ 投資先2社訪問</span>
        </div>
        <h1 style="font-family: var(--serif); font-size: 18.5px; font-weight: 800; color: var(--ink); margin-bottom: 2px;">
          訪問先・イベント一覧
        </h1>
      </div>

      <!-- 各訪問先・イベントカード -->
      ${DATA.visits.map(v => {
        const extraClass = v.id === 'visit-soshiso' ? 'soshiso' : '';
        return `
          <article class="visit-card ${extraClass}" id="${v.id}" style="cursor: default;">
            <div class="study-step-header">
              <span class="study-step-tag">${escapeHtml(v.type)}</span>
              <span class="study-step-time">📅 ${escapeHtml(v.day_label)}</span>
            </div>
            <h2 style="font-family: var(--serif); font-size: 17px; font-weight: 800; color: var(--ink); margin-bottom: 4px;">
              ${escapeHtml(v.name)}
            </h2>
            <div style="font-size: 12px; font-weight: 700; color: var(--ev-cyan); margin-bottom: 10px;">
              📍 ${escapeHtml(v.location)}
            </div>

            ${v.image_url ? `
              <div class="zoomable-img-wrap" data-zoom-src="${escapeHtml(v.image_url)}" data-zoom-alt="${escapeHtml(v.name)}">
                <img src="${escapeHtml(v.image_url)}" alt="${escapeHtml(v.name)}" style="width: 100%; height: auto; display: block;">
                <span class="zoomable-img-badge">🔍 クリックして拡大</span>
              </div>
            ` : ''}

            ${v.company_profile && v.company_profile.length > 0 ? `
              <div style="margin: 10px 0; border-radius: 12px; border: 1px solid var(--line); overflow: hidden; background: #FFFFFF;">
                <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
                  <tbody>
                    ${v.company_profile.map((row, rIdx) => `
                      <tr style="${rIdx < v.company_profile.length - 1 ? 'border-bottom: 1px solid var(--soft);' : ''}">
                        <th style="width: 88px; padding: 8px 11px; background: var(--soft); color: var(--ev-blue); font-weight: 800; text-align: left; vertical-align: top; white-space: nowrap;">
                          ${escapeHtml(row.label)}
                        </th>
                        <td style="padding: 8px 11px; color: var(--ink); font-weight: 600; line-height: 1.45;">
                          ${escapeHtml(row.value)}
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}

            ${v.business_summary && v.business_summary.length > 0 ? `
              <div class="summary-bullets-card" style="margin: 10px 0;">
                <div class="summary-bullets-head">${escapeHtml(v.summary_head || '事業・プロダクト概要まとめ')}</div>
                <ul class="summary-bullets-list">
                  ${v.business_summary.map(bs => `<li>${escapeHtml(bs)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            ${v.embed_url ? `
              <div style="margin: 10px 0; border-radius: 14px; overflow: hidden; border: 1.5px solid var(--line); aspect-ratio: 16 / 9; background: var(--soft);">
                <iframe src="${escapeHtml(v.embed_url)}" style="width: 100%; height: 100%; border: 0;" allowfullscreen loading="lazy"></iframe>
              </div>
            ` : ''}

            ${v.materials && v.materials.length > 0 ? `
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
                ${v.materials.map(mat => `
                  <a href="${escapeHtml(mat.url || '#')}" ${mat.url && mat.url !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''}
                     style="display: flex; align-items: center; justify-content: space-between; gap: 10px; background: var(--soft); border: 1px solid var(--line); border-radius: 12px; padding: 11px 14px; text-decoration: none; transition: all 0.15s ease;">
                    <div style="min-width: 0; flex: 1;">
                      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
                        <span style="font-size: 10px; font-weight: 800; padding: 1px 7px; border-radius: 999px; background: #FFFFFF; color: var(--ev-blue); border: 1px solid var(--line);">
                          ${escapeHtml(mat.badge || 'LINK')}
                        </span>
                        <span style="font-family: var(--serif); font-size: 13.5px; font-weight: 800; color: var(--ink);">
                          ${escapeHtml(mat.title)}
                        </span>
                      </div>
                      ${mat.description ? `<div style="font-size: 11.5px; color: var(--muted);">${escapeHtml(mat.description)}</div>` : ''}
                    </div>
                    <span style="font-size: 12px; font-weight: 800; color: var(--ev-cyan); flex-shrink: 0;">開く ↗</span>
                  </a>
                `).join('')}
              </div>
            ` : ''}
          </article>
        `;
      }).join('')}
    `;

    app.innerHTML = html;

    // 画像クリックでライトボックス拡大
    app.querySelectorAll('[data-zoom-src]').forEach(wrap => {
      wrap.addEventListener('click', () => {
        openLightbox(wrap.getAttribute('data-zoom-src'), wrap.getAttribute('data-zoom-alt'));
      });
    });
  }

  // =========================================================================
  // タブ④：EVメンバー（https://eastventures.jp/team 準拠）
  // =========================================================================
  function renderPeople() {
    topbarTitle.textContent = 'EVメンバー';

    let html = `
      <div class="study-hero" style="padding: 16px 18px; margin-bottom: 16px;">
        <div class="study-hero-meta" style="margin-bottom: 8px; justify-content: space-between; align-items: center;">
          <span class="study-badge">East Ventures Team</span>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <a href="https://eastventures.jp/team" target="_blank" rel="noopener noreferrer" class="study-badge amber" style="text-decoration: none;">
              公式サイト (eastventures.jp/team) ↗
            </a>
            <a href="https://x.com/EastVentures_JP" target="_blank" rel="noopener noreferrer" class="study-badge" style="text-decoration: none;">
              𝕏 @EastVentures_JP ↗
            </a>
          </div>
        </div>
        <h1 style="font-family: var(--serif); font-size: 18.5px; font-weight: 800; color: var(--ink); margin-bottom: 2px;">
          EVメンバー
        </h1>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${DATA.key_people.map((p, idx) => `
          <div class="study-section-card" id="person-${idx}" style="margin-bottom: 0; padding: 14px 16px;">
            <div style="display: flex; gap: 13px; align-items: center; justify-content: space-between;">
              <div style="display: flex; gap: 12px; align-items: center; min-width: 0; flex: 1;">
                <div class="speaker-avatar-circle" style="width: 42px; height: 42px; font-size: 15px;">
                  ${escapeHtml(p.name.charAt(0))}
                </div>
                <div style="min-width: 0; flex: 1;">
                  <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <h3 style="font-family: var(--serif); font-size: 16px; font-weight: 800; color: var(--ink); margin: 0;">
                      ${escapeHtml(p.name)}
                    </h3>
                    ${p.x_url ? `
                      <a href="${escapeHtml(p.x_url)}" target="_blank" rel="noopener noreferrer"
                         style="display: inline-flex; align-items: center; gap: 4px; padding: 2px 9px; border-radius: 999px; background: var(--soft); border: 1px solid var(--line); font-size: 11.5px; font-weight: 700; color: var(--ev-blue); transition: all 0.15s ease;"
                         aria-label="${escapeHtml(p.name)} X (Twitter)">
                        <span style="font-size: 12px; color: var(--ink);">𝕏</span>
                        <span>${escapeHtml(p.x_handle)}</span>
                      </a>
                    ` : ''}
                  </div>
                  ${p.roles && p.roles.length > 0 ? `
                    <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                      ${p.roles.map(r => `
                        <span style="font-size: 11.5px; font-weight: 700; color: var(--ev-blue); background: rgba(0, 149, 217, 0.10); padding: 2px 10px; border-radius: 999px;">
                          ${escapeHtml(r)}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>
              ${p.x_url ? `
                <a href="${escapeHtml(p.x_url)}" target="_blank" rel="noopener noreferrer"
                   style="width: 34px; height: 34px; border-radius: 50%; background: var(--soft); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; color: var(--ink); font-size: 14px; font-weight: 800; flex-shrink: 0;"
                   title="${escapeHtml(p.x_url)}">
                  𝕏
                </a>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    app.innerHTML = html;
  }

  // =========================================================================
  // 全文・自然文横断検索モーダル (⌘K)
  // =========================================================================
  const particles = ['について', 'にとって', 'としての', 'に関する', 'への', 'から', 'より', 'など', 'とは', 'って', 'が', 'の', 'を', 'に', 'へ', 'で', 'と', 'は', 'も'];

  function tokenize(q) {
    if (!q) return [];
    let clean = q.toLowerCase().trim();
    particles.forEach(p => {
      clean = clean.replace(new RegExp(p, 'g'), ' ');
    });
    return clean.split(/\s+/).filter(Boolean);
  }

  function runSearch(query) {
    const tokens = tokenize(query);
    if (tokens.length === 0) return [];
    const results = [];

    // 1. 日程・各コマ
    DATA.schedule.forEach(day => {
      day.timeline.forEach((slot) => {
        const text = `${day.day_code} ${day.date} ${day.title} ${slot.time} ${slot.tag || ''} ${slot.title} ${(slot.details || []).join(' ')}`.toLowerCase();
        let hits = 0;
        tokens.forEach(t => { if (text.includes(t)) hits++; });
        if (hits > 0) {
          results.push({
            badge: `${day.day_code}｜${slot.time}`,
            title: slot.title,
            snippet: (slot.details && slot.details.length > 0) ? slot.details.join(' ／ ') : day.title,
            tab: 'agenda',
            targetId: `day-card-${day.day}`,
            score: hits * 10
          });
        }
      });
    });

    // 2. 資料
    DATA.workshops.forEach(ws => {
      const text = `資料 ${ws.category} ${ws.day_label} ${ws.title} ${(ws.topics || []).join(' ')}`.toLowerCase();
      let hits = 0;
      tokens.forEach(t => { if (text.includes(t)) hits++; });
      if (hits > 0) {
        results.push({
          badge: ws.category,
          title: ws.title,
          snippet: `${ws.day_label}`,
          tab: 'workshops',
          targetId: ws.id,
          score: hits * 12
        });
      }
    });

    // 3. 訪問先・イベント
    DATA.visits.forEach(v => {
      const profText = (v.company_profile || []).map(p => `${p.label} ${p.value}`).join(' ');
      const busText = (v.business_summary || []).join(' ');
      const matText = (v.materials || []).map(m => `${m.title} ${m.description || ''}`).join(' ');
      const text = `訪問先 イベント ${v.type} ${v.day_label} ${v.location} ${v.name} ${profText} ${busText} ${matText}`.toLowerCase();
      let hits = 0;
      tokens.forEach(t => { if (text.includes(t)) hits++; });
      if (hits > 0) {
        results.push({
          badge: `訪問先・イベント｜${v.type}`,
          title: `${v.name}（${v.day_label}）`,
          snippet: v.location,
          tab: 'visits',
          targetId: v.id,
          score: hits * 12
        });
      }
    });

    // 4. EVメンバー
    DATA.key_people.forEach((p, idx) => {
      const rolesStr = (p.roles || []).join(' ／ ');
      const text = `EVメンバー ${p.name} ${p.x_handle || ''} ${rolesStr}`.toLowerCase();
      let hits = 0;
      tokens.forEach(t => { if (text.includes(t)) hits++; });
      if (hits > 0) {
        results.push({
          badge: 'EVメンバー',
          title: p.name,
          snippet: `${rolesStr}${p.x_handle ? ' ｜ 𝕏 ' + p.x_handle : ''}`,
          tab: 'people',
          targetId: `person-${idx}`,
          score: hits * 11
        });
      }
    });

    return results.sort((a, b) => b.score - a.score);
  }

  function renderSearchResults(query) {
    if (!query || !query.trim()) {
      searchResults.innerHTML = `
        <div style="text-align: center; padding: 32px 16px; color: var(--muted); font-size: 13px;">
          上の検索窓に入力するか、「よく使う検索」のタグをタップしてください。
        </div>
      `;
      return;
    }

    const list = runSearch(query);
    if (list.length === 0) {
      searchResults.innerHTML = `
        <div style="text-align: center; padding: 32px 16px; color: var(--muted); font-size: 13px;">
          「${escapeHtml(query)}」に一致する項目は見つかりませんでした。
        </div>
      `;
      return;
    }

    searchResults.innerHTML = list.map(r => `
      <div class="search-result-item" data-tab="${r.tab}" data-target="${r.targetId}">
        <div class="search-result-meta">
          <span class="search-result-badge">${escapeHtml(r.badge)}</span>
          <span class="search-result-action">移動する →</span>
        </div>
        <div class="search-result-title">${escapeHtml(r.title)}</div>
        <div class="search-result-snippet">${escapeHtml(r.snippet)}</div>
      </div>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        const targetId = item.getAttribute('data-target');
        closeSearchModal();
        if (tab === 'agenda') dayFilter = 'all';
        window.location.hash = `#/${tab}`;
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('target-pulse-highlight');
            setTimeout(() => el.classList.remove('target-pulse-highlight'), 2200);
          }
        }, 120);
      });
    });
  }

  function openSearchModal() {
    searchModalBackdrop.classList.add('active');
    searchModal.classList.add('active');
    renderSearchResults(searchInput.value);
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearchModal() {
    searchModalBackdrop.classList.remove('active');
    searchModal.classList.remove('active');
  }

  openSearchBtn.addEventListener('click', openSearchModal);
  closeSearchBtn.addEventListener('click', closeSearchModal);
  searchModalBackdrop.addEventListener('click', closeSearchModal);
  searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));

  if (searchQuickTags) {
    searchQuickTags.querySelectorAll('.search-tag-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.getAttribute('data-query');
        searchInput.value = q;
        renderSearchResults(q);
      });
    });
  }

  // 画像拡大ライトボックス
  const imgLightbox = document.getElementById('img-lightbox');
  const imgLightboxTarget = document.getElementById('img-lightbox-target');
  const imgLightboxClose = document.getElementById('img-lightbox-close');

  function openLightbox(src, alt) {
    if (!imgLightbox || !imgLightboxTarget) return;
    imgLightboxTarget.src = src || '';
    imgLightboxTarget.alt = alt || '';
    imgLightbox.classList.add('active');
  }

  function closeLightbox() {
    if (!imgLightbox) return;
    imgLightbox.classList.remove('active');
  }

  if (imgLightbox) {
    imgLightbox.addEventListener('click', (e) => {
      if (e.target !== imgLightboxTarget) {
        closeLightbox();
      }
    });
  }
  if (imgLightboxClose) {
    imgLightboxClose.addEventListener('click', closeLightbox);
  }

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    } else if (e.key === 'Escape') {
      closeSearchModal();
      closeLightbox();
    }
  });

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 初回描画
  route();

})();
