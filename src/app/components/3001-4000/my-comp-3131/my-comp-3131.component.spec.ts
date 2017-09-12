import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3131Component } from './my-comp-3131.component';

describe('MyComp3131Component', () => {
  let component: MyComp3131Component;
  let fixture: ComponentFixture<MyComp3131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
