import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7202Component } from './my-comp-7202.component';

describe('MyComp7202Component', () => {
  let component: MyComp7202Component;
  let fixture: ComponentFixture<MyComp7202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
