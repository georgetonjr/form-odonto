import React, {useState, useEffect} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import * as options from '../arrays';
import api from '../../Services/api';
import {getUser} from '../../Services/auth';

const FichaClinica = props => {
  const history = useHistory();
  document.title = 'Ficha Clinica';
  const [user, setUser] = useState();
  const nameform = 'Ficha Clinica';

  const [check, setCheck] = useState(true)
  const [professores, setProfessores] = useState([]); 
  const[veiculo, setVeiculo] = useState();
  const[doencNaoPergutadas, setDoencNaoPergutadas] = useState();
  const[fumo, setFumo] = useState();
  const[drogailicitas, setDrogailicitas] = useState();
  const[usodealcool, setUsodealcool] = useState();
  const[nomePaciente, setNomePaciente] = useState(); 
  const[odontograma, setOdontograma]= useState("https://res.cloudinary.com/dtycv9fro/image/upload/v1606433665/odonto_on2gac.png");
  const[professor, setProfessor] = useState();
  const[cpf, setCpf] = useState();
  const[telefone, setTelefone] = useState();
  const[rg, setRg] = useState();
  const[dataexpedicaorg, setDataexpedicaorg] = useState();
  const[orgaoexpeditor, setOrgaoexpeditor] = useState();
  const[cep, setCep] = useState();
  const[uf, setUf] = useState();
  const[cidade, setCidade] = useState();
  const[bairro, setBairro] = useState();
  const[endereco, setEndereco] = useState();
  const[numero, setNumero] = useState();
  const[complemento, setComplemento] = useState();
  const[nacionalidades, setNacionalidades] = useState();
  const[profissao, setProfissao] = useState();
  const[nomeMae, setNomeMae] = useState();
  const[nomePai, setNomePai] = useState();
  const[estadoCivil, setEstadoCivil] = useState();
  const[nivelEscolaridade, setNivelEscolaridade] = useState();
  const[atividadeRemunerada, setAtividadeRemunerada] = useState();
  const[auxilioGoverno, setAuxilioGoverno] = useState();
  const[auxilioValor, setAuxilioValor] = useState();
  const[outroMembroFamiliaTrabalha, setOutroMembroFamiliaTrabalha] = useState();
  const[outroMembroTrabalhaQuem, setOutroMembroTrabalhaQuem] = useState();
  const[rendaFamiliar, setRendaFamiliar] = useState();
  const[quantosVeiculos, setQuantosVeiculos] = useState();
  const[residencia, setResidencia] = useState();
  const[numeroDeComodos, setNumeroDeComodos] = useState();
  const[numeroDeBanheiros, setNumeroDeBanheiros] = useState();
  const[tranportePulico, setTranportePulico] = useState();
  const[tranportePublicoOutro, setTranportePublicoOutro] = useState();
  const[queixaPrincipal, setQueixaPrincipal] = useState();
  const[historicoDeDoencaAtual, setHistoricoDeDoencaAtual] = useState();
  const[antecedentesFamiliares, setAntecedentesFamiliares] = useState();
  const[questionarioSaudeData01, setQuestionarioSaudeData01] = useState();
  const[questionarioSaudeData02, setQuestionarioSaudeData02] = useState();
  const[questionarioSaudeData03, setQuestionarioSaudeData03] = useState();
  const[tratamentoMedico01, setTratamentoMedico01] = useState();
  const[tratamentoMedico02, setTratamentoMedico02] = useState();
  const[tratamentoMedico03, setTratamentoMedico03] = useState();
  const [tomaAlgumaMedicacaoQual ,setTomaAlgumaMedicacaoQual] = useState();
  const[tomaAlgumaMedicacao01, setTomaAlgumaMedicacao01] = useState();
  const[tomaAlgumaMedicacao02, setTomaAlgumaMedicacao02] = useState();
  const[tomaAlgumaMedicacao03, setTomaAlgumaMedicacao03] = useState();
  const [historicoDeAlergiaQual ,setHistoricoDeAlergiaQual] = useState();
  const[historicoDeAlergia01, setHistoricoDeAlergia01] = useState();
  const[historicoDeAlergia02, setHistoricoDeAlergia02] = useState();
  const[historicoDeAlergia03, setHistoricoDeAlergia03] = useState();
  const[problemasRespiratorios01Qual, setProblemasRespiratorios01Qual] = useState();
  const[problemasRespiratorios01, setProblemasRespiratorios01 ] = useState();
  const[problemasRespiratorios02, setProblemasRespiratorios02 ] = useState();
  const[problemasRespiratorios03, setProblemasRespiratorios03 ] = useState();
  const[doencaArticular01Qual, setDoencaArticular01Qual ] = useState();
  const[doencaArticular01, setDoencaArticular01 ] = useState();
  const[doencaArticular02, setDoencaArticular02 ] = useState();
  const[doencaArticular03, setDoencaArticular03 ] = useState();
  const[disturbioSanguineo01Qual, setDisturbioSanguineo01Qual ] = useState();
  const[disturbioSanguineo01, setDisturbioSanguineo01 ] = useState();
  const[disturbioSanguineo02, setDisturbioSanguineo02 ] = useState();
  const[disturbioSanguineo03, setDisturbioSanguineo03 ] = useState();
  const[tratamentoRadioterapicoDeTumor01Qual, setTratamentoRadioterapicoDeTumor01Qual ] = useState();
  const[tratamentoRadioterapicoDeTumor01, setTratamentoRadioterapicoDeTumor01 ] = useState();
  const[tratamentoRadioterapicoDeTumor02, setTratamentoRadioterapicoDeTumor02 ] = useState();
  const[tratamentoRadioterapicoDeTumor03, setTratamentoRadioterapicoDeTumor03 ] = useState();
  const[tratamentoQuimioterapicoDeTumor01Qual, setTratamentoQuimioterapicoDeTumor01Qual ] = useState();
  const[tratamentoQuimioterapicoDeTumor01, setTratamentoQuimioterapicoDeTumor01 ] = useState();
  const[tratamentoQuimioterapicoDeTumor02, setTratamentoQuimioterapicoDeTumor02 ] = useState();
  const[tratamentoQuimioterapicoDeTumor03, setTratamentoQuimioterapicoDeTumor03 ] = useState();
  const[temDiabetes01, setTemDiabetes01 ] = useState();
  const[temDiabetes02, setTemDiabetes02 ] = useState();
  const[temDiabetes03, setTemDiabetes03 ] = useState();
  const[temHepatite01Qual, setTemHepatite01Qual ] = useState();
  const[temHepatite01, setTemHepatite01 ] = useState();
  const[temHepatite02, setTemHepatite02 ] = useState();
  const[temHepatite03, setTemHepatite03 ] = useState();
  const[vacinaContraHepatite01, setVacinaContraHepatite01 ] = useState();
  const[vacinaContraHepatite02, setVacinaContraHepatite02 ] = useState();
  const[vacinaContraHepatite03, setVacinaContraHepatite03 ] = useState();
  const[problemaRenal01, setProblemaRenal01 ] = useState();
  const[problemaRenal02, setProblemaRenal02 ] = useState();
  const[problemaRenal03, setProblemaRenal03 ] = useState();
  const[alteracaoHormonal01Qual, setAlteracaoHormonal01Qual ] = useState();
  const[alteracaoHormonal01, setAlteracaoHormonal01 ] = useState();
  const[alteracaoHormonal02, setAlteracaoHormonal02 ] = useState();
  const[alteracaoHormonal03, setAlteracaoHormonal03 ] = useState();
  const[problemaHepatico01, setProblemaHepatico01 ] = useState();
  const[problemaHepatico02, setProblemaHepatico02 ] = useState();
  const[problemaHepatico03, setProblemaHepatico03 ] = useState();
  const[problemaEstomacal01Qual, setProblemaEstomacal01Qual ] = useState();
  const[problemaEstomacal01, setProblemaEstomacal01 ] = useState();
  const[problemaEstomacal02, setProblemaEstomacal02 ] = useState();
  const[problemaEstomacal03, setProblemaEstomacal03 ] = useState();
  const[temSifilisOuOutraDST01, setTemSifilisOuOutraDST01 ] = useState();
  const[temSifilisOuOutraDST02, setTemSifilisOuOutraDST02 ] = useState();
  const[temSifilisOuOutraDST03, setTemSifilisOuOutraDST03 ] = useState();
  const[herpesOuAftas01, setHerpesOuAftas01 ] = useState();
  const[herpesOuAftas02, setHerpesOuAftas02 ] = useState();
  const[herpesOuAftas03, setHerpesOuAftas03 ] = useState();
  const[hivPositivo01, setHivPositivo01 ] = useState();
  const[hivPositivo02, setHivPositivo02 ] = useState();
  const[hivPositivo03, setHivPositivo03 ] = useState();
  const[algumaSindromeOuComprometimentoMental01Qual, setAlgumaSindromeOuComprometimentoMental01Qual ] = useState();
  const[algumaSindromeOuComprometimentoMental01, setAlgumaSindromeOuComprometimentoMental01 ] = useState();
  const[algumaSindromeOuComprometimentoMental02, setAlgumaSindromeOuComprometimentoMental02 ] = useState();
  const[algumaSindromeOuComprometimentoMental03, setAlgumaSindromeOuComprometimentoMental03 ] = useState();
  const[temEplepsia01, setTemEplepsia01 ] = useState();
  const[temEplepsia02, setTemEplepsia02 ] = useState();
  const[temEplepsia03, setTemEplepsia03 ] = useState();
  const[fazTratamentoPsiquiatrico01, setFazTratamentoPsiquiatrico01 ] = useState();
  const[fazTratamentoPsiquiatrico02, setFazTratamentoPsiquiatrico02 ] = useState();
  const[fazTratamentoPsiquiatrico03, setFazTratamentoPsiquiatrico03 ] = useState();
  const[jaSeSubmeteuACirugia01Qual, setJaSeSubmeteuACirugia01Qual ] = useState();
  const[jaSeSubmeteuACirugia01, setJaSeSubmeteuACirugia01 ] = useState();
  const[jaSeSubmeteuACirugia02, setJaSeSubmeteuACirugia02 ] = useState();
  const[jaSeSubmeteuACirugia03, setJaSeSubmeteuACirugia03 ] = useState();
  const[transfusaoDeSangue01, setTransfusaoDeSangue01 ] = useState();
  const[transfusaoDeSangue02, setTransfusaoDeSangue02 ] = useState();
  const[transfusaoDeSangue03, setTransfusaoDeSangue03 ] = useState();
  const[doresDeCabecaFrequentes01, setDoresDeCabecaFrequentes01 ] = useState();
  const[doresDeCabecaFrequentes02, setDoresDeCabecaFrequentes02 ] = useState();
  const[doresDeCabecaFrequentes03, setDoresDeCabecaFrequentes03 ] = useState();
  const[cicatrizacaoLenta01, setCicatrizacaoLenta01 ] = useState();
  const[cicatrizacaoLenta02, setCicatrizacaoLenta02 ] = useState();
  const[cicatrizacaoLenta03, setCicatrizacaoLenta03 ] = useState();
  const[gravidaOuAmamentando01Qual, setGravidaOuAmamentando01Qual ] = useState();
  const[gravidaOuAmamentando01, setGravidaOuAmamentando01 ] = useState();
  const[gravidaOuAmamentando02, setGravidaOuAmamentando02 ] = useState();
  const[gravidaOuAmamentando03, setGravidaOuAmamentando03 ] = useState();
  const[doencaCardiovascular01Qual, setDoencaCardiovascular01Qual ] = useState();
  const[doencaCardiovascular01, setDoencaCardiovascular01 ] = useState();
  const[doencaCardiovascular02, setDoencaCardiovascular02 ] = useState();
  const[doencaCardiovascular03, setDoencaCardiovascular03 ] = useState();
  const[pressaoArterial01, setPressaoArterial01 ] = useState();
  const[pressaoArterial02, setPressaoArterial02 ] = useState();
  const[pressaoArterial03, setPressaoArterial03 ] = useState();
  const[condicoesDeSaude, setCondicoesDeSaude ] = useState();
  const[doencasNaoPerguntadas, setDoencasNaoPerguntadas ] = useState();
  const[cigarrosPorDia, setCigarrosPorDia ] = useState();
  const[qualCigarro, setQualCigarro ] = useState();
  const[qualDrogaIlicita, setQualDrogaIlicita ] = useState();
  const[quaisHabitos, setQuaisHabitos ]  = useState();
  const[QSObservacoes, setQSObservacoes ]  = useState();
  const[anamneseData, setAnamneseData ]  = useState();
  const[responsavelNome, setResponsavelNome ]  = useState();
  const[dData, setDData ]  = useState();
  const[CPD, setCPD ]  = useState();
  const[discenteNome, setDiscenteNome ]  = useState();
  const[docenteData1, setDocenteData1 ]  = useState();
  const[docenteNome1, setDocenteNome1 ]  = useState();
  const[docenteNome2, setDocenteNome2 ]  = useState();
  const[docenteData2, setDocenteData2 ]  = useState();
  const[docenteData3, setDocenteData3 ]  = useState();
  const[docenteNome3, setDocenteNome3 ]  = useState();
  const[realizouTratOdontoAnterior, setRealizouTratOdontoAnterior ]  = useState();
  const[tempoUtimoTrata, setTempoUtimoTrata ]  = useState();
  const[expDesagradavelDuranteTratamento, setExpDesagradavelDuranteTratamento ]  = useState();
  const[expDesagradavelDuranteTratamentQual, setExpDesagradavelDuranteTratamentQual ]  = useState();
  const[recebeuAnestesia, setRecebeuAnestesia ]  = useState();
  const[alergiaAnestesia, setAlergiaAnestesia ]  = useState();
  const[alergiaAnestesiaQual, setAlergiaAnestesiaQual ]  = useState();
  const[usoProteseDentaria, setUsoProteseDentaria ]  = useState();
  const[usoProteseDentariaQual, setUsoProteseDentariaQual ]  = useState();
  const[sangramentoGengiva, setSangramentoGengiva ]  = useState();
  const[sangramentoGengivaQuando, setSangramentoGengivaQuando ]  = useState();
  const[escovaDentesSozinho, setEscovaDentesSozinho ]  = useState();
  const[usoCremeDental, setUsoCremeDental ]  = useState();
  const[enxaguatorioDental, setEnxaguatorioDental ]  = useState();
  const[frequenciaEscovacao, setFrequenciaEscovacao ]  = useState();
  const[frequenciaFioDental, setFrequenciaFioDental ]  = useState();
  const[repiraNormalmentePeloNariz, setRepiraNormalmentePeloNariz ]  = useState();
  const[temApneia, setTemApneia ]  = useState();
  const[acordaComFaltaAr, setAcordaComFaltaAr ]  = useState();
  const[impactoAlimentar, setImpactoAlimentar ]  = useState();
  const[rangeOsDentes, setRangeOsDentes ]  = useState();
  const[doresNaATM, setDoresNaATM ]  = useState();
  const[estaloNaMandigula, setEstaloNaMandigula ]  = useState();
  const[pressaoArterial, setPressaoArterial ]  = useState();
  const[pulsoRadical, setPulsoRadical ]  = useState();
  const[frequenciaRespiratoria, setFrequenciaRespiratoria ]  = useState();
  const[temperatura, setTemperatura ]  = useState();
  const[Altura, setAltura ]  = useState();
  const [outraAtividade, setOutraAtividade] = useState();
  const[peso, setPeso ]  = useState();
  const[linfonodos , setLinfonodos ]  = useState();
  const[ATM, setATM ]  = useState();
  const[pele, setPele ]  = useState();
  const[simetriaFacial, setSimetriaFacial ]  = useState();
  const[labios, setLabios ]  = useState();
  const[glandulas, setGlandulas ]  = useState();
  const[mucosaLabial, setMucosaLabial ]  = useState();
  const[mucosaJugal, setMucosaJugal ]  = useState();
  const[regiaoRetromolar, setRegiaoRetromolar ]  = useState();
  const[gengiva, setGengiva ]  = useState();
  const[palato, setPalato ]  = useState();
  const[lingua, setLingua ]  = useState();
  const[assoalho, setAssoalho ]  = useState();
  const[orofaringe, setOrofaringe ]  = useState();
  const[descriLesao, setDescriLesao ]  = useState();
  const[hipotDiagnosticas, setHipotDiagnosticas ]  = useState();
  const[radiograficos, setRadiograficos ]  = useState();
  const[anatomopatologicos, setAnatomopatologicos ]  = useState();
  const[clinicoLaboratoriais, setClinicoLaboratoriais ]  = useState();
  const[ACB1Data, setACB1Data ]  = useState();
  const[ACB116V, setACB116V ]  = useState();
  const[ACB146L, setACB146L ]  = useState();
  const[ACB111V, setACB111V ]  = useState();
  const[ACB131L, setACB131L ]  = useState();
  const[ACB126V, setACB126V ]  = useState();
  const[ACB136L, setACB136L ]  = useState();
  const[ACB1IHOS, setACB1IHOS ]  = useState();
  const[ACB2Data, setACB2Data ]  = useState();
  const[ACB216V, setACB216V ]  = useState();
  const[ACB243L, setACB243L ]  = useState();
  const[ACB211V, setACB211V ]  = useState();
  const[ACB231L, setACB231L ]  = useState();
  const[ACB2IHOS, setACB2IHOS ]  = useState();
  const[ACB3Data, setACB3Data ]  = useState();
  const[ACB316V, setACB316V ]  = useState();
  const[ACB343L, setACB343L ]  = useState();
  const[ACB311V, setACB311V ]  = useState();
  const[ACB331L, setACB331L ]  = useState();
  const[ACB3IHOS, setACB3IHOS ]  = useState();
  const[ACB4Data, setACB4Data ]  = useState();
  const[ACB416V, setACB416V ]  = useState();
  const[ACB443L, setACB443L ]  = useState();
  const[ACB411V, setACB411V ]  = useState();
  const[ACB431L, setACB431L ]  = useState();
  const[ACB4IHOS, setACB4IHOS ]  = useState();
  const[ACBObservacoes, setACBObservacoes ]  = useState();
  const[ACBNome, setACBNome ]  = useState();
  const[ACBCPD, setACBCPD ]  = useState();
  const[vistDocente, setVistDocente ]  = useState();
  const[ACBData, setACBData ]  = useState();
  const[periodontiaCheckBox, setPeriodontiaCheckBox ]  = useState();
  const[endodontiaCheckBox, setEndodontiaCheckBox ]  = useState();
  const[dentisticaCheckBox, setDentisticaCheckBox ]  = useState();
  const[cirurgiaCheckBox, setCirurgiaCheckBox ]  = useState();
  const[proteseFixaCheckBox, setProteseFixaCheckBox ]  = useState();
  const[proteseParcialRemovivelCheckBox, setProteseParcialRemovivelCheckBox ]  = useState();
  const[proteseTotalRemovivelCheckBox, setProteseTotalRemovivelCheckBox ]  = useState();
  const[NTNome, setNTNome ]  = useState();
  const[NTCPD, setNTCPD ]  = useState();
  const[NTVistDocente, setNTVistDocente ]  = useState();
  const[NTData, setNTData ]  = useState();
  const[NTObservacoes, setNTObservacoes ]  = useState();
  const[PTDocente, setPTDocente ]  = useState();
  const[PTPontuacao, setPTPontuacao ]  = useState();
  const[PTDate, setPTDate ]  = useState();
  const [form, setform] = useState();

  const loadForm = ()=> {
    setform({
      veiculo, doencNaoPergutadas, fumo, drogailicitas, usodealcool, nomePaciente,
      odontograma, professor, cpf, telefone, rg, dataexpedicaorg, orgaoexpeditor, 
      cep, uf, cidade, bairro, endereco, numero, complemento, nacionalidades, 
      profissao, nomeMae, nomePai, estadoCivil, nivelEscolaridade, atividadeRemunerada,
      auxilioGoverno, auxilioValor, outroMembroFamiliaTrabalha, outroMembroTrabalhaQuem,
      rendaFamiliar, quantosVeiculos, residencia, numeroDeComodos, numeroDeBanheiros,
      tranportePulico, tranportePublicoOutro, queixaPrincipal, historicoDeDoencaAtual,
      antecedentesFamiliares, questionarioSaudeData01, questionarioSaudeData02,
      questionarioSaudeData03, tratamentoMedico01, tratamentoMedico02, tratamentoMedico03,
      tomaAlgumaMedicacaoQual, tomaAlgumaMedicacao01, tomaAlgumaMedicacao02, tomaAlgumaMedicacao03,
      historicoDeAlergiaQual, historicoDeAlergia01, historicoDeAlergia02,
      historicoDeAlergia03, problemasRespiratorios01Qual, problemasRespiratorios01,
      problemasRespiratorios02, problemasRespiratorios03, doencaArticular01Qual,
      doencaArticular01, doencaArticular02, doencaArticular03, disturbioSanguineo01Qual,
      disturbioSanguineo01, disturbioSanguineo02, disturbioSanguineo03, tratamentoRadioterapicoDeTumor01Qual,
      tratamentoRadioterapicoDeTumor01, tratamentoRadioterapicoDeTumor02, tratamentoRadioterapicoDeTumor03,
      tratamentoQuimioterapicoDeTumor01Qual, tratamentoQuimioterapicoDeTumor01, tratamentoQuimioterapicoDeTumor02, 
      tratamentoQuimioterapicoDeTumor03, temDiabetes01, temDiabetes02, temDiabetes03, 
      temHepatite01Qual, temHepatite01, temHepatite02, temHepatite03, vacinaContraHepatite01,
      vacinaContraHepatite02, vacinaContraHepatite03, problemaRenal01, problemaRenal02,
      problemaRenal03, alteracaoHormonal01Qual, alteracaoHormonal01, alteracaoHormonal02,
      alteracaoHormonal03, problemaHepatico01, problemaHepatico02, problemaHepatico03,
      problemaEstomacal01Qual, problemaEstomacal01, problemaEstomacal02, problemaEstomacal03,
      temSifilisOuOutraDST01,  temSifilisOuOutraDST02, temSifilisOuOutraDST03,
      herpesOuAftas01, herpesOuAftas02, herpesOuAftas03, hivPositivo01, hivPositivo02,
      hivPositivo03, algumaSindromeOuComprometimentoMental01Qual, algumaSindromeOuComprometimentoMental01,
      algumaSindromeOuComprometimentoMental02, algumaSindromeOuComprometimentoMental03,
      temEplepsia01, temEplepsia02, temEplepsia03, fazTratamentoPsiquiatrico01, 
      fazTratamentoPsiquiatrico02, fazTratamentoPsiquiatrico03, jaSeSubmeteuACirugia01Qual,
      jaSeSubmeteuACirugia01, jaSeSubmeteuACirugia02, jaSeSubmeteuACirugia03,
      transfusaoDeSangue01, transfusaoDeSangue02, transfusaoDeSangue03,
      doresDeCabecaFrequentes01, doresDeCabecaFrequentes02, doresDeCabecaFrequentes03,
      cicatrizacaoLenta01, cicatrizacaoLenta02, cicatrizacaoLenta03,
      gravidaOuAmamentando01Qual, gravidaOuAmamentando01, gravidaOuAmamentando02,
      gravidaOuAmamentando03, doencaCardiovascular01Qual, doencaCardiovascular01,
      doencaCardiovascular02, doencaCardiovascular03, pressaoArterial01, pressaoArterial02,
      pressaoArterial03, condicoesDeSaude, doencasNaoPerguntadas, cigarrosPorDia,
      qualCigarro, qualDrogaIlicita, quaisHabitos, QSObservacoes, anamneseData,
      responsavelNome, dData, CPD, discenteNome, docenteData1, docenteNome1,
      docenteNome2, docenteData2, docenteData3, docenteNome3, realizouTratOdontoAnterior,
      tempoUtimoTrata, expDesagradavelDuranteTratamento, expDesagradavelDuranteTratamentQual,  
      recebeuAnestesia, alergiaAnestesia, alergiaAnestesiaQual, usoProteseDentaria,
      usoProteseDentariaQual, sangramentoGengiva, sangramentoGengivaQuando,  
      escovaDentesSozinho, usoCremeDental, enxaguatorioDental, frequenciaEscovacao,  
      frequenciaFioDental, repiraNormalmentePeloNariz, temApneia, acordaComFaltaAr,
      impactoAlimentar, rangeOsDentes, doresNaATM, estaloNaMandigula,
      pressaoArterial, pulsoRadical, frequenciaRespiratoria, temperatura,
      Altura, outraAtividade, peso, linfonodos, ATM, pele, simetriaFacial,
      labios, glandulas, mucosaLabial, mucosaJugal, regiaoRetromolar,
      gengiva, palato, lingua, assoalho, orofaringe, descriLesao, hipotDiagnosticas,
      radiograficos, anatomopatologicos, clinicoLaboratoriais, ACB1Data,
      ACB116V, ACB146L, ACB111V, ACB131L, ACB126V, ACB136L, ACB1IHOS, ACB2Data,
      ACB216V, ACB243L, ACB211V, ACB231L, ACB2IHOS, ACB3Data, ACB316V, ACB343L,
      ACB311V, ACB331L, ACB3IHOS, ACB4Data, ACB416V, ACB443L, ACB411V, ACB431L,
      ACB4IHOS, ACBObservacoes, ACBNome, ACBCPD, vistDocente, ACBData, periodontiaCheckBox,
      endodontiaCheckBox, dentisticaCheckBox, cirurgiaCheckBox, proteseFixaCheckBox,  
      proteseParcialRemovivelCheckBox, proteseTotalRemovivelCheckBox, NTNome, 
      NTCPD, NTVistDocente, NTData, NTObservacoes, PTDocente, PTPontuacao, PTDate,
    });
  }
  const enviar = async() => {
    loadForm()
    api.post('/form/create',{
      form,
      nameform,
      aluno: user?._id,
      professor: professor
    })  
      .then(resp => {
        alert('Enviado com sucesso');
        history.goBack();
      })
      .catch(error => {
        alert('Algo deu errado, por favor tente novamente mais tarde!')
        history.goBack(); 
      })
  }

  const upload = async e =>{
    if(check === false){
      return;
    }else{
    const files = e.target.files;
    const data = new FormData()
    data.append('file', files[0]);
    data.append('upload_preset', 'z2aj0lf6');
    
    await fetch('https://api.cloudinary.com/v1_1/dtycv9fro/image/upload' ,{
        method: 'POST',
        body: data
      }).then(resp => {
        resp.json().then(r => {
          setOdontograma(r.secure_url)
          setCheck(false)
        }) 
      })
    }
  }

  useEffect(() => {
    api.get('/getallprof')
      .then(resp => setProfessores(resp.data))
      .catch(error => console.error(error.message));  
    getUser().then(r => setUser(r)); 
  }, [])

  useEffect(()=> loadForm(),[odontograma])

  return (
    <div>
      
        <select value={professor} onChange={e => setProfessor( e.target.value)} >
          <option value=''>Selecione o professor</option>
          {professores.map(item => <option key={item?._id} value={item?._id}>{item?.Nome}</option> )}
        </select>

      <h1>Ficha Clínica</h1>

      <h2>1. IDENTIFICAÇÃO DO PACIENTE</h2>

      <input
      type="text"
      name="nome"
      label="Nome"
      title="Por favor, digite seu nome completo"
      placeholder="Seu nome completo"
      required
      value={nomePaciente}
      onChange={e => setNomePaciente( e.target.value )}
    /><br/>

    <input
      type="text"
      name="cpf"
      label="CPF"
      title="Por favor, digite um CPF válido"
      placeholder="CPF"
      required
      maxLength="11"
      value={cpf}
      onChange={e => setCpf( e.target.value)}
    /><br/>

    <input
      type="text"
      name="telefone"
      label="Telefone"
      title="Por favor, digite um número de telefone incluindo o DDD, não iniciando em 0 (zero)"
      placeholder="Telefone"
      required
      maxLength="13"
      value={telefone}
      onChange={e => setTelefone(e.target.value )}
    /><br/>

    <input
      type="text"
      name="rg"
      label="RG"
      title="Por favor, digite um RG válido"
      placeholder="RG"
      required
      value={rg}
      onChange={e => setRg(e.target.value )}
    /><br/>

    <input
      name="dataex"
      label="Data de Expedição"
      title="Por favor, digite a data de expedição de seu RG"
      placeholder="Data de expedição"
      required
      maxLength="10"
      value={dataexpedicaorg}
      onChange={e => setDataexpedicaorg( e.target.value)}
    /><br/>

    <select 
      name="Orgão expeditor"  
      value={orgaoexpeditor}
      onChange={e => setOrgaoexpeditor(e.target.value)}
    >
      {options.ORGAOS_EXPEDIDORES.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <input
      type="text"
      name="cep"
      label="CEP"
      title="Por favor, digite um CEP válido"
      placeholder="CEP"
      required
      maxLength="8"
      value={cep}
      onChange={e => setCep(e.target.value )}
    /><br/>

    <input
      type="text"
      name="uf"
      label="UF"
      title="Seu o CEP digitado for válido, seu UF deve aparecer aqui"
      placeholder="UF"
      required
      value={uf}
      onChange={e => setUf(e.target.value )}
    /><br/>

    <input
      type="text"
      name="cidade"
      label="Cidade"
      title="Seu o CEP digitado for válido, sua cidade deve aparecer aqui"
      placeholder="Cidade"
      required
      value={cidade}
      onChange={e => setCidade(e.target.value )}
    /><br/>

    <input
      type="text"
      name="bairro"
      label="Bairro"
      title="Seu o CEP digitado for válido, seu bairro deve aparecer aqui"
      placeholder="Bairro"
      require
      value={bairro}
      onChange={e => setBairro(e.target.value )}
    /><br/>

    <input
      type="text"
      name="endereco"
      label="Endereço"
      title="Seu o CEP digitado for válido, seu endereço deve aparecer aqui"
      placeholder="Endereço"
      require
      value={endereco}
      onChange={e => setEndereco(e.target.value )}
    /><br/>

    <input
      type="text"
      name="num"
      label="Número"
      title="Por favor, digite o número de sua casa/apartamento"
      placeholder="Número"
      required
      value={numero}
      onChange={e => setNumero( e.target.value )}
    /><br/>

    <input
      type="text"
      name="complemento"
      label="Complemento"
      title="Por favor, digite o complemento de seu endereço, se houver"
      placeholder="Complemento"
      value={complemento}
      onChange={e => setComplemento(e.target.value )}
    /><br/>

    <select 
      name="Nacionalidades" 
      value={nacionalidades}
      onChange={e => setNacionalidades(e.target.value )}
    >
      {options.NACIONALIDADES.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <input
      type="text"
      name="profissao"
      label="Profissão"
      title="Digite sua profissão atual"
      placeholder="Sua profissão atual"
      required
      value={profissao}
      onChange={e => setProfissao( e.target.value )}
    /><br/>

    <input
      type="text"
      name="mae"
      label="Mãe"
      title="Por favor, digite o nome completo de sua mãe"
      placeholder="Nome completo de sua mãe"
      required
      value={nomeMae}
      onChange={e => setNomeMae(e.target.value )}
    /><br/>

    <input
      type="text"
      name="pai"
      label="Pai"
      title="Por favor, digite o nome completo de seu pai"
      placeholder="Nome completo de seu pai"
      value={nomePai}
      onChange={e => setNomePai(e.target.value )}
    /><br/>

    <label>Estado Civil</label><br/>
    <select 
      name="EstadoCivil"
      value={estadoCivil}
      onChange={e => setEstadoCivil(e.target.value )}
    >
      <option value="solteiro">Solteiro</option>
      <option value="Casado">Casado</option>
      <option value="Divorciado">Divorciado</option>
      <option value="Viuvo">Viuvo</option>
    </select>
    <br/>

    <h2>2. Dados Sócio-Econômicos</h2>

    <label>Nivel de escolaridade</label><br/>
    <select 
      name="Escolaridade" 
      value={nivelEscolaridade}
      onChange={e => setNivelEscolaridade( e.target.value )}  
    >
      {options.ESCOLARIDADE.map((x,y)=> <option value={y}>{x}</option>)}
    </select>
    <br/>

    <label>Atividade remunerada</label><br/>
    <select 
      name="atividade remunerada"
      value={atividadeRemunerada}
      onChange={e => setAtividadeRemunerada(e.target.value )}  
    >
      <option value="Sim">Sim</option>
      <option value="autônomo">autônomo</option>
      <option value="CLT">CLT</option>
      <option value="Celetista">Celetista</option>
      <option value="Não">Não</option>
      <option value="Outra">Outra</option>
    </select>

    {atividadeRemunerada ==='Outra' ? 
      <input 
        type="text" 
        name="Outra" 
        placeholder="Outra"
        value={outraAtividade}
        onChange={e => setOutraAtividade(e.target.value )} 
      /> 
      : 
      <></>
    }
    <br/>

    <label>Auxilio do governo</label><br/>
    <select 
      name="auxilio do governo"
      value={auxilioGoverno}
      onChange={e => setAuxilioGoverno( e.target.value )}  
    >
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>
    {auxilioGoverno === 'Sim' ?
        <input 
          type="text" 
          placeholder='Valor'
          value={auxilioValor}
          onChange={e => setAuxilioValor(e.target.value )}   
        />
      :
        <> </>
    }
    <br/>

    <label>Outro membro da familia trabalha</label><br/>
    <select 
      name="outro membro da familia trabalha" 
      value={outroMembroFamiliaTrabalha}
      onChange={e => setOutroMembroFamiliaTrabalha( e.target.value )}
    >
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>

    {outroMembroFamiliaTrabalha === 'Sim' ? 
      <input 
        type="text" 
        placeholder="Quem" 
        value={outroMembroTrabalhaQuem}
        onChange={e => setOutroMembroTrabalhaQuem( e.target.value )} 
      />
    :
      <></>
    }
    <br/>

    <label>Renda Familiar</label> <br/>
    <input 
      type="text" 
      name="rendafamilia" 
      placeholder="Renda familiar" 
      value={rendaFamiliar}
      onChange={e => setRendaFamiliar( e.target.value )} 
    /><br/>

    <label>Possui veiculo proprio</label><br/>
    <select 
      name="possui veiculo"
      value={veiculo}
      onChange={e=> setVeiculo( e.target.value)}>
      <option value="Não">Não</option>
      <option value="Sim">Sim</option>
    </select>

    {veiculo ==='Sim' ? 
      <input 
        type="text" 
        name="quantosveiculos" 
        placeholder="Quantos veiculos" 
        value={quantosVeiculos}
        onChange={e => setQuantosVeiculos(e.target.value )} 
      /> 
      : 
      <></>
    }
    <br/>

    <label>Residencia</label><br/>
    <select 
      name="residencia" 
      value={residencia}
      onChange={e => setResidencia(e.target.value )} 
    >
      <option value="Propria">Sim</option>
      <option value="Alugada">Alugada</option>
      <option value="Outra">Outra</option>
    </select><br/>

    <label>Número de comodos</label><br/>
    <input 
      type="text" 
      placeholder="Número de comodos"
      value={numeroDeComodos}
      onChange={e => setNumeroDeComodos( e.target.value )} 
    />
    <br/>

    <label>Número de banheiros</label><br/>
    <input 
      type="text" 
      placeholder="Número de banheiros"
      value={numeroDeBanheiros}
      onChange={e => setNumeroDeBanheiros( e.target.value )}
    /><br/>

    <label>Tipo de transporte publico</label><br/>
    <select 
      name="Tipo de transporte publico" 
      value={tranportePulico}
      onChange={e => setTranportePulico( e.target.value )}
    >
      <option value="Onibus">Onibus</option>
      <option value="Metro">Metrô</option>
      <option value="Outro">Outro</option>
    </select>
    {tranportePulico === 'Outro' ? 
      <input 
        type="text"
        placeholder="Qual transporte"
        value={tranportePublicoOutro}
        onChange={e => setTranportePublicoOutro( e.target.value )}     
      />
    :
    <></>
    }
    <br/>

    <h2>3. EXAME CLÍNICO</h2>
    <h3>3.1. ANAMNESE</h3>

    <label>Queixa principal</label><br/>
    <input 
      type="text" 
      name="queixa principal" 
      placeholder ="Queixa principal"
      value={queixaPrincipal}
      onChange={e => setQueixaPrincipal( e.target.value )}
    /><br/>

    <label>História da doença atual</label><br/>
    <input 
      type="text" 
      name="historico da doença atual" 
      placeholder ="Historico da doença atual"
      value={historicoDeDoencaAtual}
      onChange={e => setHistoricoDeDoencaAtual( e.target.value )}
    /><br/>

    <label>Antecedentes familiares</label><br/>
    <input 
      type="text" 
      name="antecedentes familiares" 
      placeholder ="Antecendentes familiares"
      value={antecedentesFamiliares}
      onChange={e => setAntecedentesFamiliares(e.target.value )}
    /><br/>


    <table border="1">
      <caption>Questionário de saúde</caption>
      
      <thead>
        <tr>
          <th rowSpan="3">Questionário de saúde</th>
          <th rowspan="2">Data</th>
          <th colspan="2">Datas das atualizações</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td rowspan="2"> </td>
          <td><input type="date" value={questionarioSaudeData01} onChange={e => setQuestionarioSaudeData01(e.target.value )}/></td>
          <td><input type="date" value={questionarioSaudeData02} onChange={e => setQuestionarioSaudeData02(e.target.value )}/></td>
          <td><input type="date" value={questionarioSaudeData03} onChange={e => setQuestionarioSaudeData03(e.target.value )}/></td>
        </tr>
    
        <tr>
          <td>
            <th colspan="2">Sim</th>
            <th rowspan="2">Não</th>
            <th colspan="2">Nsi</th>
          </td>

          <td>
          <th colspan="2">Sim</th>
            <th rowspan="2">Não</th>
            <th colspan="2">Nsi</th>
          </td>

          <td>
          <th colspan="2">Sim</th>
            <th rowspan="2">Não</th>
            <th colspan="2">Nsi</th>
          </td>
        </tr>

        <tr>
          <td>Está sob tratamento médico?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoMedico01}
              onChange={e => setTratamentoMedico01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>

          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoMedico02}
              onChange={e => setTratamentoMedico02( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>

          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoMedico03}
              onChange={e => setTratamentoMedico03( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Está tomando algum medicamento? <input type="text" placeholder="Qual" value={tomaAlgumaMedicacaoQual}
              onChange={e => setTomaAlgumaMedicacaoQual( e.target.value )}/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tomaAlgumaMedicacao01}
              onChange={e => setTomaAlgumaMedicacao01( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tomaAlgumaMedicacao02}
              onChange={e => setTomaAlgumaMedicacao02( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tomaAlgumaMedicacao03}
              onChange={e => setTomaAlgumaMedicacao03( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem  história  de  alergia?  <input type="text" placeholder="Qual" value={historicoDeAlergiaQual}
              onChange={e => setHistoricoDeAlergiaQual(e.target.value )}/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={historicoDeAlergia01}
              onChange={e => setHistoricoDeAlergia01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={historicoDeAlergia02}
              onChange={e => setHistoricoDeAlergia02( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={historicoDeAlergia03}
              onChange={e => setHistoricoDeAlergia03( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve problemas respiratórios?   <input type="text" placeholder="Asma, Enfizema" value={problemasRespiratorios01Qual} onChange={e => setProblemasRespiratorios01Qual(e.target.value )}/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemasRespiratorios01}
              onChange={e => setProblemasRespiratorios01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemasRespiratorios02}
              onChange={e => setProblemasRespiratorios02( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemasRespiratorios03}
              onChange={e => setProblemasRespiratorios03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença articular? <input type="text" placeholder="Arttrite, Febre reumática." value={doencaArticular01Qual} onChange={e => setDoencaArticular01Qual(e.target.value )}/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doencaArticular01}
              onChange={e => setDoencaArticular01( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doencaArticular02}
              onChange={e => setDoencaArticular02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doencaArticular03}
              onChange={e => setDoencaArticular03( e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve distúrbio sanguíneo? <input type="text" placeholder="Anemia, Hemorragia. " value={disturbioSanguineo01Qual}
              onChange={e => setDisturbioSanguineo01Qual(e.target.value )}/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={disturbioSanguineo01}
              onChange={e => setDisturbioSanguineo01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={disturbioSanguineo02}
              onChange={e => setDisturbioSanguineo02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={disturbioSanguineo03}
              onChange={e => setDisturbioSanguineo03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento radioterápico de tumor?  <input type="text" placeholder="Qual? " value={tratamentoRadioterapicoDeTumor01Qual}
              onChange={e => setTratamentoRadioterapicoDeTumor01Qual(e.target.value )}/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoRadioterapicoDeTumor01}
              onChange={e => setTratamentoRadioterapicoDeTumor01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoRadioterapicoDeTumor02}
              onChange={e => setTratamentoRadioterapicoDeTumor02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoRadioterapicoDeTumor03}
              onChange={e => setTratamentoRadioterapicoDeTumor03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já fez ou faz tratamento quimioterápico de tumor?   <input type="text" placeholder="Qual? " value={tratamentoQuimioterapicoDeTumor01Qual}
              onChange={e => setTratamentoQuimioterapicoDeTumor01Qual(e.target.value )}/> </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoQuimioterapicoDeTumor01}
              onChange={e => setTratamentoQuimioterapicoDeTumor01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoQuimioterapicoDeTumor02}
              onChange={e => setTratamentoQuimioterapicoDeTumor02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={tratamentoQuimioterapicoDeTumor03}
              onChange={e => setTratamentoQuimioterapicoDeTumor03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem diabetes? </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temDiabetes01}
              onChange={e => setTemDiabetes01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temDiabetes02}
              onChange={e => setTemDiabetes02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temDiabetes03}
              onChange={e => setTemDiabetes03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve hepatite? <input type="text" placeholder="Se sim qual? A, B ou C?" value={temHepatite01Qual}
              onChange={e => setTemHepatite01Qual(e.target.value )}/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temHepatite01}
              onChange={e => setTemHepatite01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temHepatite02}
              onChange={e => setTemHepatite02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temHepatite03}
              onChange={e => setTemHepatite03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tomou vacina contra Hepatite B?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={vacinaContraHepatite01}
              onChange={e => setVacinaContraHepatite01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={vacinaContraHepatite02}
              onChange={e => setVacinaContraHepatite02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={vacinaContraHepatite03}
              onChange={e => setVacinaContraHepatite03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem algum problema renal?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaRenal01}
              onChange={e => setProblemaRenal01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaRenal02}
              onChange={e => setProblemaRenal02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaRenal03}
              onChange={e => setProblemaRenal03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem alteração hormonal? <input type="text" placeholder="Se sim qual? Tireóide, Suprarenal?" value={alteracaoHormonal01Qual}
              onChange={e => setAlteracaoHormonal01Qual(e.target.value )}/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={alteracaoHormonal01}
              onChange={e => setAlteracaoHormonal01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={alteracaoHormonal02}
              onChange={e => setAlteracaoHormonal02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={alteracaoHormonal03}
              onChange={e => setAlteracaoHormonal03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem algum problema hepático?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaHepatico01}
              onChange={e => setProblemaHepatico01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaHepatico02}
              onChange={e => setProblemaHepatico02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaHepatico03}
              onChange={e => setProblemaHepatico03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem problema estomacal? <input type="text" placeholder="Se sim qual? Gastrite, Úlcera?" value={problemaEstomacal01Qual}
              onChange={e => setProblemaEstomacal01Qual(e.target.value )} /></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaEstomacal01}
              onChange={e => setProblemaEstomacal01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaEstomacal02}
              onChange={e => setProblemaEstomacal02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={problemaEstomacal03}
              onChange={e => setProblemaEstomacal03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem sífilis ou outra DST? </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temSifilisOuOutraDST01}
              onChange={e => setTemSifilisOuOutraDST01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temSifilisOuOutraDST02}
              onChange={e => setTemSifilisOuOutraDST02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temSifilisOuOutraDST03}
              onChange={e => setTemSifilisOuOutraDST03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem herpes ou aftas frequentes?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={herpesOuAftas01}
              onChange={e => setHerpesOuAftas01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={herpesOuAftas02}
              onChange={e => setHerpesOuAftas02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={herpesOuAftas03}
              onChange={e => setHerpesOuAftas03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>É HIV positivo? </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={hivPositivo01}
              onChange={e => setHivPositivo01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={hivPositivo02}
              onChange={e => setHivPositivo02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={hivPositivo03}
              onChange={e => setHivPositivo03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem alguma síndrome ou comprometimento mental?<input type="text" placeholder="Se sim qual?" value={algumaSindromeOuComprometimentoMental01Qual}
              onChange={e => setAlgumaSindromeOuComprometimentoMental01Qual(e.target.value )}/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={algumaSindromeOuComprometimentoMental01}
              onChange={e => setAlgumaSindromeOuComprometimentoMental01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={algumaSindromeOuComprometimentoMental02}
              onChange={e => setAlgumaSindromeOuComprometimentoMental02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={algumaSindromeOuComprometimentoMental03}
              onChange={e => setAlgumaSindromeOuComprometimentoMental03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem eplepsia?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temEplepsia01}
              onChange={e => setTemEplepsia01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temEplepsia02}
              onChange={e => setTemEplepsia02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={temEplepsia03}
              onChange={e => setTemEplepsia03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Fez ou faz tratamento psiquiátrico? </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={fazTratamentoPsiquiatrico01}
              onChange={e => setFazTratamentoPsiquiatrico01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={fazTratamentoPsiquiatrico02}
              onChange={e => setFazTratamentoPsiquiatrico02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={fazTratamentoPsiquiatrico03}
              onChange={e => setFazTratamentoPsiquiatrico03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já se submeteu à cirurgia? <input type="text" placeholder="Se sim qual?" value={jaSeSubmeteuACirugia01Qual}
              onChange={e => setJaSeSubmeteuACirugia01Qual(e.target.value )}/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={jaSeSubmeteuACirugia01}
              onChange={e => setJaSeSubmeteuACirugia01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={jaSeSubmeteuACirugia02}
              onChange={e => setJaSeSubmeteuACirugia02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={jaSeSubmeteuACirugia03}
              onChange={e => setJaSeSubmeteuACirugia03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Já recebeu transfusão de sangue?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={transfusaoDeSangue01}
              onChange={e => setTransfusaoDeSangue01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={transfusaoDeSangue02}
              onChange={e => setTransfusaoDeSangue02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={transfusaoDeSangue03}
              onChange={e => setTransfusaoDeSangue03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem dores de cabeça frequentes? </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doresDeCabecaFrequentes01}
              onChange={e => setDoresDeCabecaFrequentes01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doresDeCabecaFrequentes02}
              onChange={e => setDoresDeCabecaFrequentes02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doresDeCabecaFrequentes03}
              onChange={e => setDoresDeCabecaFrequentes03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem cicatrização lenta?</td>
          <td>
            <select 
              name="tratamentomedico" 
              value={cicatrizacaoLenta01}
              onChange={e => setCicatrizacaoLenta01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={cicatrizacaoLenta02}
              onChange={e => setCicatrizacaoLenta02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={cicatrizacaoLenta03}
              onChange={e => setCicatrizacaoLenta03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Está ou poderia estar grávida ou amamentado? <input type="text" placeholder="Período?" value={gravidaOuAmamentando01Qual}
              onChange={e => setGravidaOuAmamentando01Qual(e.target.value )}/></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={gravidaOuAmamentando01}
              onChange={e => setGravidaOuAmamentando01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={gravidaOuAmamentando02}
              onChange={e => setGravidaOuAmamentando02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={gravidaOuAmamentando03}
              onChange={e => setGravidaOuAmamentando03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Tem ou teve doença cardiovascular?  <input type="text" placeholder="Se sim qual? Hipertensão arterial, Infarto." style={{width: 250}} value={doencaCardiovascular01Qual}
              onChange={e => setDoencaCardiovascular01Qual(e.target.value )} /></td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doencaCardiovascular01}
              onChange={e => setDoencaCardiovascular01(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doencaCardiovascular02}
              onChange={e => setDoencaCardiovascular02(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
          <td>
            <select 
              name="tratamentomedico" 
              value={doencaCardiovascular03}
              onChange={e => setDoencaCardiovascular03(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
              <option value="NSI">Não sabe informar</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>Pressão arterial</td>
          <td>
            <input 
              type="text"   
              placeholder="180" 
              style={{width: 40}}
              value={pressaoArterial01}
              onChange={e => setPressaoArterial01(e.target.value )}
              />mmHg</td>
          <td>
            <input 
              type="text"   
              placeholder="180" 
              style={{width: 40}}
              value={pressaoArterial02}
              onChange={e => setPressaoArterial02(e.target.value )}
              />mmHg</td>
          <td>
            <input 
              type="text"   
              placeholder="180" 
              style={{width: 40}}
              value={pressaoArterial03}
              onChange={e => setPressaoArterial03(e.target.value )}
              />mmHg</td>
        </tr>

        <tr>
          <td>Informações relevantes sobre alguma condição de saúde: <textarea value={condicoesDeSaude} onChange={e => setCondicoesDeSaude(e.target.value )} name="" id="" cols="30" rows="1"></textarea></td>
        </tr>

        <tr>
          <td>Possui alguma doença que não foi perguntada?  
            <select 
              name="Doenças" 
              value={doencNaoPergutadas}  
              onChange={e=> setDoencNaoPergutadas(e.target.value )}
            >
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
            {doencNaoPergutadas ==='Sim' ? 
              <input 
                type="text" 
                name="doecasNaoPergutadas" 
                placeholder="Qual doença" 
                value={doencasNaoPerguntadas}
                onChange={e => setDoencasNaoPerguntadas(e.target.value )}
              /> : <></>}
          </td>
        </tr>

        <tr>
          Faz uso de álcool?
          <select name="Doenças" value={usodealcool}  onChange={e=> setUsodealcool(e.target.value )}>
            <option value="Não">Não</option>
            <option value="diariamente">Diariamente</option>
            <option value="3vezesporsemana">3 dias por semana</option>
            <option value="socialmente">Socialmente</option>
          </select>
        </tr>

        <tr>
          Faz uso de fumo?
          <select name="Doenças" value={fumo}  onChange={e=> setFumo(e.target.value )}>
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {fumo ==='Sim' || fumo === 'socialmente' ? 
            <> 
            {fumo ==='Sim' ?
              <>
                <input 
                  type="text" 
                  name="vezespdia" 
                  placeholder="Quantos cigarros por dia?" 
                  value={cigarrosPorDia}
                  onChange={e => setCigarrosPorDia(e.target.value )}
                />

                <input 
                  type="text" 
                  name="fumo" 
                  placeholder="Qual?" 
                  value={qualCigarro}
                  onChange={e => setQualCigarro(e.target.value )}
                />
              </>
            :
              <input 
                type="text" 
                name="fumo" 
                placeholder="Qual?" 
                value={qualCigarro}
                  onChange={e => setQualCigarro(e.target.value )}
              />
            }
              </> 
            : 
            <></>}
        </tr>

        <tr>
          Faz uso de droga ilícitas?
          <select name="Doenças" value={drogailicitas}  onChange={e=> setDrogailicitas(e.target.value )}>
            <option value="nao">Não</option>
            <option value="Sim">Sim</option>
            <option value="socialmente">Socialmente</option>
          </select>
          {drogailicitas ==='Sim' || drogailicitas === 'socialmente' ? 
            <input 
              type="text" 
              name="fumo" 
              placeholder="Qual?" 
              value={qualDrogaIlicita}
              onChange={e => setQualDrogaIlicita(e.target.value )}
            /> : <></>}
        </tr>

        <tr>
          Outros habitos: <input type="text" placeholder="Quais?" style={{width: 400}} value={quaisHabitos} onChange={e => setQuaisHabitos(e.target.value )}/>
        </tr>

        <tr>
          Observações: <input type="text" placeholder="Observações?" style={{width: 400}} value={QSObservacoes} onChange={e => setQSObservacoes(e.target.value )}/>
        </tr>

        <tr>
         <b>Declaro que as informações relatadas na anamnese são verdadeiras e me comprometo a informar ao responsável pelo meu atendimento qualquer alteração do estado de saúde que ocorra durante o meu tratamento.
        Brasília,<input type="date" value={anamneseData} onChange={e => setAnamneseData(e.target.value )}/>.<br/>	Paciente ou responsável legal: <input type="text" placeholder="Nome do responsavel" style={{width: 400}} value={responsavelNome} onChange={e => setResponsavelNome(e.target.value )}/>.</b>
        </tr>

        <tr>
        Nome do discente: <input type="text" placeholder="Nome do discente" style={{width: 400}} value={discenteNome} onChange={e => setDiscenteNome(e.target.value )}/>. <br/> 
        CPD: <input type="text" placeholder="00000" style={{width: 200}} value={CPD} onChange={e => setCPD(e.target.value )}/>. 
        Data: <input type="date" value={dData} onChange={e => setDData(e.target.value )}/>.
        </tr>

        <tr>
          1. Autorizo o início do exame físico do paciente, inclusive procedimentos invasivos, como sondagem periodontal.
          Docente: <input type="text" placeholder="Docente" style={{width: 400}} value={docenteNome1} onChange={e => setDocenteNome1(e.target.value )}/>. <br/>
          Data: <input type="date" value={docenteData1} onChange={e => setDocenteData1(e.target.value )}/>.
        </tr>

        <tr>
          2.	Não autorizo o início do exame físico do paciente, orientei o discente a preencher o Pedido de Avaliação Médica.
          Docente: <input type="text" placeholder="Docente" style={{width: 400}} value={docenteNome2} onChange={e => setDocenteNome2(e.target.value )}/>. <br/>
          Data: <input type="date" value={docenteData2} onChange={e => setDocenteData2(e.target.value )}/>.
        </tr>

        <tr>
          3.	Após avaliação do Pedido de Avaliação Médica, autorizo o início do exame físico do paciente.
          Docente: <input type="text" placeholder="Docente" style={{width: 400}} value={docenteNome3} onChange={e => setDocenteNome3(e.target.value )}/>. <br/>
          Data: <input type="date" value={docenteData3} onChange={e => setDocenteData3(e.target.value )}/>.
        </tr>
      </tbody>
    </table>
    
    <h3>3.2. História Odontologia</h3>

    <table border="1">
      <tbody>
        <tr>
          <th>
            Realizou tratamento odontológico anteriormente?
            <select 
              value={realizouTratOdontoAnterior}
              onChange={e => setRealizouTratOdontoAnterior(e.target.value )}
              >
                <option value="NAO">Não</option>
                <option value="SIM">Sim</option>
              </select>
          </th>

          <th>
            Há quanto tempo foi o último tratamento odontológico?
            <input type="text" 
              value={tempoUtimoTrata}
              onChange={e => setTempoUtimoTrata(e.target.value )}
            />
          </th>

        </tr>

        <tr>
          Relata alguma experiência desagradável durante tratamento odontológico anterior?
          <select 
            value={expDesagradavelDuranteTratamento}
            onChange={e => setExpDesagradavelDuranteTratamento(e.target.value )}
          >
            <option value="NAO">Não</option>
            <option value="SIM">Sim</option>
          </select>
          {expDesagradavelDuranteTratamento === 'SIM' ?
            <input 
              type="text" 
              value={expDesagradavelDuranteTratamentQual} 
              onChange={e=> setExpDesagradavelDuranteTratamentQual(e.target.value )}
              placeholder="Qual?"  
            /> 
            : <></>}
        </tr>

        <tr>
          <th>
            Já recebeu anestesia odontologia?
            <select 
              value={recebeuAnestesia}
              onChange={e => setRecebeuAnestesia(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
          </th>

          <th>
            Já teve alguma reação ao uso de anestésico?
            <select 
              value={alergiaAnestesia}
              onChange={e => setAlergiaAnestesia(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {alergiaAnestesia === 'SIM' ?
            <input 
              type="text" 
              value={alergiaAnestesiaQual} 
              onChange={e=> setAlergiaAnestesiaQual(e.target.value )}
              placeholder="Qual?"  
            /> 
            : <></>}
          </th>
        </tr>

        <tr>
          <th>
            Faz uso de prótese dentária?
            <select 
              value={usoProteseDentaria}
              onChange={e => setUsoProteseDentaria(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {usoProteseDentaria === 'SIM' ?
            <input 
              type="text" 
              value={usoProteseDentariaQual} 
              onChange={e=> setUsoProteseDentariaQual(e.target.value )}
              placeholder="Qual?"  
            /> 
            : <></>} 
          </th>

          <th>
            Percebe sangramento na gengiva?
            <select 
              value={sangramentoGengiva}
              onChange={e => setSangramentoGengiva(e.target.value )}
            >
              <option value="NAO">Não</option>
              <option value="SIM">Sim</option>
            </select>
            {sangramentoGengiva === 'SIM' ?
              <select 
                value={sangramentoGengivaQuando}
                onChange={e => setSangramentoGengivaQuando(e.target.value )}
              >
                <option value="Durante uso de fio dental">Durante uso de fio dental</option>
                <option value="Durante escovacao">Durante escovação</option>
                <option value="Espontaneamente">Espontaneamente</option>
              </select>
            : <></>} 

          </th>

        </tr>

        <tr>
          <th>
            Escova os dentes sozinho?
            <select 
              value={escovaDentesSozinho}
              onChange={e=> setEscovaDentesSozinho(e.target.value )}  
            >
              <option value="">Selecione</option>
              <option value="SIM">Sim</option>
              <option value="NAO">Nao (Pessoa ou cuidador)</option>
            </select>
          </th>

          <th colSpan="2">
            <th>
              Faz uso de creme dental? 
              <select 
                value={usoCremeDental}
                onChange={e => setUsoCremeDental(e.target.value )}
              >
                <option value="">Selecione</option>
                <option value="SIM">Sim</option>
                <option value="NAO">Não</option>
              </select> 
            </th>
            
            <th>
              Faz uso de enxaguatório dental?		
              <select 
                value={enxaguatorioDental}
                onChange={e => setEnxaguatorioDental(e.target.value )}
              >
                <option value="">Selecione</option>
                <option value="SIM">Sim</option>
                <option value="NAO">Não</option>
              </select>
            </th>

          </th>
        </tr>

        <tr>
          <th>
            Frequência de escovação detal:
            <select 
              value={frequenciaEscovacao} 
              onChange={e => setFrequenciaEscovacao(e.target.value )}
            >
              <option value="">Selecione</option>
              <option value="NENHUMA VEZ AO DIA">Nenhuma vez ao dia</option>
              <option value="2 VEZES AO DIA">2 vezes ao dia</option>
              <option value="1 VEZ AO DIA">1 vez ao dia</option>
              <option value="3 VEZES OU MAIS">3 ou mais vezes ao dia</option>
            </select>
          </th>

          <th>
            Frequencia de uso de fio dental:
            <select 
              value={frequenciaFioDental} 
              onChange={e => setFrequenciaFioDental(e.target.value )}
            >
              <option value="">Selecione</option>
              <option value="RARAMENTE">Raramente</option>
              <option value="2 OU MAIS VEZES">2 ou mais vezes ao dia</option>
              <option value="1 VEZ AO DIA">1 vez ao dia</option>
              <option value="1 VEZ POR SEMANA"> 1 vez por semana</option>
              <option value="QUANDO SENTE INCOMODO">Quando sente incômodo</option>
            </select>
          </th>
        </tr>

        <tr colSpan="4">
            <th>
              <th>
                Respira normalmente pelo nariz?
                <select 
                  value={repiraNormalmentePeloNariz} 
                  onChange={e => setRepiraNormalmentePeloNariz(e.target.value )}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
              <th>
                Tem apneia(ronco)?
                <select 
                  value={temApneia} 
                  onChange={e => setTemApneia(e.target.value )}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>

            <th>
              <th>
                Acorda com falta de ar?
                <select 
                  value={acordaComFaltaAr} 
                  onChange={e => setAcordaComFaltaAr(e.target.value )}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
              <th>
                Tem impactação alimentar?
                <select 
                  value={impactoAlimentar} 
                  onChange={e => setImpactoAlimentar(e.target.value )}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>
        </tr>

        <tr colSpan="3">
            <th>
              <th>
                Range os dentes?
                <select 
                  value={rangeOsDentes} 
                  onChange={e => setRangeOsDentes(e.target.value )}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="DURANTE O DIA">Durante o dia</option>
                  <option value="DURANTE A NOITE">Durante a noite</option>
                </select>
              </th>
              <th>
                Sente dores na ATM?
                <select 
                  value={doresNaATM} 
                  onChange={e => setDoresNaATM(e.target.value )}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>

            <th>
              <th>
                Tem estalo na mandigula?
                <select 
                  value={estaloNaMandigula} 
                  onChange={e => setEstaloNaMandigula(e.target.value )}
                >
                  <option value="">Selecione</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
              </th>
            </th>
        </tr>
      </tbody>
    </table>

    <h3>3.3. Exame físico</h3>

    <table border="1">
      <tbody>
        <tr>
          <th>
            Pressão arterial
            <input  
              type="text" 
              placeholder="__/__ mmHg" 
              value={pressaoArterial} 
              onChange={e => setPressaoArterial(e.target.value )} 
            />  
          </th>
          <th>
            Pulso radical
            <input  
              type="text" 
              placeholder="_____/minuto" 
              value={pulsoRadical} 
              onChange={e => setPulsoRadical(e.target.value )} 
            /> 
          </th>
          <th>
            Frequência respiratório
            <input  
              type="text" 
              placeholder="____/minuto" 
              value={frequenciaRespiratoria} 
              onChange={e => setFrequenciaRespiratoria(e.target.value )} 
            /> 
          </th>
          <th>
            Temperatura
            <input  
              type="text" 
              placeholder=" __ ºC" 
              value={temperatura} 
              onChange={e => setTemperatura(e.target.value )} 
            /> 
          </th>
        </tr>

        <tr >
          <th>
            Altura: <input type="text" value={Altura} onChange={e => setAltura(e.target.value )} />
          </th>
          <th></th>
          <th>
            Peso: <input type="text" value={peso} onChange={e => setPeso(e.target.value )} />
          </th>
        </tr>

        <tr>
          <th>ATM <input type="text" value={ATM} onChange={e => setATM(e.target.value )} /></th>
          <th>Linfonodos<input type="text" value={linfonodos} onChange={e => setLinfonodos(e.target.value )} /></th>
          <th>Pele<input type="text" value={pele} onChange={e => setPele(e.target.value )} /></th>
        </tr>

        <tr>
          <th>Simetria facial <input type="text" value={simetriaFacial} onChange={e => setSimetriaFacial(e.target.value )} /></th>
          <th>Lábios <input type="text" value={labios} onChange={e => setLabios(e.target.value )} /></th>
          <th>Glândulas <input type="text" value={glandulas} onChange={e => setGlandulas(e.target.value )} /></th>
        </tr>

        <tr>
          <th>Mucosa Labial <input type="text" value={mucosaLabial} onChange={e => setMucosaLabial(e.target.value )} /></th>
          <th>Mucosa jugal <input type="text" value={mucosaJugal} onChange={e => setMucosaJugal(e.target.value )} /></th>
          <th>Região retromolar <input type="text" value={regiaoRetromolar} onChange={e => setRegiaoRetromolar(e.target.value )} /></th>
          <th>Gengiva <input type="text" value={gengiva} onChange={e => setGengiva(e.target.value )} /></th>
        </tr>

        <tr>
          <th>Palato <input type="text" value={palato} onChange={e => setPalato(e.target.value )} /></th>
          <th>Língua <input type="text" value={lingua} onChange={e => setLingua(e.target.value )} /></th>
          <th>Assoalho <input type="text" value={assoalho} onChange={e => setAssoalho(e.target.value )} /></th>
          <th>Orofaringe <input type="text" value={orofaringe} onChange={e => setOrofaringe(e.target.value )} /></th>
        </tr>

        <tr>
          Descrição da lesão: <input type="text" value={descriLesao} onChange={e => setDescriLesao(e.target.value )} />
        </tr>

        <tr>
          Hipóteses diagnósticas: <input type="text" value={hipotDiagnosticas} onChange={e => setHipotDiagnosticas(e.target.value )} />
        </tr>
        
      </tbody>

    </table>

    <h3>3.4. Exames Complementares</h3>

    <table border="1">
      <tr>
        <th>
          Radiográficos: <input type="text" value={radiograficos} onChange={e => setRadiograficos(e.target.value )} />
        </th>
      </tr>

      <tr>
        <th>
          Anatomopatológicos: <input type="text" value={anatomopatologicos} onChange={e => setAnatomopatologicos(e.target.value )} />
        </th>
      </tr>

      <tr>
        <th>
          Clínico-laboratoriais: <input type="text" value={clinicoLaboratoriais} onChange={e => setClinicoLaboratoriais(e.target.value )} />
        </th>
      </tr>
    </table>

    <h3>3.5. Avaliação do controle de biofilme</h3>

    <table border="1">
      <tbody>

        <tr>
          <th>
            data: <input type="date" value={ACB1Data} onChange={e => setACB1Data(e.target.value )}/>
          </th>

          <th>
            16(V) <input type="text" value={ACB116V} onChange={e => setACB116V(e.target.value )} />
            46(L) <input type="text" value={ACB146L} onChange={e => setACB146L(e.target.value )} />
          </th>

          <th>
            11(V) <input type="text" value={ACB111V} onChange={e => setACB111V(e.target.value )} />
            &nbsp;31(L) <input type="text" value={ACB131L} onChange={e => setACB131L(e.target.value )} />
          </th>

          <th>
            26(V) <input type="text" value={ACB126V} onChange={e => setACB126V(e.target.value )} />
            &nbsp;36(L) <input type="text" value={ACB136L} onChange={e => setACB136L(e.target.value )} />
          </th>

          <th>
            IHOS <input type="text" value={ACB1IHOS} onChange={e => setACB1IHOS(e.target.value )} />
          </th>
        </tr>
          {/* //////1 */}
        <tr>
          <th>
            data: <input type="date" value={ACB2Data} onChange={e => setACB2Data(e.target.value )}/>
          </th>

          <th>
          16(V) <input type="text" value={ACB216V} onChange={e => setACB216V(e.target.value )} />
            &nbsp;46(L) <input type="text" value={ACB243L} onChange={e => setACB243L(e.target.value )} />
          </th>

          <th>
          11(V) <input type="text" value={ACB211V} onChange={e => setACB211V(e.target.value )} />
            &nbsp;31(L) <input type="text" value={ACB231L} onChange={e => setACB231L(e.target.value )} />
          </th>

          <th>
          11(V) <input type="text" value={ACB211V} onChange={e => setACB211V(e.target.value )} />
            &nbsp;31(L) <input type="text" value={ACB231L} onChange={e => setACB231L(e.target.value )} />
          </th>
          <th>
            IHOS <input type="text" value={ACB2IHOS} onChange={e => setACB2IHOS(e.target.value )} />
          </th>
        </tr>
              {/* //////2 */}
        <tr>
          <th>
            data: <input type="date" value={ACB3Data} onChange={e => setACB3Data(e.target.value )}/>
          </th>

          <th>
          16(V) <input type="text" value={ACB316V} onChange={e => setACB316V(e.target.value )} />
            &nbsp;46(L) <input type="text" value={ACB343L} onChange={e => setACB343L(e.target.value )} />
          </th>

          <th>
          11(V) <input type="text" value={ACB311V} onChange={e => setACB311V(e.target.value )} />
            &nbsp;31(L) <input type="text" value={ACB331L} onChange={e => setACB331L(e.target.value )} />
          </th>

          <th>
          11(V) <input type="text" value={ACB311V} onChange={e => setACB311V(e.target.value )} />
            &nbsp;31(L) <input type="text" value={ACB331L} onChange={e => setACB331L(e.target.value )} />
          </th>
          <th>
            IHOS <input type="text" value={ACB3IHOS} onChange={e => setACB3IHOS(e.target.value )} />
          </th>
        </tr>
            {/* //////3 */}
        <tr>
          <th>
            data: <input type="date" value={ACB4Data} onChange={e => setACB4Data(e.target.value )}/>
          </th>

          <th>
          16(V) <input type="text" value={ACB416V} onChange={e => setACB416V(e.target.value )} />
            &nbsp;46(L) <input type="text" value={ACB443L} onChange={e => setACB443L(e.target.value )} />
          </th>

          <th>
          11(V) <input type="text" value={ACB411V} onChange={e => setACB411V(e.target.value )} />
            &nbsp;31(L) <input type="text" value={ACB431L} onChange={e => setACB431L(e.target.value )} />
          </th>

          <th>
          11(V) <input type="text" value={ACB411V} onChange={e => setACB411V(e.target.value )} />
            &nbsp;31(L) <input type="text" value={ACB431L} onChange={e => setACB431L(e.target.value )} />
          </th>
          <th>
            IHOS <input type="text" value={ACB4IHOS} onChange={e => setACB4IHOS(e.target.value )} />
          </th>
        </tr>
            {/* //////4 */}
        <tr>
        Observações: <textarea value={ACBObservacoes} onChange={e => setACBObservacoes(e.target.value)} cols="26" rows="5"></textarea>
        </tr>

        <tr>
          <th>
            Discente:
            Nome: <input type="text"value={ACBNome} onChange={e=> setACBNome(e.target.value )} />
            CPD: <input type="text"value={ACBCPD} onChange={e=> setACBCPD(e.target.value )} />
          </th>

          <th>
            Visto Docente: <input type="text" value={vistDocente} onChange={e => setVistDocente(e.target.value )} /> 
          </th>
          <th>
            data <input type="date" value={ACBData} onChange={e => setACBData(e.target.value )} />
          </th>
        </tr>
      </tbody>
    </table>

    <table border="1">
      <tr>
        <th>Critérios IHOS</th>
      </tr>

      <tr>
        <th>Ausência de biofilme</th>
        <th> 0</th>
      </tr>

      <tr>
        <th>Presença de biofilme até 1/3 da superficie</th>
        <th> 1</th>
      </tr>

      <tr>
        <th>Presença de biofilme até 2/3 da superficie</th>
        <th> 2</th>
      </tr>

      <tr>
        <th>Presença de biofilme em + de 2/3 da superficie</th>
        <th> 3</th>
      </tr>
    </table>

    <table border="1">
      <tr><th>Interpretação do índice</th></tr>

      <tr>
        <th>Interpretação clinica</th>
        <th>Score</th>
      </tr>

      <tr>
        <th>Bom</th>
        <th>0 - 0,6</th>
      </tr>

      <tr>
        <th>Médio</th>
        <th>0,7 - 1,5</th>
      </tr>

      <tr>
        <th>Fraco</th>
        <th>1,6 - 3,0</th>
      </tr>
    </table>

    <h3>3.6. Odondograma</h3>
   
    <img 
      src={odontograma}
      alt="Preencher no papel e anexar"
      style={{width: '60%', height: '300px' }}
    /><br/>

    {check ?
      <input 
        type="file"  
        onChange={upload} 
        disabled={check? false: true}
      />
      :
      <> </>
    }
    

    <h3>4. Necessidade de tratamento</h3>

    <table border="1">
      <tr>
      <input type="checkbox" name="PERIODONTIA"  value={periodontiaCheckBox} onChange={e => setPeriodontiaCheckBox(e.target.value )} />
      <label htmlFor="PERIODONTIA">Periodontia</label>

      <input type="checkbox" name="ENDODONTIA" value={endodontiaCheckBox} onChange={e => setEndodontiaCheckBox(e.target.value )} />
      <label htmlFor="ENDODONTIA">ENDODONTIA</label>

      <input type="checkbox" name="DENTISTICA" value={dentisticaCheckBox} onChange={e => setDentisticaCheckBox(e.target.value )} />
      <label htmlFor="DENTISTICA">DENTÍSTICA</label>

      <input type="checkbox" name="CIRURGIA" value={cirurgiaCheckBox} onChange={e => setCirurgiaCheckBox(e.target.value )} />
      <label htmlFor="CIRURGIA">CIRURGIA</label>

      <input type="checkbox" name="PROTESE FIXA" value={proteseFixaCheckBox} onChange={e => setProteseFixaCheckBox(e.target.value )} />
      <label htmlFor="PROTESE FIXA">PRÓTESE FIXA</label>

      <input type="checkbox" name="PROTESE PARCIAL REMOVIVEL" value={proteseParcialRemovivelCheckBox} onChange={e => setProteseParcialRemovivelCheckBox(e.target.value )} />
      <label htmlFor="PROTESE PARCIAL REMOVIVEL">PRÓTESE PARCIAL REMOVÍVEL</label>

      <input type="checkbox" name="PROTESE TOTAL REMOVIVEL" value={proteseTotalRemovivelCheckBox} onChange={e => setProteseTotalRemovivelCheckBox(e.target.value )} />
      <label htmlFor="PROTESE TOTAL REMOVIVEL">PRÓTESE TOTAL REMOVÍVEL</label>

      </tr>

      <tr>
          <th>
            Discente: &nbsp;&nbsp;&nbsp;
            Nome: <input type="text"value={NTNome} onChange={e=> setNTNome(e.target.value )} />
            CPD: <input type="text"value={NTCPD} onChange={e=> setNTCPD(e.target.value )} />
          </th>

          <th>
            Visto Docente: <input type="text" value={NTVistDocente} onChange={e => setNTVistDocente(e.target.value )} /> 
          </th>
          <th>
            data <input type="date" value={NTData} onChange={e => setNTData(e.target.value )} />
          </th>
        </tr>

        <tr>
          Observações: <textarea 
            cols="25" 
            rows="1"
            value={NTObservacoes}
            onChange={e => setNTObservacoes(e.target.value )}
          ></textarea>
        </tr>
    </table>
    <h4>*Para a triagem</h4>
    <table border="1">
      <tr>
        <th>Docente <input type="text" value={PTDocente} onChange={e => setPTDocente(e.target.value )} /></th>
        <th>Pontuação <input type="text" value={PTPontuacao} onChange={e => setPTPontuacao(e.target.value )} /></th>
        <th>Data <input type="date" value={PTDate} onChange={e => setPTDate(e.target.value )} /></th>
      </tr>
    </table>\

    <button style={{alignSelf: 'center'}} onClick={enviar}>Enviar</button>
  </div>
  );
};
export default withRouter(FichaClinica);