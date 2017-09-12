import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9856Component } from './my-comp-9856.component';

describe('MyComp9856Component', () => {
  let component: MyComp9856Component;
  let fixture: ComponentFixture<MyComp9856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
