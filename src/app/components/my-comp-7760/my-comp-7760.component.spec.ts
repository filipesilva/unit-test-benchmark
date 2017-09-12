import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7760Component } from './my-comp-7760.component';

describe('MyComp7760Component', () => {
  let component: MyComp7760Component;
  let fixture: ComponentFixture<MyComp7760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
