import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2161Component } from './my-comp-2161.component';

describe('MyComp2161Component', () => {
  let component: MyComp2161Component;
  let fixture: ComponentFixture<MyComp2161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
