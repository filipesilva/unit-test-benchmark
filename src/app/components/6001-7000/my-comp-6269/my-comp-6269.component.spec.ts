import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6269Component } from './my-comp-6269.component';

describe('MyComp6269Component', () => {
  let component: MyComp6269Component;
  let fixture: ComponentFixture<MyComp6269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
