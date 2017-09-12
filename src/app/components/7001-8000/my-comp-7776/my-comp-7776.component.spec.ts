import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7776Component } from './my-comp-7776.component';

describe('MyComp7776Component', () => {
  let component: MyComp7776Component;
  let fixture: ComponentFixture<MyComp7776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
