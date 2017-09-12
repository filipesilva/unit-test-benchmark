import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7681Component } from './my-comp-7681.component';

describe('MyComp7681Component', () => {
  let component: MyComp7681Component;
  let fixture: ComponentFixture<MyComp7681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
