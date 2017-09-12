import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3306Component } from './my-comp-3306.component';

describe('MyComp3306Component', () => {
  let component: MyComp3306Component;
  let fixture: ComponentFixture<MyComp3306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
