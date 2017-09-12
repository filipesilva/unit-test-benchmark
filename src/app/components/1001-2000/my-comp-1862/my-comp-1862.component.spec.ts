import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1862Component } from './my-comp-1862.component';

describe('MyComp1862Component', () => {
  let component: MyComp1862Component;
  let fixture: ComponentFixture<MyComp1862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
