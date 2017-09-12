import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7752Component } from './my-comp-7752.component';

describe('MyComp7752Component', () => {
  let component: MyComp7752Component;
  let fixture: ComponentFixture<MyComp7752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
