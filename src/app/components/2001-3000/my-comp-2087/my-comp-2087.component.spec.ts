import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2087Component } from './my-comp-2087.component';

describe('MyComp2087Component', () => {
  let component: MyComp2087Component;
  let fixture: ComponentFixture<MyComp2087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
