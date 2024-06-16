const questions = [
    {
        "question": "Instrukcja UPDATE służy do:",
        "answers": [
            {"text": "usuwania rekordów w bazie danych", "correct": false},
            {"text": "wstawiania rekordów w bazie danych", "correct": false},
            {"text": "aktualizacji rekordów w bazie danych", "correct": true},
            {"text": "wybierania rekordów w bazie danych", "correct": false}
        ]
    },
    {
        "question": "Instrukcja COMMIT służy do:",
        "answers": [
            {"text": "wstawiania rekordów do bazy danych", "correct": false},
            {"text": "wywoływania zmian w bazie danych", "correct": false},
            {"text": "zatwierdzania zmian w bazie danych", "correct": true},
            {"text": "aktualizacji rekordów w bazie danych", "correct": false}
        ]
    },
    {
        "question": "Za pomocą operatora UNION można:",
        "answers": [
            {"text": "utworzyć sumę dwóch tabel", "correct": false},
            {"text": "utworzyć złączenie wewnętrzne dwóch tabel", "correct": false},
            {"text": "utworzyć różnice dwóch tabel", "correct": true},
            {"text": "utworzyć złączenie zewnętrzne dwóch tabel", "correct": false}
        ]
    },
    {
        "question": "Co będzie wynikiem realizacji instrukcji SELECT * FROM Emp WHERE EmployeeID <> NULL?",
        "answers": [
            {"text": "relacja Emp", "correct": false},
            {"text": "relacja pusta", "correct": true},
            {"text": "instrukcja jest niepoprawna", "correct": false},
            {"text": "Null", "correct": false}
        ]
    },
    {
        "question": "Jaka jest wartość wyrażenia true OR Null:",
        "answers": [
            {"text": "Null", "correct": false},
            {"text": "jest nieokreślone", "correct": false},
            {"text": "true", "correct": true},
            {"text": "false", "correct": false}
        ]
    },
    {
        "question": "Jaka jest wartość wyrażenia Null = Null:",
        "answers": [
            {"text": "Null", "correct": true},
            {"text": "jest nieokreślone", "correct": false},
            {"text": "true", "correct": false},
            {"text": "false", "correct": false}
        ]
    },
    {
        "question": "Encji odpowiada w relacyjnej bazie danych:",
        "answers": [
            {"text": "kolumna w tabeli", "correct": false},
            {"text": "wiersz w tabeli", "correct": false},
            {"text": "tabela", "correct": true},
            {"text": "klucz obcy", "correct": false}
        ]
    },
    {
        "question": "Związek wieloznaczny to związek:",
        "answers": [
            {"text": "jeden do jeden", "correct": false},
            {"text": "jeden do wiele", "correct": false},
            {"text": "wiele do wiele", "correct": true},
            {"text": "żaden z wymienionych", "correct": false}
        ]
    },
    {
        "question": "Które z poniższych stwierdzeń są prawdziwe:",
        "answers": [
            {"text": "schemat bazy danych powinien być przynajmniej w 2NF", "correct": false},
            {"text": "każdy fakt przechowywany w bazie danych powinien być w niej wyrażony tylko na jeden sposób", "correct": true},
            {"text": "schemat bazy danych musi być w BCNF", "correct": false},
            {"text": "należy zapytać użytkownika czy schemat bazy danych jest w 3NF", "correct": false}
        ]
    },
    {
        "question": "Warunkiem koniecznym i wystarczającym dla postaci normalnej 3NF jest to, że schemat spełnia postać 2NF oraz:",
        "answers": [
            {"text": "wartość klucza obcego może być null wartością odpowiadającą do klucza głównego", "correct": false},
            {"text": "wartości w kolumnie niekluczowej nie mogą zależeć przechodnio od klucza", "correct": false},
            {"text": "w każdej tabeli powinien istnieć dokładnie jeden klucz obcy", "correct": true},
            {"text": "każda nietrywialna zależność funkcyjna jest zależnością od klucza", "correct": false}
        ]
    },
    {
        "question": "Za tą tabelą powinna się składać postać znormalizowana baza z uwzględnieniem informacji o studentach, grupach i przynależności 'wiele do jeden' między nimi:",
        "answers": [
            {"text": "1", "correct": false},
            {"text": "2", "correct": false},
            {"text": "3", "correct": true},
            {"text": "4", "correct": false}
        ]
    },
    {
        "question": "Gdy schemat tabeli nie jest w trzeciej postaci normalnej mamy do czynienia z:",
        "answers": [
            {"text": "redundancją", "correct": true},
            {"text": "anomaliami przy wstawianiu", "correct": false},
            {"text": "anomaliami przy usuwaniu", "correct": false},
            {"text": "anomaliami przy modyfikacji", "correct": false}
        ]
    },
    {
        "question": "Kto jest twórcą relacyjnego modelu danych:",
        "answers": [
            {"text": "Bill Gates", "correct": false},
            {"text": "Charles Bachman", "correct": false},
            {"text": "Peter Chen", "correct": false},
            {"text": "Edgar Codd", "correct": true}
        ]
    },
    {
        "question": "W której firmie zaimplementowano pierwszy system zarządzania relacyjną bazą danych:",
        "answers": [
            {"text": "Microsoft", "correct": false},
            {"text": "Relational Software", "correct": false},
            {"text": "IBM", "correct": true},
            {"text": "Sun", "correct": false}
        ]
    },
    {
        "question": "Różnica między procedurą a funkcją składaną w m.in. polega na tym, że:",
        "answers": [
            {"text": "tylko funkcja może modyfikować dane", "correct": false},
            {"text": "tylko procedura może posiadać parametry", "correct": false},
            {"text": "tylko procedura może być użyta w klauzuli WHERE", "correct": false},
            {"text": "tylko funkcja może być użyta w klauzuli HAVING", "correct": true}
        ]
    },
	    {
        "question": "Dany jest schemat relacyjny R=(Wykładowca, Przedmiot, Ocena) i zachodzą następujące zależności funkcyjne: F = {Ocena → Przedmiot; Ocena → Wykładowca; Wykładowca → Przedmiot} Schemat R:",
        "answers": [
            {"text": "jest w postaci normalnej Boyce’a-Codda", "correct": false},
            {"text": "jest w 3NF ale nie jest w postaci normalnej Boyce’a-Codda", "correct": true},
            {"text": "jest w 2NF", "correct": false},
            {"text": "nie jest w 3NF ani w postaci normalnej Boyce’a-Codda", "correct": false}
        ]
    },
    {
        "question": "Tabele LINIE_TRAMWAJOWE i PRZYSTANKI połączone są związkiem (dla Warszawy):",
        "answers": [
            {"text": "jeden - wiele", "correct": false},
            {"text": "wiele - wiele", "correct": false},
            {"text": "jeden-jeden", "correct": false},
            {"text": "wymagającym dodatkowej tabeli asocjacyjnej", "correct": true}
        ]
    },
    {
        "question": "Które z poniższych poleceń określają więzy spójności:",
        "answers": [
            {"text": "DISTINCT", "correct": false},
            {"text": "EXCEPT", "correct": false},
            {"text": "DEFAULT", "correct": false},
            {"text": "UNIQUE", "correct": true}
        ]
    },
    {
        "question": "Które z poniższych poleceń służy do usunięcia wszystkich wierszy z tabeli, bez wpływu na własność IDENTITY:",
        "answers": [
            {"text": "DELETE TABLE nazwa_tabeli", "correct": false},
            {"text": "DROP TABLE nazwa_tabeli", "correct": false},
            {"text": "CREATE TABLE nazwa_tabeli", "correct": false},
            {"text": "TRUNCATE TABLE nazwa_tabeli", "correct": true}
        ]
    },
    {
        "question": "Które z poniższych zapytań wybiera nazwiska i pensje pracowników, których pensja jest w zakresie od 1000 do 2000:",
        "answers": [
            {"text": "SELECT ename, sal FROM Emp WHERE sal >= 1000 AND sal >= 2000", "correct": false},
            {"text": "SELECT ename, sal FROM Emp WHERE sal <= 1000 OR sal >= 2000", "correct": false},
            {"text": "SELECT ename, sal FROM Emp WHERE sal >= 1000 AND sal <= 2000", "correct": true},
            {"text": "SELECT ename, sal FROM Emp WHERE sal <= 1000 AND sal <= 2000", "correct": false}
        ]
    },
    {
        "question": "W przypadku wyrażenia 1000 >= ALL(podzapytanie):",
        "answers": [
            {"text": "podzapytanie zwraca jeden wiersz", "correct": false},
            {"text": "podzapytanie zwraca relację z jedną kolumną", "correct": true},
            {"text": "podzapytanie zwraca dowolną relację", "correct": false},
            {"text": "podzapytanie zwraca dokładnie jedną kolumnę", "correct": false}
        ]
    },
    {
        "question": "Co oznacza warunek: 1000 >= ANY (SELECT sal FROM Emp):",
        "answers": [
            {"text": "1000 większe lub równe od zarobków każdego z pracowników", "correct": false},
            {"text": "1000 większe lub równe od zarobków któregokolwiek z pracowników", "correct": true},
            {"text": "1000 mniejsze lub równe od zarobków każdego z pracowników", "correct": false},
            {"text": "1000 mniejsze lub równe od zarobków któregokolwiek z pracowników", "correct": false}
        ]
    },
    {
        "question": "Wskaż aksjomaty wykonywania transakcji:",
        "answers": [
            {"text": "wycofywalność", "correct": true},
            {"text": "trwałość", "correct": false},
            {"text": "spójność", "correct": false},
            {"text": "niezawodność", "correct": false}
        ]
    },
    {
        "question": "Plan odtwarzania zapewnia:",
        "answers": [
            {"text": "atomowość i wydajność", "correct": false},
            {"text": "spójność i wydajność", "correct": false},
            {"text": "atomowość i trwałość", "correct": true},
            {"text": "spójność i szeregowość", "correct": false}
        ]
    },
    {
        "question": "Aby odwołać zmiany wprowadzone przez transakcje należy użyć polecenia:",
        "answers": [
            {"text": "COMMIT", "correct": false},
            {"text": "ROLLBACK", "correct": true},
            {"text": "UNDO", "correct": false},
            {"text": "DELETE", "correct": false}
        ]
    },
    {
        "question": "Jakie rodzaje podzapytań zwracają taką samą wartość dla każdego wiersza nadzapytania:",
        "answers": [
            {"text": "podzapytanie skorelowane", "correct": false},
            {"text": "podzapytanie nieskorelowane", "correct": true},
            {"text": "podzapytanie grupujące", "correct": false},
            {"text": "podzapytanie porządkujące", "correct": false}
        ]
    },
    {
        "question": "Który z predykatów sprawdza, czy wyrażenie zwraca niepusty zbiór:",
        "answers": [
            {"text": "EXISTS", "correct": true},
            {"text": "EXIST", "correct": false},
            {"text": "NOT EXIST", "correct": false},
            {"text": "NOT EXISTS", "correct": false}
        ]
    },
    {
        "question": "Perspektywy mogą być:",
        "answers": [
            {"text": "modyfikowalne", "correct": false},
            {"text": "tylko do odczytu", "correct": false},
            {"text": "opcją sprawdzania", "correct": true},
            {"text": "źródłem danych dla innych perspektyw", "correct": false}
        ]
    },
    {
        "question": "Wskaż poprawne zapytania SQL znajdujące stanowiska, na których minimalny zarobek jest niższy niż 2000:",
        "answers": [
            {"text": "SELECT job FROM Emp HAVING MIN(sal) < 2000", "correct": false},
            {"text": "SELECT job FROM Emp GROUP BY job HAVING MIN(sal) < 2000", "correct": true},
            {"text": "SELECT job FROM Emp GROUP BY job WHERE MIN(sal) < 2000", "correct": false},
            {"text": "SELECT job FROM Emp WHERE MIN(sal) < 2000 GROUP BY job", "correct": false}
        ]
    },
    {
        "question": "Poziom izolacji transakcji REPEATABLE READ zapewnia:",
        "answers": [
            {"text": "odtwarzalność", "correct": false},
            {"text": "maksymalny poziom współbieżności transakcji", "correct": false},
            {"text": "brak anomalii powtórnego czytania", "correct": true},
            {"text": "brak fantomów", "correct": false}
        ]
    }
];

document.getElementById('start-btn').addEventListener('click', startQuiz);

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let userAnswers = [];

function startQuiz() {
    shuffleArray(questions);
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('counters').style.display = 'flex';
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('results-container').classList.add('d-none');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    shuffleArray(question.answers);

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2 class="question font-weight-bold">${question.question}</h2>
        <div class="answers">
            ${question.answers.map(answer => `
                <div class="form-check answer">
                    <input type="checkbox" class="form-check-input" id="answer${currentQuestionIndex}-${answer.text}" value="${answer.correct}">
                    <label class="form-check-label" for="answer${currentQuestionIndex}-${answer.text}">${answer.text}</label>
                </div>
            `).join('')}
        </div>
        <div>
            <button class="btn btn-success d-block" onclick="checkAnswer()">Następne</button>
        </div>
        <br/>
        <div>
            <button class="btn btn-primary d-block" onclick="showResults()">Przejdź do podsumowania</button>
        </div>
    `;

    document.getElementById('question-counter').innerText = `Pytanie ${currentQuestionIndex + 1}/${questions.length}`;
}

function checkAnswer() {
    const answers = document.querySelectorAll('.answer input');
    let isCorrect = true;
    let userAnswerText = '';

    answers.forEach(answer => {
        if (answer.checked) {
            userAnswerText = answer.parentNode.textContent.trim();
            if (answer.value === 'false') {
                isCorrect = false;
            }
        } else if (answer.value === 'true') {
            isCorrect = false;
        }
    });

    userAnswers.push(userAnswerText);

    if (isCorrect) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    document.getElementById('correct-answers').innerText = `Poprawne: ${correctAnswers}`;
    document.getElementById('incorrect-answers').innerText = `Błedne: ${incorrectAnswers}`;

    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    document.getElementById('quiz-container').classList.add('d-none');
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.classList.remove('d-none');

    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = questions.map((question, index) => `
        <tr>
            <td>${question.question}</td>
            <td style="color: ${isAnswerCorrect(question, userAnswers[index]) ? 'green' : 'red'}">
                ${userAnswers[index]}
            </td>
            <td>${getCorrectAnswer(question)}</td>
        </tr>
    `).join('');
}

function isAnswerCorrect(question, userAnswer) {
    const correctAnswer = getCorrectAnswer(question);
    return userAnswer === correctAnswer;
}

function getUserAnswer(question, index) {
    return userAnswers[index];
}

function getCorrectAnswer(question) {
    return question.answers.find(answer => answer.correct).text;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    userAnswers = [];
    document.getElementById('correct-answers').innerText = 'Poprawne: 0';
    document.getElementById('incorrect-answers').innerText = 'Błędne: 0';
    document.getElementById('quiz-container').innerHTML = '<h2>Kliknij start aby rozpocząć test [SQL]</h2><button id="start-btn" class="btn btn-success">Start</button>';
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('start-btn').style.display = 'inline-block';
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('counters').style.display = 'none';
    document.getElementById('results-container').classList.add('d-none');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}