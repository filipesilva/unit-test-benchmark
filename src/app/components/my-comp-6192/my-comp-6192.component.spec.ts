import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6192Component } from './my-comp-6192.component';

describe('MyComp6192Component', () => {
  let component: MyComp6192Component;
  let fixture: ComponentFixture<MyComp6192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
