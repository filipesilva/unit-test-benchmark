import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2858Component } from './my-comp-2858.component';

describe('MyComp2858Component', () => {
  let component: MyComp2858Component;
  let fixture: ComponentFixture<MyComp2858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
