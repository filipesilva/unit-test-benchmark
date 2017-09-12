import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp365Component } from './my-comp-365.component';

describe('MyComp365Component', () => {
  let component: MyComp365Component;
  let fixture: ComponentFixture<MyComp365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
