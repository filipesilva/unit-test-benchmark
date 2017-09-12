import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp738Component } from './my-comp-738.component';

describe('MyComp738Component', () => {
  let component: MyComp738Component;
  let fixture: ComponentFixture<MyComp738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
