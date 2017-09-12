import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9543Component } from './my-comp-9543.component';

describe('MyComp9543Component', () => {
  let component: MyComp9543Component;
  let fixture: ComponentFixture<MyComp9543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
