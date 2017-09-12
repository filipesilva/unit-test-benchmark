import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7351Component } from './my-comp-7351.component';

describe('MyComp7351Component', () => {
  let component: MyComp7351Component;
  let fixture: ComponentFixture<MyComp7351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
