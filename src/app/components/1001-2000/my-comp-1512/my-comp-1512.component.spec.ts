import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1512Component } from './my-comp-1512.component';

describe('MyComp1512Component', () => {
  let component: MyComp1512Component;
  let fixture: ComponentFixture<MyComp1512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
