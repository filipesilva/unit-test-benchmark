import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1932Component } from './my-comp-1932.component';

describe('MyComp1932Component', () => {
  let component: MyComp1932Component;
  let fixture: ComponentFixture<MyComp1932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
