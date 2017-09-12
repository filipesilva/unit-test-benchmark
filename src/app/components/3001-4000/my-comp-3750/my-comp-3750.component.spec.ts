import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3750Component } from './my-comp-3750.component';

describe('MyComp3750Component', () => {
  let component: MyComp3750Component;
  let fixture: ComponentFixture<MyComp3750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
