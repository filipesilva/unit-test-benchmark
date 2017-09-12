import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2814Component } from './my-comp-2814.component';

describe('MyComp2814Component', () => {
  let component: MyComp2814Component;
  let fixture: ComponentFixture<MyComp2814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
