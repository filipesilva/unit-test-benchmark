import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3726Component } from './my-comp-3726.component';

describe('MyComp3726Component', () => {
  let component: MyComp3726Component;
  let fixture: ComponentFixture<MyComp3726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
