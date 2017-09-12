import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6959Component } from './my-comp-6959.component';

describe('MyComp6959Component', () => {
  let component: MyComp6959Component;
  let fixture: ComponentFixture<MyComp6959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
