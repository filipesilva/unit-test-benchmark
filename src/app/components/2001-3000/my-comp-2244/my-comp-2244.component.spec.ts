import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2244Component } from './my-comp-2244.component';

describe('MyComp2244Component', () => {
  let component: MyComp2244Component;
  let fixture: ComponentFixture<MyComp2244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
