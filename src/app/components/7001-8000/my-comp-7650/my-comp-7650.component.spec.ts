import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7650Component } from './my-comp-7650.component';

describe('MyComp7650Component', () => {
  let component: MyComp7650Component;
  let fixture: ComponentFixture<MyComp7650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
