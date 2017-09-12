import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7837Component } from './my-comp-7837.component';

describe('MyComp7837Component', () => {
  let component: MyComp7837Component;
  let fixture: ComponentFixture<MyComp7837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
