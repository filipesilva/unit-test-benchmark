import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7997Component } from './my-comp-7997.component';

describe('MyComp7997Component', () => {
  let component: MyComp7997Component;
  let fixture: ComponentFixture<MyComp7997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
