import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3499Component } from './my-comp-3499.component';

describe('MyComp3499Component', () => {
  let component: MyComp3499Component;
  let fixture: ComponentFixture<MyComp3499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
