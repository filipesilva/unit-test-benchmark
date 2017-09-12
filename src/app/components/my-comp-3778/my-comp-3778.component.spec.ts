import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3778Component } from './my-comp-3778.component';

describe('MyComp3778Component', () => {
  let component: MyComp3778Component;
  let fixture: ComponentFixture<MyComp3778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
