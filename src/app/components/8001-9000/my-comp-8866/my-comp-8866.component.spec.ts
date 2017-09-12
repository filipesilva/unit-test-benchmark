import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8866Component } from './my-comp-8866.component';

describe('MyComp8866Component', () => {
  let component: MyComp8866Component;
  let fixture: ComponentFixture<MyComp8866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
