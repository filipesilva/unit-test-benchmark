import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9735Component } from './my-comp-9735.component';

describe('MyComp9735Component', () => {
  let component: MyComp9735Component;
  let fixture: ComponentFixture<MyComp9735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
