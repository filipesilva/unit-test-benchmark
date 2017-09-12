import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp349Component } from './my-comp-349.component';

describe('MyComp349Component', () => {
  let component: MyComp349Component;
  let fixture: ComponentFixture<MyComp349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
