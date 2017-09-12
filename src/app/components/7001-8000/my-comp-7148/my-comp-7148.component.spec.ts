import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7148Component } from './my-comp-7148.component';

describe('MyComp7148Component', () => {
  let component: MyComp7148Component;
  let fixture: ComponentFixture<MyComp7148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
