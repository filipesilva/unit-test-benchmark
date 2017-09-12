import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7448Component } from './my-comp-7448.component';

describe('MyComp7448Component', () => {
  let component: MyComp7448Component;
  let fixture: ComponentFixture<MyComp7448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
