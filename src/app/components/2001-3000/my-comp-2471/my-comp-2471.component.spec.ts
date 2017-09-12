import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2471Component } from './my-comp-2471.component';

describe('MyComp2471Component', () => {
  let component: MyComp2471Component;
  let fixture: ComponentFixture<MyComp2471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
