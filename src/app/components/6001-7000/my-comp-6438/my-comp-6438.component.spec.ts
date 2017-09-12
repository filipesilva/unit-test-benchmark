import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6438Component } from './my-comp-6438.component';

describe('MyComp6438Component', () => {
  let component: MyComp6438Component;
  let fixture: ComponentFixture<MyComp6438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
