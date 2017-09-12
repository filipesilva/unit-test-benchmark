import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6360Component } from './my-comp-6360.component';

describe('MyComp6360Component', () => {
  let component: MyComp6360Component;
  let fixture: ComponentFixture<MyComp6360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
