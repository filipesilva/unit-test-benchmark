import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7121Component } from './my-comp-7121.component';

describe('MyComp7121Component', () => {
  let component: MyComp7121Component;
  let fixture: ComponentFixture<MyComp7121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
