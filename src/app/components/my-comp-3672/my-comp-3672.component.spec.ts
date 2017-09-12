import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3672Component } from './my-comp-3672.component';

describe('MyComp3672Component', () => {
  let component: MyComp3672Component;
  let fixture: ComponentFixture<MyComp3672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
