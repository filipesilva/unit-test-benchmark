import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7788Component } from './my-comp-7788.component';

describe('MyComp7788Component', () => {
  let component: MyComp7788Component;
  let fixture: ComponentFixture<MyComp7788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
