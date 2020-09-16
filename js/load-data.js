function loadData() {
    const json = '{\n' +
        '\t"realizacje": {\n' +
        '\t\t"1": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej we ws Gromadzyń z włączeniem do sieci w Mierzowicach oraz budowa sieci wodociągowej i sieci kanalizacji sanitarnej we wsi Kwiatkowice",\n' +
        '\t\t\t"inwestor": "Gmina Prochowice",\n' +
        '\t\t\t"okres": "2016-2017"\n' +
        '\t\t},\n' +
        '\t\t"2": {\n' +
        '\t\t\t"opis": "Przepusty stalowe łukowo - kołowe przy budowie drogi ekspresowej S3",\n' +
        '\t\t\t"inwestor": "Budimex S.A.",\n' +
        '\t\t\t"okres": "2015-2018"\n' +
        '\t\t},\n' +
        '\t\t"3": {\n' +
        '\t\t\t"opis": "Przebudowa drogi gminnej w Godziszowej",\n' +
        '\t\t\t"inwestor": "PTB Wrocław Sp. z o.o.",\n' +
        '\t\t\t"okres": 2016\n' +
        '\t\t},\n' +
        '\t\t"4": {\n' +
        '\t\t\t"opis": "Usuwanie szkód powodziowych na cieku Ośna w m. Marczów gm. Wleń",\n' +
        '\t\t\t"inwestor": "Dolnośląski Zarząd Melioracji i Urządzeń Wodnych we Wrocławiu O|Lwówek Sląski",\n' +
        '\t\t\t"okres": 2016\n' +
        '\t\t},\n' +
        '\t\t"5": {\n' +
        '\t\t\t"opis": "Kompleksowe wykonanie montażu przepustów żelbetowych droga ekspresowa S3",\n' +
        '\t\t\t"inwestor": "Mota Engil Central Europe S.A.",\n' +
        '\t\t\t"okres": 2017\n' +
        '\t\t},\n' +
        '\t\t"6": {\n' +
        '\t\t\t"opis": "Budowa siecia kanalizacji sanitarnej w Łażanach z przesyłem do systemu kanalizacji sanitarnej w Żarowie",\n' +
        '\t\t\t"inwestor": "Gmina Żarów",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"7": {\n' +
        '\t\t\t"opis": "Budowa kanalizacji sanitarnej MOP, sieci wodociągowej MOP wraz z przyłączem i zbiornikami ppoż., zbiorników retencyjnych oraz przebudową kanalizacji sanitarnej - droga ekspresowa S3",\n' +
        '\t\t\t"inwestor": "Eurovia Polska S.A.",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"8": {\n' +
        '\t\t\t"opis": "Budowa kanalizacji sanitarnej w miejscowości Wrocisławice oraz sieci tłocznej kanalizacji sanitarnej  z miejscowości Wrocisławice do miejscowości Bukówek",\n' +
        '\t\t\t"inwestor": "Średzka Woda Spółka z o.o. Środa Śląska",\n' +
        '\t\t\t"okres": 2017\n' +
        '\t\t},\n' +
        '\t\t"9": {\n' +
        '\t\t\t"opis": "Rozbudowa kanalizacji  sanitarnej wraz z pompownią w Wołowie",\n' +
        '\t\t\t"inwestor": "PWK Wołów Sp. z o.o.",\n' +
        '\t\t\t"okres": 2017\n' +
        '\t\t},\n' +
        '\t\t"10": {\n' +
        '\t\t\t"opis": "Przebudowa drogi powiatowej oraz budowa chodnika i kanalizacji deszczowej w Sichowie, gmina Męcinka, powiat jaworski",\n' +
        '\t\t\t"inwestor": "Gmina Męcinka",\n' +
        '\t\t\t"okres": 2017\n' +
        '\t\t},\n' +
        '\t\t"11": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej oraz wodociągowej w Siekierzycach",\n' +
        '\t\t\t"inwestor": "Gmina Mściwojów",\n' +
        '\t\t\t"okres": 2017\n' +
        '\t\t},\n' +
        '\t\t"12": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej z przyłączami w miejscowości Sieroszowice i Strogoborzyce wraz z przebudową sieci wodociągowych i budową oczyszczalni ścieków w miejscowości Buczyna",\n' +
        '\t\t\t"inwestor": "Gmina Radwanice",\n' +
        '\t\t\t"okres": "2017-2019"\n' +
        '\t\t},\n' +
        '\t\t"13": {\n' +
        '\t\t\t"opis": "Budowa nowej i przebudowa istniejącej kanalizacji sanitarnej oraz rozbudowa mechaniczno - biologicznej oczyszczalni ścieków w miejscowości Budziszów Wielki ",\n' +
        '\t\t\t"inwestor": "Gmina Wądroże Wielkie",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"14": {\n' +
        '\t\t\t"opis": "Budowa rurociągu przesyłowego kanalizacji sanitarnej z Osłej do Gromadki",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"15": {\n' +
        '\t\t\t"opis": "Budowa kanalizacji sanitarnej i sieci wodociągowej we wsi Mrowiny",\n' +
        '\t\t\t"inwestor": "Gmina Żarów",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"16": {\n' +
        '\t\t\t"opis": "Przełożenie trasy koryta rowu",\n' +
        '\t\t\t"inwestor": "Wienerberger Ceramika Budowlana Sp. z o.o.",\n' +
        '\t\t\t"okres": 2017\n' +
        '\t\t},\n' +
        '\t\t"17": {\n' +
        '\t\t\t"opis": "Sanitacja Miasta i Gminy Pieńsk",\n' +
        '\t\t\t"inwestor": "Gmina Pieńsk",\n' +
        '\t\t\t"okres": "2017-2019"\n' +
        '\t\t},\n' +
        '\t\t"18": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej z przyłączami w miejscowości Osła",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"19": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej z przyłączami w miejscowości Różyniec",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"20": {\n' +
        '\t\t\t"opis": "Budowa kanalizacji sanitarnej w Krzydlinie małej, Krzydlinie Wielkiej i Domaszkowie",\n' +
        '\t\t\t"inwestor": "PWK Wołów Sp z o.o.",\n' +
        '\t\t\t"okres": "2017-2019"\n' +
        '\t\t},\n' +
        '\t\t"21": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej we wsi Golanka Dolna",\n' +
        '\t\t\t"inwestor": "Gmina Prochowice",\n' +
        '\t\t\t"okres": "2017-2018"\n' +
        '\t\t},\n' +
        '\t\t"22": {\n' +
        '\t\t\t"opis": "Sieć wodociągowa wraz z przyłączami do budynków dla wsi Myślinów",\n' +
        '\t\t\t"inwestor": "Gmina Męcinka",\n' +
        '\t\t\t"okres": "2017-2019"\n' +
        '\t\t},\n' +
        '\t\t"23": {\n' +
        '\t\t\t"opis": "Usunięcie kolizji infrastruktury",\n' +
        '\t\t\t"inwestor": "ZWiK Żarów Sp. z o.o.",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"24": {\n' +
        '\t\t\t"opis": "Budowa kanalizacji sanitarnej i sieci wodociągowej we wsi Mrowiny - etap II",\n' +
        '\t\t\t"inwestor": "Gmina Żarów",\n' +
        '\t\t\t"okres": "2018-2019"\n' +
        '\t\t},\n' +
        '\t\t"25": {\n' +
        '\t\t\t"opis": "Budowa kanalizacji sanitarnej w miejscowości Lipnica oraz sieci tłocznej kanalizacji kanalizacji sanitarnej z miejscowości Lipnica do miejscowości Szczepanów",\n' +
        '\t\t\t"inwestor": "Średzka Woda Spółka z o.o. Środa Śląska",\n' +
        '\t\t\t"okres": "2018-2019"\n' +
        '\t\t},\n' +
        '\t\t"26": {\n' +
        '\t\t\t"opis": "Przejście pod torami kolejowymi",\n' +
        '\t\t\t"inwestor": "Gmina Żarów",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"27": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej dla miejscowości Dobków",\n' +
        '\t\t\t"inwestor": "Gmina Świerzawa",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"28": {\n' +
        '\t\t\t"opis": "Budowa odcinka kanalizacji sanitarnej w ulicy Leśnej w Gromadce",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"29": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej dla wsi Golanka Dolna",\n' +
        '\t\t\t"inwestor": "Gmina Prochowice",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"30": {\n' +
        '\t\t\t"opis": "Wykonanie nawierzchni bitumicznej ul. Leśna Gromadka",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"31": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej z przyłączami w miejscowości Różyniec",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"32": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej z przyłączami w miejscowości Osła",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"33": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej z przyłączami w miejscowości Osła",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"34": {\n' +
        '\t\t\t"opis": "Budowa sieci kanalizacji sanitarnej z przyłączami w miejscowości Różyniec",\n' +
        '\t\t\t"inwestor": "Gmina Gromadka",\n' +
        '\t\t\t"okres": 2018\n' +
        '\t\t},\n' +
        '\t\t"35": {\n' +
        '\t\t\t"opis": "Sieci zewnętrzne kanalizacji sanitarnej, deszczowej, wodociągowej - Centrum Handlowe Carrefour Zgorzelec",\n' +
        '\t\t\t"inwestor": "WPW Invest Sp. z o.o.",\n' +
        '\t\t\t"okres": 2019\n' +
        '\t\t},\n' +
        '\t\t"36": {\n' +
        '\t\t\t"opis": "Remont i modernizacja przepompowni ścieków",\n' +
        '\t\t\t"inwestor": "Gmina Wądroże Wielkie",\n' +
        '\t\t\t"okres": 2019\n' +
        '\t\t},\n' +
        '\t\t"37": {\n' +
        '\t\t\t"opis": "Modernizacja budynku szkoły przy ul Reymonta w Chojnowie wraz z zagospodarowaniem terenu",\n' +
        '\t\t\t"inwestor": "Gmina Miejska w Chojnowie",\n' +
        '\t\t\t"okres": 2019\n' +
        '\t\t},\n' +
        '\t\t"38": {\n' +
        '\t\t\t"opis": "Wykonanie odwodnienia ciągów drogowych w miejscowości Lipnica celem zabezpieczenia przed wodami opadowymi",\n' +
        '\t\t\t"inwestor": "Gmina Środa Śląska",\n' +
        '\t\t\t"okres": 2019\n' +
        '\t\t},\n' +
        '\t\t"39": {\n' +
        '\t\t\t"opis": "Uporządkowanie gospodarki wodno-ściekowej na terenie aglomeracji Sława - etap I",\n' +
        '\t\t\t"inwestor": "ZWiK Sława Sp. z o.o.",\n' +
        '\t\t\t"okres": "2018-2021"\n' +
        '\t\t}\n' +
        '\t}\n' +
        '}'
    const JSONParsed = JSON.parse(json);
    const container = document.getElementById('table-realizacje')
    let table = document.createElement('table')

    let row = document.createElement('thead')
    let data = document.createElement('td')
    data.innerText = 'Opis'
    row.appendChild(data)
    data = document.createElement('td')
    data.innerText = 'Inwestor'
    row.appendChild(data)
    data = document.createElement('td')
    data.innerText = 'Okres realizacji'
    row.appendChild(data)
    table.appendChild(row)
    for (const [key, value] of Object.entries(JSONParsed.realizacje)) {
        row = document.createElement('tr')
        data = document.createElement('td')
        data.innerText = value.opis
        row.appendChild(data)
        data = document.createElement('td')
        data.innerText = value.inwestor
        row.appendChild(data)
        data = document.createElement('td')
        data.innerText = value.okres
        row.appendChild(data)
        table.appendChild(row)
    }
    container.appendChild(table)
}
loadData()