import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1133Component } from './my-comp-1133.component';

describe('MyComp1133Component', () => {
  let component: MyComp1133Component;
  let fixture: ComponentFixture<MyComp1133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
