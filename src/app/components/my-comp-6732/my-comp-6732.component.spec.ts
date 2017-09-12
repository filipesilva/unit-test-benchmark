import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6732Component } from './my-comp-6732.component';

describe('MyComp6732Component', () => {
  let component: MyComp6732Component;
  let fixture: ComponentFixture<MyComp6732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
