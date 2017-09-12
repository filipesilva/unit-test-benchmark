import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1813Component } from './my-comp-1813.component';

describe('MyComp1813Component', () => {
  let component: MyComp1813Component;
  let fixture: ComponentFixture<MyComp1813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
