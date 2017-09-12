import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp811Component } from './my-comp-811.component';

describe('MyComp811Component', () => {
  let component: MyComp811Component;
  let fixture: ComponentFixture<MyComp811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
