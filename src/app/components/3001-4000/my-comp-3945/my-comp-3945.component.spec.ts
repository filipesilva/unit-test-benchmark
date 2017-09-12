import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3945Component } from './my-comp-3945.component';

describe('MyComp3945Component', () => {
  let component: MyComp3945Component;
  let fixture: ComponentFixture<MyComp3945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
