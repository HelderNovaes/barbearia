document.addEventListener('DOMContentLoaded', function() {
    const servicos = document.querySelectorAll('.servico');

    servicos.forEach(servico => {
        servico.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            this.style.transition = 'box-shadow 0.3s';
        });

        servico.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });
    });
});
