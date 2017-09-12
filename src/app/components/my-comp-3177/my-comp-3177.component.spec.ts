import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3177Component } from './my-comp-3177.component';

describe('MyComp3177Component', () => {
  let component: MyComp3177Component;
  let fixture: ComponentFixture<MyComp3177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
