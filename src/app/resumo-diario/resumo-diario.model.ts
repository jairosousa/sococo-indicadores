export class ResumoDiario {

    constructor(
        public dataLancamento: Date,
        public cocosDesfibrados: string,
        public cocosProcessados: string,
        public cri: string,
        public flococo: string,
        public oleoIndustrialETE: string,
        public oleoIndustrialTipoA: string,
        public torta: string,

        public aguaDeCocoSococo: string,
        public aguaDeCocoVerde: string,
        public numeroDeFardos: string,
        public porcentagemCocoGerminado: string,

        public totalDeCacambas: string,
    ) { }

}