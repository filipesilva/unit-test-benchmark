import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2448Component } from './my-comp-2448.component';

describe('MyComp2448Component', () => {
  let component: MyComp2448Component;
  let fixture: ComponentFixture<MyComp2448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
