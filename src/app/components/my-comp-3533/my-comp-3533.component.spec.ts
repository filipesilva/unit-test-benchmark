import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3533Component } from './my-comp-3533.component';

describe('MyComp3533Component', () => {
  let component: MyComp3533Component;
  let fixture: ComponentFixture<MyComp3533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
