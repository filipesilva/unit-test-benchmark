import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp693Component } from './my-comp-693.component';

describe('MyComp693Component', () => {
  let component: MyComp693Component;
  let fixture: ComponentFixture<MyComp693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
