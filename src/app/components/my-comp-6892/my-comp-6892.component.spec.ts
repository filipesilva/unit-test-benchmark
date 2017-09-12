import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6892Component } from './my-comp-6892.component';

describe('MyComp6892Component', () => {
  let component: MyComp6892Component;
  let fixture: ComponentFixture<MyComp6892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
