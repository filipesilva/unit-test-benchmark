import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2517Component } from './my-comp-2517.component';

describe('MyComp2517Component', () => {
  let component: MyComp2517Component;
  let fixture: ComponentFixture<MyComp2517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
