import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7753Component } from './my-comp-7753.component';

describe('MyComp7753Component', () => {
  let component: MyComp7753Component;
  let fixture: ComponentFixture<MyComp7753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
