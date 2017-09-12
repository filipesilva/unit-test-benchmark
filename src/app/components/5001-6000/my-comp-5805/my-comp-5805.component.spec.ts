import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5805Component } from './my-comp-5805.component';

describe('MyComp5805Component', () => {
  let component: MyComp5805Component;
  let fixture: ComponentFixture<MyComp5805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
