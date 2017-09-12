import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3100Component } from './my-comp-3100.component';

describe('MyComp3100Component', () => {
  let component: MyComp3100Component;
  let fixture: ComponentFixture<MyComp3100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
