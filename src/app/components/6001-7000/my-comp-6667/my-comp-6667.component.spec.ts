import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6667Component } from './my-comp-6667.component';

describe('MyComp6667Component', () => {
  let component: MyComp6667Component;
  let fixture: ComponentFixture<MyComp6667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
