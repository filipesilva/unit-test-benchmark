import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6357Component } from './my-comp-6357.component';

describe('MyComp6357Component', () => {
  let component: MyComp6357Component;
  let fixture: ComponentFixture<MyComp6357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
