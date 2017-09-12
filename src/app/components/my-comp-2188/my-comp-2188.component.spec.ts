import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2188Component } from './my-comp-2188.component';

describe('MyComp2188Component', () => {
  let component: MyComp2188Component;
  let fixture: ComponentFixture<MyComp2188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
