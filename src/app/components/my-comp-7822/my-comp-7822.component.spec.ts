import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7822Component } from './my-comp-7822.component';

describe('MyComp7822Component', () => {
  let component: MyComp7822Component;
  let fixture: ComponentFixture<MyComp7822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
