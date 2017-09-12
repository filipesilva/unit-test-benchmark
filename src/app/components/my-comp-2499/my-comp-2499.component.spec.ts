import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2499Component } from './my-comp-2499.component';

describe('MyComp2499Component', () => {
  let component: MyComp2499Component;
  let fixture: ComponentFixture<MyComp2499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
