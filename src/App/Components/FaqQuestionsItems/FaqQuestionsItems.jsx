import './styles.css';
import { FaqQuestions } from '../SingleQuestion/SingleQuestion';

export const FaqQuestionsItems = () => {
  const questions = [
    {
      question: 'Czy mogłabyś coś o sobie opowiedzieć?',
      answer: `Jestem osobą miłą i komunikatywną. Potrafię pracować w grupie i, bazując na niedawno wykonanym teście angielskiej badaczki Meredith Belbin, dotyczącym podziału ról w zespole, moje miejsce w zespole można określić jako "Dusza Zespołu". Osoba ta integruje zespół, jej rolą jest bowiem neutralizowanie osobistych problemów i konfliktów, a tym samym doprowadzenie do jak najlepszej współpracy wewnątrz zespołu, a cele te przedkłada nad swoje osobiste ambicje. Myślę, że w dużej mierze oddaje to mój charakter i podejście do pracy w zespole. Ponadto jestem silnie ukierunkowana na samorozwój oraz zdobywanie nowych umiejętności.`,
    },
    {
      question: 'Czym się na co dzień zajmujesz?',
      answer: `Lata przypadające na moją pracę zawodową spędziłam pracując dla samorządu województwa pomorskiego w jednej z jednostek zajmujących się planowaniem przestrzennym. Najpierw przepracowałam tam kilka lat na stanowisku sekretarki, gdzie szlifowałam w głownej mierze swoje umiejętności interpersonalne, administracyjne oraz organizacyjne, a w dalszej kolejności awansowałam do jednego z zespołów, dzięki czemu mogłam bezpośrednio uczestniczyć m.in. w tworzeniu opracowań na potrzeby województwa pomorskiego czy też organizować różnego rodzaju przedsięwzięcia, wspierające gminy w ich potrzebach.`,
    },
    {
      question: 'Dlaczego akurat IT?',
      answer: `Od pewnego czasu moim celem stała się zmiana pracy, a docelowym miejscem - branża IT. Nie będę ukrywać, że jednym z powodów jest perspektywa dobrych zarobków po latach pracy, czego nie mogę oczekiwać po sferze budżetowej. Niemniej nie jest to jedyny, ani nawet najważniejszy powód. Przede wszystkim mam poczucie, że IT oferuje bardzo dużą wolność, jeśli chodzi o ścieżki rozwoju i szeroki wachlarz zagadnień, którymi można się zajmować. Bardzo doceniam fakt, że firmy w IT mocno stawiają na rozwój pracownika - od wczesnych lat bardzo lubiłam sie uczyc nowych rzeczy i dosyć łatwo przyswajałam informacje. Jednocześnie w przyszłej pracy chciałabym zajmować się czymś, co daje realny efekt i jest komuś potrzebne, np. tworzenie aplikacji, stron internetowych, być może gier. W obecnej pracy czuję niestety brak celu w tym co robię, jako że wiele wykonywanych przez moje biuro opracowań nie ma mocy sprawczej, by mieć wpływ na bezpośrednie planowanie przestrzenne w miastach i wsiach.`,
    },
    {
      question: 'Jaka wysokość wynagrodzenia byłaby dla Ciebie odpowiednia?',
      answer: `Zdaje sobie sprawę, że na początkowym etapie trzeba w pracownika dużo zainwestować, poświęcając czas i środki. W związku z tym jestem świadoma, że z moim poziomem doświadczenia w branży IT nie mogę wymagać wiele na początek i nie mam nawet takiego zamiaru. Moja propozycja to 5500 brutto - myślę, że dla obu stron taka kwota to uczciwy kompromis.`,
    },
  ];
  return (
    <div>
      {questions.map((el) => (
        <FaqQuestions question={el.question} answer={el.answer} />
      ))}
    </div>
  );
};
