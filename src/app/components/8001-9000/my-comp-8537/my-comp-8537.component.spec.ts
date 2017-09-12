import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8537Component } from './my-comp-8537.component';

describe('MyComp8537Component', () => {
  let component: MyComp8537Component;
  let fixture: ComponentFixture<MyComp8537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
