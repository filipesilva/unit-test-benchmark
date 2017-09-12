import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp286Component } from './my-comp-286.component';

describe('MyComp286Component', () => {
  let component: MyComp286Component;
  let fixture: ComponentFixture<MyComp286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
