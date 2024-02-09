import "./styles.scss";

const ModalBookGame = (props) => {

  console.log(props)
    
  const closeModal = () => {
    props.onClose();
  };

  return (
    <section className="containerModal">
      <div className="modal-content">
        <span>Criar Nova Tarefa</span>
        <form className="createNewCard">
          <input
            className="titleNewCard"
            type="text"
            placeholder="Nome da Tarefa"
          />
          <textarea
            className="descriptionNewCard"
            rows="4"
            cols="50"
            placeholder="Descricao da Tarefa"
          ></textarea>
          <select className="difficult">
            <option value="opcao1">Easy</option>
            <option value="opcao2">Medium</option>
            <option value="opcao3">Hard</option>
          </select>
        </form>
        <div className="decision">
          <button className="create" type="submit">
            Criar
          </button>
          <button className="cancel" onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </section>
  );
};

export default ModalBookGame;
