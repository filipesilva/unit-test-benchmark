import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6348Component } from './my-comp-6348.component';

describe('MyComp6348Component', () => {
  let component: MyComp6348Component;
  let fixture: ComponentFixture<MyComp6348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
