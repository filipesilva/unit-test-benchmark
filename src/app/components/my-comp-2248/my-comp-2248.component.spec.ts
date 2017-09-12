import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2248Component } from './my-comp-2248.component';

describe('MyComp2248Component', () => {
  let component: MyComp2248Component;
  let fixture: ComponentFixture<MyComp2248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
