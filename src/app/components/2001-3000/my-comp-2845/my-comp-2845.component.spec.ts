import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2845Component } from './my-comp-2845.component';

describe('MyComp2845Component', () => {
  let component: MyComp2845Component;
  let fixture: ComponentFixture<MyComp2845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
