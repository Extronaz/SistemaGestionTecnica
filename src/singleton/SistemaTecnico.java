package singleton;

public class SistemaTecnico {

    private static SistemaTecnico instancia;

    private SistemaTecnico() {
    }

    public static SistemaTecnico getInstancia() {

        if(instancia == null) {
            instancia = new SistemaTecnico();
        }

        return instancia;
    }
}
