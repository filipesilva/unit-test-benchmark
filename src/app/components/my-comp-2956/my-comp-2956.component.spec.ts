import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2956Component } from './my-comp-2956.component';

describe('MyComp2956Component', () => {
  let component: MyComp2956Component;
  let fixture: ComponentFixture<MyComp2956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
