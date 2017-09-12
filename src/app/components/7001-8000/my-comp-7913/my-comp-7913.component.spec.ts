import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7913Component } from './my-comp-7913.component';

describe('MyComp7913Component', () => {
  let component: MyComp7913Component;
  let fixture: ComponentFixture<MyComp7913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
