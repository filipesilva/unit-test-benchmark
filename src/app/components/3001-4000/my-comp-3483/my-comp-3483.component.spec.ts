import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3483Component } from './my-comp-3483.component';

describe('MyComp3483Component', () => {
  let component: MyComp3483Component;
  let fixture: ComponentFixture<MyComp3483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
