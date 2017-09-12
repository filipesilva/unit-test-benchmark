import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp483Component } from './my-comp-483.component';

describe('MyComp483Component', () => {
  let component: MyComp483Component;
  let fixture: ComponentFixture<MyComp483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
