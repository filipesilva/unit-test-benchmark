import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3705Component } from './my-comp-3705.component';

describe('MyComp3705Component', () => {
  let component: MyComp3705Component;
  let fixture: ComponentFixture<MyComp3705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
