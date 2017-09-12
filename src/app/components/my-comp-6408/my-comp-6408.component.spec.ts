import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6408Component } from './my-comp-6408.component';

describe('MyComp6408Component', () => {
  let component: MyComp6408Component;
  let fixture: ComponentFixture<MyComp6408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
