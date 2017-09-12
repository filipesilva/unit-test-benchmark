import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7956Component } from './my-comp-7956.component';

describe('MyComp7956Component', () => {
  let component: MyComp7956Component;
  let fixture: ComponentFixture<MyComp7956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
