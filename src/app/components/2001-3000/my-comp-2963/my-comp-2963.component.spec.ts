import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2963Component } from './my-comp-2963.component';

describe('MyComp2963Component', () => {
  let component: MyComp2963Component;
  let fixture: ComponentFixture<MyComp2963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
