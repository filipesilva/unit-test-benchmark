import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3876Component } from './my-comp-3876.component';

describe('MyComp3876Component', () => {
  let component: MyComp3876Component;
  let fixture: ComponentFixture<MyComp3876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
