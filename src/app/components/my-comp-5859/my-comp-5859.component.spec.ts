import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5859Component } from './my-comp-5859.component';

describe('MyComp5859Component', () => {
  let component: MyComp5859Component;
  let fixture: ComponentFixture<MyComp5859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
