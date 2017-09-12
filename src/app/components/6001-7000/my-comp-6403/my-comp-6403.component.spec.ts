import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6403Component } from './my-comp-6403.component';

describe('MyComp6403Component', () => {
  let component: MyComp6403Component;
  let fixture: ComponentFixture<MyComp6403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
