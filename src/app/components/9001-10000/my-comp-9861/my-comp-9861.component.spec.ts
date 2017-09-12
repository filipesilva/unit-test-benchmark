import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9861Component } from './my-comp-9861.component';

describe('MyComp9861Component', () => {
  let component: MyComp9861Component;
  let fixture: ComponentFixture<MyComp9861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
