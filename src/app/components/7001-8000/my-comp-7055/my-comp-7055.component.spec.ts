import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7055Component } from './my-comp-7055.component';

describe('MyComp7055Component', () => {
  let component: MyComp7055Component;
  let fixture: ComponentFixture<MyComp7055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
