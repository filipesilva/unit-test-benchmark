import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5113Component } from './my-comp-5113.component';

describe('MyComp5113Component', () => {
  let component: MyComp5113Component;
  let fixture: ComponentFixture<MyComp5113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
