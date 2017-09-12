import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6270Component } from './my-comp-6270.component';

describe('MyComp6270Component', () => {
  let component: MyComp6270Component;
  let fixture: ComponentFixture<MyComp6270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
