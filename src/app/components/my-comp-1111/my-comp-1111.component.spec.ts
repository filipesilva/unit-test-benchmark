import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1111Component } from './my-comp-1111.component';

describe('MyComp1111Component', () => {
  let component: MyComp1111Component;
  let fixture: ComponentFixture<MyComp1111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
