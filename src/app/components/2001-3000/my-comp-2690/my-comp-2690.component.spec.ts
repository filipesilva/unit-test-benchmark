import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2690Component } from './my-comp-2690.component';

describe('MyComp2690Component', () => {
  let component: MyComp2690Component;
  let fixture: ComponentFixture<MyComp2690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
