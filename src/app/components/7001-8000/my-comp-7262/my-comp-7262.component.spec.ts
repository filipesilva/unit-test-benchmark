import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7262Component } from './my-comp-7262.component';

describe('MyComp7262Component', () => {
  let component: MyComp7262Component;
  let fixture: ComponentFixture<MyComp7262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
