import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7827Component } from './my-comp-7827.component';

describe('MyComp7827Component', () => {
  let component: MyComp7827Component;
  let fixture: ComponentFixture<MyComp7827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
