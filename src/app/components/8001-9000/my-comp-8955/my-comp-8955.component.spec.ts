import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8955Component } from './my-comp-8955.component';

describe('MyComp8955Component', () => {
  let component: MyComp8955Component;
  let fixture: ComponentFixture<MyComp8955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
