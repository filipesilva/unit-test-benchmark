import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6310Component } from './my-comp-6310.component';

describe('MyComp6310Component', () => {
  let component: MyComp6310Component;
  let fixture: ComponentFixture<MyComp6310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
