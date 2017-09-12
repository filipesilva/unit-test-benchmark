import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7581Component } from './my-comp-7581.component';

describe('MyComp7581Component', () => {
  let component: MyComp7581Component;
  let fixture: ComponentFixture<MyComp7581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
