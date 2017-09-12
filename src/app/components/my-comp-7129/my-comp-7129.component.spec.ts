import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7129Component } from './my-comp-7129.component';

describe('MyComp7129Component', () => {
  let component: MyComp7129Component;
  let fixture: ComponentFixture<MyComp7129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
