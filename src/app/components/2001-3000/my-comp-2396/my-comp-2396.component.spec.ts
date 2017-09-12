import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2396Component } from './my-comp-2396.component';

describe('MyComp2396Component', () => {
  let component: MyComp2396Component;
  let fixture: ComponentFixture<MyComp2396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
