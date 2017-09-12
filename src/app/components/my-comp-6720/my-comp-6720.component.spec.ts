import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6720Component } from './my-comp-6720.component';

describe('MyComp6720Component', () => {
  let component: MyComp6720Component;
  let fixture: ComponentFixture<MyComp6720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
