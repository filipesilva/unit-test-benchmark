import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6989Component } from './my-comp-6989.component';

describe('MyComp6989Component', () => {
  let component: MyComp6989Component;
  let fixture: ComponentFixture<MyComp6989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
