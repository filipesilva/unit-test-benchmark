import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp656Component } from './my-comp-656.component';

describe('MyComp656Component', () => {
  let component: MyComp656Component;
  let fixture: ComponentFixture<MyComp656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
