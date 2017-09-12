import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7980Component } from './my-comp-7980.component';

describe('MyComp7980Component', () => {
  let component: MyComp7980Component;
  let fixture: ComponentFixture<MyComp7980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
