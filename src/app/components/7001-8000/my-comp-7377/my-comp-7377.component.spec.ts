import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7377Component } from './my-comp-7377.component';

describe('MyComp7377Component', () => {
  let component: MyComp7377Component;
  let fixture: ComponentFixture<MyComp7377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
