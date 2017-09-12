import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6827Component } from './my-comp-6827.component';

describe('MyComp6827Component', () => {
  let component: MyComp6827Component;
  let fixture: ComponentFixture<MyComp6827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
