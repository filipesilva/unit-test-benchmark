import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2764Component } from './my-comp-2764.component';

describe('MyComp2764Component', () => {
  let component: MyComp2764Component;
  let fixture: ComponentFixture<MyComp2764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
