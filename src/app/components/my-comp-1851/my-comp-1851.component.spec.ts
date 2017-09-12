import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1851Component } from './my-comp-1851.component';

describe('MyComp1851Component', () => {
  let component: MyComp1851Component;
  let fixture: ComponentFixture<MyComp1851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
