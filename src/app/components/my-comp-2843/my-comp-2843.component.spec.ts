import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2843Component } from './my-comp-2843.component';

describe('MyComp2843Component', () => {
  let component: MyComp2843Component;
  let fixture: ComponentFixture<MyComp2843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
