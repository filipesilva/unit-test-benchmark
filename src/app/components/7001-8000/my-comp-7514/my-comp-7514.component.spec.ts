import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7514Component } from './my-comp-7514.component';

describe('MyComp7514Component', () => {
  let component: MyComp7514Component;
  let fixture: ComponentFixture<MyComp7514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
