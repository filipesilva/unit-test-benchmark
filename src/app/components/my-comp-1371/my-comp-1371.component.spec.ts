import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1371Component } from './my-comp-1371.component';

describe('MyComp1371Component', () => {
  let component: MyComp1371Component;
  let fixture: ComponentFixture<MyComp1371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
