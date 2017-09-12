import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7740Component } from './my-comp-7740.component';

describe('MyComp7740Component', () => {
  let component: MyComp7740Component;
  let fixture: ComponentFixture<MyComp7740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
