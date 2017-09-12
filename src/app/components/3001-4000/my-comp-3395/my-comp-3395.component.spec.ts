import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3395Component } from './my-comp-3395.component';

describe('MyComp3395Component', () => {
  let component: MyComp3395Component;
  let fixture: ComponentFixture<MyComp3395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
