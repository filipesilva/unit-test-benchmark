import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3370Component } from './my-comp-3370.component';

describe('MyComp3370Component', () => {
  let component: MyComp3370Component;
  let fixture: ComponentFixture<MyComp3370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
