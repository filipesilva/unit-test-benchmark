import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7167Component } from './my-comp-7167.component';

describe('MyComp7167Component', () => {
  let component: MyComp7167Component;
  let fixture: ComponentFixture<MyComp7167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
