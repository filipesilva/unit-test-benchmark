import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8478Component } from './my-comp-8478.component';

describe('MyComp8478Component', () => {
  let component: MyComp8478Component;
  let fixture: ComponentFixture<MyComp8478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
