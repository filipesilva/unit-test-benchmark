import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7265Component } from './my-comp-7265.component';

describe('MyComp7265Component', () => {
  let component: MyComp7265Component;
  let fixture: ComponentFixture<MyComp7265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
