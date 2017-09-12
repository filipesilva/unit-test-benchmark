import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2550Component } from './my-comp-2550.component';

describe('MyComp2550Component', () => {
  let component: MyComp2550Component;
  let fixture: ComponentFixture<MyComp2550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
