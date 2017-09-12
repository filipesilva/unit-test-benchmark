import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7580Component } from './my-comp-7580.component';

describe('MyComp7580Component', () => {
  let component: MyComp7580Component;
  let fixture: ComponentFixture<MyComp7580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
