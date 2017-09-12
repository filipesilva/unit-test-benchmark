import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7185Component } from './my-comp-7185.component';

describe('MyComp7185Component', () => {
  let component: MyComp7185Component;
  let fixture: ComponentFixture<MyComp7185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
