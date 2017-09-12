import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7803Component } from './my-comp-7803.component';

describe('MyComp7803Component', () => {
  let component: MyComp7803Component;
  let fixture: ComponentFixture<MyComp7803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
