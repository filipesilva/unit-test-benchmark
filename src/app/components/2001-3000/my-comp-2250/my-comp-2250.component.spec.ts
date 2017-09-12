import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2250Component } from './my-comp-2250.component';

describe('MyComp2250Component', () => {
  let component: MyComp2250Component;
  let fixture: ComponentFixture<MyComp2250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
