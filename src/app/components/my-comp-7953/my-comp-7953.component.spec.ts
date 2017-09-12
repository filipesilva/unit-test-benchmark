import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7953Component } from './my-comp-7953.component';

describe('MyComp7953Component', () => {
  let component: MyComp7953Component;
  let fixture: ComponentFixture<MyComp7953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
