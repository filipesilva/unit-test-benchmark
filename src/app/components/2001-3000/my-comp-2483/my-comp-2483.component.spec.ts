import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2483Component } from './my-comp-2483.component';

describe('MyComp2483Component', () => {
  let component: MyComp2483Component;
  let fixture: ComponentFixture<MyComp2483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
