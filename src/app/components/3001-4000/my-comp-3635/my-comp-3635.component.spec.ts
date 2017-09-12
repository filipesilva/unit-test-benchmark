import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3635Component } from './my-comp-3635.component';

describe('MyComp3635Component', () => {
  let component: MyComp3635Component;
  let fixture: ComponentFixture<MyComp3635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
