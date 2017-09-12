import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7989Component } from './my-comp-7989.component';

describe('MyComp7989Component', () => {
  let component: MyComp7989Component;
  let fixture: ComponentFixture<MyComp7989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
