import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7925Component } from './my-comp-7925.component';

describe('MyComp7925Component', () => {
  let component: MyComp7925Component;
  let fixture: ComponentFixture<MyComp7925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
