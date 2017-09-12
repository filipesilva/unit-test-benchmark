import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6635Component } from './my-comp-6635.component';

describe('MyComp6635Component', () => {
  let component: MyComp6635Component;
  let fixture: ComponentFixture<MyComp6635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
