    const chapters = [
      {
        id: "nền-tảng", title: "Đại lượng điện & nền tảng", short: "Hiểu điện tích, dòng điện, điện áp, công suất và năng lượng.", icon: "ϟ",
        content: `
          <h2>1. Điện tích và dòng điện</h2>
          <p>Điện tích là thuộc tính vật lý của hạt; electron mang điện tích âm, proton mang điện tích dương. Dòng điện là sự chuyển dời có hướng của các hạt mang điện. Trong kim loại, electron dịch chuyển ngược chiều dòng điện quy ước.</p>
          <div class="formula-box"><div class="formula">I = ΔQ / Δt</div><div class="formula-caption">I: cường độ dòng điện (A); Q: điện lượng (C); t: thời gian (s). 1 A = 1 C/s.</div></div>
          <p>Chiều dòng điện quy ước đi từ điểm có điện thế cao đến điểm có điện thế thấp qua mạch ngoài. Đây là quy ước thống nhất để phân tích mạch, không phải chiều chuyển động của electron trong kim loại.</p>
          <h2>2. Điện áp, điện thế và sức điện động</h2>
          <p>Điện thế tại một điểm mô tả thế năng điện trên một đơn vị điện tích. Điện áp giữa hai điểm A, B là hiệu điện thế: <strong>U<sub>AB</sub> = V<sub>A</sub> − V<sub>B</sub></strong>. Đơn vị là volt (V). Điện áp cho biết công mà điện trường thực hiện trên một đơn vị điện tích khi dịch chuyển giữa hai điểm.</p>
          <p>Sức điện động (sđđ) là năng lượng mà nguồn cung cấp cho một đơn vị điện tích để duy trì dòng điện. Nguồn lý tưởng có điện áp đầu cực bằng sđđ; nguồn thực có điện trở trong r nên khi cấp tải, điện áp cực thường giảm.</p>
          <div class="formula-box"><div class="formula">U<sub>tải</sub> = E − I r</div><div class="formula-caption">Khi nguồn đang phát điện; E là sđđ, r là điện trở trong, I là dòng tải.</div></div>
          <h2>3. Điện trở và định luật Ohm</h2>
          <p>Điện trở đặc trưng mức cản trở dòng điện, đơn vị ohm (Ω). Với dây dẫn đồng chất ở nhiệt độ không đổi, định luật Ohm cho đoạn mạch là <strong>U = I R</strong>. Điện trở dây dẫn phụ thuộc vật liệu, chiều dài, tiết diện và nhiệt độ:</p>
          <div class="formula-box"><div class="formula">R = ρ l / S</div><div class="formula-caption">ρ: điện trở suất (Ω·m); l: chiều dài (m); S: tiết diện (m²).</div></div>
          <p>Điện trở kim loại thường tăng khi nhiệt độ tăng. Với khoảng nhiệt độ không quá lớn có thể dùng gần đúng R<sub>T</sub> = R<sub>0</sub>[1 + α(T − T<sub>0</sub>)], trong đó α là hệ số nhiệt điện trở.</p>
          <h2>4. Công suất và điện năng</h2>
          <div class="formula-box"><div class="formula">P = U I = I²R = U²/R</div><div class="formula-caption">Công suất tác dụng (W) của phần tử thuần trở một chiều.</div></div>
          <p>Điện năng tiêu thụ: <strong>A = P t</strong>. Đơn vị SI là joule; trong hóa đơn điện dân dụng thường dùng kilowatt-giờ: <strong>1 kWh = 3,6 MJ</strong>. Ví dụ, thiết bị 1000 W chạy 2 giờ tiêu thụ 2 kWh nếu công suất không đổi.</p>
          <h2>5. Quy ước dấu thụ động</h2>
          <p>Nếu dòng điện đi vào cực được quy ước dương của điện áp, p = ui &gt; 0 nghĩa là phần tử hấp thụ công suất. Nếu p &lt; 0, phần tử đang phát công suất ra mạch. Luôn ghi rõ cực tính điện áp và chiều dòng điện trước khi lập phương trình.</p>
          <div class="callout"><strong>Ví dụ nhanh:</strong> Điện trở 12 Ω được đặt vào nguồn 24 V. Dòng điện I = 24/12 = 2 A; công suất tiêu tán P = 24 × 2 = 48 W. Chọn điện trở thực tế có công suất định mức cao hơn mức tính toán theo quy tắc thiết kế phù hợp.</div>`
      },
      {
        id: "mach-dien-mot-chieu", title: "Mạch điện một chiều", short: "Ghép điện trở, áp dụng Kirchhoff và phân tích mạch DC.", icon: "⎓",
        content: `
          <h2>1. Mô hình mạch và phần tử cơ bản</h2>
          <p>Mạch điện gồm nguồn, tải và dây nối tạo thành đường kín cho dòng điện. Các phần tử tập trung thường dùng là điện trở R, cuộn cảm L, tụ điện C, nguồn áp và nguồn dòng. Mô hình lý tưởng giúp phân tích; thiết bị thật còn có điện trở dây, tổn hao và giới hạn định mức.</p>
          <h2>2. Mạch nối tiếp và song song</h2>
          <table><thead><tr><th>Cách mắc</th><th>Đặc điểm</th><th>Điện trở tương đương</th></tr></thead><tbody>
            <tr><td>Nối tiếp</td><td>Cùng dòng điện qua mọi phần tử; điện áp tổng bằng tổng sụt áp.</td><td>R<sub>tđ</sub> = R<sub>1</sub> + R<sub>2</sub> + …</td></tr>
            <tr><td>Song song</td><td>Cùng điện áp trên các nhánh; dòng tổng bằng tổng dòng nhánh.</td><td>1/R<sub>tđ</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + …</td></tr>
          </tbody></table>
          <p>Hai điện trở song song: R<sub>tđ</sub> = R<sub>1</sub>R<sub>2</sub>/(R<sub>1</sub>+R<sub>2</sub>). Điện trở tương đương song song luôn nhỏ hơn điện trở nhỏ nhất trong các nhánh.</p>
          <h2>3. Hai định luật Kirchhoff</h2>
          <ul><li><strong>Định luật dòng điện (KCL):</strong> Tổng đại số dòng điện tại một nút bằng 0. Theo bảo toàn điện tích, tổng dòng đi vào nút bằng tổng dòng đi ra.</li><li><strong>Định luật điện áp (KVL):</strong> Tổng đại số điện áp quanh một vòng kín bằng 0. Theo bảo toàn năng lượng, tổng sức điện động bằng tổng sụt áp.</li></ul>
          <div class="callout">Khi chọn chiều tham chiếu tùy ý, kết quả âm có nghĩa chiều thực ngược với chiều đã chọn; không cần đoán trước chiều dòng điện.</div>
          <h2>4. Phương pháp dòng nhánh và điện thế nút</h2>
          <p>Phương pháp dòng nhánh đặt ẩn cho dòng trên mỗi nhánh, sau đó lập KCL tại các nút độc lập và KVL cho các vòng độc lập. Phương pháp điện thế nút chọn một nút chuẩn (0 V), đặt điện áp nút còn lại làm ẩn rồi viết KCL. Với mạng có nhiều nhánh song song, phương pháp nút thường gọn hơn.</p>
          <div class="formula-box"><div class="formula">Σ (V<sub>nút</sub> − V<sub>kề</sub>) / R = I<sub>nguồn</sub></div><div class="formula-caption">Dạng KCL thường dùng cho nút nối với các nút khác qua điện trở.</div></div>
          <h2>5. Chia áp, chia dòng và nguồn tương đương</h2>
          <p>Với hai điện trở nối tiếp, điện áp trên R<sub>1</sub> là U<sub>1</sub> = U·R<sub>1</sub>/(R<sub>1</sub>+R<sub>2</sub>). Với hai nhánh song song, dòng qua R<sub>1</sub> bằng I·R<sub>2</sub>/(R<sub>1</sub>+R<sub>2</sub>) (dòng chia tỉ lệ nghịch với điện trở).</p>
          <p><strong>Thevenin:</strong> phần mạch tuyến tính nhìn từ hai cực tải có thể thay bằng nguồn áp V<sub>th</sub> nối tiếp R<sub>th</sub>. <strong>Norton:</strong> tương đương nguồn dòng I<sub>N</sub> song song R<sub>N</sub>; R<sub>N</sub> = R<sub>th</sub>, V<sub>th</sub> = I<sub>N</sub>R<sub>N</sub>.</p>
          <h2>6. Công suất và hiệu suất</h2>
          <p>Công suất nguồn cấp lý tưởng bằng tổng công suất các tải hấp thụ. Kiểm tra cân bằng công suất là cách hữu ích để phát hiện lỗi dấu hoặc tính toán. Hiệu suất η = P<sub>ra</sub>/P<sub>vào</sub> × 100%; trong thiết bị thực, η nhỏ hơn 100% do tổn hao.</p>
          <div class="callout"><strong>Ví dụ:</strong> R<sub>1</sub>=4 Ω nối tiếp R<sub>2</sub>=8 Ω vào nguồn 24 V. R<sub>tđ</sub>=12 Ω, I=2 A; sụt áp lần lượt 8 V và 16 V, tổng đúng bằng 24 V. P<sub>tổng</sub>=48 W.</div>`
      },
      {
        id: "phuong-phap-phan-tich", title: "Phân tích mạng điện", short: "Dùng chồng chất, Thevenin, Norton và cân bằng công suất.", icon: "⌘",
        content: `
          <h2>1. Quy trình giải một mạch điện</h2><ol><li>Vẽ lại sơ đồ rõ ràng, đánh số nút/nhánh và ghi giá trị linh kiện.</li><li>Chọn nút chuẩn, quy ước chiều dòng điện và cực tính điện áp.</li><li>Chọn phương pháp phù hợp: nối tiếp/song song, KCL-KVL, nút, vòng hoặc tương đương nguồn.</li><li>Giải phương trình, kiểm tra đơn vị và thay ngược vào mạch.</li><li>Kiểm tra cân bằng công suất và giới hạn định mức linh kiện.</li></ol>
          <h2>2. Nguyên lý chồng chất</h2><p>Trong mạch tuyến tính có nhiều nguồn độc lập, đáp ứng trên một phần tử bằng tổng đại số đáp ứng do từng nguồn độc lập hoạt động riêng lẻ. Khi xét một nguồn: nguồn áp lý tưởng độc lập khác được thay bằng ngắn mạch; nguồn dòng lý tưởng độc lập khác được thay bằng hở mạch. Nguồn phụ thuộc vẫn giữ nguyên. Chồng chất áp dụng cho điện áp và dòng điện, không áp dụng trực tiếp cho công suất.</p>
          <h2>3. Định lý Thevenin và Norton</h2><p>Để tìm tương đương nhìn từ hai cực tải: tháo tải; tính điện áp hở mạch V<sub>th</sub>; tìm R<sub>th</sub> bằng cách triệt tiêu nguồn độc lập và tính điện trở nhìn vào (hoặc dùng R<sub>th</sub>=V<sub>hở mạch</sub>/I<sub>ngắn mạch</sub>). Với nguồn phụ thuộc cần dùng nguồn thử hoặc tỷ số hở mạch/ngắn mạch.</p>
          <div class="formula-box"><div class="formula">I<sub>tải</sub> = V<sub>th</sub> / (R<sub>th</sub> + R<sub>tải</sub>)</div><div class="formula-caption">Mô hình Thevenin áp dụng cho mạng tuyến tính hai cực.</div></div>
          <h2>4. Truyền công suất cực đại</h2><p>Trong mạch DC thuần trở, tải nhận công suất cực đại khi R<sub>tải</sub>=R<sub>th</sub>. Khi đó P<sub>max</sub>=V<sub>th</sub>²/(4R<sub>th</sub>) nhưng hiệu suất truyền công suất chỉ 50%, nên điều kiện này thường hữu ích trong truyền tín hiệu hơn là truyền tải điện năng.</p>
          <h2>5. Cuộn cảm và tụ điện trong quá độ</h2><ul><li>Dòng qua cuộn cảm không thể thay đổi tức thời: i<sub>L</sub>(0<sup>+</sup>)=i<sub>L</sub>(0<sup>−</sup>).</li><li>Điện áp trên tụ điện không thể thay đổi tức thời: u<sub>C</sub>(0<sup>+</sup>)=u<sub>C</sub>(0<sup>−</sup>).</li><li>Năng lượng cuộn cảm W<sub>L</sub>=½Li²; năng lượng tụ W<sub>C</sub>=½Cu².</li></ul>
          <p>Trong mạch RC, hằng số thời gian τ=RC; mạch RL có τ=L/R. Sau khoảng 5τ, đáp ứng bậc một đã gần đạt trạng thái xác lập (sai số xấp xỉ dưới 1%). Ở trạng thái xác lập DC, tụ lý tưởng hở mạch và cuộn cảm lý tưởng ngắn mạch.</p>
          <div class="callout warning"><strong>Lưu ý:</strong> Tụ điện có thể còn tích điện sau khi ngắt nguồn. Mạch có cuộn cảm có thể tạo điện áp cao khi ngắt dòng đột ngột. Chỉ thao tác sau khi đã cô lập, kiểm tra hết điện và tuân thủ quy trình an toàn.</div>`
      },
      {
        id: "dien-xoay-chieu", title: "Điện xoay chiều hình sin", short: "Biên độ, trị hiệu dụng, pha, trở kháng và công suất AC.", icon: "∿",
        content: `
          <h2>1. Đại lượng hình sin</h2><div class="formula-box"><div class="formula">u(t) = U<sub>m</sub> sin(ωt + φ<sub>u</sub>)</div><div class="formula-caption">U<sub>m</sub>: biên độ; ω: tốc độ góc (rad/s); φ: pha ban đầu.</div></div>
          <p>Chu kỳ T là thời gian lặp lại dạng sóng; tần số f=1/T (Hz); ω=2πf. Độ lệch pha giữa hai sóng cùng tần số quyết định sóng nào sớm pha hoặc trễ pha. Điện lưới tại Việt Nam thường có tần số danh định 50 Hz; trị số cụ thể phụ thuộc hệ thống và tiêu chuẩn áp dụng.</p>
          <h2>2. Trị hiệu dụng (RMS)</h2><p>Trị hiệu dụng của dòng xoay chiều là giá trị DC tạo ra cùng nhiệt lượng trên điện trở trong cùng thời gian. Với sóng hình sin:</p><div class="formula-box"><div class="formula">U = U<sub>m</sub>/√2 &nbsp;&nbsp; ; &nbsp;&nbsp; I = I<sub>m</sub>/√2</div><div class="formula-caption">Các số đo điện áp AC thông dụng thường biểu thị giá trị hiệu dụng, trừ khi ghi rõ biên độ.</div></div>
          <h2>3. Phản ứng của R, L, C</h2><table><thead><tr><th>Phần tử</th><th>Trở kháng</th><th>Quan hệ pha</th></tr></thead><tbody><tr><td>Điện trở R</td><td>Z<sub>R</sub>=R</td><td>u và i cùng pha</td></tr><tr><td>Cuộn cảm L</td><td>Z<sub>L</sub>=jωL</td><td>Dòng trễ áp 90°</td></tr><tr><td>Tụ điện C</td><td>Z<sub>C</sub>=1/(jωC)</td><td>Dòng sớm áp 90°</td></tr></tbody></table>
          <p>Trở kháng Z là đại lượng phức biểu diễn quan hệ điện áp-dòng điện trong miền pha: U̲=Z I̲. Độ lớn |Z| tính bằng Ω; góc pha của Z mô tả độ lệch pha. Không cộng độ lớn trở kháng như điện trở thuần nếu mạch có L/C; cần cộng đại số phức.</p>
          <h2>4. Công suất trong mạch AC một pha</h2><div class="formula-box"><div class="formula">P = U I cosφ &nbsp; | &nbsp; Q = U I sinφ &nbsp; | &nbsp; S = U I</div><div class="formula-caption">P: W; Q: var; S: VA; U, I là giá trị hiệu dụng; φ là góc lệch pha giữa điện áp và dòng điện.</div></div>
          <p>Công suất biểu kiến S là tích U·I; công suất tác dụng P biến đổi thành công hữu ích/nhiệt; công suất phản kháng Q biểu thị năng lượng trao đổi tuần hoàn giữa nguồn và phần tử phản kháng. Hệ số công suất cosφ=P/S với tải hình sin. Hệ số công suất thấp làm tăng dòng điện và tổn hao trên đường dây với cùng công suất hữu ích.</p>
          <h2>5. Đọc giản đồ pha và đo đạc</h2><p>Chọn một pha làm tham chiếu 0°. Với tải cảm, dòng trễ điện áp; với tải dung, dòng sớm điện áp. Đồng hồ đo true-RMS cho kết quả đáng tin cậy hơn khi dạng sóng méo, miễn thiết bị có băng thông và hệ số đỉnh phù hợp.</p>
          <div class="callout"><strong>Ví dụ:</strong> Tải 230 V, 5 A, cosφ=0,8 có S=1150 VA và P=920 W. Phần chênh lệch không phải công suất tác dụng tiêu thụ, nhưng vẫn ảnh hưởng đến dòng điện và thiết bị cấp nguồn.</div>`
      },
      {
        id: "mach-rlc", title: "Mạch RLC & cộng hưởng", short: "Phân tích mạch RLC nối tiếp/song song và hiện tượng cộng hưởng.", icon: "〰",
        content: `
          <h2>1. Mạch RLC nối tiếp</h2><p>Trong mạch nối tiếp, cùng một dòng chạy qua R, L, C. Tổng trở:</p><div class="formula-box"><div class="formula">Z = R + j(X<sub>L</sub> − X<sub>C</sub>)</div><div class="formula-caption">X<sub>L</sub>=ωL; X<sub>C</sub>=1/(ωC); |Z|=√[R²+(X<sub>L</sub>−X<sub>C</sub>)²].</div></div>
          <p>Nếu X<sub>L</sub>&gt;X<sub>C</sub>, mạch có tính cảm; nếu X<sub>C</sub>&gt;X<sub>L</sub>, mạch có tính dung. Góc pha φ=tan⁻¹[(X<sub>L</sub>−X<sub>C</sub>)/R].</p>
          <h2>2. Cộng hưởng nối tiếp</h2><p>Cộng hưởng xảy ra khi X<sub>L</sub>=X<sub>C</sub>, do đó tổng trở bằng R và dòng đạt cực đại với nguồn áp lý tưởng. Tần số cộng hưởng:</p><div class="formula-box"><div class="formula">f<sub>0</sub> = 1 / (2π√LC)</div><div class="formula-caption">L tính bằng H, C tính bằng F, kết quả f₀ tính bằng Hz.</div></div>
          <p>Hệ số phẩm chất mạch nối tiếp Q<sub>f</sub>=ω<sub>0</sub>L/R=1/(ω<sub>0</sub>CR); băng thông xấp xỉ Δf=f<sub>0</sub>/Q<sub>f</sub> đối với mạch có Q cao. Điện áp trên L và C có thể lớn hơn điện áp nguồn tại cộng hưởng, nên cần kiểm tra định mức.</p>
          <h2>3. Mạch RLC song song</h2><p>Với cấu hình song song lý tưởng, tổng dẫn Y=1/R + j(1/X<sub>C</sub>−1/X<sub>L</sub>). Tại cộng hưởng, phần ảo của tổng dẫn triệt tiêu. Mạch song song có thể có dòng nguồn nhỏ trong khi dòng tuần hoàn trong các nhánh L và C lớn.</p>
          <h2>4. Đáp ứng tần số và ứng dụng</h2><ul><li>Mạch cộng hưởng chọn lọc tần số trong bộ lọc, thu phát và cảm biến.</li><li>Mạch lọc thông thấp cho tín hiệu tần số thấp đi qua; thông cao cho tín hiệu tần số cao đi qua.</li><li>Mạch lọc thông dải giữ một dải quanh tần số trung tâm; chắn dải làm suy giảm dải tần xác định.</li></ul>
          <p>Phân tích thực tế cần tính cả điện trở dây quấn, điện trở nối tiếp tương đương của tụ, dung sai linh kiện và tải đo. Cộng hưởng có thể gây quá dòng hoặc quá áp nếu mạch không được thiết kế, bảo vệ đúng.</p>
          <div class="callout"><strong>Ví dụ:</strong> Với L=10 mH và C=100 μF, f₀≈1/(2π√(0,01×0,0001))≈159 Hz. Đây là giá trị lý tưởng; linh kiện thực làm tần số và độ sắc cộng hưởng thay đổi.</div>`
      },
      {
        id: "ba-pha", title: "Hệ thống điện ba pha", short: "Đấu sao/tam giác, quan hệ dây-pha và công suất ba pha.", icon: "三",
        content: `
          <h2>1. Khái niệm hệ ba pha</h2><p>Hệ ba pha gồm ba sức điện động hình sin cùng tần số, cùng biên độ và lệch nhau 120° điện. Hệ cân bằng có tổng tức thời ba dòng pha bằng không tại mọi thời điểm. Truyền tải ba pha thường tiết kiệm vật liệu dẫn và tạo từ trường quay thuận lợi cho động cơ.</p>
          <h2>2. Nối sao (Y) và tam giác (Δ)</h2><table><thead><tr><th>Kiểu nối</th><th>Quan hệ điện áp</th><th>Quan hệ dòng điện</th><th>Ghi chú</th></tr></thead><tbody><tr><td>Sao Y</td><td>U<sub>dây</sub>=√3 U<sub>pha</sub></td><td>I<sub>dây</sub>=I<sub>pha</sub></td><td>Có thể có dây trung tính; trung tính có thể mang dòng khi tải mất cân bằng.</td></tr><tr><td>Tam giác Δ</td><td>U<sub>dây</sub>=U<sub>pha</sub></td><td>I<sub>dây</sub>=√3 I<sub>pha</sub></td><td>Mỗi cuộn chịu điện áp dây; cần đấu đúng nhãn và sơ đồ thiết bị.</td></tr></tbody></table>
          <p>Các quan hệ trên giả thiết nguồn và tải ba pha cân bằng, hình sin và thứ tự pha xác định. Không suy rộng chúng máy móc cho tải méo hoặc mất cân bằng.</p>
          <h2>3. Công suất ba pha cân bằng</h2><div class="formula-box"><div class="formula">P = √3 U<sub>d</sub> I<sub>d</sub> cosφ</div><div class="formula-caption">Công suất tác dụng; U<sub>d</sub>, I<sub>d</sub> là điện áp và dòng dây RMS.</div></div><p>Tương tự S=√3 U<sub>d</sub>I<sub>d</sub> (VA), Q=√3 U<sub>d</sub>I<sub>d</sub>sinφ (var). Công thức tổng quát P=ΣU<sub>pha</sub>I<sub>pha</sub>cosφ<sub>pha</sub> dùng cho tải không cân bằng khi các đại lượng pha được xác định đúng.</p>
          <h2>4. Thứ tự pha và tải mất cân bằng</h2><p>Thứ tự pha ABC hay ACB quyết định chiều quay của từ trường và động cơ ba pha. Đảo thứ tự hai dây pha thường đảo chiều quay động cơ, nhưng chỉ người có chuyên môn mới được thực hiện sau khi cô lập nguồn và kiểm tra an toàn. Tải một pha phân bố lệch làm dòng dây trung tính tăng; tải phi tuyến có thể làm sóng hài bậc ba cộng dồn trên dây trung tính.</p>
          <h2>5. Đo công suất ba pha</h2><p>Hệ ba dây thường có thể đo công suất tổng bằng phương pháp hai watt kế; tổng đại số hai số chỉ bằng công suất tác dụng tổng trong các điều kiện mắc đo phù hợp. Hệ bốn dây hoặc tải không cân bằng có thể cần phương pháp đo khác. Luôn tuân thủ cấp đo CAT, điện áp định mức và hướng dẫn của thiết bị đo.</p>
          <div class="callout warning"><strong>Cảnh báo:</strong> Hệ ba pha có thể gây điện giật nghiêm trọng, hồ quang và cháy. Không dùng sơ đồ học tập làm hướng dẫn đấu nối thực tế; việc lắp đặt cần người đủ năng lực và phải tuân thủ quy chuẩn địa phương.</div>`
      },
      {
        id: "may-bien-ap", title: "Máy biến áp", short: "Nguyên lý cảm ứng, tỷ số biến áp, tổn hao và vận hành.", icon: "↗",
        content: `
          <h2>1. Nguyên lý cảm ứng điện từ</h2><p>Máy biến áp truyền năng lượng giữa các mạch điện bằng từ thông biến thiên chung. Điện áp xoay chiều đặt vào cuộn sơ cấp tạo từ thông trong lõi; từ thông liên kết cuộn thứ cấp cảm ứng điện áp. Máy biến áp thông thường không biến đổi tần số.</p>
          <div class="formula-box"><div class="formula">U<sub>1</sub>/U<sub>2</sub> ≈ N<sub>1</sub>/N<sub>2</sub> &nbsp; ; &nbsp; I<sub>1</sub>/I<sub>2</sub> ≈ N<sub>2</sub>/N<sub>1</sub></div><div class="formula-caption">Quan hệ lý tưởng; N là số vòng dây, U và I là giá trị hiệu dụng.</div></div>
          <p>Máy tăng áp có N₂&gt;N₁; máy hạ áp có N₂&lt;N₁. Trong mô hình lý tưởng công suất vào bằng công suất ra; máy thực có tổn hao nên U₁I₁ lớn hơn U₂I₂ theo hiệu suất.</p>
          <h2>2. Cấu tạo và tổn hao</h2><ul><li><strong>Lõi từ:</strong> thường ghép từ các lá thép kỹ thuật điện cách điện để giảm dòng điện xoáy.</li><li><strong>Dây quấn:</strong> sơ cấp nhận năng lượng; thứ cấp cấp năng lượng cho tải.</li><li><strong>Tổn hao sắt:</strong> tổn hao từ trễ và dòng điện xoáy, chủ yếu phụ thuộc điện áp và tần số.</li><li><strong>Tổn hao đồng:</strong> I²R trên dây quấn, tăng theo bình phương tải.</li><li><strong>Tản từ, điện môi và làm mát:</strong> ảnh hưởng đến hiệu suất, nhiệt độ và tuổi thọ cách điện.</li></ul>
          <h2>3. Mạch tương đương và điều chỉnh điện áp</h2><p>Mạch tương đương quy đổi các đại lượng về một phía gồm điện trở dây quấn, điện kháng tản, nhánh từ hóa và điện trở tổn hao lõi. Khi tải tăng, sụt áp trên tổng trở nối tiếp làm điện áp thứ cấp thay đổi. Độ điều chỉnh điện áp thường được biểu diễn bằng phần trăm chênh lệch điện áp không tải và có tải so với điện áp có tải.</p>
          <h2>4. Công suất định mức và làm mát</h2><p>Máy biến áp thường ghi công suất biểu kiến kVA, điện áp, dòng điện, tần số, sơ đồ đấu dây, nhóm vector và phương thức làm mát. Không được vượt dòng/độ tăng nhiệt cho phép. Tải phi tuyến tạo sóng hài làm tăng tổn hao và nhiệt; cần chọn máy phù hợp với đặc tính tải.</p>
          <h2>5. Đấu song song</h2><p>Để vận hành song song, các máy cần tương thích tỷ số biến áp, cực tính, thứ tự pha/nhóm vector, điện áp ngắn mạch và tỷ lệ công suất phù hợp. Đấu sai có thể tạo dòng tuần hoàn lớn hoặc sự cố ngắn mạch. Quy trình phải theo hồ sơ thiết kế và kiểm tra chuyên môn.</p>
          <div class="callout"><strong>Ví dụ lý tưởng:</strong> Máy biến áp 230/23 V có tỷ số vòng dây 10:1. Nếu thứ cấp cấp tải 2 A, dòng sơ cấp lý tưởng khoảng 0,2 A; thực tế lớn hơn do tổn hao và dòng từ hóa.</div>`
      },
      {
        id: "may-dien", title: "Máy điện & động cơ", short: "Nguyên lý động cơ DC, không đồng bộ và đồng bộ.", icon: "◉",
        content: `
          <h2>1. Chuyển đổi năng lượng điện-cơ</h2><p>Máy điện dùng tương tác giữa dòng điện và từ trường để biến điện năng thành cơ năng (động cơ) hoặc cơ năng thành điện năng (máy phát). Từ trường quay trong máy AC được tạo bởi các dòng pha lệch nhau; rotor tương tác với trường quay để sinh mômen.</p>
          <h2>2. Động cơ không đồng bộ ba pha</h2><p>Từ trường stator quay với tốc độ đồng bộ n<sub>s</sub>=120f/p (vòng/phút), trong đó f là tần số Hz và p là số cực. Rotor lồng sóc hoặc dây quấn quay chậm hơn trường stator khi ở chế độ động cơ. Độ trượt:</p><div class="formula-box"><div class="formula">s = (n<sub>s</sub> − n<sub>r</sub>) / n<sub>s</sub></div><div class="formula-caption">n<sub>r</sub>: tốc độ rotor. Ở tải động cơ thông thường 0&lt;s&lt;1.</div></div>
          <p>Mômen sinh ra do dòng cảm ứng rotor. Khi tải tăng, tốc độ giảm nhẹ, độ trượt tăng để tạo mômen lớn hơn. Khởi động trực tiếp có thể gây dòng khởi động lớn; phương pháp khởi động phải phù hợp công suất, tải và lưới điện.</p>
          <h2>3. Động cơ đồng bộ</h2><p>Rotor khóa từ với trường quay và chạy đúng tốc độ đồng bộ trong trạng thái ổn định. Máy đồng bộ có thể dùng nam châm vĩnh cửu hoặc kích từ DC. Điều khiển góc tải và kích từ ảnh hưởng đến mômen và trao đổi công suất phản kháng. Mất đồng bộ có thể gây dao động và bảo vệ tác động.</p>
          <h2>4. Động cơ điện một chiều</h2><p>Phần ứng có dòng điện nằm trong từ trường tạo mômen. Sức điện động phản kháng tăng theo tốc độ và từ thông. Động cơ DC có thể điều chỉnh tốc độ thuận tiện, nhưng chổi than/cổ góp cần bảo trì; các hệ truyền động hiện đại thường dùng bộ biến đổi điện tử và động cơ AC.</p>
          <h2>5. Công suất, hiệu suất và nhãn máy</h2><p>Công suất cơ trên trục P<sub>2</sub>=Tω (W), với T là mômen (N·m), ω là tốc độ góc (rad/s). Hiệu suất η=P<sub>2</sub>/P<sub>1</sub>. Đọc nhãn máy để biết điện áp, dòng, công suất, tần số, tốc độ, hệ số công suất, hiệu suất, cấp cách điện, chế độ làm việc và cấp bảo vệ.</p>
          <h2>6. Bảo vệ và chẩn đoán cơ bản</h2><ul><li>Quá tải kéo dài gây quá nhiệt; ngắn mạch cần thiết bị bảo vệ tác động phù hợp.</li><li>Mất pha, lệch pha, kẹt rotor và thông gió kém có thể làm động cơ nóng nhanh.</li><li>Rung, tiếng ồn, nhiệt độ bất thường hoặc mùi khét cần được kiểm tra bởi người có chuyên môn.</li></ul>
          <div class="callout warning"><strong>An toàn:</strong> Không mở hộp cực, tháo bảo vệ hoặc chạm vào trục quay khi thiết bị đang vận hành. Cần cô lập nguồn, khóa/treo thẻ và xác nhận hết điện trước bảo trì.</div>`
      },
      {
        id: "do-luong-an-toan", title: "Đo lường & an toàn điện", short: "Dụng cụ đo, bảo vệ, nối đất và quy trình làm việc an toàn.", icon: "⊕",
        content: `
          <h2>1. Đại lượng và sai số đo</h2><p>Mọi phép đo đều có sai số do độ chính xác thiết bị, phương pháp, môi trường và người thao tác. Sai số tuyệt đối Δx=|x<sub>đo</sub>−x<sub>tham chiếu</sub>|; sai số tương đối δ=Δx/|x<sub>tham chiếu</sub>|×100%. Phải chọn dải đo, độ phân giải và cấp chính xác phù hợp.</p>
          <h2>2. Đồng hồ vạn năng</h2><ul><li>Đo điện áp: mắc song song với phần tử; chọn AC/DC và dải phù hợp.</li><li>Đo dòng điện: đồng hồ phải mắc nối tiếp; cắm que đúng cổng dòng. Tuyệt đối không mắc chế độ đo dòng song song trực tiếp vào nguồn áp.</li><li>Đo điện trở/thông mạch: chỉ đo trên mạch đã cô lập và xác nhận không còn điện.</li><li>Đo diode/tụ điện cần theo tài liệu thiết bị; tụ phải được xả an toàn trước khi đo.</li></ul>
          <h2>3. Công suất kế và máy hiện sóng</h2><p>Watt kế đo công suất tác dụng bằng cách lấy mẫu điện áp và dòng điện đồng thời. Máy hiện sóng hiển thị dạng sóng theo thời gian; đầu dò, băng thông, nối đất và mức điện áp phải phù hợp. Kẹp dòng giúp đo dòng mà không mở mạch, nhưng cần chọn đúng loại AC/DC và đặt đúng chiều.</p>
          <h2>4. Bảo vệ điện cơ bản</h2><p>Cầu chì và máy cắt bảo vệ quá dòng/ngắn mạch theo đặc tuyến và khả năng cắt. Thiết bị dòng dư (RCD/RCCB) phát hiện dòng rò theo nguyên lý cân bằng dòng và có thể giảm nguy cơ một số dạng điện giật; nó không thay thế bảo vệ quá dòng nếu không tích hợp chức năng phù hợp, cũng không thay thế nối đất hay quy trình an toàn.</p>
          <h2>5. Nối đất và liên kết đẳng thế</h2><p>Nối đất bảo vệ tạo đường dẫn sự cố và phối hợp với thiết bị bảo vệ; liên kết đẳng thế giảm chênh lệch điện thế giữa các phần dẫn điện có thể chạm tới. Thiết kế, tiết diện dây, điện trở nối đất và sơ đồ nối đất phụ thuộc tiêu chuẩn/quy chuẩn địa phương và loại hệ thống.</p>
          <h2>6. Quy trình làm việc an toàn</h2><ol><li>Nhận diện nguồn cấp, năng lượng tích trữ và nguy cơ hồ quang.</li><li>Ngắt/cô lập tất cả nguồn; áp dụng khóa và thẻ cảnh báo theo quy trình.</li><li>Dùng thiết bị kiểm tra phù hợp để xác nhận dụng cụ hoạt động, kiểm tra hết điện, rồi xác nhận lại dụng cụ.</li><li>Xả năng lượng tích trữ và nối đất tạm thời khi quy trình yêu cầu.</li><li>Dùng PPE, dụng cụ cách điện và rào chắn phù hợp; chỉ người đủ năng lực mới được thực hiện.</li><li>Kiểm tra khu vực, tháo khóa theo đúng thẩm quyền và khôi phục vận hành có kiểm soát.</li></ol>
          <div class="callout warning"><strong>Nguy hiểm đến tính mạng:</strong> Điện áp thấp cũng có thể gây tử vong tùy đường đi qua cơ thể, thời gian tiếp xúc và điều kiện môi trường. Không thử nghiệm điện lưới tại nhà, không làm việc một mình và không coi găng tay gia dụng là phương tiện cách điện chuyên dụng.</div>
          <p>Trong tai nạn điện, không chạm trực tiếp vào nạn nhân khi nguồn chưa được ngắt an toàn. Gọi dịch vụ cấp cứu địa phương; chỉ sơ cứu/hồi sức nếu đã được huấn luyện và khu vực đã được đảm bảo an toàn.</p>`
      }
    ];

    const glossary = [
      ["Dòng điện (I)", "Lượng điện tích dịch chuyển qua tiết diện trong một đơn vị thời gian; đơn vị ampere (A)."],
      ["Điện áp (U)", "Hiệu điện thế giữa hai điểm; đơn vị volt (V)."],
      ["Điện trở (R)", "Đại lượng biểu thị mức cản trở dòng điện; đơn vị ohm (Ω)."],
      ["Công suất tác dụng (P)", "Tốc độ truyền/tiêu thụ năng lượng hữu ích; đơn vị watt (W)."],
      ["Công suất phản kháng (Q)", "Công suất trao đổi tuần hoàn do phần tử phản kháng; đơn vị var."],
      ["Công suất biểu kiến (S)", "Tích điện áp RMS và dòng điện RMS; đơn vị volt-ampere (VA)."],
      ["Hệ số công suất", "Tỷ số P/S; với sóng hình sin và tải tuyến tính bằng cosφ."],
      ["Tần số (f)", "Số chu kỳ của tín hiệu trong một giây; đơn vị hertz (Hz)."],
      ["Trị hiệu dụng (RMS)", "Giá trị tương đương về tác dụng nhiệt của một đại lượng DC trên cùng điện trở."],
      ["Trở kháng (Z)", "Đại lượng phức mô tả quan hệ điện áp-dòng điện trong mạch AC; đơn vị ohm."],
      ["Độ trượt (s)", "Độ chênh tương đối giữa tốc độ đồng bộ và tốc độ rotor động cơ không đồng bộ."],
      ["Máy biến áp", "Thiết bị điện từ truyền năng lượng AC giữa các mạch, thường thay đổi mức điện áp/dòng."],
      ["Nối đất bảo vệ", "Kết nối phần dẫn điện hở với hệ thống nối đất nhằm hỗ trợ bảo vệ khi có sự cố."],
      ["RCD/RCCB", "Thiết bị bảo vệ phát hiện dòng dư/rò; chức năng cụ thể phụ thuộc loại và tiêu chuẩn sản phẩm."]
    ];

    const quizItems = [
      { q: "Điện trở 10 Ω đặt vào nguồn DC 20 V. Dòng điện là bao nhiêu?", a: ["0,5 A", "2 A", "200 A"], correct: 1, explain: "Theo định luật Ohm: I = U/R = 20/10 = 2 A." },
      { q: "Trong mạch nối tiếp, đại lượng nào giống nhau qua mọi phần tử?", a: ["Điện áp", "Dòng điện", "Công suất"], correct: 1, explain: "Mạch nối tiếp chỉ có một đường dòng điện nên dòng qua các phần tử bằng nhau." },
      { q: "Với tải thuần cảm lý tưởng, dòng điện so với điện áp như thế nào?", a: ["Sớm pha 90°", "Cùng pha", "Trễ pha 90°"], correct: 2, explain: "Trong cuộn cảm lý tưởng, dòng trễ điện áp 90°." },
      { q: "Đơn vị của công suất biểu kiến là gì?", a: ["VA", "var", "Wh"], correct: 0, explain: "Công suất biểu kiến S có đơn vị VA; Q có đơn vị var." },
      { q: "Khi đo điện trở bằng đồng hồ, mạch cần ở trạng thái nào?", a: ["Đang cấp điện", "Đã cô lập và xác nhận hết điện", "Đang tải tối đa"], correct: 1, explain: "Đo Ω trên mạch đang có điện có thể gây nguy hiểm và làm hỏng đồng hồ." }
    ];

    const content = document.getElementById("content");
    const chapterNav = document.getElementById("chapterNav");
    const mainNav = document.getElementById("mainNav");
    const crumbTitle = document.getElementById("crumbTitle");
    let currentPage = "home";
    const visited = new Set(JSON.parse(localStorage.getItem("dienkythuat-visited") || "[]"));

    function buildNav() {
      chapterNav.innerHTML = chapters.map((chapter, i) => `<li><button class="nav-link" data-page="${chapter.id}"><span class="nav-icon">${chapter.icon}</span><span>${chapter.title}</span><span class="nav-number">${String(i + 1).padStart(2, "0")}</span></button></li>`).join("");
      document.querySelectorAll(".nav-link").forEach(button => button.addEventListener("click", () => navigate(button.dataset.page)));
    }

    function setActive(page) {
      document.querySelectorAll(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.page === page));
      const chapter = chapters.find(item => item.id === page);
      const labels = { home: "Tổng quan", calculator: "Máy tính điện", quiz: "Kiểm tra kiến thức", glossary: "Bảng thuật ngữ" };
      crumbTitle.textContent = chapter ? chapter.title : (labels[page] || "Tổng quan");
    }

    function navigate(page, updateHash = true) {
      currentPage = page;
      if (updateHash) history.replaceState(null, "", "#" + encodeURIComponent(page));
      setActive(page);
      document.getElementById("sidebar").classList.remove("open");
      if (page === "home") renderHome();
      else if (page === "calculator") renderCalculator();
      else if (page === "quiz") renderQuiz();
      else if (page === "glossary") renderGlossary();
      else renderChapter(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderHome() {
      const progress = Math.round(visited.size / chapters.length * 100);
      content.innerHTML = `
        <section class="hero">
          <div class="eyebrow">Giáo trình điện kỹ thuật · Từ cơ bản đến ứng dụng</div>
          <h1>Hiểu bản chất.<br>Phân tích mạch điện.</h1>
          <p>Lộ trình học có hệ thống về mạch điện, điện xoay chiều, hệ ba pha, máy điện, đo lường và an toàn. Mỗi chương kết hợp khái niệm, công thức, ví dụ và lưu ý ứng dụng.</p>
          <div class="hero-actions"><button class="button primary" data-go="${chapters[0].id}">Bắt đầu học&nbsp; →</button><button class="button secondary" data-go="calculator">Mở máy tính điện</button></div>
        </section>
        <section class="stats">
          <div class="stat"><div class="stat-label">CHƯƠNG HỌC</div><div class="stat-value">09 <span>chủ đề có hệ thống</span></div></div>
          <div class="stat"><div class="stat-label">TIẾN ĐỘ CỦA BẠN</div><div class="stat-value">${progress}<span>% đã mở</span></div><div class="progress-track"><span style="width:${progress}%"></span></div></div>
          <div class="stat"><div class="stat-label">CÔNG CỤ THỰC HÀNH</div><div class="stat-value">03 <span>tính toán · trắc nghiệm · tra cứu</span></div></div>
        </section>
        <div class="section-heading"><div><div class="eyebrow">Lộ trình học</div><h2>Chọn chương để bắt đầu</h2></div><button class="text-button" data-go="glossary">Tra cứu thuật ngữ →</button></div>
        <section class="course-grid">${chapters.map((chapter, i) => `<button class="course-card" data-go="${chapter.id}"><div class="course-top"><span class="course-icon">${chapter.icon}</span><span class="course-index">CHƯƠNG ${String(i + 1).padStart(2, "0")}</span></div><div class="course-title">${chapter.title}</div><div class="course-desc">${chapter.short}</div></button>`).join("")}</section>
        <section class="two-col">
          <div class="card"><div class="eyebrow">Cách học hiệu quả</div><h2 style="margin-top:7px">Đi từ nguyên lý đến ứng dụng</h2>
            <div class="learning-list">
              <div class="learning-item"><span class="check">1</span><div><strong>Nắm đại lượng và đơn vị</strong><span>Luôn kiểm tra đơn vị trước khi thay số vào công thức.</span></div></div>
              <div class="learning-item"><span class="check">2</span><div><strong>Vẽ sơ đồ, chọn quy ước</strong><span>Ghi rõ chiều dòng điện, cực tính điện áp và nút tham chiếu.</span></div></div>
              <div class="learning-item"><span class="check">3</span><div><strong>Kiểm chứng kết quả</strong><span>Thử lại KCL, KVL, cân bằng công suất và giới hạn định mức.</span></div></div>
            </div>
          </div>
          <div class="card"><div class="eyebrow">Công thức nền tảng</div><h2 style="margin-top:7px">Ghi nhớ nhanh</h2>
            <div class="formula-box"><div class="formula">U = I R</div><div class="formula-caption">Định luật Ohm</div></div>
            <div class="formula-box"><div class="formula">P = U I</div><div class="formula-caption">Công suất DC thuần trở</div></div>
            <div class="formula-box"><div class="formula">P<sub>3 pha</sub> = √3 U<sub>d</sub>I<sub>d</sub>cosφ</div><div class="formula-caption">Công suất tác dụng ba pha cân bằng</div></div>
          </div>
        </section>
        <footer>Giáo trình tham khảo phục vụ tự học. Khi thiết kế, lắp đặt hoặc vận hành, cần đối chiếu tiêu chuẩn hiện hành và tài liệu nhà sản xuất.</footer>`;
      bindGoButtons();
    }

    function renderChapter(id) {
      const index = chapters.findIndex(chapter => chapter.id === id);
      if (index < 0) { renderHome(); return; }
      const chapter = chapters[index];
      visited.add(id);
      localStorage.setItem("dienkythuat-visited", JSON.stringify([...visited]));
      const headings = [...chapter.content.matchAll(/<h2>(.*?)<\/h2>/g)].map((match, i) => `<a href="#section-${i}">${match[1].replace(/<[^>]*>/g, "")}</a>`).join("");
      let sectionIndex = -1;
      const article = chapter.content.replace(/<h2>(.*?)<\/h2>/g, (_, heading) => {
        sectionIndex++;
        return `<h2 id="section-${sectionIndex}">${heading}</h2>`;
      });
      content.innerHTML = `
        <div class="article-head"><div><div class="eyebrow">Giáo trình · Chương ${String(index + 1).padStart(2, "0")}</div><h1>${chapter.title}</h1><p class="lead">${chapter.short} Học lần lượt các mục, ghi lại quy ước và tự kiểm tra đơn vị khi giải bài.</p></div><span class="lesson-tag">${chapter.icon} &nbsp; BÀI HỌC</span></div>
        <div class="lesson-layout"><article class="lesson-body">${article}<div class="lesson-footer"><button class="button" data-go="${index ? chapters[index - 1].id : "home"}">← ${index ? "Chương trước" : "Tổng quan"}</button><button class="button" data-go="${chapters[index + 1] ? chapters[index + 1].id : "calculator"}">${chapters[index + 1] ? "Chương tiếp theo →" : "Thực hành tính toán →"}</button></div></article><aside class="toc"><h3>TRONG CHƯƠNG NÀY</h3>${headings}</aside></div>
        <footer>Nội dung có tính giáo dục, không thay thế quy chuẩn, hồ sơ thiết kế, hướng dẫn nhà sản xuất hoặc đào tạo an toàn điện.</footer>`;
      bindGoButtons();
    }

    function renderCalculator() {
      content.innerHTML = `
        <div class="eyebrow">Công cụ thực hành</div><h1>Máy tính điện</h1><p class="lead">Nhập các giá trị đã biết để tính nhanh định luật Ohm, công suất DC và đại lượng AC một pha. Kết quả giả định mô hình lý tưởng và cần được kiểm tra trước khi ứng dụng.</p>
        <div class="tool-grid" style="margin-top:24px">
          <section class="card tool-card"><div class="eyebrow">01 · Mạch DC</div><h2>Định luật Ohm</h2><p>Nhập hai đại lượng, công cụ tính đại lượng còn lại.</p>
            <div class="field"><label for="ohm-mode">Đại lượng cần tính</label><select id="ohm-mode"><option value="i">Dòng điện I = U/R</option><option value="u">Điện áp U = I×R</option><option value="r">Điện trở R = U/I</option></select></div>
            <div class="field"><label for="ohm-u">Điện áp U (V)</label><input id="ohm-u" type="number" min="0" step="any" value="24"></div>
            <div class="field"><label for="ohm-i">Dòng điện I (A)</label><input id="ohm-i" type="number" min="0" step="any" value="2"></div>
            <div class="field"><label for="ohm-r">Điện trở R (Ω)</label><input id="ohm-r" type="number" min="0" step="any" value="12"></div>
            <div class="result" id="ohm-result" aria-live="polite"></div>
          </section>
          <section class="card tool-card"><div class="eyebrow">02 · Năng lượng</div><h2>Công suất & điện năng DC</h2><p>Tính công suất và điện năng tiêu thụ với tải DC/thuần trở.</p>
            <div class="field"><label for="power-u">Điện áp U (V)</label><input id="power-u" type="number" min="0" step="any" value="12"></div>
            <div class="field"><label for="power-i">Dòng điện I (A)</label><input id="power-i" type="number" min="0" step="any" value="2"></div>
            <div class="field"><label for="power-t">Thời gian hoạt động (giờ)</label><input id="power-t" type="number" min="0" step="any" value="3"></div>
            <div class="result" id="power-result" aria-live="polite"></div>
          </section>
          <section class="card tool-card"><div class="eyebrow">03 · AC một pha</div><h2>Công suất xoay chiều</h2><p>Áp dụng cho điện áp và dòng hiệu dụng; φ là góc lệch pha.</p>
            <div class="field"><label for="ac-u">Điện áp hiệu dụng U (V)</label><input id="ac-u" type="number" min="0" step="any" value="230"></div>
            <div class="field"><label for="ac-i">Dòng điện hiệu dụng I (A)</label><input id="ac-i" type="number" min="0" step="any" value="5"></div>
            <div class="field"><label for="ac-pf">Hệ số công suất cosφ (0 đến 1)</label><input id="ac-pf" type="number" min="0" max="1" step="any" value="0.8"></div>
            <div class="result" id="ac-result" aria-live="polite"></div>
          </section>
          <section class="card tool-card"><div class="eyebrow">04 · Hệ ba pha cân bằng</div><h2>Công suất ba pha</h2><p>Công thức dùng điện áp dây và dòng điện dây RMS.</p>
            <div class="field"><label for="three-u">Điện áp dây U<sub>d</sub> (V)</label><input id="three-u" type="number" min="0" step="any" value="400"></div>
            <div class="field"><label for="three-i">Dòng điện dây I<sub>d</sub> (A)</label><input id="three-i" type="number" min="0" step="any" value="10"></div>
            <div class="field"><label for="three-pf">Hệ số công suất cosφ (0 đến 1)</label><input id="three-pf" type="number" min="0" max="1" step="any" value="0.85"></div>
            <div class="result" id="three-result" aria-live="polite"></div>
          </section>
        </div>
        <div class="callout warning" style="margin-top:17px"><strong>Giới hạn:</strong> Đây là công cụ học tập, không dùng để xác định khả năng chịu tải dây dẫn, chọn thiết bị bảo vệ hoặc nghiệm thu hệ thống điện.</div>`;
      ["ohm-u", "ohm-i", "ohm-r", "ohm-mode", "power-u", "power-i", "power-t", "ac-u", "ac-i", "ac-pf", "three-u", "three-i", "three-pf"].forEach(id => document.getElementById(id).addEventListener("input", updateCalculations));
      updateCalculations();
    }

    function numberFrom(id) { return Number(document.getElementById(id).value); }
    function validNumbers(values, nonzeroIndices = []) {
      return values.every(value => Number.isFinite(value) && value >= 0) && nonzeroIndices.every(i => values[i] > 0);
    }
    function updateCalculations() {
      const mode = document.getElementById("ohm-mode").value;
      const u = numberFrom("ohm-u"), i = numberFrom("ohm-i"), r = numberFrom("ohm-r");
      const ohmResult = document.getElementById("ohm-result");
      if (mode === "i") {
        if (!validNumbers([u, r], [1])) ohmResult.textContent = "Nhập điện áp không âm và điện trở lớn hơn 0.";
        else ohmResult.innerHTML = `<strong>I = ${format(u / r)} A</strong>Theo I = U/R`;
      } else if (mode === "u") {
        if (!validNumbers([i, r])) ohmResult.textContent = "Nhập dòng điện và điện trở không âm.";
        else ohmResult.innerHTML = `<strong>U = ${format(i * r)} V</strong>Theo U = I×R`;
      } else {
        if (!validNumbers([u, i], [1])) ohmResult.textContent = "Nhập dòng điện lớn hơn 0 và điện áp không âm.";
        else ohmResult.innerHTML = `<strong>R = ${format(u / i)} Ω</strong>Theo R = U/I`;
      }
      const pu = numberFrom("power-u"), pi = numberFrom("power-i"), pt = numberFrom("power-t");
      const pResult = document.getElementById("power-result");
      if (!validNumbers([pu, pi, pt])) pResult.textContent = "Nhập các giá trị không âm.";
      else pResult.innerHTML = `<strong>P = ${format(pu * pi)} W</strong>Điện năng ước tính: ${(pu * pi * pt / 1000).toLocaleString("vi-VN", { maximumFractionDigits: 4 })} kWh`;
      const au = numberFrom("ac-u"), ai = numberFrom("ac-i"), apf = numberFrom("ac-pf");
      const acResult = document.getElementById("ac-result");
      if (!validNumbers([au, ai, apf]) || apf > 1) acResult.textContent = "Nhập U, I không âm và hệ số công suất từ 0 đến 1.";
      else {
        const s = au * ai, p = s * apf;
        acResult.innerHTML = `<strong>P = ${format(p)} W</strong>S = ${format(s)} VA · Q = ${format(Math.sqrt(Math.max(0, s * s - p * p)))} var`;
      }
      const tu = numberFrom("three-u"), ti = numberFrom("three-i"), tpf = numberFrom("three-pf");
      const threeResult = document.getElementById("three-result");
      if (!validNumbers([tu, ti, tpf]) || tpf > 1) threeResult.textContent = "Nhập U, I không âm và hệ số công suất từ 0 đến 1.";
      else {
        const s = Math.sqrt(3) * tu * ti, p = s * tpf;
        threeResult.innerHTML = `<strong>P = ${format(p)} W</strong>S = ${format(s)} VA · Q = ${format(Math.sqrt(Math.max(0, s * s - p * p)))} var`;
      }
    }
    function format(value) { return Number(value).toLocaleString("vi-VN", { maximumFractionDigits: 5 }); }

    function renderQuiz() {
      content.innerHTML = `<div class="eyebrow">Tự đánh giá</div><h1>Kiểm tra kiến thức</h1><p class="lead">5 câu hỏi ngắn để ôn các nguyên lý cốt lõi. Chọn đáp án, sau đó bấm kiểm tra để xem lời giải.</p>
        <section class="card" id="quizForm" style="margin-top:23px">${quizItems.map((item, index) => `<div class="quiz-question"><h3>${index + 1}. ${item.q}</h3>${item.a.map((answer, option) => `<label class="quiz-option"><input type="radio" name="q${index}" value="${option}"><span>${answer}</span></label>`).join("")}<div class="quiz-feedback" id="feedback-${index}"></div></div>`).join("")}<button class="button primary" id="checkQuiz">Kiểm tra đáp án</button><div id="quizScore" style="margin-top:13px;font-size:13px;font-weight:800;color:#087d75" aria-live="polite"></div></section>
        <footer>Hãy thử tự giải trước khi xem lại chương tương ứng. Câu hỏi này chỉ kiểm tra kiến thức nền tảng.</footer>`;
      document.getElementById("checkQuiz").addEventListener("click", () => {
        let score = 0, answered = 0;
        quizItems.forEach((item, index) => {
          const selected = document.querySelector(`input[name="q${index}"]:checked`);
          const feedback = document.getElementById(`feedback-${index}`);
          if (!selected) { feedback.textContent = "Chưa chọn đáp án."; feedback.style.color = "#9a6a19"; return; }
          answered++;
          const correct = Number(selected.value) === item.correct;
          if (correct) score++;
          feedback.textContent = `${correct ? "Đúng. " : "Chưa đúng. "}${item.explain}`;
          feedback.style.color = correct ? "#087d75" : "#b34848";
        });
        document.getElementById("quizScore").textContent = `Kết quả: ${score}/${quizItems.length} câu đúng · Đã trả lời ${answered}/${quizItems.length} câu.`;
      });
    }

    function renderGlossary() {
      content.innerHTML = `<div class="eyebrow">Tra cứu nhanh</div><h1>Bảng thuật ngữ</h1><p class="lead">Các đại lượng, khái niệm và ký hiệu thường gặp trong môn Điện kỹ thuật.</p><input class="search" id="termSearch" type="search" placeholder="Tìm theo thuật ngữ hoặc mô tả…" aria-label="Tìm thuật ngữ"><div class="glossary" id="glossaryList"></div>`;
      const search = document.getElementById("termSearch");
      const list = document.getElementById("glossaryList");
      const draw = () => {
        const query = search.value.trim().toLocaleLowerCase("vi");
        const matches = glossary.filter(([term, definition]) => `${term} ${definition}`.toLocaleLowerCase("vi").includes(query));
        list.innerHTML = matches.length ? matches.map(([term, definition]) => `<article class="term"><strong>${term}</strong><p>${definition}</p></article>`).join("") : `<div class="empty">Không tìm thấy thuật ngữ phù hợp.</div>`;
      };
      search.addEventListener("input", draw);
      draw();
    }

    function bindGoButtons() {
      content.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
    }
    document.getElementById("menuButton").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
    buildNav();
    const initialPage = decodeURIComponent(location.hash.slice(1));
    navigate(initialPage || "home", false);
