import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3730Component } from './my-comp-3730.component';

describe('MyComp3730Component', () => {
  let component: MyComp3730Component;
  let fixture: ComponentFixture<MyComp3730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
