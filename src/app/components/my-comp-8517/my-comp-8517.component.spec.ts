import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8517Component } from './my-comp-8517.component';

describe('MyComp8517Component', () => {
  let component: MyComp8517Component;
  let fixture: ComponentFixture<MyComp8517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
