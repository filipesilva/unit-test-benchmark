import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2359Component } from './my-comp-2359.component';

describe('MyComp2359Component', () => {
  let component: MyComp2359Component;
  let fixture: ComponentFixture<MyComp2359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
