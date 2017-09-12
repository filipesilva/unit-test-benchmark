import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7791Component } from './my-comp-7791.component';

describe('MyComp7791Component', () => {
  let component: MyComp7791Component;
  let fixture: ComponentFixture<MyComp7791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
