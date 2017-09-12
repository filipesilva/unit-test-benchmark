import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7596Component } from './my-comp-7596.component';

describe('MyComp7596Component', () => {
  let component: MyComp7596Component;
  let fixture: ComponentFixture<MyComp7596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
