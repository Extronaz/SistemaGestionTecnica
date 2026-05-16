package observer;

public class UsuarioNotificado implements Observador {

    @Override
    public void actualizar(String mensaje) {

        System.out.println("Notificacion enviada: " + mensaje);
    }
}
