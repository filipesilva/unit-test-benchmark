import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8948Component } from './my-comp-8948.component';

describe('MyComp8948Component', () => {
  let component: MyComp8948Component;
  let fixture: ComponentFixture<MyComp8948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
