import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2926Component } from './my-comp-2926.component';

describe('MyComp2926Component', () => {
  let component: MyComp2926Component;
  let fixture: ComponentFixture<MyComp2926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
