import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8856Component } from './my-comp-8856.component';

describe('MyComp8856Component', () => {
  let component: MyComp8856Component;
  let fixture: ComponentFixture<MyComp8856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
