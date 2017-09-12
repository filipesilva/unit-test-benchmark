import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3679Component } from './my-comp-3679.component';

describe('MyComp3679Component', () => {
  let component: MyComp3679Component;
  let fixture: ComponentFixture<MyComp3679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
