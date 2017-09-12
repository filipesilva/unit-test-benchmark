import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7969Component } from './my-comp-7969.component';

describe('MyComp7969Component', () => {
  let component: MyComp7969Component;
  let fixture: ComponentFixture<MyComp7969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
