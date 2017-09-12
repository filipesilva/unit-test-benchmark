import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7894Component } from './my-comp-7894.component';

describe('MyComp7894Component', () => {
  let component: MyComp7894Component;
  let fixture: ComponentFixture<MyComp7894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
