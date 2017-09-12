import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3365Component } from './my-comp-3365.component';

describe('MyComp3365Component', () => {
  let component: MyComp3365Component;
  let fixture: ComponentFixture<MyComp3365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
