import {
  COLLECTION_FACTORY_ABI,
  ERC1155_ABI,
  ERC1155_TOKEN_BUYER_ABI,
} from "@shared/config/constants/ABI";
import { ethers } from "ethers";

// Определите ABI и адреса контрактов
const COLLECTION_FACTORY_ADDRESS = "ВАШ_АДРЕС_КОНТРАКТА_FACTORY";
const ERC1155_ADDRESS = "ВАШ_АДРЕС_КОНТРАКТА_ERC1155";
const ERC1155_TOKEN_BUYER_ADDRESS = "ВАШ_АДРЕС_КОНТРАКТА_TOKEN_BUYER";

export class ContractInteractor {
  private factoryContract: ethers.Contract;
  private erc1155Contract: ethers.Contract;
  private tokenBuyerContract: ethers.Contract;
  private signer: ethers.JsonRpcSigner;

  constructor(provider: ethers.BrowserProvider, signer: ethers.JsonRpcSigner) {
    this.factoryContract = new ethers.Contract(
      COLLECTION_FACTORY_ADDRESS,
      COLLECTION_FACTORY_ABI,
      signer
    );
    this.erc1155Contract = new ethers.Contract(
      ERC1155_ADDRESS,
      ERC1155_ABI,
      signer
    );
    this.tokenBuyerContract = new ethers.Contract(
      ERC1155_TOKEN_BUYER_ADDRESS,
      ERC1155_TOKEN_BUYER_ABI,
      signer
    );
    this.signer = signer;
  }

  async createCollection(
    uri: string,
    price: ethers.BigNumberish
  ): Promise<void> {
    try {
      const tx = await this.factoryContract.createCollection(uri, price);
      await tx.wait();
      console.log("Коллекция успешно создана!");
    } catch (error) {
      console.error("Ошибка при создании коллекции:", error);
    }
  }

  async mintNFT(tokenId: number, amount: number): Promise<void> {
    try {
      const mintFunction = `mint${tokenId}`;
      const tx = await this.erc1155Contract[mintFunction](
        await this.signer.getAddress(),
        amount,
        "0x"
      );
      await tx.wait();
      console.log("NFT успешно приобретена!");
    } catch (error) {
      console.error("Ошибка при покупке NFT:", error);
    }
  }

  async addCollectionToBuyer(
    tokenAddress: string,
    buyPrice: ethers.BigNumberish
  ): Promise<void> {
    try {
      const tx = await this.tokenBuyerContract.addCollection(
        tokenAddress,
        buyPrice
      );
      await tx.wait();
      console.log("Коллекция добавлена для выкупа!");
    } catch (error) {
      console.error("Ошибка при добавлении коллекции для выкупа:", error);
    }
  }
}
