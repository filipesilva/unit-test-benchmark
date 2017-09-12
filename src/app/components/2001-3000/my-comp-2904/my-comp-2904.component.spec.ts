import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2904Component } from './my-comp-2904.component';

describe('MyComp2904Component', () => {
  let component: MyComp2904Component;
  let fixture: ComponentFixture<MyComp2904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
