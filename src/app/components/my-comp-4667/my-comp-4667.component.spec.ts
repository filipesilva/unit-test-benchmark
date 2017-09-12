import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4667Component } from './my-comp-4667.component';

describe('MyComp4667Component', () => {
  let component: MyComp4667Component;
  let fixture: ComponentFixture<MyComp4667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
