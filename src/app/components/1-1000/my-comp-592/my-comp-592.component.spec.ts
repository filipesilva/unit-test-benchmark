import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp592Component } from './my-comp-592.component';

describe('MyComp592Component', () => {
  let component: MyComp592Component;
  let fixture: ComponentFixture<MyComp592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
