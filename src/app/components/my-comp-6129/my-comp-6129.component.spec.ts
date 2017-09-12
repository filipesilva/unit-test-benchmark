import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6129Component } from './my-comp-6129.component';

describe('MyComp6129Component', () => {
  let component: MyComp6129Component;
  let fixture: ComponentFixture<MyComp6129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
