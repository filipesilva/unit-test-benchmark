import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2796Component } from './my-comp-2796.component';

describe('MyComp2796Component', () => {
  let component: MyComp2796Component;
  let fixture: ComponentFixture<MyComp2796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
