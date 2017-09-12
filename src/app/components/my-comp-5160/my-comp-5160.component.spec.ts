import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5160Component } from './my-comp-5160.component';

describe('MyComp5160Component', () => {
  let component: MyComp5160Component;
  let fixture: ComponentFixture<MyComp5160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
