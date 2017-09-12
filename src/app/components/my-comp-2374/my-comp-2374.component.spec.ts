import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2374Component } from './my-comp-2374.component';

describe('MyComp2374Component', () => {
  let component: MyComp2374Component;
  let fixture: ComponentFixture<MyComp2374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
