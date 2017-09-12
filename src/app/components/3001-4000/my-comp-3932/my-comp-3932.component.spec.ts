import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3932Component } from './my-comp-3932.component';

describe('MyComp3932Component', () => {
  let component: MyComp3932Component;
  let fixture: ComponentFixture<MyComp3932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
